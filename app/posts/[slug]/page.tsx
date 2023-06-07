import { Post } from "@/types";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getData({ slug }: { slug: string }): Promise<Post> {
  const client = createClient({
    space: process.env.SPACE || "",
    accessToken: process.env.API || "",
  });

  try {
    const res = await client.getEntries({
      content_type: "article",
      "fields.slug": slug,
    });
    console.log(res.items);
    return res.items[0];
  } catch (error) {
    console.log(error);
    throw new Error("Error getting data from Contentful");
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getData(params);
  return (
    <div className="mx-auto w-full  flex flex-col gap-6 items-center">
      <div>
        <h1 className="text-2xl mb-10">{article.fields.title}</h1>
        <div className="flex gap-6 items-center">
          <div className="flex gap-1 items-center">
            <Image
              alt="author image"
              src={`https:${article.fields.author.fields.image.fields.file.url}`}
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
        src={`https:${article.fields.image.fields.file.url}`}
        width={article.fields.image.fields.file.details.image.width}
        height={article.fields.image.fields.file.details.image.height}
        className="rounded-xl h-96 w-full lg:w-3/5 object-cover"
      />
      <div className="max-w-screen-xl mt-10">
        {documentToReactComponents(article.fields.body)}
      </div>
    </div>
  );
}
