import styled from 'styled-components';

export const Container = styled.div`
  color: var(--white);
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 1024px) {
    grid-area: page;
  }
`;

export const Grid = styled.div`
  width: 100%;
  height: calc(100% - 56px);

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px 16px;
  place-items: center;

  padding: 24px 32px;

  @media (min-width: 514px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (min-width: 780px) {
    grid-template-columns: repeat(3, auto);
    grid-gap: 32px 16px;
  }

  @media (min-width: 1130px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, auto);
  }
`;
