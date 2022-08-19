import axios from "axios"
import { deleteDoc, doc } from "firebase/firestore"
import React from 'react'
import { db } from "../firebase"

const DeleteBlock = ({ id }) => {

	//deleteData
	const deleteData = async () => {
		await deleteDoc(doc(db, "customers", id))
	}

	return (
		<div className="delete-block">
			<div className="delete-icon" onClick={deleteData}>❌</div>
		</div>
	)
}

export default DeleteBlock