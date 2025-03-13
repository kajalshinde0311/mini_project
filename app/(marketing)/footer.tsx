import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2 bg-white">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full gap-6">
                <Button size="lg" variant="ghost" className="border-2 border-white text-black flex items-center px-4">
                    <Image
                        src="/japan.png" alt="Croatian"
                        height={34} width={40}
                        className="mr-2 rounded-md"
                    />
                    Japanese
                </Button>
                <Button size="lg" variant="ghost" className="border-2 border-white text-black  flex items-center px-4">
                    <Image
                        src="/india.jpg" alt="Indian"
                        height={32} width={40}
                        className="mr-2 rounded-md"
                    />
                    Hindi
                </Button>
                <Button size="lg" variant="ghost" className="border-2 border-white text-black   flex items-center px-4">
                    <Image
                        src="/spanish.jpg" alt="Spanish"
                        height={32} width={40}
                        className="mr-2 rounded-md"
                    />
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" className="border-2 border-white text-black  flex items-center px-4">
                    <Image
                        src="/korean.jpg" alt="Korean"
                        height={32} width={40}
                        className="mr-2 rounded-md"
                    />
                    Korean
                </Button>
                <Button size="lg" variant="ghost" className="border-2 border-white text-black  flex items-center px-4">
                    <Image
                        src="/italian.jpg" alt="Italian"
                        height={32} width={40}
                        className="mr-2 rounded-md"
                    />
                    Italian
                </Button>
            </div>
        </footer>
    );
};