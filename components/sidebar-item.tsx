"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
    isActive?: boolean;
};

export const SidebarItem = ({ label, iconSrc, href, isActive }: Props) => {
    const pathname = usePathname();
    const active = pathname === href;
    return (
        <Button variant ={active ? "SidebarOutline" : "sidebar"}
            className="justify-start h-[52px]" asChild>
            <Link
                href={href}
                className={`flex items-center p-2 rounded-md transition-colors duration-200 
                ${isActive ? 'bg-blue-50 bg-opacity-50 ' : 'hover:bg-gray-100'}`}
            >
                <Image
                    src={iconSrc} alt={label} className="mr-5" height={32} width={32} />
                {label}
            </Link>
        </Button>
    );
};