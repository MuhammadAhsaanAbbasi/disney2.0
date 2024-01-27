"use client"
import { Menu } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DialogBox } from "./dialogBox";
import { useState } from "react"
import ThemeBtn from "../Themebtn/themeBtn";

const DropDownMenu = () => {
    const [Open, setOpen] = useState(false)
    return (
        <DropdownMenu
        open={Open}
        onOpenChange={(setOpenChange)=>{
            setOpen(setOpenChange)
        }}
        >
            <DropdownMenuTrigger><Menu size={25} className="font-bold text-neutral-900 hover:text-neutral-700" /></DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col items-center justify-start gap-y-2">
                <DropdownMenuItem asChild><DialogBox onClose={()=>setOpen(false)} /></DropdownMenuItem>
                <DropdownMenuItem asChild className="w-full">
                    <ThemeBtn/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDownMenu