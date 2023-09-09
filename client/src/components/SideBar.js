import React from "react";
import Link from "./Link";

const SideBar = () => {
    const links = [
        {
            label: "Upload Image",
            path: "/img",
        },
        {
            label: "Profile",
            path: "/profile",
        },
        {
            label: "Records",
            path: "/records",
        },
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Link
                to={link.path}
                key={link.label}
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            >
                {link.label}
            </Link>
        );
    });

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
};

export default SideBar;
