import css from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.rofile_div}>
      <div className={css.avatar_div}>
        <img className={css.avatar_img} src={image} alt="User avatar" />
        <p className={css.avatar_name}>{name}</p>
        <p className={css.avatar_tag}>@{tag}</p>
        <p className={css.avatar_location}>{location}</p>
      </div>

      <ul className={css.followers_list}>
        <li className={css.followers_list_item}>
          <span className={css.followers_list_item_title}>Followers</span>
          <span className={css.followers_list_item_value}>
            {stats.followers}
          </span>
        </li>
        <li className={css.followers_list_item}>
          <span className={css.followers_list_item_title}>Views</span>
          <span className={css.followers_list_item_value}>{stats.views}</span>
        </li>
        <li className={css.followers_list_item}>
          <span className={css.followers_list_item_title}>Likes</span>
          <span className={css.followers_list_item_value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
