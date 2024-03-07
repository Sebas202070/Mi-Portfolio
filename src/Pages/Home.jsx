import { Link } from "react-router-dom";
import cpuimg from "../assets/imagescpu.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="flex justify-center -m-4">
        <div className="m-20   ">
          <p className="text-5xl flex gap-2 portrait:grid">
            Hi! Im <p className="text-cyan-500 flex gap-2 ">Sebastian,</p>
          </p>
          <p className="text-cyan-700 text-4xl">Full Stack Developer</p>
          <p className="white text-3xl">Welcome,</p>
          <img className="w-96 h-32 my-8" src={cpuimg} alt="" />
        </div>
      </div>
      <div className=" flex justify-center text-5xl ">
        {/*   <h1>Projects</h1> */}
      </div>
      <div className=" flex justify-center -m-8">
        <Link to="/Projects">
          <button className="bg-cyan-700 border-s-4-lg p-2 hover:bg-cyan-900 ">
            ENTER
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
