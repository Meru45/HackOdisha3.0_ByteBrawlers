import React from "react";
import Route from "./components/Route";
import SideBar from "./components/SideBar";
import ImagePage from "./pages/ImagePage";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <SideBar />
            <div className="col-span-5">
                <Route path="/img">
                    <ImagePage />
                </Route>
                {isAuthenticated ? (
                    <div>
                        <LogoutButton />
                        <p>Hello, {user.name}</p>
                    </div>
                ) : (
                    <LoginButton />
                )}
            </div>
        </div>
    );
};

export default App;
