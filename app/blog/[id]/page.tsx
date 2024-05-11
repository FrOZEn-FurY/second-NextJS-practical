'use client' // Making this component a client component.

import { usePathname } from "next/navigation";

const Blog = ({params}: {params: {id: string}}) => {
    const pathname = usePathname(); // Using the hook that must be run in the client side.
    console.log(pathname);
    return ( 
        <>
            <h1 className="text-lg">Blog</h1>
            <h3 className="text-lg">ID: {params.id}</h3>
        </>
    );
}
 
export default Blog;