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
                    <DropdownTrigger >
                        <Button color="success">
                            Previous Seasons
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu >
                        <DropdownSection>
                            <DropdownItem key="one" href="/one">one</DropdownItem>
                            <DropdownItem key="two" href="/two">two</DropdownItem>
                            <DropdownItem key="three" href="/three">three</DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
    );
}