import React, { useEffect } from "react";
import { questions } from "./data.js";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";
import "./Faq.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="faq">
        <div className="text-center" data-aos="fade-up">
        <div className="flex justify-center">
        <MdOutlineLibraryBooks color="#1f93ff" size={30} />
        </div>
          
          <h2>FAQs</h2>
          <p className="u-text-small">
          Performance & Marketing
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;