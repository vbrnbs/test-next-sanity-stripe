import AddToBag from "@/app/components/AddToBag";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { StarIcon, TruckIcon } from "lucide-react";

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
      }`;
  const data = await client.fetch(query);
  return data;
}
export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="text-sm text-gray-500 inline-block mb-0.5">
                {data.categoryName}
              </span>
              <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <StarIcon className="w-5 h-5 text-yellow-500" />
              </Button>
              <span className="gap-2">
                <span className="text-sm mx-2 text-gray-500">|</span>
                <span className="text-sm text-gray-500">10 Reviews</span>
              </span>
            </div>

            <div className="flex items-center gap-2 mt-8">
              <span className="text-2xl font-bold">${data.price}</span>
              <span className="text-lg text-red-500 line-through">
                ${data.price + 300}
              </span>
            </div>
            <p className="text-sm text-gray-500">Inc. VAT + Shipping</p>
            <div className="mt-4 gap-4">
              <span className="text-sm text-gray-500">Color:</span>
              <div className="flex gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-black"></div>
                <div className="w-8 h-8 rounded-full border border-gray-400"></div>
                <div className="w-8 h-8 rounded-full bg-red-400 border border-gray-300"></div>
              </div>
              <div>
                <span className="text-sm text-gray-500 mr-2">Size:</span>
                <select className="px-2 py-1 border rounded-lg border border-slate-300">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <div className="my-6 flex text-gray-500">
                <TruckIcon className="w-5 h-5 mr-2" />
                2-4 Day Shipping
              </div>
              <p className="text-lg my-4 tracking-wide">{data.description}</p>
              <div>
                <AddToBag
                  currency="USD"
                  description={data.description}
                  image={data.images[0]}
                  name={data.name}
                  price={data.price}
                  price_id={data.price_id}
                />
                <Button className="ml-2 border shadow-sm" variant={"secondary"}>
                  Checkout Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
