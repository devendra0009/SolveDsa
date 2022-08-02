import React from "react";
import Easy from "../Questions/Easy";
import Hard from "../Questions/Hard";
import Medium from "../Questions/Medium";
import Questions from "../Questions/Questions";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      All Questions
      </button>
    </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse">
        <Questions />
      </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Easy 
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse">
            <Easy />
          </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Medium 
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div id="flush-collapseThree" className="accordion-collapse collapse">
            <Medium />
          </div>
  </div>
</div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Hard 
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div id="flush-collapseFour" className="accordion-collapse collapse">
            <Hard />
          </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default Dropdown;

