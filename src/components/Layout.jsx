import Nav from "./Nav";
import PageTitle from "./PageTitle";
import Resources from "./Resources";

export default function Layout({ }) {
  
  
  return (
    <main>
      <section id="main-section">
       <nav>
         <ul className="navList">
          <Nav />
         </ul>
       </nav>
       <article id="main-article">
         <Resources />
       </article>
      </section>
    </main>
  );
}