import React from "react";
import HOC from "./HOC";
import "./styles.css";

const List = [
  {
    id: "Movie1",
    name: "The Lullaby",
    rate: "★★★★☆",
    image:
      "https://horrornews.net/wp-content/uploads/2018/02/The-Lullaby-2018-movie-Darrell-Roodt-2.jpg"
  },
  {
    id: "Movie2",
    name: "Laraide",
    rate: "★★★☆☆",
    image: "http://www.laraider.com/films/filmtr3/promo/affiche3.jpg"
  },
  {
    id: "Movie3",
    name: "Braven",
    rate: "★★☆☆☆",
    image:
      "https://media.senscritique.com/media/000017581368/source_big/Braven.jpg"
  }
];

const MovieList = props => {
  return (
    <div>
      <h1>MOVIES LIST</h1>
      {List.map((el, i) => (
        <div className="movies">
          <h4> Id : {el.id} </h4>
          <h4> Name : {el.name} </h4>
          <h4> Rating : {el.rate} </h4>
          <img src={el.image} />
        </div>
      ))}
    </div>
  );
};
export default HOC(MovieList);
