'use client';

import {
    Sheet,
    SheetContent,

    SheetHeader,
    SheetTitle,

} from "@/components/ui/sheet"

import { useShoppingCart } from 'use-shopping-cart'

import Image from 'next/image';
import { Button } from "@/components/ui/button";


const ShoppingCartModel = () => {
    const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, totalPrice, removeItem, redirectToCheckout } = useShoppingCart();

    async function handleCheckoutClick(event: any) {
        event.preventDefault();
        try {
            const result = await redirectToCheckout();
            if (result?.error) {
                console.log('result');
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>

            <SheetContent className='sm:max-w-lg w-[90vw]'>
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>

                </SheetHeader>
                <div className='h-full flex flex-col justify-between'>
                    <div className='mt-8 flex-1 overflow-y-auto'>
                        <ul className='-my-6 divide-y divide-gray-200'>
                            {cartCount === 0 ? (
                                <h1 className='py-6 font-bold'>You don't have any items</h1>
                            ) : (
                                <>
                                    {Object.values(cartDetails ?? {}).map((entry) => (
                                        <li key={entry.id} className='flex-col py-7 rounded-md border border-gray-200 mb-2 ' >
                                            <div className='h-24 w-full flex '>
                                                <Image src={entry.image as string} alt='Product Image' height={100} width={100} />
                                                <div className="flex w-full justify-between">
                                                    <div className="ml-4 flex flex-1 flex-col gap-1">
                                                        <div className=" flex justify-between text-base font-medium text-gray-900">
                                                            <h3>{entry.name}</h3>
                                                            <p className="mr-4 font-bold">Rs. {entry.price}</p>

                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                                                        <div className="flex flex-1 items-end justify-between text-sm ">
                                                            <p className="text-gray-500 font-bold">QTY: {entry.quantity}</p>
                                                            <div className="flex">
                                                                <button onClick={() => removeItem(entry.id)} className="font-medium text-primary hover:text-primary/80 mr-4">Remove</button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </li>
                                    ))}
                                </>
                            )}
                        </ul>

                    </div>
                    <div className="border border-gray-200 px-4 py-6 w-full sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p className="font-bold">Subtotal:</p>
                            <p className="font-bold">Rs. {totalPrice}</p>

                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes are calculated at checkout.</p>
                        <div className="mt-6">
                            <Button className="w-full" onClick={handleCheckoutClick}>CheckOut</Button>
                        </div>
                        <Button className="mt-2 w-full border border-gray-200 text-primary" variant={"ghost"} onClick={() => handleCartClick()}>OR Continue Shopping</Button>
                    </div>
                </div>

            </SheetContent>
        </Sheet>
    )
}

export default ShoppingCartModel