import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./Hero.scss"
const Hero = () => {
  const { HeroImage1, HeroImage2, HeroImage3 } = useStaticQuery(graphql`
    query {
      HeroImage1: file(relativePath: { eq: "HeroImg/Hero1.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      HeroImage2: file(relativePath: { eq: "HeroImg/Hero2.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      HeroImage3: file(relativePath: { eq: "HeroImg/Hero5.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <div className="wrapperHero">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3500}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <BackgroundImage
          Tag="section"
          fluid={HeroImage1.sharp.fluid}
          fadeIn="soft"
          className="wrapperImg"
        >
          <div className="wrapperTitle">
            <h3 className="subtitle">Luce tu piel fresca y radiente.</h3>
          </div>
        </BackgroundImage>
        <BackgroundImage
          fluid={HeroImage2.sharp.fluid}
          fadeIn="soft"
          className="wrapperImg"
        >
          <div className="wrapperTitle">
            <h3 className="subtitle">
              La vida no es perfecta pero tu piel puede serlo.
            </h3>
          </div>
        </BackgroundImage>
        <BackgroundImage
          fluid={HeroImage3.sharp.fluid}
          fadeIn="soft"
          className="wrapperImg"
        >
          <div className="wrapperTitle">
            <h3 className="subtitle">Una piel sin vello va con todo.</h3>
          </div>
        </BackgroundImage>
      </Carousel>
    </div>
  )
}

export default Hero
