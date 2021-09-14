import "./App.css";
import NavbarElement from "./components/Navbar/NavbarElement";
import Signup from "./components/pages/Signup";
import ClassElement from "./components/pages/ClassElement";
import Accordion from "./components/accordion/AccordionElement";

function App() {
  return (
    <div className="App">
      {/* <NavbarElement /> */}
      {/* <Signup /> */}
      {/* <ClassElement /> */}
      <Accordion />
    </div>
  );
}

export default App;
