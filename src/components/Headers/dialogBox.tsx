"use client"
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import SearhInput from "../MovieInput/movieInput";
import { useState } from "react";

export function DialogBox({
    onClose
}: {
    onClose:()=>void
}) {
    const [Open, setOpen] = useState(false)
    return (
        <Dialog
        open={Open}
        onOpenChange={(setOpenChange)=>{
            setOpen(setOpenChange)
            if(!setOpenChange){
                onClose()
            }
        }}
        >
            <DialogTrigger>
                <Button variant="ghost">
                    <span>Search</span>
                    <Search/>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <SearhInput/>
            </DialogContent>
        </Dialog>
    );
}