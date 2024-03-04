import { EmptyProjectsContainer } from "./styles";

export function ProjectsEmpty() {
    return (
        <EmptyProjectsContainer>
            <h2>No projects found</h2>
            <p>Try to filter for other categories.</p>
        </EmptyProjectsContainer>
    )
}