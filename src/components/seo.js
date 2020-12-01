import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { withPrefix } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image}) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet title={seo.title} titleTemplate={title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
        
        <link href={withPrefix('https://fonts.googleapis.com/css2?family=Poiret+One&family=Viga&display=swap')} rel="stylesheet" />
        <link href={withPrefix('https://fonts.googleapis.com/css?family=Roboto')} rel="stylesheet" type="text/css" />
        <link href={withPrefix('https://fonts.googleapis.com/css?family=Montserrat:900')} rel="stylesheet"></link>
        <link href={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css')} rel="stylesheet" type="text/css" />
        <link href={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css')} rel="stylesheet" type="text/css" />
    </Helmet>
  )
}
export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername: twitter
      }
    }
  }
`