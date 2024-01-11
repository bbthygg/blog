import { LogoIcon } from "@/app/assets/LogoIcon"
import { SearchIcon } from "../assets/SearchIcon"
import Link from "next/link"

export const Header = () => {
    return (

        <div className=" flex bg-white justify-between py-4 items-center px-5">
            <LogoIcon />
            <div className="flex items-center justify-center gap-10">

                <Link href="/">
                    <h1>Home</h1>
                </Link>
                <Link href="/Blog">
                    <h1>Blog</h1>
                </Link>
                <Link href="/Contact">
                    <h1>Contact</h1>
                </Link>
            </div>
            <div className="flex flex-row items-center border rounded-md">
                <input class="bg-white width: 166px; py-2 pl-9" placeholder="Search" type="text" name="search" />
                <SearchIcon />
            </div>
        </div >

    )
}