import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { Input } from "@heroui/input";
import { auth } from "@/auth";
import { ReactNode } from "react";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default async function Header() {
    const session = await auth()
    if (!session?.user) return null
    let authContent: ReactNode;
    if (session?.user) {
        authContent = <Avatar src={session.user.image || "https://avatars.githubusercontent.com/u/172476270?s=40&v=4"} />;
    } else {
        authContent = (
            <>
                <NavbarItem>
                    <Button type="submit" color="secondary" variant="bordered">
                        Sign In
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button type="submit" color="secondary">
                        Sign Up
                    </Button>
                </NavbarItem>
            </>
        );
    }
    return (
        <Navbar className="border-b-1 border-gray-200">
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">DISCUSS</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Input placeholder="Search..." />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">{authContent}</NavbarContent>
        </Navbar>
    );
}
