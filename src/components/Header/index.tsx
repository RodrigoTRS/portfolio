"use client";

import Image from "next/image";
import { ButtonsSection, HeaderContainer, DesktopHeaderContent, HeaderSection, HomeAnchorLink, LinkIcon, LinksWrapper, NavContainer, NavLink, MobileHeaderContent, MobileMenuWrapper, MobileNavContainer, MobileAnchorLink } from "./styles";
import Logo from "../../assets/logo.png"
import { usePathname } from "next/navigation";
import { Button } from "@/ui/Button";
import { GithubLogo, InstagramLogo, LinkedinLogo, List, Moon, Sun, X } from "phosphor-react";
import { useGlobalStore } from "@/store/globalStore";

export function Header() {

    const { colorSchama, isMobileMenuOpen, toggleColorSchema, toogleMobileMenu } = useGlobalStore(store => {
        return {
            colorSchama: store.colorSchema,
            isMobileMenuOpen: store.isMobileMenuOpen,
            toggleColorSchema: store.toggleColorSchema,
            toogleMobileMenu: store.toggleMobileMenu
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

    return (
        <HeaderContainer>

            <DesktopHeaderContent>

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


                    <ButtonsSection>
                        <Button
                            size="bg"
                            variant="primary"
                            >
                            Get in touch
                        </Button>
                        <Button
                            size="square"
                            variant="secondary"
                            onClick={toggleColorSchema}
                            >
                            {
                                colorSchama === "light"
                                ? <Moon size={20} />
                                : <Sun size={20} />
                            }
                        </Button>
                    </ButtonsSection>

                </HeaderSection>

            </DesktopHeaderContent>

            <MobileHeaderContent>
                    <HomeAnchorLink href="/">
                        <Image src={Logo} alt="" />
                    </HomeAnchorLink>
                    <ButtonsSection>
                        <Button
                            size="square"
                            variant="secondary"
                            onClick={toogleMobileMenu}
                            >
                                <List size={20} />
                        </Button>
                    </ButtonsSection>
                    { isMobileMenuOpen &&
                        <MobileMenuWrapper>
                            <MobileNavContainer>
                                <Button
                                    size="square"
                                    variant="secondary"
                                    onClick={toogleMobileMenu}
                                    >
                                        <X size={20} />
                                </Button>
                                {navLinks.map((link, index) => {
                                    return (
                                        <MobileAnchorLink
                                            key={index}
                                            href={link.path}
                                            onClick={toogleMobileMenu}
                                        >
                                            {link.title}
                                        </MobileAnchorLink>
                                    )
                                })}
                                <ButtonsSection>
                                    <Button
                                        size="bg"
                                        variant="primary"
                                        >
                                        Get in touch
                                    </Button>
                                    <Button
                                        size="square"
                                        variant="secondary"
                                        onClick={toggleColorSchema}
                                        >
                                        {
                                            colorSchama === "light"
                                            ? <Moon size={20} />
                                            : <Sun size={20} />
                                        }
                                    </Button>
                                </ButtonsSection>
                            </MobileNavContainer>
                        </MobileMenuWrapper>
                    }
            </MobileHeaderContent>
        </HeaderContainer>
    )
}