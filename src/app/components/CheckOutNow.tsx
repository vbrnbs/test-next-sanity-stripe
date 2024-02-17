"use client"

import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";


const CheckOutNow =({currency, description, image, name, price, price_id } : ProductCart) => {
        const {checkoutSingleItem} = useShoppingCart();

        function buyNow(priceId: string) {
            checkoutSingleItem(priceId);
        }

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
        onClick={() => buyNow(product.price_id)}>
            Check Out Now
        </Button>
      )
    }

    
export default CheckOutNow
