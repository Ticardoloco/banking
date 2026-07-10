"use client"
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type MobileNavProps = {
  user?: unknown
}

const MobileNavbar = ({ user }: MobileNavProps) => {

  const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
  <SheetTrigger>
    <Image
    src="/icons/hamburger.svg"
    alt="Menu"
    width={30}
    height={30}
    className="cursor-pointer"
    />
  </SheetTrigger>
  <SheetContent side="left" className="cursor-pointer bg-white" >
   <Link
          href="/"
          className="mb-12 cursor-pointer items-center flex  gap-1 px-4"
        >
          <Image
            width={34}
            height={34}
            src="/icons/logo.svg"
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>

        <div className="mobilenav-sheet">
            <SheetClose>
              <nav className="flex h-4 flex-col gap-6 pt-16 text-white">
                 {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}`);
          return (
            <SheetClose key={item.route} >
              
            <Link
              className={cn("mobilenav-sheet_close w-full", {"bg-bank-gradient": isActive})}
              key={item.route}
              href={item.route}
            >
              
                <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={cn({"brightness-[3] invert-0":isActive})}
                />
                 
              <p className={cn("text-16 font-semibold text-black-2", {"text-white": isActive})}>{item.label}</p>
            </Link>
            </SheetClose>
          );
        })}

        USER
              </nav>
            </SheetClose>
            FOOTER
        </div>
        

       
  </SheetContent>
</Sheet>
    </section>
  )
}

export default MobileNavbar