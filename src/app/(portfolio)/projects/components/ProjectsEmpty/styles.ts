import { styled } from "styled-components";

export const EmptyProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.7;
    color: ${(props) => props.theme["foreground-700"]};
  }
`;
