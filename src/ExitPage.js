import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import logo from './images/SharpHouseLight.png'


const ExitPage = () => {
      const navigate = useNavigate()

			useEffect(() => {
				setTimeout(() => {
					navigate("/")
				}, 10000)
			}, [])

  return (
		<div className="exit-page">
			<div className="container">
				<div className="row">
					<div className="col">
						<div>
							<div>
								<h1>Thank You For Your Support</h1>
							</div>
							<img
								src="https://media0.giphy.com/media/ZOilRom6v644PCsqVR/200w.webp?cid=ecf05e47nmth6tu77ga07azlu6gv7ddx7mf0f0jf7l7kzq64&rid=200w.webp&ct=g"
								alt=""
							/>
							<div className="exit-logo">
								<img src={logo} alt="" />
								<h1>Sharp House Media</h1>
							</div>
						</div>
				
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExitPage