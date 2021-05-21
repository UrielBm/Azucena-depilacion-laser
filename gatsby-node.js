exports.createPages = async ({ actions, graphql, reporter }) => {
  const response = await graphql(`
    query {
      allDatoCmsPaquete {
        nodes {
          slug
        }
      }
    }
  `)
  const responseArticles = await graphql(`
    query {
      allDatoCmsArticulo {
        nodes {
          slug
        }
      }
    }
  `)

  if (response.erros || responseArticles.errors) {
    reporter.panic("No hubo resultados")
  }
  // Si hay resultados
  const paquetes = response.data.allDatoCmsPaquete.nodes
  const articulos = responseArticles.data.allDatoCmsArticulo.nodes
  paquetes.forEach(paquete => {
    actions.createPage({
      path: paquete.slug,
      component: require.resolve("./src/components/Paquetes/Paquete.jsx"),
      context: {
        slug: paquete.slug,
      },
    })
  })
  articulos.forEach(articulo => {
    actions.createPage({
      path: `blog/${articulo.slug}`,
      component: require.resolve("./src/components/Blog/Blog.jsx"),
      context: {
        slug: articulo.slug,
      },
    })
  })
}
