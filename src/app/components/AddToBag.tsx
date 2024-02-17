"use client"

import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
    name: string;
    price: number;
    image: string;
    currency: string;
    description: string;
    price_id: string;
}

const AddToBag = ({currency, description, image, name, price, price_id } : ProductCart) => {
    const {addItem, handleCartClick} = useShoppingCart();
    const product = {
        name: name,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        description: description,
        price_id: price_id
    }
  return (
    <Button
    onClick={() => {addItem(product), handleCartClick()}}>
        Add To Cart
    </Button>
  )
}

export default AddToBag
