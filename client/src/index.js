import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/Navigation";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
        domain="dev-cktb7f52rhkbfexo.us.auth0.com"
        clientId="MarPO6U3kmJPoQSMrvOMM8fXOKNTu8vI"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </Auth0Provider>
);
