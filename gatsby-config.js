const path = require("path")
const config = require("./src/data/conf")
const dataMenu = require("./src/data/menu")

const skill = require("./src/data/skill")
const webdev = require("./src/data/webdev")
const company = require("./src/data/WorkExperience/company")
const division = require("./src/data/WorkExperience/division")
const workYear = require("./src/data/WorkExperience/year")
const jobdesk = require("./src/data/WorkExperience/jobdesk")

const school = require("./src/data/Education/school")
const fokus = require("./src/data/Education/fokus")
const degre = require("./src/data/Education/degre")
const schoolYear = require("./src/data/Education/year")
const certs = require("./src/data/Education/certs")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    menu: {
      dataMenu,
    },

    title: config.title,
    url: config.url,
    img: config.img,
    image: config.image,
    description: config.description,
    author: {
      full: "Puji Ermanto",
      calls: "Uji",
      email: "pujiermanto@gmail.com",
      phone: "+62 882 2266 8778",
      twitter: "pujiermanto",
      github: "codesyariah122",
      dribbble: "pujiermanto",
      blog: "codesyariah122.github.io",
      city: "Bandung - West Java",
      country: "Indonesia",
      hoby: {
        satu: "Frontend Developer di Prodibee Indonesia, Content Writer di codesyariah122.github.io, ",
        dua: "Web Developer, dan ",
        tiga: "Penggiat Informasi Teknologi",
      },
      working: {
        satu: "Full Stack Developer",
        dua: "FrontEnd Developer",
        tiga: "Web Design",
      },
      about: {
        welcome: "Tulisanku",
        print:
          "Halaman ini merupakan arsip tulisan pribadiku, yang kurang lebih nya mohon dimaafkan karena faktor penulisan yang di pelajari secara otodidak, semoga masih bisa bermanfaat,",
      },
      workdocumentation: {
        link_project1: {
          name: "Evoush Web Application",
          satu: "https://evoush.com",
          dua: "https://app.evoush.com",
          tiga: "https://evoush.herokuapp.com/",
          empat: "https://evoush-landing-api.herokuapp.com/",
        },
        link_project2: {
          name: "Syoobe Blog And Backend Marketplace",
          satu: "https://blog.syoobe.co.id",
          dua: "https://syoobe.co.id",
        },
        link_project3: {
          name: "Webapplication And Company Profile Ourcitrus",
          satu: "https://ourcitrus.com",
          dua: "https://ourcitrus.id",
        },
      },
    },

    skill,

    webdev,

    experienceCompany: {
      company,
    },
    experienceDivision: {
      division,
    },
    experienceYear: {
      workYear,
    },
    experienceJobdesk: {
      jobdesk,
    },

    educationSchool: {
      school,
    },
    educationFokus: {
      fokus,
    },
    educationDegre: {
      degre,
    },
    educationYear: {
      schoolYear,
    },
    educationCerts: {
      certs,
    },
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true,
        formatting: {
          format: "dddd D MMMM YYYY", // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
        locale: "fr", // string, defaults to null, which date-and-time defaults as "en" - whether to localize the date or not, can use any available date-and-time localization
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },

          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  // definition: {
                  //   superscript_types: /(SuperType)/,
                  // },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: path.join(__dirname, `src`, `images`),
    //   }
    // },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `PujiErmanto::WebDev`,
        short_name: `PujiErmanto`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/logo_puji.png`,
      },
    },

    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.trackingID,
        head: true,
      },
    },

    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },

    "gatsby-plugin-offline",
  ],
}
