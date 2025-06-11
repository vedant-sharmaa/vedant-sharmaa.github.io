import React from 'react';
import Row from '../shared/Row';
import PageHeader from '../shared/PageHeader';
import Badge from '../shared/Badge';
import { Certificate } from '../../types/Learnings';
import CertificateCard from '../shared/CertificateCard';

type CertificationsProps = {
  certifications: Certificate[];
}

const Certifications = (props: CertificationsProps): React.ReactElement => {
  const { certifications } = props;
  return (
    <section className="mb-12">
      <Row>
        <PageHeader>Certifications</PageHeader>
        <Badge className="ml-3 self-start">{certifications.length}</Badge>
      </Row>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <CertificateCard key={cert.title} certificate={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
