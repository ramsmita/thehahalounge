import React from "react";
import { Card } from "../card/card.component.jsx";
import "./card-list.styles.css";

const CardList = props => {
  return (
    <div className="card-list">
      {props.jokes.map(joke => (
        <Card key={joke.id} joke={joke}></Card>
      ))}
    </div>
  );
};
export default CardList;
