import React from "react";
import Button from "../components/Button";
import { GoBell } from "react-icons/go";

const ButtonPage = () => {
    const handleClick = () => {};

    return (
        <div>
            <div>
                <Button primary onClick={handleClick} className="mb-5">
                    <GoBell />
                    Click1!
                </Button>
            </div>
            <div>
                <Button secondary>Click2!</Button>
            </div>
            <div>
                <Button success>Click3!</Button>
            </div>
            <div>
                <Button warning>Click4!</Button>
            </div>
            <div>
                <Button danger>Click5!</Button>
            </div>
        </div>
    );
};

export default ButtonPage;
