const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const vehcleTemplate = path.resolve('./src/templates/VehcleTemplate.js')
 

  return graphql(`
    {
      vehcles: allContentfulVehicle {
        edges {
          node {
            title
            modelYear
            lotNumber
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }
    
    result.data.vehcles.edges.map(edge => {
      const { title, modelYear, lotNumber, id } = edge.node
      const temp = title.replace(/[^\w\s]+/gi, ' ').replace(/  +/g, ' ');
      const titleUrl = temp.split(" ").join("-").toLowerCase()
      createPage({
        path: `/vehcles/${modelYear}-${titleUrl}-${lotNumber}`,
        component: vehcleTemplate,
        context: {
          id,
        }
      })
    })
    
  })
}



