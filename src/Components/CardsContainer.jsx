import ".cardscontainer.css";

function CardsContainer(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img className="container" src={props.img} alt="" />
    </div>
  );
}

export default CardsContainer;
