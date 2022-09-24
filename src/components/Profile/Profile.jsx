import React from 'react';
import propTypes from 'prop-types';
import {Card, Avatar,Description, Name} from './Profile.styled'


const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats : { followers, views, likes },
}) => (
  <Card>
  <Description className="description">
    <Avatar
        src={avatar}
      alt="User avatar"
    />
    <Name className="name">{username}</Name>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </Description>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
       <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
  </Card>)

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number.isRequired).isRequired,
};



export default Profile