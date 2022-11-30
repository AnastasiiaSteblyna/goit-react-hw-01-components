import PropTypes from 'prop-types';
import { Description, ProfileBox, StatsBar, Img } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Description>
      <ProfileBox>
        <Img src={avatar} alt={username} />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
        <StatsBar>
          <li>
            <span class="label">Followers</span>
            <span class="quantity">{stats.followers}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="quantity">{stats.views}</span>
          </li>
          <li>
            <span class="label">Likes</span>
            <span class="quantity">{stats.likes}</span>
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
