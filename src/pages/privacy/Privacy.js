import React, { useEffect } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Group from '../home/group/Group';
import GroupTitle from '../home/group/GroupTitle';
import Footer from '../Shared/Footer';
import "./Privacy.css";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../shared/variants';

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Ray Advertising LLC";
  }, []);
  return (
    <div>
      <Navbar />
      <div className='privacy'>
        <div className='lg:pt-32 pt-28 lg:px-16'>
          
            <h2 className='lg:text-3xl sm:text-2xl mb-3 lg:mt-5 font-bold text-[#12232E]'>WHO WE ARE</h2>
         
            
            <p className='mb-5 text-[#12232E]'><span className='font-bold'>Suggested text:</span> Our website address is:  <a className='text-secondary' href="https://rayadvertising.com.">https://www.rayadvertising.com.</a> </p>
           
           
            <h2 className='lg:text-3xl sm:text-2xl font-bold mb-3 text-[#12232E]'>COMMENTS</h2>
          
            <p className='mb-5 text-[#12232E]'><span className='font-bold'>Suggested text:</span> When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection. <br /> An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a className='text-secondary' href="https://automattic.com/privacy/">https://automattic.com/privacy/</a> . After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
            
            <h2 className='lg:text-3xl sm:text-2xl mb-3 font-bold text-[#12232E]'>MEDIA</h2>
           
            <p className='mb-5 text-[#12232E]'><span className='font-bold'>Suggested text:</span> If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Camp lejeune cancer lawsuit
              website can download and extract any location data from images on the website. Programmatic media buying is the use of automated technology to help your business buy ad space.</p>
              
            <h2 className='lg:text-3xl sm:text-2xl font-bold mb-3 text-[#12232E]'>COOKIES</h2>
           
            <p className='mb-5 text-[#12232E]'><span className='font-bold'>Suggested text:</span> If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year. <br /> If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. <br />
              When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select <span className='text-secondary'>“Remember Me”</span> , your login will persist for two weeks. If you log out of your account, the login cookies will be removed. <br /> If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
              
            <h2 className='lg:text-3xl sm:text-2xl mb-3 font-bold text-[#12232E]'>EMBEDDED CONTENT FROM OTHER WEBSITES</h2>
           
            <p className='mb-5 text-[#12232E]'><span className='font-bold'>Suggested text:</span> Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. <br /> These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
            
            <h2 className='lg:text-3xl font-bold sm:text-2xl mb-3 text-[#12232E]'>WHO WE SHARE YOUR DATA WITH</h2>
            
            <p className='mb-5 text-[#12232E]'><span className='font-bold'>Suggested text:</span> If you request a password reset, your IP address will be included in the reset email.</p>
            
            <h2 className='lg:text-3xl sm:text-2xl mb-3 font-bold text-[#12232E]'>HOW LONG WE RETAIN YOUR DATA</h2>
            
            <p className='mb-5 text-[#12232E]'><span className='font-bold'>Suggested text:</span> If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. <br /> For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
           
            <h2 className='lg:text-3xl sm:text-2xl mb-3 font-bold text-[#12232E]'>WHAT RIGHTS YOU HAVE OVER YOUR DATA</h2>
            
            <p className='mb-5 text-[#12232E]'><span className='font-bold'>Suggested text:</span> If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. Lawsuit against camp lejeune also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
           
            <h2 className='lg:text-3xl sm:text-2xl font-bold mb-3 text-[#12232E]'>WHERE YOUR DATA IS SENT</h2>
           
            <p className='mb-5 text-[#12232E]'><span className='font-bold'>Suggested text:</span> Visitor comments may be checked through an automated spam detection service.</p>
            
        </div>
      </div>
      <GroupTitle />
      <Group />
      <Footer />
    </div>

  )
}

export default Privacy