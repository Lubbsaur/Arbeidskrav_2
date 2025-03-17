import Nav from "./Nav";
import PageTitle from "./PageTitle";
import Resources from "./Resources";

export default function Layout({ children}) {
  
  
  return (
    <>
    <Nav />
    <main>
      <section id="main-section">
       {children}
      </section>
    </main>
    </>
  );
}