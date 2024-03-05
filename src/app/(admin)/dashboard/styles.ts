"use client";

import { styled } from "styled-components";

export const DashboardContainer = styled.main`
  display: flex;
  height: 100vh;
`;

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 64px;
`;

export const ShortContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 3rem;
`;

export const DoubleColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const FileInput = styled.input`
  /* display: none; */
`;

export const SubmitFileButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  width: 220px;
  border-radius: 8px;
  margin-top: 1rem;

  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["black"]};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
