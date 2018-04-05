import * as React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import { History } from 'history';
import { Courses } from '../courses';

export interface HelloProps { message: string; history: History }

export const Hello = (props: HelloProps): JSX.Element =>
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${props.history.location.pathname.endsWith("world") ? "active" : ""}`}>
            <Link className="nav-link" to="/world">world</Link>
          </li>
          <li className={`nav-item ${props.history.location.pathname.endsWith("everyone") ? "active" : ""}`}>
            <Link className="nav-link" to="/everyone">everyone</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
      <h1>Hello {props.message}!</h1>
      <Courses />
    </div>
  </div>

