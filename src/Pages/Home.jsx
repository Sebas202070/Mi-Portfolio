import { Link } from "react-router-dom";
import cpuimg from "../Pages/assets/imagescpu.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="flex justify-center items-center -m-8 portrait:-m-20 ">
        <div className="m-20  portrait:div1 ml-24  ">
          <div className="">
            <p className="text-7xl flex gap-2 ml-2 absolute efecto portrait:text-5xl ">
              Hi! I'm{" "}
              <p className="text-cyan-500 flex gap-2  portrait:div1 ">
                Sebastian,
              </p>
            </p>
          </div>
          <div /* className="div1" */>
            <p className="text-cyan-700 text-5xl ml-2 mt-20 portrait:mt-12 ">
              Full Stack Developer
            </p>
            <p className="white text-3xl ml-3">Welcome,</p>
            <img
              className="w-98 h-32 my-10 ml-20 center justify-center portrait:ml-2 w-72, "
              src={cpuimg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center text-5xl ">
        {/*   <h1>Projects</h1> */}
      </div>
      <div className=" flex justify-center -m-8">
        <Link to="/Projects">
          <button className="bg-cyan-700 rounded-lg ml-8 p-2 hover:bg-cyan-900 ">
            ENTER
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
