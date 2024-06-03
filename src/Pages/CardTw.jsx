import { Link } from "react-router-dom";

function CardTw(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img
        className="w-80 h-80 portrait:h-40 ml-5 hover:animate-bounce "
        src={props.img}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base ">{props.description}</p>
        <Link className="text-blue-700 mt-2 " to={props.link}>
          {props.link}
        </Link>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Javascript
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Css
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Node JS.
        </span>
      </div>
    </div>
  );
}

export default CardTw;
