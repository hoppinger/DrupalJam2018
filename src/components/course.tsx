import * as React from "react";
import * as Immutable from "immutable";
import * as Types from "../data/types";


export interface CourseProps { course:Types.Course, select:() => void }
export interface CourseState {}

export class Course extends React.Component<CourseProps, CourseState> {
  constructor(props:CourseProps, context:any) {
    super(props, context)

    this.state = {}
  }

  render() {
    return <div onClick={() => this.props.select()}>
        <div><span className="badge badge-default">Name</span> {this.props.course.name}</div>
        <div><span className="badge badge-default">Points</span> {this.props.course.points}</div>
      </div>
  }
}