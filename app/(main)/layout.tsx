import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/Mobile-header";

type props = {
    children: React.ReactNode;
};

const MainLayout = ({ children, }: Props) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="lg:pl-[256px] h-screen pt-[50px]  lg:pt-0">
                <div className="max-w-[1056px] mx-auto pt-6  h-full">
                    {children}
                </div>
            </main>
        </>
    );
};

export default MainLayout;