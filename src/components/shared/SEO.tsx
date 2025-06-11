import React from 'react';
import { useLocation } from '@gatsbyjs/reach-router';
import { Helmet } from 'react-helmet';

import {
  siteURL,
  windowNamePrefix,
  windowNameSeparator, 
  siteImage,
} from '../../constants/siteMeta';

type TitleMode = 'prefix' | 'suffix';

export const titleModePrefix: TitleMode = 'prefix';
export const titleModeSuffix: TitleMode = 'suffix';

// @see: https://ogp.me/
type ogType = 'article' | 'website' | 'profile';

export const ogTypeArticle: ogType = 'article';
export const ogTypeWebsite: ogType = 'website';
export const ogTypeProfile: ogType = 'profile';

type SEOProps = {
  title: string,
  description: string,
  image?: string,
  // No trailing slash allowed!
  // @see: https://www.gatsbyjs.com/docs/add-seo-component/
  baseURL?: string,
  titleMode?: TitleMode,
  type?: ogType,
};

// @see: https://www.gatsbyjs.com/docs/add-seo-component/
const SEO = (props: SEOProps): React.ReactElement => {
  const {
    title,
    description,
    baseURL = siteURL,
    titleMode = titleModePrefix,
    image = siteImage,
    type = ogTypeWebsite,
  } = props;

  const { pathname } = useLocation();

  const extendedTitle = titleMode === titleModePrefix
    ? `${windowNamePrefix} ${windowNameSeparator} ${title}`
    : `${title} ${windowNameSeparator} ${windowNamePrefix}`;

  const bannerURL = `${baseURL}${image}`;

  const pageURL = `${baseURL}${pathname}`;

  // @see: https://ogp.me/
  return (
    <Helmet title={extendedTitle}>
      <meta name="description" content={description} />
      <meta name="image" content={bannerURL} />

      <meta property="og:title" content={extendedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:image" content={bannerURL} />
      <meta property="og:type" content={type} />
    </Helmet>
  );
};

export default SEO;
