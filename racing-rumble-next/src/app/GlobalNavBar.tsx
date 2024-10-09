import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    Link, 
    Button, 
    DropdownItem, 
    DropdownTrigger, 
    Dropdown, 
    DropdownMenu
} from "@nextui-org/react";

const items = { 
    season1: {key: "season1",
    data: "data"
    },
    season2: {
    key: "season2",
    data: "data"
    },
    season3: { 
    key: "season3",
    data: "data"},
}

export default function GlobalNavBar() {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">Racing Rumble</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <Dropdown>
                    <NavbarItem isActive>
                        <DropdownTrigger>
                            <Button>
                                Previous Seasons
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>

                    <DropdownMenu>
                        <DropdownItem></DropdownItem>
                        <DropdownItem></DropdownItem>
                    </DropdownMenu>

                    <DropdownMenu aria-label="Link Actions">
                        <DropdownItem key="home" href="/home">Home</DropdownItem>
                        <DropdownItem key="about" href="/about">About</DropdownItem>
                    </DropdownMenu>

                    <DropdownMenu>
                    </DropdownMenu>

                </Dropdown>
                
                <NavbarItem>
                    <Link href="/players">Players</Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="/maps">Maps</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button as={Link} href="/login">Login</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}