interface Post {
    id: number;
    title: string;
}

const Blogs = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next: {
            /* revalidate: 10 */ // Revalidation.
            /* tags: ['someTag'] */ // Tags that later can be used for on-demand revalidation and stuff.
            // We can also use a path to revalidate. revalidateTag and revalidatePath functions all exist in the next.
        },
        /* cache: 'no-store' */ // Handle caching or no caching.
    }
    );


    const data = await response.json();

    return ( 
        <>
            <ul>
                {
                    data.map((item: Post) => {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </>
     );
}
 
export default Blogs;