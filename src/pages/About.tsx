import * as React from "react";

import IPage from "./IPage";
import {HashLink as Link} from 'react-router-hash-link';

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
