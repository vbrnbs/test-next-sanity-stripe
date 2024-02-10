import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = '*[_type == "heroImage"]';
  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  const data = await getData();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between mb:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="text-4xl font-bold mb-4 sm:text-5xl lg:text-6xl">
            Best stuff all here
          </h1>
          <p className="text-lg text-gray-500">
            The best place to find the best deals on the latest fashion trends.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data[0].image1.asset._ref).url()}
              alt="Hero photo 1"
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data[0].image2.asset._ref).url()}
              alt="Hero photo 2"
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border" >
        <Link href="/Men" className="flex items-center justify-center w-1/2 h-full text-lg font-semibold text-primary">
            Men
        </Link>
        <Link href="/Women" className="flex items-center justify-center w-1/2 h-full text-lg font-semibold text-primary">
            Women
        </Link>
        <Link href="/Teens" className="flex items-center justify-center w-1/2 h-full text-lg font-semibold text-primary">
            Teens
        </Link>
        </div>
      </div>
    </section>
  );
}
