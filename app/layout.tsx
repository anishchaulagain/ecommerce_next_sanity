import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import CartProvider from './components/Providers'
import ShoppingCartModel from './components/ShoppingCartModel'
import Footer from './components/Footer'
import { ThemeProvider } from "./components/theme-provider"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hamro Pasal',
  description: 'Ecommerce Website under development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <CartProvider>
        <Navbar/>
        <ShoppingCartModel/>
       
        {children}
        
        </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
