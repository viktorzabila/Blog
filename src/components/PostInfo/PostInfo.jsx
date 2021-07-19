
import React from 'react';
import state, { addPost } from 'store/state';
import Post from './Post/Post';
import styles from './PostInfo.module.css';

export const newPostElement = React.createRef();
const PostInfo = () => { 
	const postsElement = state.posts.map((post, index) => (
		<Post
			message={post.message}
			countLikes={post.countLikes}
			index={index}
			key={index}
		/>
	));

	const add = () => {
		const text = newPostElement.current.value;
		console.log(text);
		newPostElement.current.value = '';
		console.log(text);
		addPost(text);
	};

	const clear = () => {
		newPostElement.current.value = '';
	};

	return (
		<div className={styles.wrap}>
			<h1>Add some post, tell your story</h1>
			<div className={styles.form}>
				<div>
					<textarea
						className={styles.textarea}
						ref={newPostElement}
					></textarea>
				</div>
				<div className={styles.buttons}>
					<div>
						<button className={`${styles.button} ${styles.buttonAdd}`} onClick={add}>
							Add
						</button>
					</div>
					<div>
						<button className={`${styles.button} ${styles.buttonClear}`} onClick={clear}>
							Clear
						</button>
					</div>
				</div>
			</div>
			<hr className={styles.hr}/>
			<div>
				<h2 className={styles.subtitle}>Comments</h2>
			</div>
			<div>
				{postsElement}
			</div>
		</div>
	);
};

export default PostInfo;
