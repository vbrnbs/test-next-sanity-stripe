'use client'

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
    images: any;
}

const ImageGallery = ({images}:iAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);
  
  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
            {images.map((image: any, index: number) => (
                <div key={index} className="overflow-hidden rounded-md group-hover:opacity=75 p-3">
                    <Image 
                        src={urlFor(image).url()} 
                        onClick={() => handleSmallImageClick(image)}
                        alt={"Product Image"}
                        width={300}
                        height={300} 
                        className="h-full w-full rounded-lg cursor-pointer object-cover object-center"
                    />
                </div>
            ))}
        </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
            <Image src={urlFor(bigImage).url()} alt={"Product Image"} objectFit="cover" width={500} height={500} />
            <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                Sale
            </span>
      </div>
    </div>
  )
}

export default ImageGallery
