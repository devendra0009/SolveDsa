import React from "react";
import { Link } from "react-router-dom";

const Card = ({chitra,title,description,link}) => {
  return (
    <div>
      <div class="card my-2 mx-3" style={{ width: "18rem" }}>
        <img class="card-img-top" src={chitra} alt="Card cap" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            {description}
          </p>
          <Link to={link} class="btn btn-primary">Let's Solve</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
