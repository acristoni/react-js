import React from "react";
import App from "./App";
import MareProvider from "./providers/mare-provider";
import { ResetCSS } from "./global/resetCSS";

const Providers = () => {
  return (
    <main>
      <MareProvider>
        <ResetCSS />
        <App />
      </MareProvider>
    </main>
  );
};

export default Providers;