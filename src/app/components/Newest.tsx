import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

async function getData() {
    const query = `*[_type == 'product'][0...4] | order(_createdAt desc){
        _id,
        price,
        name,
        'slug': slug.current,
        'categoryName':category->name, 
        'imageUrl': images[0].asset->url
    } `
    const data = await client.fetch(query);
    return data;
}


export default async function Newest() {
    const data: simplifiedProduct[] = await getData()  

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
            <h2 className="text-3xl font-semibold mb-2">Newest Products</h2>
            <Link href="/all" className="text-primary flex items-center gap-x-1 mb-8">
                See All{' '}
                <span className="">
                    <ArrowRightIcon />
                </span>
            </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                {data.map((product) => (
                    <div key={product._id} className="group flex flex-col gap-4">
                        <div className="overflow-hidden rounded-md group-hover:opacity=75 p-3">
                        <Image 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="rounded-lg"
                            width={300}
                            height={300}
                            />
                        <div className="flex justify-between mt-2">
                            <div>
                            <Link href={`/product/${product.slug}`}>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        </Link>
                        <p>{product.categoryName}</p>
                            </div>
                            <p className="text-primary font-medium">${product.price}</p>

                        </div>
                        </div>                     
                    </div>
                ))}
            </div>
        </section>
    )  
}