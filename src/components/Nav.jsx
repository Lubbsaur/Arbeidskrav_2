import { resources } from "../assets/resources";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav({}) {

  const handleClick = (e) => {
    e.preventDefault();
    console.log("heyo", e.target.innerHTML)
    //const target = e.target.innerHTML;
  }

  const navigateTabs = [
    {
      id: 1,
      name: 'HTML',
      slug: 'html'
    },
    {
      id: 2,
      name: "CSS",
      slug: 'css'
    },
    {
      id: 3,
      name: 'JavaScript',
      slug: 'javascript'
    },
    {
      id: 4,
      name: 'React',
      slug: 'react'
    },
    {
      id: 5,
      name: 'Sanity and headless CMS',
      slug: 'sanity'
    }
  ]
  
  return (
    <div>
    {navigateTabs.map((category) => (
      <li key={category.id}>
          <Link to={`/${category.slug}`}>{category.name}</Link>
      </li>
    ))}
    </div>
  )
}

 {/*
  function NavMapped() {
      return (
      <>
       {resources.map((data) => {
        return  (
          <div key={data.category} onClick={handleClick}>
            <li><a>{data.category}</a></li>
          </div>
        )
       })}
      </>
    )}*/}