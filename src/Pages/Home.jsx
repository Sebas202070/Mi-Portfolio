import { Link } from "react-router-dom";
import cpuimg from "../assets/imagescpu.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="flex justify-center -m-2">
        <div className="m-20 ">
          <p className="text-5xl flex gap-2">
            Hi! Im <p className="text-cyan-500 gap-2">Sebastian,</p>
          </p>
          <p className="text-cyan-700 text-3xl">Full Stack Developer</p>
          <p className="white text-3xl">Welcome,</p>
          <img className="w-96 h-32 my-8" src={cpuimg} alt="" />
        </div>
      </div>
      <div className=" flex justify-center text-5xl ">
        {/*   <h1>Projects</h1> */}
      </div>
      <div className=" flex justify-center">
        <Link to="/Projects">
          <button className="text-cyan-500 rounded-lg p-2 hover:text-cyan-500 -m-2">
            ENTER
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
