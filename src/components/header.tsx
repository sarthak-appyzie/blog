import Link from "next/link";

export default function HeaderComponent() {
    return (
        <div className="w-full sticky z-10 bg-blue-100" >
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-2 mb-2">
                <Link href="/" className="font-bold text-2xl">Home</Link>
                <div className="space-x-4 text-xl">
                    <Link href="/blogs/new/">Create Blog</Link>
                    <Link href="/blogs/allBlogs/">All Blogs</Link>
                </div>
            </nav>
        </div>
    );
}