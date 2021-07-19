import PersonAdd from 'components/PersonList/PersonAdd'
import PersonDelete from 'components/PersonList/PersonDelete'
import PersonEdit from 'components/PersonList/PersonEdit'
import PersonList from 'components/PersonList/PersonList'
import React from 'react'
import styles from './Album.module.css'

const Albums = () => {
	return (
		<div className={styles.wrap}>
			<p>I love the world</p>
			<PersonList />
			<PersonAdd />
			<PersonDelete />
			<PersonEdit />
		</div>

	)
}

export default Albums