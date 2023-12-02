import React from "react";
import U1 from "./U1.jpg"

function Article() {
  return (
    <div className="card article">
      <div className="card-header">
          <p className="card-header-title">Emotion Detection</p>
      </div>
      <div className="card-image">
        <figure className="image">
          <img width="500" height="420" src={U1} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p>Applying Artificial Intelligence in digital art therapy to recognize children’s feelings based on their arts.</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
