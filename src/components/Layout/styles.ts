import styled, { css } from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    ${props =>
      props.isActive &&
      css`
        display: grid;
        grid-template-columns: 240px auto;
        grid-template-areas: 'sidebar page';
      `}
  }
`;
