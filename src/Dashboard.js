import axios from "axios"
import React, { useEffect, useState } from "react"
import DeleteBlock from "./components/DeleteBlock"

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
      const deleteCustomer = async () => {
				const response = await axios.delete(
					`http://localhost:8000/${customerData?.documentId}`
				)
				const success = response.status == 200
				if (success) window.location.reload()
                else console.log("didnt work")
			}

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
					{customerData?.map((item) => (
						<tr>
							<td>
								{item?.datetime}
							</td>
							<td>{item?.lName}</td>
							<td>{item?.fName}</td>
							<td>{item?.email}</td>
							<td>{item?.phoneNumber}</td>
							<td>{item?.zipCode}</td>
							<td>{item?.services}</td>
							<td>
								<DeleteBlock documentId={item?.documentId} />
							</td>
						</tr>
					))}
				</table>
			</div>
		</div>
	)
}

export default Dashboard
