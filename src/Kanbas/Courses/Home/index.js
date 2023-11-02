import ModuleList from "../Modules/ModuleList";
import Status from "./Status";
import "../../style.css"
function Home() {
  const containerStyles = {
    display: "flex",
  };
  const moduleListStyles = {
    flex: 1, // This makes ModuleList grow and fill the available space
  };  
  const statusStyles = {
    width: "250px", // This makes ModuleList grow and fill the available space
  };
  return (
    <div>
      <div class="container-fluid" style={containerStyles}>
      <div class=" container-fluid"style={moduleListStyles}>
      <ModuleList />
      </div>

      <div class="side-by-side " style={statusStyles}>
      <Status />
      </div>
      </div>
    </div>
  );
}
export default Home;