import Nav from "./components/nav";
import GeneralSection from "./components/GeneralSection";

function App() {
  return (
    <div className="main">
      <Nav />
      <h2 className="MainHead">Fill all the information</h2>
      <div className="sections">
        <GeneralSection />
      </div>
    </div>
  );
}

export default App;
