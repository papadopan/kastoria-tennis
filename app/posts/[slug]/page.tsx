// @ts-nocheck
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IArticle } from "@/src/@types/contentful";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

async function getData({ slug }: { slug: string }): Promise<IArticle> {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  try {
    const res = await client.getEntries({
      content_type: "article",
      "fields.slug": slug,
    });
    // @ts-ignore
    return res.items[0];
  } catch (error) {
    console.log(error);
    throw new Error("Error getting data from Contentful");
  }
}

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: any) => {
      return (
        <a
          href={node.data.uri}
          className={
            "font-medium text-blue-600 dark:text-blue-500 hover:underline"
          }
        >
          {node.content[0].value}
        </a>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: string): JSX.Element => (
      <span className={"font-bold"}>{text}</span>
    ),
    [MARKS.ITALIC]: (text: string): JSX.Element => (
      <span className={"italic"}>{text}</span>
    ),
  },
};

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getData(params);

  return (
    <div className="mx-auto w-full flex flex-col gap-6 items-center">
      <div className="mb-5 flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl mb-5 text-center">
          {article.fields.title}
        </h1>
        <div className="flex flex-col  md:flex-row gap-6 items-center">
          <div className="flex gap-1 items-center ">
            <Image
              alt="author image"
              src={`https:${article.fields.author.fields.image.fields?.file?.url}`}
              width={32}
              height={32}
              className="rounded-full"
            />
            <p>{article.fields.author.fields.name}</p>
          </div>
          <h3 className="font-bold">
            {new Date(article.fields.date).toLocaleDateString("el-GR")}
          </h3>
        </div>
      </div>
      <Image
        alt="article image"
        src={`https:${article.fields.image.fields.file?.url}`}
        width={200}
        height={200}
        className="rounded-xl h-auto min-h-[300px] w-auto min-w-[300px]"
      />

      <div className="max-w-screen-lg my-10 flex flex-col gap-2 leading-9 text-justify">
        {documentToReactComponents(article.fields.body, options)}
      </div>
    </div>
  );
}
