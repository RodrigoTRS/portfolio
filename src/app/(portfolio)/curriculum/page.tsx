"use client"

import { useCurriculumStore } from "@/store/curriculumStore";
import { CurriculumContainer, MainColumn, ProfileDetails, SectionContainer, SideColumn } from "./styles";

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
                <SectionContainer>
                    <h1>Rodrigo T. Ribeiro da Silva</h1>
                    <ProfileDetails>
                        <span>{profile.job}</span>
                        <span>{profile.location}</span>
                    </ProfileDetails>
                </SectionContainer>

                <h2>Professional Experience</h2>
                <SectionContainer>

                </SectionContainer>

                <h2>Academic Education</h2>
                <SectionContainer>

                </SectionContainer>
            </MainColumn>

            <SideColumn>
                <h2>Courses</h2>
                <SectionContainer>

                </SectionContainer>

                <h2>Languages</h2>
                <SectionContainer>

                </SectionContainer>
            </SideColumn>

        </CurriculumContainer>
    )
}