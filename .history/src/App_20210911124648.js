import "./App.css";
import NavbarElement from "./components/Navbar/NavbarElement";
import ClassSelect from "./components/pages/ClassSelect";
import ClassElement from "./components/pages/ClassElement";
import Accordion from "./components/accordion/AccordionElement";
import JoinBtn from "./components/favbtn/JoinClassBtn";
import DragDrop from "./components/dragdrop/DragDrop";
import ClassCard from "./components/classcard/ClassCard";

function App() {
  return (
    <div className="App">
      {/* <NavbarElement /> */}
      {/* <Signup /> */}
      {/* <ClassSelect /> */}
      {/* <Accordion /> */}
      <JoinBtn />
      {/* <DragDrop /> */}
      {/* <ClassCard /> */}
    </div>
  );
}
export default App;
