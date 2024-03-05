import { CourseTag, CourseTagsContainer, CourseContainer } from "./styles";

interface Course {
    tags: string[];
    title: string;
    company: string;
}

interface CourseItemProps {
    course: Course
}
  

export function CourseItem({course}: CourseItemProps) {
    return (
        <CourseContainer>
            <CourseTagsContainer>
                {course.tags.map((tag, index) => {
                    return (
                        <CourseTag key={index}>
                            {tag}
                        </CourseTag>
                    )
                })}
            </CourseTagsContainer>
        <h3>{course.title}</h3>
        <span>{course.company}</span>
    </CourseContainer>
    )
}