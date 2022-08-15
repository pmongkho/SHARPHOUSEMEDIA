import { Checkbox, useCheckboxState } from "pretty-checkbox-react"
import React, { useState } from "react"
import  { useNavigate  } from 'react-router-dom'
import axios from 'axios'



const ContactForm = () => {
	const navigate = useNavigate()
	const [permission, setPermission] = useState(null)

	const [formData, setFormData] = useState({
		datetime: new Date().toISOString(),
		fName: "",
		lName: "",
		email: "",
		zipCode: "",
		phoneNumber: "",
		services: [],
	})

	const serviceData = [
		"Business Development",
		"Brand Creation",
		"Logo Design",
		"Digital Marketing/Ads",
		"Video/Photography",
		"Social Media/Content",
		"Google SEO",
	]

	

	const handleSubmit = async (e) => {


		//dont refresh
		e.preventDefault()

		const response = await axios.post("http://localhost:8000/customers", {
			formData,
		})
		const success = response.status === 200
		if(success) {
			navigate("/exitpage", { replace: true })
		}

	    fetch("http://localhost:8000/api/messages", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					to: `+1${formData.phoneNumber}`,
					body: `Hello ${formData.fName}, Thank you for signing up for the Sharp House Media free business analysis!`,
				}),
			})

		setFormData({
			datetime: "",
			fName: "",
			lName: "",
			email: "",
			zipCode: "",
			PhoneNumber: "",
			services: [],
		})
		setPermission(false)		


	}

	const handleInput = (e) => {}

	console.log(formData)

	return (
		<div className="contact-form">
			<div className="container">
				<div className="row">
					<form validate autocomplete="on">
						<div className="col">
							<input
								type="text"
								value={formData.fName}
								placeholder="first name"
								onChange={(e) =>
									setFormData({ ...formData, fName: e.target.value })
								}
								required
							/>

	
							<input
								type="text"
								value={formData.lName}
								placeholder="last name"
								onChange={(e) =>
									setFormData({ ...formData, lName: e.target.value })
								}
								required
							/>
						</div>
						<div className="col">
							<input
								type="email"
								value={formData.email}
								placeholder="email"
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								required
							/>
				
						</div>
						<div className="col">
							<input
								type="number"
								value={formData.zipCode}
								placeholder="zip code"
								onChange={(e) =>
									setFormData({ ...formData, zipCode: e.target.value })
								}
								required
							/>
						</div>
						<div className="col">
							<input
								type="tel"
								value={formData.phoneNumber}
								placeholder="phone number"
								onChange={(e) =>
									setFormData({
										...formData,
										phoneNumber: e.target.value,
									})
								}
								required
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
						<div className="col submit buy-btn" onClick={handleSubmit}>
							Submit
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
