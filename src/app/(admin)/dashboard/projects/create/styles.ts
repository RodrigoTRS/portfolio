"use client";

import styled from "styled-components";

export const CreateProjectHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  h1 {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${(props) => props.theme["foreground-900"]};
  }
`;

export const CreateProjectFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 3rem;
`;

export const CreateProjectForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
