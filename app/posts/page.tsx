import { Post } from "@/types";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";

async function getData(): Promise<Post[]> {
  const client = createClient({
    space: process.env.SPACE || "",
    accessToken: process.env.API || "",
  });

  try {
    const res = await client.getEntries({
      content_type: "article",
    });

    return res.items;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting data from Contentful");
  }
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1 className="text-2xl mb-10">Ανακοινώσεις</h1>
      <div className="flex gap-8 flex-wrap">
        {data.map((item) => {
          return (
            <Link key={item.sys.id} href={`/posts/${item.fields.slug}`}>
              <div className="shadow-xl">
                <Image
                  alt="article image"
                  src={`https:${item.fields.image.fields.file.url}`}
                  width={300}
                  height={300}
                />
                <div className="p-4">
                  <h2>{item.fields.title}</h2>
                  <h3 className="text-sm mt-2">
                    {new Date(item.fields.date).toLocaleDateString("el-GR")}
                  </h3>
                  <div className="flex gap-4 items-center mt-6">
                    <Image
                      alt="author image"
                      src={`https:${item.fields.author.fields.image.fields.file.url}`}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <p>{item.fields.author.fields.name}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
