import { LanguageContainer } from "./styles";

interface Language {
    title: string;
    level: string;
}
  

interface LanguagemItemProps {
    language: Language;
}

export function LanguageItem({ language }: LanguagemItemProps) {
    return (
        <LanguageContainer>
            <h3>{language.title}</h3>
            <span>{language.level}</span>
        </LanguageContainer>
    )
}