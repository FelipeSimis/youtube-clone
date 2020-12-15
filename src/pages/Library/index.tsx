import React from 'react';
import { Link } from 'react-router-dom';

import VideoCard from '../../components/VideoCard';

import Avatar from '../../assets/images/avatar.svg';
import Video from '../../assets/images/video.jpg';

import {
  Container,
  VideosArea,
  Row,
  HistoryIcon,
  Grid,
  ClockIcon,
  LikeIcon,
  YourChannelInfo,
  Info,
} from './styles';

const Library: React.FC = () => {
  return (
    <Container>
      <VideosArea>
        <div className="playlist">
          <Row>
            <div>
              <HistoryIcon />
              History
            </div>

            <Link to="history">See All</Link>
          </Row>

          <Grid>
            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />
          </Grid>
        </div>

        <div className="playlist">
          <Row>
            <div>
              <ClockIcon />
              Watch later <p>3,214</p>
            </div>

            <Link to="playlist">See All</Link>
          </Row>

          <Grid>
            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />
          </Grid>
        </div>

        <div className="playlist">
          <Row>
            <div>
              <LikeIcon />
              Liked videos <p>9,263</p>
            </div>

            <Link to="liked_videos">See All</Link>
          </Row>

          <Grid>
            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />

            <VideoCard
              thumb={Video}
              channel_name="Channel Name"
              title="YouTube Clone - ReactJS"
              views={900}
              date="Há 1 mês"
            />
          </Grid>
        </div>
      </VideosArea>

      <YourChannelInfo>
        <div>
          <img src={Avatar} alt="Profile Pic" />
          <span>Felipe</span>
        </div>

        <Info>
          <div>
            <span>Subscriptions</span>
            <span>100</span>
          </div>

          <div>
            <span>Uploads</span>
            <span>100</span>
          </div>

          <div>
            <span>Likes</span>
            <span>9,263</span>
          </div>
        </Info>
      </YourChannelInfo>
    </Container>
  );
};

export default Library;
