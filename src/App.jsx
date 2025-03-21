import Routers from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Routers />    
      <Toaster />
    </div>
  );
};

export default App;