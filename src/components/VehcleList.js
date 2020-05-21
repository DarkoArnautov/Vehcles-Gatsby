import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from "gatsby"

const Wrap = styled.div`
	& a {
		text-decoration: none !important;
	}
	margin-bottom: 100px;
`

const VehclesGrid = styled.div`
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
	box-shadow: rgba(0, 0, 0, .2);
	.gatsby-image-wrapper {
		width: 100%;
		height: 20vw;
		max-height: 283px;
	  border-radius: 3px
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
class VehcleList extends React.Component {
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
								<Link to={`/vehcles/${item.node.modelYear}-${titleUrl}-${item.node.lotNumber}`}>
									<Card key={i}>
										<Img fluid={item.node.featureImage.fluid} />
										<CardText>
											<div>
												<label>Upcoming</label><span>{item.node.auction.year}</span><span>|</span><span>{item.node.auction.name}</span>
											</div>
											<CardTitle>
												{item.node.modelYear} {item.node.title}
											</CardTitle>
											<CardPrice>
												${item.node.minPrice} - ${item.node.maxPrice}<span>|</span>Without Reserve
											</CardPrice>
										</CardText>
									</Card>
								</Link>
							)
						})
					}
				</VehclesGrid>
			</Wrap>
		)
	}
}


export default VehcleList