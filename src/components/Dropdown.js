import React from "react";
import Trees from "../Questions/Trees";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="arrays">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Arrays & Hashing
            </button>
          </h2>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="tpointers">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Two Pointers
            </button>
          </h2>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Graphs
            </button>
          </h2>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="dp">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=""
              aria-expanded="false"
              aria-controls=""
            >
              1D Dp
            </button>
          </h2>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="swindow">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=""
              aria-expanded="false"
              aria-controls=""
            >
              Sliding Window
            </button>
          </h2>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              // type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              // aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Trees
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
          >
            <Trees />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
