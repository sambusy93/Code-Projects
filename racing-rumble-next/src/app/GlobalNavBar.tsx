import {
    Button, 
    DropdownItem, 
    DropdownTrigger, 
    Dropdown, 
    DropdownMenu,
    DropdownSection
} from "@nextui-org/react";

export default function GlobalNavBar() {
    return (
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="bordered">
                            Previous Seasons
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu>
                        <DropdownSection>
                            <DropdownItem key="home" href="/home" asLink>Home</DropdownItem>
                            <DropdownItem key="about" href="/about" asLink>About</DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>

                </Dropdown>
    );
}