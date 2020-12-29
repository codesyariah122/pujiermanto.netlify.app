const path = require('path');

module.exports = {
  siteMetadata: {
      title: "My Portfolio",
      url: "https://pujiermanto.netlify.app",
      img: "/src/images/portfolio/avatar1.jpg",
      image: "/src/images/brand/myVector.png",
      description: "Script Again Coffee Againt",
      twitter: "pujiermanto",
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
        }
      },

      working: {
        'satu': 'Full Stack Developer',
        'dua': 'FrontEnd Developer',
        'tiga': 'Web Design'
      },

    skill: {
        "satu": "Programming Language",
        "dua": "Markup Language",
        "tiga": "Framework Backend",
        "empat": "Framework Frontend",
        "lima": "Framework Javascript",
        "enam": "Design Tools",
        "tujuh": "It Support & Help Desk",
        "delapan": "Library Tools",
        "sembilan": "CMS & Static Site"
      },

      webdev:{

        satu:{
          "php":{
            "name": "PHP Programming",
            "value": "100%"
          },
          "node":{
            "name": "Node.JS",
            "value": "80%"
          },
          "python": {
            "name": "Python Programming",
            "value": "75%"
          },
          "ruby": {
            "name": "Ruby Programming",
            "value": "65%"
          }
        },
        
        dua: {
          "markup":{
            "name": "(HTML|HTML5, CSS|CSS3, Javascript)",
            "value": "100%"
          },
          "preprocessor": {
            "name": "SASS & SCSS",
            "value": "95%"
          }
        },
        
        tiga: {
          "laravel": {
            "name": "Laravel",
            "value": "95%"
          },
          "codeigniter": {
            "name": "Codeigniter",
            "value": "100%"
          },
          "express": {
            "name": "Express.js",
            "value": "75%"
          },
          "django": {
            "name": "Django",
            "value": "85%"
          },
          "rails": {
            "name": "Ruby on Rails",
            "value": "65%"
          }
        },

        empat: {
          "bootstrap": {
            "name": "Bootstrap",
            "value": "100%"
          },
          "materialize": {
            "name": "Materialize",
            "value": "100%"
          },
          "bulma": {
            "name": "Bulma",
            "value": "55%"
          },
          "foundation": {
            "name": "Foundation",
            "value": "50%"
          }
        },

        lima: {
          "react": {
            "name": "React.js",
            "value": "85%"
          },
          "vue": {
            "name": "Vue.js",
            "value": "95%"
          },
          "angular": {
            "name": "Angular",
            "value": "55%"
          }
        }

      },

      experienceCompany: {
        'myblog': 'Codesyariah Blog',
        'satu': 'PT. Syoobe Inti Perdana ( Jakarta - Indonesia )',
        'dua': 'PT. Gemilang Citrus Berjaya ( Sidoarjo - Indonesia )',
        'tiga': 'Hypster Network ( Bogor - Indonesia )'
      },
      experienceDivision: {
        'myblog': 'Founder and Content Writer',
        'satu': 'Frontend Webdeveloper | ',
        'dua': 'Fullstack Webdeveloper | ',
        'tiga': 'Network Technition | '
      },
      experienceYear: {
        'myblog': 'Forever',
        'satu': 'Aug 2020',
        'dua': 'Aug 2018 - Aug 2020',
        'tiga': 'Mar 2015 - Jul 2018'
      },
      experienceJobdesk : {
        'myblog': 'Saat ini saya aktif menulis dan mengelola konten di blog yang saya develop sendiri. Secara rutin dan berkala saya masih terus memperbarui konten kontent untuk blog baik itu sekedar mengisi sebuah tulisan dengan rubrik yang sederhana maupun ilmiah. Membangun tema yang lebih beragam dari mulai pembahasa tips and trick, ide bisnis, peluang entrepreneur, keilmuan dan pengalaman dalam perjalanan kehidupan yang kulalui, untuk menjadi sebuah dokumentasi yang merekam jejak-jejak informasi digital dizamanku. ',
        'satu': 'Disini saya bertugas mengelola content website, blog, membuat riset untuk konten yang akan di terbitkan, membuat konsep design untuk layout dalam skala client side. Mempersiapkan konten yang akan dirilis ke publik agar tetap terjaga originalitasnya sebelum dirilis ke publik.',
        'dua': 'Dalam perusahaan ini tugas saya membuat website bagi kebutuhan company profile, dan membuat backend untuk mengelola data perusahaan berbasis website, mengerjakan design produk untuk packaging dan juga membantu IT Support bagi keperluan pengelolaan sumber daya IT seperti jaringan internet, cctv dan server data dan printer dalam lingkup kantor.',
        'tiga': 'Di Persuhaan ini saya mengerjakan perawatan jaringan internet dalam skala RT/RW Net dan hotspot cafe, bagi client-client dan member yang terdaftar dalam administrasi jasa jaringan internet berbasis hotspot. Juga mendukung pekerjaan lainnya yang berhubungan dengan help desk dan IT Support'
      },
      educationSchool:{
        'satu': 'Akademi Telekomunikasi Bogor',
        'dua': 'Yayasan Qalbu Salim',
        'tiga': 'SMA Pasundan 4'
      },
      educationFokus: {
        'satu': 'Manajemen Informatika',
        'dua': 'Web Design , Web Development Courses',
        'tiga': 'Ilmu Pengetahuan Social'
      },
      educationDegre: {
        'satu': 'Double Degre',
        'dua': 'Junior Designer',
        'tiga': 'Senior High School'
      },
      educationYear: {
        'satu': '2012 - 2015',
        'dua': '2008 - 2010',
        'tiga': '2002 - 2005'
      },
      menu:{
        'home': '/',
        'about': '/about',
        'portfolio': '/portfolio',
        'resume': '/resume',
        'contact': '/contact'
      }
  },
 
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
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
    }
  ],
}
