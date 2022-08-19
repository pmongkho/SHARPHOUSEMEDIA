import axios from "axios"
import {
	collection,
	doc,
	onSnapshot,
	orderBy,
	query,
	updateDoc,
} from "firebase/firestore"
import React, { useEffect, useState } from "react"
import DeleteBlock from "./components/DeleteBlock"
import { db } from "./firebase"

const Dashboard = () => {
	const [customerData, setCustomerData] = useState([])

	useEffect(() => {
		const q = query(
			collection(db, "customers"),
			// orderBy("formData.datetime", "asc")
		)

		//read database
		const addData = onSnapshot(q, (snapshot) => {
			let dataArray = []
			snapshot.forEach((doc) => dataArray.push({ ...doc.data(), id: doc.id }))
			setCustomerData(dataArray)
		})

		return () => addData()
	}, [])


	console.log("customerData: ", customerData)

	return (
		<div className="dashboard">
			<div className="container">
				<table id="customers">
					<tr>
						<th>Created</th>
						<th>Last Name</th>
						<th>First Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Zip Code</th>
						<th>Services</th>
						<th>X</th>
					</tr>

					{customerData.map((item, index) => (
						<tr key={index}>
							<td>{item?.datetime}</td>
							<td>{item?.lastname}</td>
							<td>{item?.firstname}</td>
							<td>{item?.email}</td>
							<td>{item?.phone}</td>
							<td>{item?.zipcode}</td>
							<td>{item?.services}</td>
							<td>
								<DeleteBlock  id={item?.id}/>
							</td>
						</tr>
					))}
				</table>
			</div>
		</div>
	)
}

export default Dashboard
