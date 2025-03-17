import { useEffect, useState } from "react";
import { resources } from "../assets/resources";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import Resources from "./Resources";

export default function PageTitle({title }) {
  
  //const slug = slug.toUpperCase();
  

  return (
    <h1>{title}</h1>
  )
}