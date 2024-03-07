"use client"

import { Button } from "@/ui/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ActionsTable } from "../../components/ActionsTable";
import { Pagination } from "@/components/Pagination";
import * as Dialog from "@radix-ui/react-dialog";
import { LanguagesContainer, LanguagesHeader } from "./styles";
import { useCurriculumStore } from "@/store/curriculumStore";


export default function Languages() {

    const router = useRouter()

    const [ activePage, setActivePage ] = useState(1)

    const langaugesPerPage = 4;

    const { languages, loadLanguages } = useCurriculumStore(state => {
        return {
            languages: state.languages,
            loadLanguages: state.loadLanguages
        }
    })

    const needsPagination = (languages.length/langaugesPerPage) > 1;

    const paginatedLanguages =
        needsPagination
        ? languages.slice((activePage - 1) * langaugesPerPage, activePage * langaugesPerPage)
        : languages

    const headers = [
        { title: "Languages" },
        { title: "Level"}
    ]

    function changePage(page: number) {
        setActivePage(page)
    }
    
    useEffect(() => {
        loadLanguages()
    }, [languages])

    return (
        <Dialog.Root>
            <LanguagesContainer>
                <LanguagesHeader>
                    <h1>Languages</h1>
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => router.push("/dashboard/languages/create")}
                        >
                        Create language
                    </Button>
                </LanguagesHeader>
                <ActionsTable
                    headers={headers}
                    rows={paginatedLanguages.map((language) => {
                        return [language.title, language.level]
                    })}
                />
                {needsPagination &&
                    <Pagination
                        activePage={activePage}
                        elementsCount={languages.length}
                        elementsPerPage={langaugesPerPage}
                        changePage={changePage}
                    />
                }        
            </LanguagesContainer>
        </Dialog.Root>
    )
}