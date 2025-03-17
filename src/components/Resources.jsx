import { useState } from "react";
import { Link } from "react-router-dom";
import { resources } from "../assets/resources";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

export default function Resources({  }) {

  //const resoursesSlug = resources.filter((product) => product.category === slug);

  const resource = resources.map((item, index) => 
    <div key={index}>
      <h2>{item.category}</h2>
        <p>{item.text}</p>
        <ul>
          <li> 
              {item.sources
                .map(source => 
                <div key={source.title}>
                  <Link to={source.url}>{source.title}</Link>
                </div>)}
          </li>
        </ul>
    </div>
  )

  

  return (
    <>
     {resource[0]}
    </>
    
  );
}