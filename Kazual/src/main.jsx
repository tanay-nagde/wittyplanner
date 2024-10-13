import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-izovszreipifas0d.us.auth0.com"
    clientId="FiOORVYEX99hJYLk6mCPBrAjTCFupYaL"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <div className="bg-blue-50">
     
      <App />
    </div>
  </Auth0Provider>
);
