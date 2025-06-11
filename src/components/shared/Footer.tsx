import React from 'react';
// import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
// import { FaRegHeart } from '@react-icons/all-files/fa/FaRegHeart';

// import HyperLink from './HyperLink';
// import { discussionsURL, rssPath, supportURL } from '../../constants/links';
// import { Link } from '../../types/Link';
import Row from './Row';
import SocialLinks from './SocialLinks';
import { profile } from '../../data/profile';

type FooterProps = {
  className?: string;
  // withFeedback?: boolean;
  // withSupport?: boolean;
};

const Footer = (props: FooterProps): React.ReactElement => {
  const { className = '' } = props;
  // withFeedback = false,
  // withSupport = true
  // } = props;

  // const issuesLink: Link = {
  //   url: discussionsURL,
  // };

  // const subscribeLink: Link = {
  //   url: '/subscribe',
  // };

  // const rssLink: Link = {
  //   url: rssPath,
  // };

  // const supportLink: Link = {
  //   url: supportURL,
  // };

  // const feedbackFooterLink = withFeedback ? (
  //   <HyperLink
  //     link={issuesLink}
  //     className="text-xs mr-5"
  //     startEnhancer={<FiGithub size={20} />}
  //   >
  //     Feedback
  //   </HyperLink>
  // ) : null;

  // const supportFooterLink = withSupport ? (
  //   <HyperLink
  //     link={supportLink}
  //     className="text-xs mr-5"
  //     startEnhancer={<FaRegHeart size={20} />}
  //   >
  //     Support
  //   </HyperLink>
  // ) : null;

  return (
    <footer className={`${className}`}>
      <Row responsive>
        {/* <Row style={{ flex: 1 }} className="mb-6 sm:mb-0">
          <HyperLink
            link={subscribeLink}
            className="text-xs mr-5"
            startEnhancer={(<AiOutlineMail size={20} />)}
          >
            Subscribe
          </HyperLink>

          {feedbackFooterLink}

          {supportFooterLink}

          <HyperLink
            link={rssLink}
            className="text-xs"
            startEnhancer={(<FiRss size={20} />)}
          >
            RSS
          </HyperLink>
        </Row> */}

        {/* This is to center the divs */}
        <div style={{ flex: 1 }} className="hidden sm:flex">
          &nbsp;
        </div>

        {/* Social links */}
        <div
          style={{ flex: 1 }}
          className="flex flex-row items-center justify-center"
        >
          <SocialLinks
            links={profile?.socialLinks}
            expandable={false}
            iconClassName="w-5 h-5"
            itemClassName="mr-2 ml-2"
          />
        </div>

        {/* This is to center the divs */}
        <div style={{ flex: 1 }} className="hidden sm:flex">
          &nbsp;
        </div>
      </Row>
      {/* Credits Section */}
      <div className="mt-4 text-center text-xs text-gray-500">
        <p>Inspired by Trekhleb. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
