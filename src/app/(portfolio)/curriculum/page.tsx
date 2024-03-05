"use client"

import { useCurriculumStore } from "@/store/curriculumStore";
import { CurriculumContainer, CurriculumSectionWrapper, MainColumn, SideColumn } from "./styles";
import { Box } from "@/ui/Box";
import { ProfessinalItem } from "./components/ProfessionalItem";
import { AcademicItem } from "./components/AcademicItem";
import { CourseItem } from "./components/CourseItem";
import { LanguageItem } from "./components/LanguageItem";
import { ProfileCard } from "./components/ProfileCard";

export default function Curriculum() {

    const { profile, experiences, education, courses, languages } = useCurriculumStore(state => {
        return {
            profile: state.profile,
            experiences: state.experiences,
            education: state.education,
            courses: state.courses,
            languages: state.languages,
        }
    })

    return (
        <CurriculumContainer>
            
            <MainColumn>
                <ProfileCard
                    profile={profile}
                />

                <CurriculumSectionWrapper>
                    <h2>Professional Experience</h2>
                    <Box>
                        {
                            experiences.map((experience, index) => {
                                return (
                                    <ProfessinalItem
                                    experience={experience}
                                    key={index}
                                    />
                                    )
                                })
                            }
                    </Box>
                </CurriculumSectionWrapper>

                <CurriculumSectionWrapper>
                    <h2>Academic Education</h2>
                    <Box>
                        {
                            education.map((education, index) => {
                                return (
                                    <AcademicItem
                                    education={education}
                                    key={index}
                                    />
                                    )
                                })
                            }
                    </Box>
                </CurriculumSectionWrapper>
            </MainColumn>

            <SideColumn>

                <CurriculumSectionWrapper>
                    <h2>Courses</h2>
                    <Box>
                        {courses.map((course, index) => {
                            return (
                                <CourseItem
                                course={course}
                                key={index}
                                />
                                )   
                            })}
                    </Box>
                </CurriculumSectionWrapper>

                <CurriculumSectionWrapper>
                    <h2>Languages</h2>
                    <Box>
                        {
                            languages.map((language, index) => {
                                return (
                                    <LanguageItem 
                                    language={language}
                                    key={index}
                                    />
                                    )
                                })
                            }
                    </Box>
                </CurriculumSectionWrapper>

            </SideColumn>
        </CurriculumContainer>
    )
}