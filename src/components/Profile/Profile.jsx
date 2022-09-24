import React from 'react';
import propTypes from 'prop-types';
import { Card, Location, Tag, Avatar, Description, Name, Stats, StatsItem, Label} from './Profile.styled'


const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats : { followers, views, likes },
}) => (
  <Card>
  <Description>
    <Avatar
        src={avatar}
      alt="User avatar"
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <StatsItem>
      <Label>Followers</Label>
       <span>{followers}</span>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <span>{views}</span>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <span>{likes}</span>
    </StatsItem>
  </Stats>
  </Card>)

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number.isRequired).isRequired,
};



export default Profile