import { GatsbyConfig } from 'gatsby';
import {
  metaFieldDescription,
  metaFieldSiteUrl,
  metaFieldTitle,
  siteMetadata,
} from './src/data/siteMetadata';

const gatsbyConfig: GatsbyConfig = {
  siteMetadata,

  flags: {
    DEV_SSR: false,
  },

  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        checkSupportedExtensions: false,
      },
    },

    // ✅ ONLY keep images, remove posts
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        plugins: [],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-images-medium-zoom',
            options: {
              background: '#fff',
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              isIconAfterHeader: true,
              className: 'gatsby-remark-autolink-header-anchor',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: false,
              aliases: {
                sh: 'shell',
                es6: 'javascript',
                js: 'javascript',
                env: 'bash',
                mdx: 'md',
                '.json': 'json',
              },
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: ['png', 'jpg', 'jpeg', 'tiff', 'tif', 'webp'],
              destinationDir: (f: { name: string; hash: string }): string =>
                `posts-assets/${f.hash}/${f.name}`,
            },
          },
        ],
      },
    },
  ],
};

export default gatsbyConfig;
