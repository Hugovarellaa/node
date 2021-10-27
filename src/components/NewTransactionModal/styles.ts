import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    margin-top: 1rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Content = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button[type="button"] {
  }
`;

interface RadioBoxButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  red: "#e52e4d",
  green: "#33CC95",
};

export const RadioBoxButton = styled.button<RadioBoxButtonProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : "transaparent"};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 30px;
    height: 30px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
