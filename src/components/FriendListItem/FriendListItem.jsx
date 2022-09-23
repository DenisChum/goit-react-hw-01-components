import propTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) =>
(
    <li>
        <span></span>
        <img src={ avatar } alt="User avatar" width="48" />
        <p>{name}</p>
    </li>
)


FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};

export default FriendListItem; 