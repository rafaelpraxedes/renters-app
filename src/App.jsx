import "./App.css";

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { generateClient } from 'aws-amplify/api';
import Units from "./components/Units";

const client = generateClient();

function App({ signOut, user }) {
  return (
    <div className="App">
      {/* <Heading level={2}>Hello {user.username}</Heading> 
          <Button onClick={signOut}>Sign out</Button>
      */}     
      <Units client={client} />
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
}

export default withAuthenticator(App);