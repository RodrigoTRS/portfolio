"use client";

import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { FooterContainer, FooterContent, LinkIcon, LinksWrapper } from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                Made with 💚 by Rodrigo Teixeira
                <span>© Copyright {new Date().getFullYear()} Rodrigo Teixeira. Made in São Carlos - SP, Brasil</span>
                <LinksWrapper>
                    <LinkIcon href="https://github.com/RodrigoTRS">
                        <GithubLogo size={24} />
                    </LinkIcon>
                    <LinkIcon href="https://www.linkedin.com/in/rodrigoteixeiraribeirodasilva/">
                        <LinkedinLogo size={24} />
                    </LinkIcon>
                </LinksWrapper>
            </FooterContent>
        </FooterContainer>
    )
}