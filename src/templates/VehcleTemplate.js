import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link, graphql } from "gatsby"
import "../components/layout.css"

import Layout from "../components/layout"
import ArrowIcon from "../components/Icons/ArrowIcon"
import ImageSlider from '../components/ImageSlider'

const Hero = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	max-height: 814px;
`
const HeroWrap = styled.div`
	position: relative;
	z-index: 100;
	width: 100%;
	height: 100%;
	background: linear-gradient(to top, rgba(36, 36, 36, 0), rgba(36, 36, 36, 0.1));
`
const HeroBackground = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	.gatsby-image-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
	}
`
const BackButton = styled.div`
	padding: 20px 0;
	font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #ffffff;
  text-transform: uppercase;
  & a {
  	text-decoration: none;
  	color: white;
  }
  & svg {
  	vertical-align: middle;
  	margin-top: -5px;
  	margin-right: 5px;
  	transition: transform ease 0.3s;
  }
  &:hover {
  	cursor: pointer;
  	& svg {
  		transform: translateX(-5px);
  	}
  }
`
const ContentWrap = styled.div`
	max-width: 1280px;
	margin: auto;
`
const LotNumb = styled.div`
	margin: 64px 0 30px;
	font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #242424;
  & svg {
  	width: 18px;
  	height: 18px;
  	vertical-align: middle;
  	margin-top: -5px;
  	&:nth-child(2) {
	  	transform: rotate(180deg);
	  }
  }
`
const TwoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 22px;
	@media(max-width: 960px) {
		grid-template-columns: repeat(1, 1fr);
		grid-row-gap: 50px;
	}
`
const Auction = styled.h3`
	margin: 15px 0 21px;
`
const ShortDescription = styled.div`
	font-size: 24px;
	line-height: 1.33;
	color: #242424;
`
const DividerLine = styled.div`
	width: ${props=>props.width};
	border-bottom: 2px solid #696969;
	margin: 32px 0 21px;
`
const SoldPrice = styled.div`
	font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: #242424;
  margin-bottom: 32px;
`
const Label = styled.div`
	font-size: 16px;
	color: #242424;
	margin-top: ${props=>props.mt};
`
const Estimate = styled.div`
	font-size: 24px;
	font-weight: bold;
	& span {
		font-weight: 400;
	}
`
const Button = styled.button`
	border-radius: 2px;
  background-color: #1c5bae;
  border: 0px;
  padding: 16px 16px 12px;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  line-height: 1.5;
  font-weight: bold;
  margin-top: 16px;
`
class VehcleTemplate extends React.Component {
	render() {
		const data = this.props.data.contentfulVehicle
		return(
			<div>
				<Hero>
					<HeroWrap>
						<div className="container">
							<BackButton>
								<Link to="/">
									<ArrowIcon /> Back
								</Link>
							</BackButton>
						</div>
					</HeroWrap>
					<HeroBackground>
						<Img fluid={data.featureImage.fluid} />
					</HeroBackground>
				</Hero>
				<div className="container">
					<ContentWrap>
						<LotNumb>
							<ArrowIcon fill="#1c5bae" /> Lot {data.lotNumber} <ArrowIcon fill="#1c5bae" />
						</LotNumb>
						<TwoGrid>
							<div>
								<h1>{data.modelYear} {data.title}</h1>
								<Auction className="uppercase">{data.auction.year} | {data.auction.name} </Auction>
								<ShortDescription>Just Two Owners in the Past Three Decades.<br/>								Coachwork by Scaglietti</ShortDescription>
								<DividerLine width="74px" />
								<SoldPrice>SOLD $9,905,000</SoldPrice>
								<Label>Estimate</Label>
								<Estimate>
									${data.minPrice} - ${data.maxPrice} | <span>Without Reserve</span>
								</Estimate>
								<Button>
									Make an Offer
								</Button>
								<Label mt="22px">Chassis</Label>
								<h3>1055 GT</h3>
								<Label mt="20px">Engine</Label>
								<h3>1055 GT</h3>
							</div>
							<div>
								<div dangerouslySetInnerHTML={{__html: data.description.childContentfulRichText.html}} />
							</div>
						</TwoGrid>
					</ContentWrap>
				</div>
				<ImageSlider data={data.images} />
			</div>
		)
	}
}

export default VehcleTemplate

export const pageQuery = graphql`
  query vehcleQuery($id: String!) {
    contentfulVehicle(id: { eq: $id }) {
      title
      minPrice
      maxPrice
      modelYear
      auction {
        name
        year
      }
      description {
        childContentfulRichText {
          html
        }
      }
      featureImage {
        fluid{
          sizes
          src
          aspectRatio
          srcSet
          srcSetWebp
          srcWebp
        }
      }
      images {
        fluid {
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
          base64
          aspectRatio
        }
      }
      lotNumber
    }
  }
`
