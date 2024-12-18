import { Inter } from "next/font/google";
import "./globals.css";
import {Montserrat} from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransitionEffect from "@/components/TransitionEffect";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})
export const metadata = {
  title: "Developer Mahadi's Portfolio",
  description:
    "I'm a Full stack developer and content creator from Bangladesh. I'm the best developer and programmer in the Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${montserrat.variable} font-mont  bg-light min-h-screen dark:bg-dark   w-full `}>
      <TransitionEffect> 
        <Navbar></Navbar>
        <div>
       {children}
        </div>
        <Footer></Footer>
        </TransitionEffect>
        </body>
    </html>
  );
}
