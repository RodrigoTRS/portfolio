"use client";

import Image from "next/image";
import { HeaderContainer, HeaderContent, HeaderSection, HomeAnchorLink, LinkIcon, LinksWrapper, NavContainer, NavLink } from "./styles";
import Logo from "../../assets/logo.png"
import { usePathname } from "next/navigation";
import { Button } from "@/ui/Button";
import { GithubLogo, InstagramLogo, LinkedinLogo, Moon, Sun } from "phosphor-react";
import { useStore } from "@/store";

export function Header() {

    const { colorSchama, toggleColorSchema } = useStore(store => {
        return {
            colorSchama: store.colorSchema,
            toggleColorSchema: store.toggleColorSchema
        }
    })

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

    function handleToggleColorSchema() {
        toggleColorSchema()
    }

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
                        Get in touch
                    </Button>
                    <Button
                        size="square"
                        variant="secondary"
                        onClick={handleToggleColorSchema}
                    >
                        {
                            colorSchama === "light"
                            ? <Moon size={24} />
                            : <Sun size={24} />
                        }
                    </Button>

                </HeaderSection>

            </HeaderContent>
        </HeaderContainer>
    )
}