import React, { useState } from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion } from 'framer-motion';


const Question = ({ title, answer,  id }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question">
      <div className="question-title">
        <h4 className={`${showAnswer ? "!text-[#087d86]" : "!text-[#12232E]"}`}>{title}</h4>
        <button className="question-icons" onClick={handleClick}>
          {showAnswer ? (
            <AiOutlineMinus color="#087d86" />
          ) : (
            <AiOutlinePlus color="#006778" />
          )}
        </button>
      </div>

      <div className="question-answer">

        {showAnswer && 
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1, height: 100 }}
            initial={{ opacity: 0, scale: 0, height: 0 }}
            exit={{ opacity: 0, scale: 0, height: 100 }}
            transition={{ duration: 0.5 }}>
            <p className="px-5 text-[#12232E]">
              {answer}
            </p>
          </motion.div>
          
        }
      </div>
    </div>
  );
};

export default Question;