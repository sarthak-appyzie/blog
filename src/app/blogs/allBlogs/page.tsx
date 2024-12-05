import { db } from "@/db";
import Link from "next/link";

export default async function AllBlogsPage() {
    const blogs = await db.blogs.findMany();
    const renderedBlogs = blogs.map((blog) => {
        return <div className="w-[70%] border rounded-xl p-2 flex justify-between items-center bg-gray-50" key={blog.id}>
            <div className="flex justify-start items-center gap-10">
                <div>{blog.title}</div>
                <div>By: {blog.writer}</div>
                <div>Published On: {new Date(blog.publishedOn).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                })}
                </div>
            </div>
            <Link href={`/blogs/${blog.id}`} className="p-2 bg-blue-600 text-white rounded-2xl">View details</Link>
        </div>
    })
    return <div>
        <div className="font-bold text-3xl mb-20">All blogs</div>
        <div className="flex flex-col gap-2 m-1">{renderedBlogs}</div>
    </div>
}