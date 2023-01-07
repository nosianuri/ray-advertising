import React, { useState } from 'react';
import './Tabs.css';
import isv1 from '../../../assets/vis5.png';
import isv2 from '../../../assets/vis6.png';

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <div className="tabs-container ">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          PUBLISHER
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          ADVERTISER
        </button>
        {/* <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button> */}
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>
          {/* <img src={isv1} alt="" /> */}
          <i class="fa-solid fa-pen text-2xl text-[#FF4B1B]"></i>
          </h2>
          <hr />
          <p>
          Promote high-converting campaigns from leading US advertisers seeking your media-buying, content marketing, social media, and e-mail marketing expertise. Our team of media-buyers and content marketing experts have over 20 years of combined digital marketing expertise. We are here to deliver you highly engaged customers via social, display, native, or email marketing channels.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>
          {/* <img src={isv2} alt="" /> */}
          <i class="fa-solid fa-window-restore text-2xl text-[#FF4B1B]"></i>
          </h2>
          <hr />
          <p>
          Beneath the digital layers and conversions, we’re built on human connections. We invite you to get acquainted with us digitally – and then we’d like to get to know you in person.
          </p>
        </div>

        {/* <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Tabs