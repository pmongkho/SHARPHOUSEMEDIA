import React from "react"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"
import AddBusinessIcon from "@mui/icons-material/AddBusiness"
import SsidChartIcon from "@mui/icons-material/SsidChart"
import { Link } from "react-router-dom"
const Pricing = () => {
	return (
		<div className="pricing">
			<h1 className="pricing-header">Pricing</h1>
			<div className="container">
				<div className="row">
					<div className="price-name">
						<div></div>
						<h1>Logos</h1>
					</div>
					<div className="price-logo">
						<Link to="contactform">
							<AddPhotoAlternateIcon
								className="biglogo"
								sx={{ fontSize: 175, color: "#fff" }}
							/>
							<AddPhotoAlternateIcon
								className="smalllogo"
								sx={{ fontSize: 100, color: "#fff" }}
							/>
						</Link>
					</div>
					<div className="price">50$</div>
				</div>

				<div className="row">
					<div className="price-name">
						<h1>Marketing</h1>
					</div>
					<div className="price-logo">
						<Link to="contactform">
							{" "}
							<AddBusinessIcon
								className="biglogo"
								sx={{ fontSize: 175, color: "#fff" }}
							/>
							<AddBusinessIcon
								className="smalllogo"
								sx={{ fontSize: 100, color: "#fff" }}
							/>
						</Link>
					</div>
					<div className="price">75$</div>
				</div>

				<div className="row">
					<div className="price-name">
						<h1> Optimization</h1>
					</div>
					<div className="price-logo">
						<Link to="contactform">
							<SsidChartIcon
								className="biglogo"
								sx={{ fontSize: 175, color: "#fff" }}
							/>
							<SsidChartIcon
								className="smalllogo"
								sx={{ fontSize: 100, color: "#fff" }}
							/>
						</Link>
					</div>
					<div className="price">100$</div>
				</div>
			</div>
		</div>
	)
}

export default Pricing
