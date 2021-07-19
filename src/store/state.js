import { rerenderEntireTree } from 'render';

let state = {
	posts: [
		{ id: 1, message: 'bla ', countLikes: 99 },
		{ id: 2, message: 'bla bla ', countLikes: 98 },
		{ id: 3, message: 'bla bla bla', countLikes: 97 },
		{ id: 4, message: 'bla bla bla bla', countLikes: 96 },
	],
};

export const addPost = (postMessage) => {
	const newPost = {
		id: 0,
		message: postMessage,
		countLikes: 0,
	};
	state.posts.push(newPost);
	rerenderEntireTree(state);
};

export const removePost = (index) => {
	state.posts.splice(index, 1);
	rerenderEntireTree(state);
};

export const increaseLike = (index, countLikes) => {
	state.posts[index].countLikes = countLikes + 1;
	rerenderEntireTree(state);
};

export const decreaseLike = (index, countLikes) => {
	state.posts[index].countLikes = countLikes - 1;
	rerenderEntireTree(state);
};

export const editChangesPost = (index, text) => {
	state.posts[index].message = text;
	rerenderEntireTree(state);
};

export default state;
