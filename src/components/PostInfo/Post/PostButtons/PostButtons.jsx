import React from 'react';
import { decreaseLike, increaseLike } from 'store/state';
import styles from './PostButtons.module.css';

const PostButtons = ({ index, likes }) => {
	return (
		<div>
			<button
				className={`${styles.button} ${styles.buttonLike}`}
				onClick={() => increaseLike(index, likes)}
			>
				Like
			</button>
			
			<button
				className={`${styles.button} ${styles.buttonDislike}`}
				onClick={() => decreaseLike(index, likes)}
			>
				Dislike
			</button>
		</div>
	);
};

export default PostButtons;
