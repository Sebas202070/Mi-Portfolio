import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-5xl font-semibold">ABOUT ME</h1>
      </div>
      <div className="p-8">
        <span className="text-1xl ">
          Hello!! 👋 My name is Sebastian, I am from Posadas, Misiones and Lic,
          in business administration, but the twists and turns of life led me to
          study programming, and with much effort and dedication I recently
          graduated as a Full Stack Developer in Henry, where I received my
          greatest learning in new technologies (libraries and frameworks) with
          more than 700 hours of code in Javascript. I also have excellent
          English and experience working in a team. I really want to be able to
          work, develop and add as a programmer in the place or the company that
          allows me to apply everything I have learned and all my knowledge! Do
          not hesitate to contact me and arrange an interview! Best regards!!
          Sebastian
        </span>
      </div>
      <div className="p-5 m-2">
        <Link to="https://www.gmail.com/mail/help/intl/es/about.html?iframe">
          <h1 className="underline text-blue-500">
            📩Mail: sebastianrnajleok@gmail.com
          </h1>
        </Link>
        <Link to="https://www.linkedin.com/in/sebastian-rodrigo-najle-7bba34125/?locale=en_US">
          <h1 className="underline text-blue-500">💻Github: Sebas202070</h1>
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;
