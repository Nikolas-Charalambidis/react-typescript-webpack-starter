import * as React from "react";
import "./App.scss";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

export default class App extends React.Component<{}> {
    public render() {
        const url = window.location.href;
        console.log("url", url);

        const routes = [
            { path: '/', action: () => <Home label={"home"} /> },
            { path: '/about', action: () => <About label={"about"} /> },
            { path: '/contacts', action: () => <Contacts label={"contacts"} /> }
        ];

        const route = routes.find(r => url.endsWith(r.path));

        if (route && route.action) {
            return <React.Fragment>{route.action()}</React.Fragment>
        } else {
            return <React.Fragment><ErrorPage location={url} label={"404"} /></React.Fragment>;
        }
    }
}
