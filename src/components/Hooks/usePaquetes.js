import { graphql, useStaticQuery } from "gatsby"
const usePaquetes = () => {
  const Paquetes = useStaticQuery(graphql`
    query {
      allDatoCmsPaquete {
        nodes {
          id
          slug
          titulo
          descripcion
          precio
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return Paquetes.allDatoCmsPaquete.nodes.map(paquete => ({
    id: paquete.id,
    slug: paquete.slug,
    titulo: paquete.titulo,
    precio: paquete.precio,
    imagen: paquete.imagen,
  }))
}

export default usePaquetes
