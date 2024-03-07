"use client"

import { useProjectStore } from "@/store/projectStore"
import { CheckboxIndicator, CheckboxRoot, FilterCategory, FiltersContainer } from "./styles"
import { Check } from "phosphor-react"


export function Filters() {
    
    const { toggleFilter } = useProjectStore(state => {
        return {
            toggleFilter: state.toggleFilter,
        }
    })

    const projectCateogries = ["Front-end", "Back-end", "Full stack"]

    return (
        <FiltersContainer>
                <FilterCategory>
                    <h3>Project category</h3>
                    {
                        projectCateogries.map((category, index) => {
                            return (
                                <span key={index}>
                                    <CheckboxRoot onClick={() => {
                                        toggleFilter(category)
                                    }}>
                                        <CheckboxIndicator>
                                            <Check size={14} weight="bold"/>
                                        </CheckboxIndicator>
                                    </CheckboxRoot>
                                    {category}
                                </span>
                            )
                        })
                    }
                </FilterCategory>
        </FiltersContainer>
    )
}