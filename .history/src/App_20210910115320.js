import "./App.css";
import NavbarElement from "./components/Navbar/NavbarElement";
import Signup from "./components/pages/Signup";
import ClassElement from "./components/pages/ClassElement";
import Accordion from "./components/accordion/AccordionElement";
import FavBtn from "./components/favbtn/FavBtn";
import FileUploader from "./components/dragdrop/FileUploader";

function App() {
  function App() {
    const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };
  return (
    <div className="App">
      {/* <NavbarElement /> */}
      {/* <Signup /> */}
      {/* <ClassElement /> */}
      {/* <Accordion /> */}
      {/* <FavBtn /> */}
      <FileUploader onSuccess={onSuccess}/>
      <Preview files={files}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
