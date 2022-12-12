import React from 'react';
import Provide from '../Provide/Provide';
import Contact from '../Shared/Contact';
import Tweet from '../Shared/Tweet';
import Banner from './Banner'
import Blog from './Blog/Blog';
import ClientSays from './ClientSays/ClientSays';
import MainBanner from './MainBanner/MainBanner';
import Partner from './Partner/Partner';
import Testimonial from './Testimonial/Testimonial';
import UpperFooter from './UpperFooter/UpperFooter';
import WeAre from './WeAre/WeAre';
import Work from './Work/Work';

const Home = () => {
    return (
        <div> 
            
            <MainBanner />
            <Tweet />
            {/* <Banner /> */}
            <Partner />
            <WeAre />
            <Provide />
            <Testimonial />
            <Work />
            <Blog />
            <ClientSays />
            <UpperFooter />
        </div>
    )
}

export default Home