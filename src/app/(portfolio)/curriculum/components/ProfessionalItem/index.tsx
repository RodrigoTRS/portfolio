import { ExperienceContainer, ExperienceContent, ExperienceHeader, ExperienceImage, ExperienceModelTag, ExperienceText, PositionDate, PositionItem, PositionRow } from "./styles"
import Eldorado from "../../../../../assets/companies/eldorado.png"
import { CalendarBlank, Circle, MapPin } from "phosphor-react"
import { formatDate } from "@/utils/formatDate"

interface JobPosition {
    title: string;
    starts_at: Date;
    ends_at: Date | null;
  }
  
  interface ProfessionalExperience {
    company: string;
    location: string;
    model: string;
    positions: JobPosition[];
  }
  

interface ProfessionalExperienceProps {
    experience: ProfessionalExperience
}

export function ProfessinalItem({ experience }: ProfessionalExperienceProps) {
    return (
        <ExperienceContainer>
            <ExperienceImage src={Eldorado} alt="" />

            <ExperienceContent>

                <ExperienceHeader>
                    <h3>{experience.company}</h3>
                    <ExperienceModelTag>
                        <MapPin size={16}/>
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
                                : "Current"
                                }
                            </PositionDate>
                        </PositionRow>
                    )
                })}

            </ExperienceContent>

        </ExperienceContainer>
    )
}