import styled from 'styled-components';

export const VideoNotification = styled.div`
  display: flex;
  justify-content: space-evenly;

  padding: 6px 12px;
`;

export const ChannelPhoto = styled.img`
  width: 48px !important;
  height: 48px !important;
  border-radius: 50%;
`;

export const Info = styled.div`
  padding: 0 16px;

  .title {
    font-size: 1.4rem;
    color: var(--white);

    margin-bottom: 8px;
  }

  .date {
    color: var(--text);
  }
`;

export const VideoThumbnail = styled.div`
  width: 86px;
  height: 64px;

  > img {
    padding-bottom: 16px;
    width: 100% !important;
    height: 100% !important;
  }
`;
