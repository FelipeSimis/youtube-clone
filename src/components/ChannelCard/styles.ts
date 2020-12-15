import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  width: 100%;
  height: 40px;
  padding: 8px 24px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    margin-right: 24px;
  }

  .channel-name {
    text-decoration: none;
    font-size: 1.4rem;
    color: var(--white);
    flex: 1;

    & + span {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #3ea6ff;
    }
  }
`;
