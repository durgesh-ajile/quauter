import React from 'react'
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import FreeLancer from './shop-components/FreeLancer';

const Freelancer = () => {
  return (
    <div>
        <Navbar />
        <PageHeader headertitle="Freelancer Account" />
        <FreeLancer />
        <CallToActionV1 />
        <Footer />
    </div>
  )
}

export default Freelancer