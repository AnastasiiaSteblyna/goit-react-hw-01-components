import PropTypes from 'prop-types';
import {
  Description,
  ProfileBox,
  StatsBar,
  Img,
  Name,
  Tag,
  Loc,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Description>
      <ProfileBox>
        <Img src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Loc>{location}</Loc>

        <StatsBar>
          <li>
            <span>Followers</span>
            <span> {stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span> {stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span> {stats.likes}</span>
          </li>
        </StatsBar>
      </ProfileBox>
    </Description>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
