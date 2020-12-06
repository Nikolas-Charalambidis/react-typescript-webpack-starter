import * as React from "react";

import IPage from "./IPage";

interface IError extends IPage {
    location: string
}

const ErrorPage: React.FunctionComponent<IError> = ({ label, location }) => {

    return (
        <React.Fragment>
            <h1>Error: {label}</h1>
            <h3>{location} not found</h3>
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default ErrorPage;
