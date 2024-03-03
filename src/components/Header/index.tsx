"use client";

import Image from "next/image";
import { HeaderContainer, HeaderContent, HeaderSection, HomeAnchorLink, LinkIcon, LinksWrapper, NavContainer, NavLink } from "./styles";
import Logo from "../../assets/logo.png"
import { usePathname } from "next/navigation";
import { Button } from "@/ui/Button";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Header() {

    const pathname = usePathname()

    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Projects",
            path: "/projects"
        },
        {
            title: "Curriculum",
            path: "/curriculum"
        }
    ]

    return (
        <HeaderContainer>
            <HeaderContent>

                <HeaderSection>
                    <HomeAnchorLink href="/">
                        <Image src={Logo} alt="" />
                    </HomeAnchorLink>

                    <NavContainer>
                        {navLinks.map((link, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    href={link.path}
                                    active={link.path === pathname ? "active" : "inactive"}
                                >
                                    {link.title}
                                </NavLink>
                            )
                        })}
                    </NavContainer>
                </HeaderSection>

                <HeaderSection>
                    <LinksWrapper>
                        <LinkIcon href="https://github.com/RodrigoTRS">
                            <GithubLogo size={24} />
                        </LinkIcon>
                        <LinkIcon href="https://www.linkedin.com/in/rodrigoteixeiraribeirodasilva/">
                            <LinkedinLogo size={24} />
                        </LinkIcon>
                    </LinksWrapper>

                    <Button
                        size="bg"
                        variant="primary"
                    >
                        <span>Get in touch</span>
                    </Button>
                </HeaderSection>

            </HeaderContent>
        </HeaderContainer>
    )
}