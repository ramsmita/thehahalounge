import React from "react";
import "./card.styles.css";
const Card = props => {
  return (
    <div className="card-container">
      <img
        alt='jokester'
        src={`https://robohash.org/${props.joke.id}?set=set3&size=180x180`}
      />
      <p>[{props.joke.type}]</p>
      <p>{props.joke.setup}</p>
      <h2>{props.joke.punchline}</h2>
    </div>
  );
};
export { Card };
