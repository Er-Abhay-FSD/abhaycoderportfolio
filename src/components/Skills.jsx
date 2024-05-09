import React from "react";
import skills from "./data/skills.json";


const Skills = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          
          body {
            background-color:  #151719;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          
          .waviy {
            position: relative;
            -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.2));
            font-size: 60px;
          }
          
          .waviy span {
            font-family: 'Alfa Slab One', cursive;
            position: relative;
            display: inline-block;
            color: #fff;
            text-transform: uppercase;
            animation: waviy 1s infinite;
            animation-delay: calc(.1s * var(--i));
          }
          
          @keyframes waviy {
            0%,40%,100% {
              transform: translateY(0)
            }
            20% {
              transform: translateY(-20px)
            }
          }
        `}
      </style>
      <div className="container skills" id="skills">
        <h1 className="waviy">SKILLS 💼 </h1>
        <div className="items">
          {skills.map((data, index) => (
            <div
              className="item"
              key={data.id}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img src={`/assets/${data.imageSrc}`} alt="" />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;