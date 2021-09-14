import "./App.css";
import NavbarElement from "./components/Navbar/NavbarElement";
import ClassSelect from "./components/pages/ClassSelect";
import ClassElement from "./components/pages/ClassElement";
import Accordion from "./components/accordion/AccordionElement";
import FavBtn from "./components/favbtn/FavBtn";
import DragDrop from "./components/dragdrop/DragDrop";
import ClassCard from "./components/classcard/ClassCard";

function App() {
  return (
    <div className="App">
      {/* <NavbarElement /> */}
      {/* <Signup /> */}
      <ClassSelect />
      {/* <Accordion /> */}
      {/* <FavBtn /> */}
      {/* <DragDrop /> */}
      {/* <ClassCard /> */}
    </div>
  );
}
export default App;
