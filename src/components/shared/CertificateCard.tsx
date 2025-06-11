import React from 'react';
import { Certificate } from '../../types/Learnings';

type CertificateCardProps = {
  certificate: Certificate;
};

const CertificateCard = (
  props: CertificateCardProps,
): React.ReactElement | null => {
  const { certificate } = props;

  const certTitleMeta = certificate.title;
  const certIconMeta = certificate.icon;
  const certLinkMeta = certificate.link;
  const certPlatformMeta = certificate.platform;
  const certDateMeta = certificate.date;

  const certIcon = certIconMeta ? (
    <img
      src={certIconMeta}
      alt={`${certTitleMeta} icon`}
      className="w-8 h-8 mr-4"
    />
  ) : (
    <div className="w-8 h-8 bg-gray-300 rounded-full mr-4" />
  );
  const certTitle = (
    <h3 className="text-lg font-medium text-gray-800">{certTitleMeta}</h3>
  );
  const certPlatform = (
    <p className="text-sm text-gray-500">{certPlatformMeta}</p>
  );
  const certDate = <p className="text-sm text-gray-400 mb-4">{certDateMeta}</p>;
  const certLink = certLinkMeta && (
    <a
      href={certLinkMeta}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline text-sm"
    >
      View Certificate
    </a>
  );

  return (
    <div
      className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
    >
      <div className="flex items-center mb-4">
        {certIcon}
        <div>
          {certTitle}
          {certPlatform}
        </div>
      </div>
      {certDate}
      {certLink}
    </div>
  );
};

export default CertificateCard;
