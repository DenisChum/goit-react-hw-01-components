import propTypes from "prop-types";
import FriendListItem from "components/FriendListItem";
import { FriendBoard } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return (
        <FriendBoard>
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
        </FriendBoard>
    );
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired}).isRequired).isRequired,
};

export default FriendList;