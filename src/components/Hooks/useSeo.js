import { graphql, useStaticQuery } from "gatsby"
const useSeo = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          facebookPageUrl
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)
  return data.datoCmsSite.globalSeo
}
export default useSeo
