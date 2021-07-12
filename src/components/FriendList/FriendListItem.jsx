import PropTypes from 'prop-types';

import css from './friendList.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id} className={css.item}>
    <span className={isOnline ? css.onLine : css.offLine}></span>
    <img src={avatar} alt={name} className={css.avatar} />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
