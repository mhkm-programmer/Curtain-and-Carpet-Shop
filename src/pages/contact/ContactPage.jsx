import Contact from './Contact';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
         <PageTitle title="Curtains and Carpets Shop | Contact Us" />
             <ParallaxSection
        imagePath="https://8upload.com/image/6845c3dc9b5e8/Contact_Us-2.jpg"
        title=""
        subTitle=""
      />
      <Contact/>

        </div>
    );
};

export default ContactPage;