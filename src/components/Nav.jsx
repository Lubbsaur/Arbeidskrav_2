import { resources } from "../assets/resources";

export default function Nav({ setToggle, toggle }) {
  //const [navigate, ]

  const navigationSlug = resources.filter((item) => item.category === slug);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("heyo", e.target.innerHTML)
    
  }

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
    )}
  
  return (
    <NavMapped />
  )
}