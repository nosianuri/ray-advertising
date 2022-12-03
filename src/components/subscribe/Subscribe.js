import React, { useEffect } from "react";
import "./Subscribe.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="subscribe" className="subscribe" data-aos="fade-up">

<div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Let's Talk!</h1>
      <p class="py-6 text-3xl">Fill out the form to request more information about our services. We’ll respond via email within one business day.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm ">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* <div className="subscribe" data-aos="fade-up">
        <h2>Subscribe now!</h2>
        <form>
          <div className="form-control">
            <input type="text" placeholder="Enter Your Email..." />
            <button>Subscribe</button>
          </div>
        </form>
        <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Subscribe;