const path = require('path');
const config = require('./src/data/conf');
const dataMenu = require('./src/data/menu');

const skill = require('./src/data/skill');
const webdev = require('./src/data/webdev');
const company = require('./src/data/WorkExperience/company');
const division = require('./src/data/WorkExperience/division');
const workYear = require('./src/data/WorkExperience/year');
const jobdesk = require('./src/data/WorkExperience/jobdesk');

const school = require('./src/data/Education/school');
const fokus = require('./src/data/Education/fokus');
const degre = require('./src/data/Education/degre');
const schoolYear = require('./src/data/Education/year');


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {

    siteMetadata: {
      menu:{
        dataMenu
      },

      title: config.title,
      url: config.url,
      img: config.img,
      image: config.image,
      description: config.description,
      author: {
          "full": "Puji Ermanto",
          "calls": "Uji",
          "email": "pujiermanto@gmail.com",
          "phone": "+62 882 2266 8778",
          "twitter": "pujiermanto",
          "github": "codesyariah122",
          "dribbble": "pujiermanto",
          "blog": "codesyariah122.github.io",
          "city": "Bandung - West Java",
          "country": "Indonesia",
          "hoby" : {
            "satu": "Content Writer, ",
            "dua": "Web Developer dan ",
            "tiga": "Penggiat Informasi Teknologi"
          },
            working: {
              'satu': 'Full Stack Developer',
              'dua': 'FrontEnd Developer',
              'tiga': 'Web Design'
            },
        },

      skill,

      webdev,

      experienceCompany: {
        company
      },
      experienceDivision: {
        division       
      },
      experienceYear: {
        workYear
      },
      experienceJobdesk : {
        jobdesk
      },

      educationSchool:{
        school
      },
      educationFokus: {
        fokus
      },
      educationDegre: {
        degre        
      },
      educationYear: {
        schoolYear
      },
  },
 
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `images`),
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/logo_puji.png`,
      }
    },

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.trackingID,
        head: true,
      }
    },

    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },

    'gatsby-plugin-offline',
  ],
}
