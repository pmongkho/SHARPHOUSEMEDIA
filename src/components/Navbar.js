import React, { useState } from 'react'
import logo from "../images/SharpHouseLight.png"
import { Link } from "react-router-dom"
import SmartphoneIcon from "@mui/icons-material/Smartphone"


const Navbar = () => {

			const serviceData = [
				"Business Development",
				"Brand Creation",
				"Logo Design",
				"Digital Marketing/Ads",
				"Video/Photography",
				"Social Media/Content",
				"Google SEO",
			]
  return (
		<div className="navbar">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				<div className="nav-logo">Sharp House Media</div>
			</div>
			<div class="dropdown">
				<div class="dropbtn">Our Services</div>
				
				<div class="dropdown-content">
					{serviceData.map((item) => (
						<a href="#"><Link to="/contactform">{item}</Link></a>
					))}
		
				</div>
			</div>
			<div className="container">
				<div className="buy">
					Text Us!
					<div className="text-us">
						<a href="sms:719-201-4577">
							<SmartphoneIcon sx={{ fontSize: 50, color: "#0a4d83" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar