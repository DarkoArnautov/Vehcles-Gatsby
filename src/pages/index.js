import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import VehcleList from "../components/VehcleList"

class HomePage extends React.Component {
  render(){
    const pageData = this.props.data.allContentfulVehicle
    return(
      <Layout>
        <VehcleList data={pageData} />
      </Layout>
    )
  }
}
   

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    allContentfulVehicle {
      edges {
        node {
          title
          minPrice
          maxPrice
          modelYear
          lotNumber
          auction {
            name
            year
          }
          images {
            fluid {
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
          featureImage {
            fluid {
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`
