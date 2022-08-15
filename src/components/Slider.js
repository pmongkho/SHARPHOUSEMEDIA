import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"


// import required modules
import { Pagination, Navigation } from "swiper"
import Hero from "./Hero"
import Section from "./Section"
import Testimonial from "./Testimonial"

import Pricing from "./Pricing"

const Slider = () => {
  return (
		<div className="slider">
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Hero />
				</SwiperSlide>
				<SwiperSlide>
					<Pricing />
				</SwiperSlide>
				<SwiperSlide>
					<Section />
				</SwiperSlide>
				{/* <SwiperSlide>
					<Testimonial />
				</SwiperSlide> */}


			</Swiper>
		</div>
	)
}

export default Slider