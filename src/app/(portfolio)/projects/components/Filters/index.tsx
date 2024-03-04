"use client"

import { useProjectStore } from "@/store/projectStore"
import { CheckboxIndicator, CheckboxRoot, FilterCategory, FiltersContainer } from "./styles"
import { Check } from "phosphor-react"

export function Filters() {
    
    const { categories, toggleFilter } = useProjectStore(state => {
        return {
            filters: state.filters,
            categories: state.categories,
            toggleFilter: state.toggleFilter,
        }
    })

    return (
        <FiltersContainer>
            {
                categories.map((cateogry, index) => {
                    return (
                        <FilterCategory key={index}>
                            <h3>{cateogry.title}</h3>
                            {
                                cateogry.sub.map((item, index) => {
                                    return (
                                        <span key={index}>
                                            <CheckboxRoot onClick={() => {
                                                toggleFilter(cateogry.title, item)
                                            }}>
                                                <CheckboxIndicator>
                                                    <Check size={14} weight="bold"/>
                                                </CheckboxIndicator>
                                            </CheckboxRoot>
                                            {item}
                                        </span>
                                    )
                                })
                            }
                        </FilterCategory>
                    )
                })
            }
        </FiltersContainer>
    )
}