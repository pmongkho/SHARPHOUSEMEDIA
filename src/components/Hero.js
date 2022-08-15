import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/SharpHouseLight.png"

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="row">
					<div className="services">
						<Link to="/contactform"><div className="col">
						<h1>Sharp House Media</h1>
						<div>
						<img src={logo} alt="logo" /></div>
						<h2>Take Your Business To The Next Level</h2>
						<h1>Get A Free Business Analysis</h1>
						<div className="buy-btn">Learn More</div>
						</div></Link>
					</div>
				</div>
				<div className="row pic">
					<img
						src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
						alt="hero"
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero
