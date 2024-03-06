import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between m-2">
      <h1 className=" flex gap-2 text-cyan-500">
        Sebastian | <div className="text-white">FullStack Developer</div>
      </h1>
      <ul className="flex gap-2 gap-x-10">
        <Link to="/Home">
          <li className="hover:text-cyan-500">Home</li>
        </Link>
        <Link to="/Projects">
          {" "}
          <li className="hover:text-cyan-500">Projects</li>
        </Link>
        <li className="hover:text-cyan-500">About Me</li>
      </ul>
    </nav>
  );
}

export default Navbar;
