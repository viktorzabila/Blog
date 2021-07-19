import PostInfo from 'components/PostInfo/PostInfo';
import React from 'react';
import styles from './Profile.module.css';

const Profile = (props) => {
	return (
		<div>
			<div className={styles.wrap}>
				<PostInfo />
			</div>
		</div>
	);
};

export default Profile;
