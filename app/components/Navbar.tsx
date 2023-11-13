'use client';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart';

const links = [
    {
        name: 'Home',
        href: '/',

    },
    {
        name: 'Men',
        href: '/Men'
    },
    {
        name: 'Women',
        href: '/Women'
    },
    {
        name: 'Teens',
        href: '/Teens'
    }
]

const Navbar = () => {
    const pathname = usePathname()
    const { handleCartClick } = useShoppingCart()
    return (
        <header className='mb-8 border-b '>
            <div className='flex items-center justify-between mx-auto max-w-2xl sm:px-6 lg:max-w-7xl'>
                <Link href='/'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Hamro<span className='text-primary '>Pasal</span></h1>
                </Link>
                <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
                    {links.map((link, id) => (
                        <div key={id}>
                            {pathname === link.href ? (
                                <Link href={link.href} className='text-lg font-semibold text-primary'>
                                    {link.name}
                                </Link>
                            ) : (
                                <Link href={link.href} className='text-lg font-semibold text-gray-600 transiton duration100 hover:text-primary'>{link.name}</Link>
                            )}
                        </div>
                    ))}
                </nav>
                <div className='flex divide-x sm:border-l'>
                    <Button variant={'outline'} className='flex flex-col gap-y-1.2 h-12 w-12 sm:h-20 md:h-24 md:w-24 rounded-none mr-2' onClick={() => handleCartClick()}>
                        <ShoppingBag />
                        <span className='hidden text-xs sm:block'>Cart</span>
                    </Button>
                </div>
            </div>

        </header>
    )
}

export default Navbar