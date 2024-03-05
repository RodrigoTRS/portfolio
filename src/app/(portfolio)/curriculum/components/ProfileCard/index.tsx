import { ImageContainer, ProfileContainer, ProfileContent, ProfileDetails, ProfileImage } from "./styles";
import Image from "next/image"

import Cover from "../../../../../assets/cover.png"
import Profile from "../../../../../assets/profile.jpeg"

interface Profile {
    job: string;
    location: string;
}

interface ProfileProps {
    profile: Profile
}

export function ProfileCard({ profile }: ProfileProps) {
    return (
        <ProfileContainer>
            <ImageContainer src={Cover} alt="" />
            <ProfileContent>
                <ProfileImage src={Profile} width={128} height={128} alt="" />
                <h1>Rodrigo T. Ribeiro da Silva</h1>
                <ProfileDetails>
                    <span>{profile.job}</span>
                    <span>{profile.location}</span>
                </ProfileDetails>
            </ProfileContent>
        </ProfileContainer>
    )
}