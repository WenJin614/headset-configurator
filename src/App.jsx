import { Canvas } from "@react-three/fiber";
import './App.css';
import Experience from './components/Experience';
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";

function App() {

  return (
    <CustomizationProvider>
      <div className="App">
      <Canvas>
        <Experience/>
      </Canvas>
      <Configurator/>
    </div>
    </CustomizationProvider>
  );
}

export default App;
