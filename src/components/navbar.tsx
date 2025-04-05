"use client";

import { Menu, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all">
         <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
               <Zap className="h-6 w-6 text-primary" />
               <span className="text-xl font-bold">Brand</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
               <NavLinks />
            </div>

            <div className="flex items-center gap-3">
               <Button>Login</Button>

               {/* Mobile Menu */}
               <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                     <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                     </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                     <div className="flex flex-col gap-6 p-6">
                        <Link
                           href="/"
                           className="flex items-center gap-2"
                           onClick={() => setIsOpen(false)}
                        >
                           <Zap className="h-6 w-6 text-primary" />
                           <span className="text-xl font-bold">Brand</span>
                        </Link>
                        <NavLinks onClick={() => setIsOpen(false)} />
                     </div>
                  </SheetContent>
               </Sheet>
            </div >
         </div>
      </header>
   );
}

type NavLinksProps = {
   onClick?: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => {
   const pathname = usePathname();
   const links = [
      { href: "/", label: "Home" },
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/about", label: "About" },
   ];
   return (
      <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
         {links.map((link) => {
            const isActive = pathname === link.href;

            return (
               <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium hover:text-primary transition-colors ${isActive ? "text-black font-semibold" : "text-muted-foreground"
                     }`}
                  onClick={onClick}
               >
                  {link.label}
               </Link>
            );
         })}
      </nav>
   );
};
