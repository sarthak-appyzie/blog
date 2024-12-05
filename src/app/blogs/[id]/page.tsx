import { db } from "@/db"

interface BlogId{
    params:Promise<{
        id:string;
    }>;
}


export default async function ShowBlogSummary(props:BlogId){
    console.log(props);
    const {id} =await props.params;
    const blog = await db.blogs.findFirst({
        where: {id: parseInt(id)}
    });
    if(!blog){
        return <div><h1 className="text-3xl">Sorry, we couldn't find the particular blog</h1></div>
    };
    return <div>
              <div className="flex m-4 justify-between items-center">
        <h1 className="text-2xl font-bold">{blog.title}</h1>
        <div className="flex gap-4">
          <button className="p-3 border rounded">Edit</button>
          <button className="p-3 border rounded">Delete</button>
        </div>
      </div>
      <pre className=" m-5 p-3 border rounded bg-gray-200 border-gray-200">
        {blog.content}
      </pre>
    </div> 
    // <div>Blog summary</div>
}