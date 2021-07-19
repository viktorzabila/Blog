import React, { useState } from 'react';
import { removePost } from 'store/state';
import styles from './Post.module.css';
import PostButtons from './PostButtons/PostButtons';
import PostPopup from './PostPopup/PostPopup';
import PostSaveChanges from './PostSaveChanges/PostSaveChanges';

const Post = (props) => {
	const [modalActive, setModalActive] = useState(false);
	

	return (
		<div className={styles.wrap}>
			<div className={styles.wrapper}>
				<div>
					<div className={styles.profile}>
						<img
							src="https://image.flaticon.com/icons/png/128/1077/1077114.png"
							alt=""
							className={styles.profileMarginRight}
						/>
						<span className={styles.profileMarginRight}>
							{props.message}
						</span>
						<span className={styles.profileMarginRight}>
							likes {props.countLikes}
						</span>
					</div>
					<button
						className={`${styles.button} ${styles.buttonDelete}`}
						onClick={() => removePost(props.index)}
					>
						Delete
					</button>
					<div>
						<button
							className={`${styles.button} ${styles.buttonEdit}`}
							onClick={() => setModalActive(true)}
						>
							Edit
						</button>
					</div>
					<PostPopup active={modalActive} setActive={setModalActive}>
						<PostSaveChanges index={props.index} />
					</PostPopup>
					<div>
						<PostButtons index={props.index} likes={props.countLikes}/>
					</div>
					<div>
						<button>Props</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
