import React from "react";
import Article from "../elements/Article";
import Article1 from "../elements/Article1";
function Articles (){
  return (
    <section className="section" id="articles">
      <div className="container">
        <h1 className="title">Projects</h1>
        <h2 className="subtitle is-4">My latest projects</h2>
        <div className="columns"><Article/></div>
        <div className="columns"><Article1/></div>
      </div>
    </section>
  );
}
export default Articles;
