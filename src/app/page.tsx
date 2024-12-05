import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const blogs = await db.blogs.findMany({
    orderBy: {
      publishedOn:'desc'
    },
    take: 3
  });
  const renderedBlogs = blogs.map((blog) => {
    return <div className="w-52 gap-4 border rounded-xl p-2 flex flex-col justify-center items-center bg-gray-50" key={blog.id}>
      <div className="flex flex-col justify-start items-center gap-2">
        <div>{blog.title}</div>
        <div>By: {blog.writer}</div>
      </div>
      <Link href={`/blogs/${blog.id}`} className="p-2 bg-blue-600 text-white rounded-2xl">View details</Link>
    </div>
  })
  return <div>
    <div className="font-bold text-3xl mb-20">HomePage!</div>
    <div className="font-bold text-xl mb-10">Latest blogs</div>
    <div className="flex  justify-evenly gap-2 m-1">{renderedBlogs}</div>
  </div>
}
