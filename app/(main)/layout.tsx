import exp from "constants";
import { ScanFace, StepForward } from "lucide-react";

type props = {
    children: React.ReactNode;
};

const MainLayout = ({ children, }: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MainLayout;