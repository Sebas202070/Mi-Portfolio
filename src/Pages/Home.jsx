import cpuimg from "../Pages/assets/imagescpu.jpg";
import "./Home.css";
import CardTw from "./CardTw";
import json from "../Pages/info.json";

function Home() {
  const info = json;

  return (
    <div>
      <div className="flex justify-center items-center -m-8 mr-20 portrait:-m-20 ">
        <div className="m-20    ">
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
      <div className=" flex justify-center -m-8"></div>
      <div className="-mt-7  ">
        <div className="mr-20">
          <h1 className="text-center text-5xl m-20  font-semibold  ">
            MY PROJECTS
          </h1>
        </div>
        <div className="flex gap-4 justify-around flex-wrap border-blue-700 border-solid">
          {info?.map((e) => {
            return (
              <CardTw
                key={crypto.randomUUID()}
                img={e.img}
                name={e.name}
                description={e.description}
                link={e.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
