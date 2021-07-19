import React from 'react';
import { editChangesPost } from 'store/state';

function PostSaveChanges({index}) {
	const editPostElement = React.createRef();

	const saveChanges = () => {
		const text = editPostElement.current.value;
		editPostElement.current.value = ''
		editChangesPost(index, text);
	};

	return (
		<div>
			<textarea className="textarea" ref={editPostElement} />
			<button className="button" onClick={() => saveChanges()}>
				Save changes
			</button>
		</div>
	)
}

export default PostSaveChanges
