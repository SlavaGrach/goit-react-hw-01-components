import FriendListItem from './FriendListItem';
import css from './friendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css.list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

export default FriendList;
