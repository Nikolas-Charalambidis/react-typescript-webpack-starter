import * as React from "react";

import IPage from "./IPage";
import {Link, useLocation} from 'react-router-dom';

const ErrorPage: React.FunctionComponent<IPage> = ({ label }) => {

    const location = useLocation();

    return (
        <React.Fragment>
            <h1>Error: {label}</h1>
            <h3>{location.pathname} not found</h3>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default ErrorPage;
