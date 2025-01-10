import clsx from 'clsx';
import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friendListItem_div}>
      <img
        className={styles.friendListItem_avatar}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.friendListItem_name}>{name}</p>
      <p
        className={clsx(
          styles.friendListItem,
          isOnline && styles.online,
          !isOnline && styles.offline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
