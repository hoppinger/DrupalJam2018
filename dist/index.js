"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var react_router_dom_1 = require("react-router-dom");
var hello_1 = require("./components/hello");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { path: "/react", render: function (props) { return React.createElement(hello_1.Hello, { compiler: "TypeScript", framework: "React", history: props.history }); } }),
        React.createElement(react_router_dom_1.Route, { path: "/drupal", render: function (props) { return React.createElement(hello_1.Hello, { compiler: "PHP", framework: "Drupal", history: props.history }); } }),
        React.createElement(react_router_dom_1.Route, { path: "/wordpress", render: function (props) { return React.createElement(hello_1.Hello, { compiler: "PHP", framework: "Wordpress", history: props.history }); } }))), document.getElementById("react-root"));
//# sourceMappingURL=index.js.map