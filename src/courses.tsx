import * as React from "react";
import * as Immutable from "immutable";
import * as Types from "./data/types";
import { Course } from "./components/course";
import { get_courses } from "./data/api";

export interface CoursesProps { }
export interface CoursesState { courses: Immutable.List<Types.Course> | "loading...", selection:"none" | Types.Course }

export class Courses extends React.Component<CoursesProps, CoursesState> {
  constructor(props: CoursesProps, context: any) {
    super(props, context)

    this.state = { courses: "loading...", selection:"none" }
  }

  componentDidMount() {
    get_courses().then(courses => this.setState({ ...this.state, courses: courses }))
  }

  render() {
    return this.state.courses == "loading..." ? <div>Loading...</div>
      :
      <div className="row">
        <div className="col">
          <div className="list-group">
          {
            // active
            this.state.courses.toArray().map(c =>
              <div className={`list-group-item ${this.state.selection != "none" && this.state.selection.id == c.id ? "active" : ""}`}>
                <Course select={() => this.setState({...this.state, selection:c})} course={c} />
              </div>)
          }
          </div>
        </div>
        <div className="col">
          Lectures
        </div>
      </div>
  }
}
