import { useProjectStore } from "@/store/projectStore"
import { PaginationContainer, PaginationItem } from "./styles"
import { Item } from "@radix-ui/react-select"

export function Pagination() {

    const { projects, page, perPage, changePage } = useProjectStore(state => {
        return {
            projects: state.projects,
            page: state.page,
            perPage: state.perPage,
            changePage: state.changePage
        }
    })

    const numberOfProjects = projects.length
    const totalPages = Math.round(numberOfProjects/perPage)
    const paginationItems = Array.from(
        {length: totalPages}, (_, index) => index + 1);

    return (
        <PaginationContainer>
            {paginationItems.map((item) => {
                return (
                    <PaginationItem
                        key={item}
                        active={item === page ? "active" : "not"}
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