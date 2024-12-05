import { db } from "@/db";
import { redirect } from "next/navigation";

export default function CreateNewBlogPage(){
    async function createBlog(formData:FormData) {
        
        'use server';

        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const writer = "ME";

        const blog = await db.blogs.create({
            data:{
                title,
                content,
                publishedOn: new Date(),
                writer
            }
        });

        console.log(blog);

        redirect('/');
    }

    return <form action={createBlog}>
        <h3 className="font-bold mb-5 mt-3">Create New Blog</h3>
        <div className="flex flex-col gap-4">

            <div className="flex gap-4">
                <label htmlFor="title" className="w-12">Title</label>
                <input name="title" id="title" className="border rounded p-2 w-full" />
            </div>

            <div className="flex gap-4">
                <label htmlFor="content" className="w-12">Content</label>
                <textarea name="content" id="content" className="border rounded p-2 w-full h-40"/>
            </div>
            
            <div className="flex justify-center">
            <button className="rounded  p-2 bg-blue-200 font-bold w-36">Publish</button>
            </div>
            
        </div>
    </form>
}