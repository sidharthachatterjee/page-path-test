// const path = require(`path`)
// const { graphql } = require(`gatsby`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage, deletePage } = actions
//   return graphql(
//     `
//       query {
//         allSitePage {
//           nodes {
//             id
//             path
//             componentPath
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog post pages.
//     result.data.allSitePage.nodes.forEach(node => {
//       deletePage(node)
//       createPage({
//         path: node.path,
//         component: node.component,
//         context: {
//           // Add optional context data to be inserted
//           // as props into the page component..
//           //
//           // The context data can also be used as
//           // arguments to the page GraphQL query.
//           //
//           // The page "path" is always available as a GraphQL
//           // argument.
//         },
//       })
//     })
//   })
// }
