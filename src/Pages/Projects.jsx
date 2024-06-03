/* import CardsContainer from "../Components/CardsContainer"; */
import json from "../Pages/info.json";
import CardTw from "./CardTw";

function Projects() {
  const info = json;
  return (
    <div className="-mt-7">
      <h1 className="text-center text-5xl m-20  font-semibold ">MY PROJECTS</h1>
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
  );
}

export default Projects;
