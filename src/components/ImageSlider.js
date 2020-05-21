import React from 'react'
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrap = styled.div`
	margin-top: 80px;
	width: 150%;
	.gatsby-image-wrapper {
		width: 100%;
		max-height: 600px !important;
		height: 50vw;
	}
	.slick-initialized .slick-slide {
		padding-right: 20px;
	}
	.slick-dots {
		bottom: 30px;
		z-index: 50;
		width: 300px;
	}
	.slick-dots li button:before{
		font-size: 20px;
		color: white;
	}
`

class ImageSlider extends React.Component {
	render(){
		const { data } = this.props
		console.log(data)
		const settings = {
			infinite: true,
			autoPlay: true,
			slidesToShow: 2,
			speed: 500,
			dots: true,
	  };
		return(
			<div>
				<SliderWrap>
					<Slider {...settings} ref={c => (this.slider = c)}>
						{
							data.map((item, i) => {
								return(
									<Img fluid={item.fluid} key={i}/>
								)
							})
						}
					</Slider>
				</SliderWrap>
			</div>
		)
	}
}

export default ImageSlider