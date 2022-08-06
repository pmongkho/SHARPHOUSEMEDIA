import axios from "axios"
import React, { useEffect, useState } from "react"

const Dashboard = () => {
	const [customerData, setCustomerData] = useState(null)

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get("http://localhost:8000/customers")

			const dataObject = response.data.data

			const arrayOfKeys = Object.keys(dataObject)
			const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])
			const formattedArray = []

			//combine key and value to make a usable array
			arrayOfKeys.forEach((key, index) => {
				const formattedData = { ...arrayOfData[index] }
				formattedData["documentId"] = key
				formattedArray.push(formattedData)
			})
			setCustomerData(formattedArray)
		}
		fetchData()
	}, [])
	console.log(customerData)
	return (
		<div className="dashboard">

			<table id="customers">
				<tr>
					<th>Last Name</th>
					<th>First Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Zip Code</th>
					<th>Services</th>
				</tr>
                {customerData?.map((item, i) => (
				<tr>
					<td>{item.lName}</td>
					<td>{item.fName}</td>
					<td>{item.email}</td>
					<td>{item.phoneNumber}</td>
					<td>{item.zipCode}</td>
					<td>{item.services}</td>
				
				</tr>
                ))
                }
	
			</table>
		</div>
	)
}

export default Dashboard
