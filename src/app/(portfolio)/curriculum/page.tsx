"use client"

import { useCurriculumStore } from "@/store/curriculumStore";
import { CourseItem, CourseTag, CourseTagsContainer, CurriculumContainer, ExperienceContainer, ExperienceContent, ExperienceHeader, ExperienceImage, ExperienceModelTag, ExperienceText, ImageContainer, LanguageItem, MainColumn, PositionDate, PositionItem, PositionRow, ProfileContainer, ProfileDetails, SectionContainer, SideColumn } from "./styles";
import Eldorado from "../../../assets/companies/eldorado.png"
import Cover from "../../../assets/cover.png";

import { CalendarBlank, Circle, MapPin } from "phosphor-react";
import { formatDate } from "@/utils/formatDate";

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
                <ImageContainer src={Cover} alt="" />
                <ProfileContainer>
                    <h1>Rodrigo T. Ribeiro da Silva</h1>
                    <ProfileDetails>
                        <span>{profile.job}</span>
                        <span>{profile.location}</span>
                    </ProfileDetails>
                </ProfileContainer>

                <h2>Professional Experience</h2>
                <SectionContainer>
                    {
                        experiences.map((experience, index) => {
                            return (
                                <ExperienceContainer key={index}>
                                    <ExperienceImage src={Eldorado} alt="" />

                                    <ExperienceContent>

                                        <ExperienceHeader>
                                            <h2>{experience.company}</h2>
                                            <ExperienceModelTag>
                                                <MapPin size={20}/>
                                                {experience.model}
                                            </ExperienceModelTag>
                                        </ExperienceHeader>

                                        <ExperienceText>
                                            <span>
                                                {experience.location}
                                            </span>
                                        </ExperienceText>

                                        {experience.positions.map((position, index) => {
                                            return (
                                                <PositionRow key={index}>
                                                    <PositionItem>
                                                        <Circle size={8} weight="fill" />
                                                        <span>{position.title}</span>
                                                    </PositionItem>
                                                    <PositionDate>
                                                        <CalendarBlank size={20} />
                                                        {formatDate(position.starts_at)}
                                                        <span>-</span>
                                                        <CalendarBlank size={20} />
                                                        {
                                                        position.ends_at
                                                        ? formatDate(position.ends_at)
                                                        : "Current job"
                                                        }
                                                    </PositionDate>
                                                </PositionRow>
                                            )
                                        })}

                                    </ExperienceContent>

                                </ExperienceContainer>
                            )
                        })
                    }
                </SectionContainer>

                <h2>Academic Education</h2>
                <SectionContainer>
                    {
                        education.map((education, index) => {
                            return (
                                <ExperienceContainer key={index}>
                                    <ExperienceImage src={Eldorado} alt="" />

                                    <ExperienceContent>

                                        <ExperienceHeader>
                                            <h2>{education.title}</h2>
                                        </ExperienceHeader>

                                        <ExperienceText>
                                            <span>
                                                {education.location}
                                            </span>
                                        </ExperienceText>


                                        <PositionRow>
                                            <PositionItem>
                                                <Circle size={8} weight="fill" />
                                                <span>{education.university}</span>
                                            </PositionItem>
                                            <PositionDate>
                                                <CalendarBlank size={20} />
                                                {formatDate(education.starts_at)}
                                                <span>-</span>
                                                <CalendarBlank size={20} />
                                                {
                                                education.ends_at
                                                ? formatDate(education.ends_at)
                                                : "Current"
                                                }
                                            </PositionDate>
                                        </PositionRow>

                                    </ExperienceContent>

                                </ExperienceContainer>
                            )
                        })
                    }
                </SectionContainer>
            </MainColumn>

            <SideColumn>
                <h2>Courses</h2>
                <SectionContainer>
                    {courses.map((course, index) => {
                        return (
                            <CourseItem key={index}>
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
                            </CourseItem>
                        )
                    })}
                </SectionContainer>

                <h2>Languages</h2>
                <SectionContainer>
                    {
                        languages.map((language) => {
                            return (
                                <LanguageItem>
                                <h3>{language.title}</h3>
                                <span>{language.level}</span>
                                </LanguageItem>
                            )
                        })
                    }
                </SectionContainer>
            </SideColumn>

        </CurriculumContainer>
    )
}