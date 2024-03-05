import { CalendarBlank, Circle } from "phosphor-react";
import Eldorado from "../../../../../assets/companies/eldorado.png"
import { formatDate } from "@/utils/formatDate";
import { AcademicContainer, AcademicContent, AcademicHeader, AcademicImage, AcademicText, PositionDate, PositionItem, PositionRow } from "./styles";

interface AcademicExperience {
    title: string;
    location: string;
    university: string;
    starts_at: Date;
    ends_at: Date | null;
  }

interface AcademicItemProps {
    education: AcademicExperience
}

export function AcademicItem({ education }: AcademicItemProps) {
    return (
        <AcademicContainer>
            <AcademicImage src={Eldorado} alt="" />

            <AcademicContent>

                <AcademicHeader>
                    <h3>{education.title}</h3>
                </AcademicHeader>

                <AcademicText>
                    <span>
                        {education.location}
                    </span>
                </AcademicText>


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

            </AcademicContent>

        </AcademicContainer>
    )
}