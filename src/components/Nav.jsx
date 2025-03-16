import { resources } from "../assets/resources";

export default function Nav({ setToggle }) {
  
  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle)
  }

  function NavMapped() {
      return (
      <>
       {resources.map((data, index) => {
        return  (
          <li key={index} onClick={handleClick}>{data.category}</li>
        )
       })}
      </>
    )}
  
  return (
    <NavMapped />
  )
}