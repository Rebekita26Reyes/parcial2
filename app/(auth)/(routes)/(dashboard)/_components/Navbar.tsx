import { NavbarRoutes } from "@/components/NavbarRoutes";
import MobileSidebar from "./MobileSidebar";

export const Navbar = () => { 
    return (
        <div className="p-4 border-b h-full flex items-center bg-[#DB8AB1] dark:bg-[#DB0F6A] shadow-sm">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    ); 
}

export default Navbar;
