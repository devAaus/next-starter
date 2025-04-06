"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
   const router = useRouter();

   return (
      <div className="flex flex-col items-center font-bold font-sans rtl">
         <Image
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
            className="mb-5 mt-20 h-[342px]"
            width={300}
            height={300}
            priority
         />
         <span className="text-[3.3em] font-extrabold mb-10">404 PAGE</span>
         <p className="text-lg mb-3">
            The page you were looking for could not be found
         </p>
         <p className="text-sm mb-6">... Back to previous page</p>
         <Button
            onClick={() => router.back()}
            className="text-2xl font-extrabold transition-transform duration-300 hover:translate-y-[-13px]"
         >
            ... Back to previous page
         </Button>
      </div>
   );
}
