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
var react_router_dom_1 = require("react-router-dom");
exports.Hello = function (props) {
    return React.createElement("div", null,
        React.createElement("div", { className: "container-fluid" },
            React.createElement("nav", { className: "navbar navbar-inverse" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("div", { className: "navbar-header" },
                        React.createElement("a", { className: "navbar-brand", href: "#" }, "WebSiteName")),
                    React.createElement("ul", { className: "nav navbar-nav" },
                        React.createElement("li", null,
                            React.createElement("a", { href: "#", onClick: function (e) {
                                    e.preventDefault();
                                    props.history.push("/react");
                                } }, "Home")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/react" }, "React")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/drupal" }, "Drupal")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/wordpress" }, "Wordpress"))))),
            React.createElement("div", { className: "container-fluid" },
                React.createElement("h1", null,
                    "Hello from ",
                    props.compiler,
                    " and ",
                    props.framework,
                    "!"),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col" }, "col"),
                    React.createElement("div", { className: "col" }, "col"),
                    React.createElement("div", { className: "col" }, "col"),
                    React.createElement("div", { className: "col" }, "col")),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-8" }, "col-8"),
                    React.createElement("div", { className: "col-4" }, "col-4")))));
};
//# sourceMappingURL=hello.js.map