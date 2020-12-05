import * as React from "react";

import IPage from "./IPage";
import {Link} from 'react-router-dom';

const About: React.FunctionComponent<IPage> = ({ label }) => {
  return (
    <React.Fragment>
      <h1>Page: {label}</h1>
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

export default About;
