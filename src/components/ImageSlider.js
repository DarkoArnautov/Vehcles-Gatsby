import React from 'react'
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import ArrowIcon from "./Icons/ArrowIcon"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrap = styled.div`
	position: relative;
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
const RightArrow = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 55%;
	width: 54px;
	height: 54px;
	padding: 20px;
	background: rgba(0, 0, 0, .5);
	z-index: 50;
	& :hover {
		cursor: pointer;
	}
	& svg {
		transform: rotate(180deg);
		margin-top: -5px;
		margin-left: -5px;
	}
`
function SampleNextArrow(props) {
  const { className, style} = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style} = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
    />
  );
}
class ImageSlider extends React.Component {
	constructor(props) {
		super(props)
		this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
	}
	next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
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
					
          <RightArrow onClick={this.next}>
            <ArrowIcon fill="white" />
          </RightArrow>
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