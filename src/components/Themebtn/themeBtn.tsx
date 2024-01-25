"use client"
import { useState } from "react";
import useTheme from "../ThemeContent/themeContent";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function ThemeBtn() {
    const {themeMode,lightMode,darkMode} = useTheme()
    const [Isicons, setIsicons] = useState(false)
    const onchangeBtn=(e:any)=>{
        const darkModeEnabled=e.currentTarget.checked
        if(darkModeEnabled){
            darkMode()
        }else{
            lightMode()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only"
                onChange={onchangeBtn}
                onClick={()=>setIsicons(!Isicons)}
                checked={themeMode==="dark"}
            />
            <span className="text-xl font-bold">{Isicons?<MdOutlineDarkMode size={30} className="" />:<MdOutlineLightMode size={30} className="text-white" />}</span>
        </label>
    );
}