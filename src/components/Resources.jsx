import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle";

export default function Resources({ resources }) {
  const {slug} = useParams();

  console.log(resources)
  
  const resoursesSlug = resources.filter((resource) => resource.category === slug);

 console.log(resoursesSlug)



  return (
    <>
    {resoursesSlug.map((resource, index) => 
      <article key={index}>
        <PageTitle title={resource.category} />
            <p>{resource.title}</p>
            <ul>
              <li> 
                <Link to={resource.url}>{resource.title}</Link>
              </li>
            </ul>
        </article>
      )}
    </>
  );
}