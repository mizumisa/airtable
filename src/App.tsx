import { Refine } from "@pankod/refine-core";

import dataProvider from "@pankod/refine-airtable";
import routerProvider from "@pankod/refine-react-router-v6";

function App() {
  const API_TOKEN = "keyI18pnBeEMfPAIb";
  const BASE_ID = "appKYl1H4k9g73sBT";

  return (
    <Refine
      dataProvider={dataProvider(API_TOKEN, BASE_ID)}
      routerProvider={routerProvider}
    />
  );
}

export default App;
