import { useState } from "react";
import { resources } from "../assets/resources";
import { useParams } from "react-router-dom";
export default function Resources({  }) {
  
  function ResourcesMapped() {
    return (
    <>
     {resources.map((data, index) => {
      return  (
        <section id="main-section">
        <nav>
          <ul className="navList">
            <li key={index}>{data.category}</li>
          </ul>
        </nav>
        <article id="main-article">
          <h2>41124</h2>
          <p>12</p>
          <ul>
            <li>23</li>
          </ul>
        </article>
      </section>
      )
     })}
    </>
  )}

  return (
      <ResourcesMapped />
  );
}