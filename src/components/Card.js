import React from "react";
import { Link } from "react-router-dom";

const Card = ({chitra,title,description,link}) => {
  return (
    <div>
      <div className="card my-2 mx-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={chitra} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <Link to={link} className="btn btn-primary">Let's Solve</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
