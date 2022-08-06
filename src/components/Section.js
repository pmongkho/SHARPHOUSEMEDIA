import React from 'react'
import { Link } from "react-router-dom"

const Section = () => {
  return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div>
						<h1>Unlock Your Business Potential With Us</h1>
					</div>
					
          <div className="buy-btn"><Link to="contactform">Start Now</Link></div>
				</div>

				<div className="row">
					<img
						src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
						alt=""
					/>
				</div>
			</div>
		</div>
	)
}

export default Section