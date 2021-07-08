const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id}>
    <span className={isOnline}></span>
    <img src={avatar} alt={name} width="48" className="avatar" />
    <p>{name}</p>
  </li>
);

export default FriendListItem;
