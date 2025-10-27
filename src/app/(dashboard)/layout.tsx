import { AppSideBar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Children } from "react";

const Layout  = ({children}:{children:React.ReactNode}) =>{
    return (
        <SidebarProvider>
            <AppSideBar/>
            <SidebarInset className="bg-accent/20">
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
export default Layout;