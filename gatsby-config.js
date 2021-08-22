module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Azar Mamiyev',
    // Main Site Title
    title: `Azar Mamiyev | Front-End Developer`,
    // Description that goes under your name in main bio
    description: `Front-End Developer & UI/UX Designer based in Baku, Azerbaijan`,
    // Optional: Twitter account handle
    author: `@AzarMamiyev`,
    // Optional: Github account URL
    github: `https://github.com/AzarTwentyFour`,
    // Optional: LinkedIn account URL
    linkedin: `#`,
    // Content of the About Me section
    about: `I'm a passionate 19-years-old Computer Engineering Stududent from Azerbaijan. My intention is to enhance as a successful full-stack web developer. I love building full-stack web applications and mobile apps. I have proved my superiority in frontend technologies. I love to share my resources and expertise with the dev community.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Coming Soon',
        description:
          'Coming Soon',
        link: '#',
      },
      {
        name: 'Coming Soon',
        description:
          'Coming Soon',
        link: '#',
      },
      {
        name: 'Coming Soon',
        description:
          'Coming Soon',
        link: '#',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Fourway Media - Azerbaijan',
        description: 'Front-End Developer, July 2021 - Present',
        link: '#',
      },
      {
        name: 'Fourway Media - Azerbaijan',
        description: 'Front-End Developer, July 2021 - Present',
        link: '#',
      },
      {
        name: 'Fourway Media - Azerbaijan',
        description: 'Front-End Developer, July 2021 - Present',
        link: '#',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS),
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
