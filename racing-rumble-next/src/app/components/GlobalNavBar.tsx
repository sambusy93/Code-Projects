"use client"
import Image from "next/image";
import {ThemeSwitcher} from "./ThemeSwitcher";
import racingRumbleLogo from '../../../assets/images/rr-logo-temp.png'
import {
    Button, 
    DropdownItem, 
    DropdownTrigger, 
    Dropdown, 
    DropdownMenu,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Navbar,
    Link,
    Divider,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";



const seasons = [
    {season: 'one', data: 'data'},
    {season: 'two', data: 'data'},
    {season: 'three', data: 'data'}
]


// TODO
// dynamic sizing of Navbar and Image height
export default function GlobalNavBar() {
    return (
        <Navbar 
            maxWidth="2xl" 
            height="5rem" 
            className="
                border-b-1 border-focus
                radius-xl
                shadow-focus shadow-[0_0_8px_0]
                font-logo font-bold
            ">

            <NavbarBrand 
                className="
                    basis-auto grow-0
                ">
                <Image src={racingRumbleLogo} height={64} alt='Racing Rumble logo'/>
                <h1 className="font-logo font-black text-2xl px-3 bg-gradient-to-br from-primary to-danger text-transparent bg-clip-text">RACING <br></br> RUMBLE</h1>
            </NavbarBrand>

            <Divider orientation="vertical" className="h-3/4 bg-focus opacity-80" />

            <NavbarContent justify="start"  className="pl-5 tracking-wide">
                    <NavbarMenuToggle>
                        <DropdownTrigger>
                            <Button variant='flat' radius='none' size='lg' className="bg-gradient-to-tr from-red-600/80 to-blue-600/80 font-medium text-foreground">
                                Previous Seasons
                            </Button>
                        </DropdownTrigger>
                    </NavbarMenuToggle>

                    <NavbarMenu>
                        {seasons.map(entry => {
                            return <NavbarMenuItem key={entry.season}>SEASON {entry.season.toUpperCase()}</NavbarMenuItem>
                        })}
                    </NavbarMenu>

                <NavbarItem>
                    <Link href='#' color='foreground'>Players</Link>
                </NavbarItem>

                <NavbarItem> 
                    <Link href='#' color='foreground'>Maps</Link>
                </NavbarItem>
                
            </NavbarContent>

            <NavbarContent justify="end" className="font-sans font-bold tracking-wide">
                <NavbarItem>
                    <Button disableRipple href='#' size="md" className="bg-default">Login <span className="material-symbols-outlined">login</span></Button>
                </NavbarItem>
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}