import Header from "../Header/Header.jsx";
import CoreConcepts from "../CoreConcepts/CoreConcepts.jsx";
import Examples from "../Examples/Examples.jsx";
import "./ReactEssential.css";

function ReactEssential() {
  return (
    <div className="containerReact">
      <Header />
      <main className="mainReact">
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default ReactEssential;
