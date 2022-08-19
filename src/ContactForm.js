import { Checkbox, useCheckboxState } from "pretty-checkbox-react"
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "./firebase"
import {
	query,
	collection,
	onSnapshot,
	addDoc,
	setDoc,
	doc,
} from "firebase/firestore"

const ContactForm = () => {
	const navigate = useNavigate()
	const [permission, setPermission] = useState(null)
	const form = useRef()

	// const form = useRef()
	const [formData, setFormData] = useState({
		datetime: new Date().toISOString(),
		firstname: "",
		lastname: "",
		email: "",
		zipcode: "",
		phone: "",
		services: [],
	})

	const serviceData = [
		"Business Development",
		"Brand Creation",
		"Logo Design",
		"Digital Marketing/Ads",
		"Video/Photography",
		"Social Media/Content",
		"Web Development",
	]

	//createData
	const createCustomer = async () => {
		const customerRef = doc(collection(db, "customers"))

		await setDoc(customerRef, formData)



		navigate("/exitpage")
	}

	const handleSubmit = async (e) => {
		//dont refresh
		e.preventDefault()

		//post to firebase
		createCustomer()

		//clear fromData
		setFormData({
			datetime: "",
			firstname: "",
			lastname: "",
			email: "",
			zipcode: "",
			phone: "",
			services: [],
		})
		//clear checkboxs
		setPermission(false)
	}

	const handleChange = (e) => {
		const value = e.target.value
		const name = e.target.name

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	console.log(formData)

	return (
		<div className="contact-form">
			<div className="container">
				<div className="row">
					<form validate autocomplete="on" onSubmit={handleSubmit} ref={form}>
						<div className="col">
							<input
								type="text"
								value={formData.firstname}
								placeholder="first name"
								name="firstname"
								onChange={handleChange}
								required={true}
							/>

							<input
								type="text"
								value={formData.lastname}
								placeholder="last name"
								name="lastname"
								onChange={handleChange}
								required={true}
							/>
						</div>
						<div className="col">
							<input
								type="email"
								value={formData.email}
								placeholder="example@email.com"
								name="email"
								onChange={handleChange}
								required={true}
							/>
						</div>
						<div className="col">
							<input
								type="number"
								value={formData.zipcode}
								placeholder="e.g. 66801"
								name="zipcode"
								onChange={handleChange}
								required={true}
							/>
						</div>
						<div className="col">
							<input
								type="tel"
								value={formData.phone}
								placeholder="e.g. 6203341100"
								name="phone"
								onChange={handleChange}
								required={true}
							/>
						</div>
						<fieldset>
							<legend>
								<h1>Please Select Services:</h1>
							</legend>

							{serviceData.map((data) => (
								<div className="col">
									<label>
										<Checkbox
											style={{}}
											color="success"
											className="service"
											animation="rotate"
											checked={permission}
											plain
											icon={<i className="mdi mdi-close" />}
											value={data}
											name="services"
											onChange={(e) => {
												if (!formData.services.includes(e.target.value)) {
													setFormData({
														...formData,
														services: formData.services.concat(e.target.value),
													})
												} else {
													setFormData({
														...formData,
														services: formData.services.filter(
															(item) => item != e.target.value
														),
													})
												}
											}}
										>
											{data}
										</Checkbox>
									</label>
								</div>
							))}
						</fieldset>
						<button
							type="submit"
							className="col submit buy-btn"
							onClick={handleSubmit}
							value="Send"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
