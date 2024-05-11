import { revalidateTag } from "next/cache";

interface Product {
    id: number;
    name: string;
    price: number;
}

const Form = async () => {
    const response = await fetch(
        "http://localhost:4000/products",
        {
            next: {
                tags: ['products']
            },
            cache: 'no-cache'
        }
    );

    const data: Product[] = await response.json();

    async function addProduct(e: FormData) {
        'use server';
        const name = e.get('name');
        const price = e.get('price');
        const newProduct = {
            name,
            price
        }

        await fetch('http://localhost:4000/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        revalidateTag('products')
    }

  return (
    <>
      <form action={addProduct} className="p-8 bg-slate-600 flex flex-col gap-3 max-w-xl mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Name of product"
          className="outline-none p-2 bg-slate-700 text-slate-400 rounded-md"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="outline-none p-2 bg-slate-700 text-slate-400 rounded-md"
        />
        <button
          type="submit"
          className="p-2 bg-slate-50 text-slate-800 rounded-md"
        >
          Add somethings with form.
        </button>
      </form>
      <div className="mx-auto max-w-4xl mt-6 bg-black p-6">
        <ul className="flex flex-col gap-2 px-2" style={{listStyleType: 'none', borderRight: "1px solid white", borderLeft: "1px solid white"}}>
            {
                data.map((item) => {
                    return <li style={{borderBottom: "1px solid white"}} key={item.id}>{item.name}: {item.price}</li>
                })
            }
        </ul>
      </div>
    </>
  );
};

export default Form;
