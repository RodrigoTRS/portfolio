import { Moon, Sun } from "phosphor-react";
import { ColorSchemaButton, Logo, Menu, MenuLink, SidebarContainer } from "./styles";
import LogoImg from "@/assets/logo.png"
import { Button } from "@/ui/Button";
import { useGlobalStore } from "@/store/globalStore";

export function Sidebar() {

    const { colorSchama, toggleColorSchema } = useGlobalStore(store => {
        return {
            colorSchama: store.colorSchema,
            toggleColorSchema: store.toggleColorSchema,
        }
    })

    const sidebarLinks = [
        {
            path: "",
            title: "Dashboard"
        },
        {
            path: "/projects",
            title: "Projects"
        },
        {
            path: "/profile",
            title: "Profile"
        },
        {
            path: "/languages",
            title: "Languages"
        },
    ]

    return (
        <SidebarContainer>
            <Logo
                src={LogoImg}
                alt=""
            />
            <Menu>
                {
                    sidebarLinks.map((link, index) => {
                        return (
                            <MenuLink
                                href={`/dashboard${link.path}`}
                                key={index}
                            >
                                <span>{link.title}</span>
                            </MenuLink>
                        )
                    })
                }
            </Menu>
            <ColorSchemaButton
                onClick={toggleColorSchema}
                >
                {
                    colorSchama === "light"
                    ? <Moon size={20} />
                    : <Sun size={20} />
                }
            </ColorSchemaButton>
        </SidebarContainer>
    )
}