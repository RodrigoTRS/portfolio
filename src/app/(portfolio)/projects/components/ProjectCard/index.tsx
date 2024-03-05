import { CalendarBlank } from "phosphor-react";
import { CardHeader, CardText, CategoryTag, DateContainer, ShowMoreButton, TechnologiesWrapper, TechnologyTag } from "./styles";
import { formatDate } from "@/utils/formatDate";
import { Box } from "@/ui/Box";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: "Front-end" | "Back-end" | "Full stack";
    created_at: Date;
    repository_url: string;
    project_url: string;
}

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Box key={project.id}>
            <CardHeader>
                <CategoryTag>{project.category}</CategoryTag>
                <DateContainer>
                    <CalendarBlank size={20}/>
                    {formatDate(project.created_at)}
                </DateContainer>
            </CardHeader>
            <CardText>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </CardText>

            <TechnologiesWrapper>

                {project.technologies.map((technology) => {
                    return (
                        <TechnologyTag>
                            {technology}
                        </TechnologyTag>
                        )
                    })}
            </TechnologiesWrapper>
            <ShowMoreButton
                size="bg"
                variant="primary"
            >
                Show more
            </ShowMoreButton>
        </Box>
    )
}