import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from "gatsby"
import ArrowIcon from "./Icons/ArrowIcon"
import ItemHover from "./ItemHover"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrap = styled.div`
	& a {
		text-decoration: none !important;
	}
	margin-bottom: 100px;
`

const VehclesGrid = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-tempalte-rows: auto;
	grid-column-gap: 27px;
	grid-row-gap: 50px;
	@media(max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media(max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}
`
const Card = styled.div`
	position: relative;
	max-width: 30vw;
	width: 100%;
	@media(max-width: 960px) {
		max-width: calc(50vw - 50px);
	}
	@media(max-width: 600px) {
		max-width: calc(100vw - 40px);
	}
`
const CardText = styled.div`
	margin-top: 26px;
	& label {
		text-transform: uppercase;
		padding: 2px 8px;
	  border-radius: 2px;
	  background-color: #1c5bae;
	  font-size: 16px;
	  font-weight: bold;
	  font-stretch: normal;
	  font-style: normal;
	  line-height: 1.5;
	  letter-spacing: normal;
	  text-align: center;
	  color: #ffffff;
	}
	& span {
		padding: 0px 5px;
		text-transform: uppercase;
	  font-size: 24px;
	  font-weight: 600;
	  font-stretch: normal;
	  font-style: normal;
	  line-height: 1.33;
	  letter-spacing: normal;
	  color: #696969;
	}
`
const CardLabel = styled.div`
	display: flex;
	align-items: center;
	@media(max-width: 1024px) {
		display: block;
		div {
			margin-top: 5px;
		}
	}
`
const CardTitle = styled.div`
	margin: 16px 0 8px;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #242424;
`
const CardPrice = styled.div`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #454545;
`
const CardImage = styled.div`
	position: relative;
	height: 20vw;
	max-height: 283px;
  border-radius: 3px;
  @media(max-width: 960px) {
  	width: 100%;
  	height: 30vw;
		max-height: 283px;
  }
  @media(max-width: 600px) {
  	height: 283px;
  }
`
const SliderWrap = styled.div`
	position: relative;
	background: linear-gradient(to left, rgba(40, 40, 40, 0) 100%, #282828 0%);
	width: 100%;
	.gatsby-image-wrapper {
  	width: 100%;
  	height: 20vw;
		max-height: 283px;
		border-radius: 3px;
  }

  .slick-dots {
		bottom: 30px;
		z-index: 50;
	}
	.slick-dots li button:before{
		font-size: 14px;
		color: white;
	}
	.slick-active button:before {
		font-size: 20px !important;
	}
	@media(max-width: 960px) {
  	.gatsby-image-wrapper {
	  	width: 100%;
	  	height: 30vw;
			max-height: 283px;
	  }
  }
  @media(max-width: 600px) {
  	.gatsby-image-wrapper {
	  	width: 100%;
	  	height: 283px;
	  }
  }
`
const RightArrow = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 0px;
	width: 54px;
	height: 54px;
	padding: 12px 5px;
	border-radius: 60px;
	display: ${props=>props.display};
	z-index: 10;
	& :hover {
		cursor: pointer;
		
	}
	& svg {
		transform: rotate(180deg);
	}
`
const LeftArrow = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0px;
	width: 54px;
	height: 54px;
	padding: 12px 5px;
	border-radius: 60px;
	display: ${props=>props.display};
	z-index: 10;
	& :hover {
		cursor: pointer;
	}
`
const LotLabel = styled.div`
	position: absolute;
	z-index: 50;
	top: 25px;
	left: 28px;
	font-size: 24px;
	line-height: 1.33;
  font-weight: 600;
  padding: 0px 10px;
  color: white;
  background: rgba(0, 0, 0, 0.4);
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
class VehcleList extends React.Component {
	constructor(props) {
		super(props)
		this.renderIamgeSlider = this.renderIamgeSlider.bind(this)
		this.renderLotLabel = this.renderLotLabel.bind(this)
		this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
	}
	next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
	renderIamgeSlider(data) {
		const settings = {
			infinite: true,
			autoPlay: true,
			slidesToShow: 1,
			speed: 500,
			dots: true,
	  };
	  return(
	  	<ItemHover>
	  		{
	  			hoverItem => (
	  				<SliderWrap>
				  		<div style={{ textAlign: "center" }}>
								<LeftArrow display={hoverItem?"block":"none"} onClick={this.previous}>
			             <ArrowIcon fill="white" />
			          </LeftArrow>
			          <RightArrow display={hoverItem?"block":"none"} onClick={this.next}>
			            <ArrowIcon fill="white" />
			          </RightArrow>
			        </div>
					  	<Slider {...settings} ref={c => (this.slider = c)}>
					  		{
					  			data.map((item, i)=>{
					  				if (i< 3) {
					  					return(
						  					<Img fluid={item.fluid} />
						  				)
					  				}
					  			})
					  		}
					  	</Slider>
				  	</SliderWrap>
	  			)
	  		}
		  </ItemHover>
	  )
	}
	renderLotLabel(num){
		if(num < 10) {
			return(
				<span>00{num}</span>
			)
		} else if(num >9 && num<100) {
			return(
				<span>0{num}</span>
			)
		} else {
			return(
				<span>{num}</span>
			)
		}
	}
	render(){
		const { data } = this.props
		let length = data.edges.length
		
		return(
			<Wrap>
				<h3>{length} Vehicle Results</h3>
				<VehclesGrid>
					{
						data.edges.map((item, i)=>{
	      			const temp = item.node.title.replace(/[^\w\s]+/gi, ' ').replace(/  +/g, ' ');
	      			const titleUrl = temp.split(" ").join("-").toLowerCase()
							return(
								<Card key={i}>
									<CardImage>
										<LotLabel>
											LOT {this.renderLotLabel(item.node.lotNumber)}
										</LotLabel>
										{this.renderIamgeSlider(item.node.images)}
									</CardImage>
									<Link to={`/vehcles/${item.node.modelYear}-${titleUrl}-${item.node.lotNumber}`}>
										<CardText>
											<CardLabel>
												<label>Upcoming</label><div><span>{item.node.auction.year}</span><span>|</span><span>{item.node.auction.name}</span></div>
											</CardLabel>
											<CardTitle>
												{item.node.modelYear} {item.node.title}
											</CardTitle>
											<CardPrice>
												${item.node.minPrice} - ${item.node.maxPrice}<span>|</span>Without Reserve
											</CardPrice>
										</CardText>
									</Link>
								</Card>
							)
						})
					}

				</VehclesGrid>
			</Wrap>
		)
	}
}


export default VehcleList