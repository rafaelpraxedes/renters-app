import "./App.css";

import { generateClient } from 'aws-amplify/api';
import Units from "./components/Units";

const client = generateClient();

function App() {
  return (
    <div className="App">
      <h2>Apartment Listings</h2>
      <Units client={client} />
    </div>
  );
}

export default App;