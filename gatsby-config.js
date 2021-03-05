module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Eduardo Cappellotto',
    // Main Site Title
    title: `Eduardo Cappellotto | Desenvolvedor Front-End`,
    // Description that goes under your name in main bio
    description: `Eduardo Cappellotto | Desenvolvedor Front-End`,
    // Optional: Twitter account handle
    author: `@duducerioni`,
    // Optional: Github account URL
    github: `https://github.com/eduardocappellotto`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/eduardo-cappellotto-991529170/`,
    // Content of the About Me section
    about: `Brasil, 23 anos, desenvolvedor focado em front-end utilizando Javascript ES6, Typescript, Vue.js, Quasar`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Pokédex',
        description:
          'Todo desenvolvedor front-end em sã consciência já fez uma pokédex ( e eu não podia ser diferente. ). A mesma foi realizada utilizando React.js e Bootstrap 4, consumindo dados da famosa PokéApi.',
        link: 'https://github.com/eduardocappellotto/Pokedex',
      },
      {
        name: '1997',
        description:
          'Uma API em Node.js onde busquei exercitar diversos conceitos de boas práticas para uma API Rest',
        link: 'https://github.com/eduardocappellotto/1997',
      },
      {
        name: 'Segredos',
        description:
          'Um projeto web onde busquei implantar diversos métodos de login como Google OAuth 2.0, bem como melhorar a segurança de dados sensíveis, como senhas e seeds.',
        link: 'https://github.com/eduardocappellotto/Segredos',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Skylar - Pecege | Piracicaba - SP - Brasil',
        description: 'Desenvolvedor Front-End - Estágio - Mar/2020 - Out/2020',
        link: 'https://skylar.ai/',
      },
      {
        name: 'Solarview | Remoto',
        description: 'Desenvolvedor Front-End Jr, Out/2020 - Presente',
        link: 'https://solarview.com.br/solarview-business/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'HTM(L), CSS & SASS, JavaScript (ES6+), Typescript, Vue.js, React.js, Node.js',
      },
      {
        name: 'Databases & Query languages',
        description: 'MongoDB, MySQL 8.0, Firestore, GraphQL',
      },
      {
        name: 'Testing Tools',
        description: 'Cypress, Jest',
      },
      {
        name: 'Other',
        description:
          'Docker, Google Firebase, Sendgrid, Zendesk, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
