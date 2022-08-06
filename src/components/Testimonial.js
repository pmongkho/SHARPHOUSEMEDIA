import { Rating, Stack } from "@mui/material"
import React from 'react'

const Testimonial = () => {
  return (
		<div className="testimonial"><h1>See What Our Customers Think</h1>
			<div className="container">
				<div className="row">
					
					<div className="profile-pic">
						<img
							src="https://images.unsplash.com/photo-1487573884658-a5d3c667584e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBzcXVhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
							alt="profile-pic"
						/>
					</div>

					<div className="testiment">
						
						<p>
							I must say that The Real has improved over the last few years. I
							am so glad those goofy games you all played on the show early on
							has stopped. I love that the ladies share and are candid and open
							about some of their life experiences. Girl chat is a nice segment
							to the show also. The energy is vibrant and upbeat. The compassion
							and generosity that's shown towards others is amazing especially
							during this global pandemic when so many people are faced with
							financial hardships. Jeannie Mai is the"
						</p>
						
					</div>
					<div className="testiment-name">Jenine Walters</div>
					<div className="testiment-title">Manager</div>
				</div>
				{/* <div className="row">
					<div className="profile-pic">
						<img
							src="https://images.unsplash.com/photo-1542995719-06bfa52c0e11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjBzcXVhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
							alt="profile-pic"
						/>
					</div>

					<div className="testiment">
						<p>
							I really loved watching the real for the 8 seasons. Sometime this
							is the only way I am updated on what is going on in the world
							today. Love the diversity among the ladies. Loni and Garcelle are
							hilarious and play off each other so well. Love Adrian beauty and
							talent and her bringing her Latino beauty{" "}
						</p>
					</div>
					<div className="testiment-name">John Michaels</div>
					<div className="testiment-title">Engineer</div>
				</div> */}
				<div className="row">
					<div className="profile-pic">
						<img
							src="https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXQlMjBzcXVhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
							alt="profile-pic"
						/>
					</div>

					<div className="testiment">
						<p>
							To be frankly honest , I like the show and I also like the cast .
							Most of all I love to hear what Jeannie Mia has to say , when it's
							a very serious topic Jeannie gets in there , her knowledge, her
							wisdom as to how she looks at life during any adversary is always
							food for thought , very{" "}
						</p>
					</div>
					<div className="testiment-name">Mikaela Richards</div>
					<div className="testiment-title">Support</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonial