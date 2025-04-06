import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
   return (
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
         <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <div className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
               Open Source Next.js Starter
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
               Next.js 15 <span className="text-primary">Starter Template</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
               A complete, open-source next.js starter. Available on GitHub.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
               <Button asChild size="lg">
                  <Link
                     href="https://github.com/devAaus/next-starter"
                     target="_blank"
                     className="flex items-center gap-2"
                  >
                     <Github className="h-5 w-5" />
                     <span>Get the Code</span>
                  </Link>
               </Button>
            </div>
         </div>
      </section>
   );
}
