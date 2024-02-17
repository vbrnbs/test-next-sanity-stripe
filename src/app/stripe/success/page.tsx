import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function SuccessStripe() {
    return (
        <div className="h-screen">
            <div className='mt-32 md:mx-w-[50vw] mx-auto'>
                <CheckCheck className='text-green-400 w-20 h-20 mx-auto my-6' />
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Payment Successful</h1>
                    <p className="text-gray-500 mt-2">Thank you for your purchase</p>
                    <Button asChild className="mt-5">
                        <Link href="/">Go Back</Link>
                    </Button>
                </div>

            </div>
        </div>
    )
}