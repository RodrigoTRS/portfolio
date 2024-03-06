import { styled } from "styled-components";

export const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  gap: 2rem;
  max-width: 720px;
`;

export const ProjectPageTopBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ProjectPageBottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border: 2px solid ${(props) => props.theme["foreground-500"]};
  border-radius: 4px;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.825rem;
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  overflow-wrap: wrap;
`;

export const TechnologyTag = styled.div`
  padding: 0 8px;
  background: ${(props) => props.theme["green-100"]};
  border-radius: 4px;
`;
