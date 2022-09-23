import propTypes from "prop-types";
import FriendListItem from "components/FriendListItem";

const FriendList = ({ friends }) => (
<ul>
{friends.map(({ avatar, name, isOnline, id }) => {
        return (
        <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
        />
        );
    })}
</ul>
)

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired}).isRequired).isRequired,
};

export default FriendList;