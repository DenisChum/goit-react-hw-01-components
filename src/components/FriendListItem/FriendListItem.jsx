import propTypes from "prop-types";
import { Status, Friend, Name } from './FriendListItem.styled';


const FriendListItem = ({ avatar, name, isOnline }) =>
(
    <Friend>
        <Status isOnline={isOnline}></Status>
        <img src={ avatar } alt="User avatar" width="48" />
        <Name>{name}</Name>
    </Friend>
)


FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};

export default FriendListItem; 