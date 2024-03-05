import { styled } from "styled-components";
import Image from "next/image";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled(Image)`
  display: flex;

  border-radius: 8px 8px 0 0;
  object-fit: cover;

  height: 160px;
  width: 100%;

  border: 1px solid ${(props) => props.theme["background-300"]};
  border-bottom: unset;
`;

export const ProfileImage = styled(Image)`
  position: relative;
  bottom: 96px;
  border-radius: 999px;
  border: 2px solid ${(props) => props.theme["background-300"]};
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0 0 8px 8px;
  padding: 2rem;
  gap: 0.5rem;

  background: ${(props) => props.theme["background-200"]};
  border: 1px solid ${(props) => props.theme["background-300"]};

  h1 {
    margin-top: -80px;
    font-size: 1.5rem;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme["foreground-600"]};
  }
`;
