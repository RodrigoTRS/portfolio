import { PaginationContainer, PaginationItem } from "./styles"

interface PaginationProps {
    elementsCount: number,
    elementsPerPage: number,
    activePage: number,
    changePage: (page: number) => void;
}

export function Pagination({ elementsCount, elementsPerPage, activePage, changePage}: PaginationProps) {

    const totalPages = Math.round(elementsCount/elementsPerPage)
    const paginationItems = Array.from(
        {length: totalPages}, (_, index) => index + 1);

    return (
        <PaginationContainer>
            {paginationItems.map((item) => {
                return (
                    <PaginationItem
                        key={item}
                        active={item === activePage ? "active" : "not"}
                        onClick={() => {
                            changePage(item)
                        }}
                    >
                        {item}
                    </PaginationItem>
                )
            })}
        </PaginationContainer>
    )
}