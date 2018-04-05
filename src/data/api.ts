import * as Immutable from "immutable"
import { Course, Lecture } from "./types";

let courses = Immutable.List<Course>(Array<Course>(
  { id:0, name:"Basic programming", points:4 },
  { id:1, name:"Functional programming", points:4 },
  { id:2, name:"Algorithms and data structures", points:4 }
))

let lectures = Immutable.Map<number, Immutable.List<Lecture>>(Array<[number,Immutable.List<Lecture>]>(
  [0, Immutable.List<Lecture>(Array<Lecture>(
    { id:0, name:"Introduction to statements", description:"Variables, conditionals, loops." },
    { id:1, name:"Functions and recursion", description:"Stack, heap, examples of functions." },
    { id:2, name:"Arrays.", description:"Storing multiple values in arrays." },
    { id:3, name:"Classes and objects.", description:"Defining custom data structures, methods, fields, and constructors." }))],
  [1, Immutable.List<Lecture>(Array<Lecture>(
    { id:4, name:"Introduction", description:"The basics of Haskell and referential transparency." },
    { id:5, name:"The type system", description:"Types, generics, classes and instances." },
    { id:6, name:"Functors and monads.", description:"Meta-programming in Haskell." }))],
  [2, Immutable.List<Lecture>(Array<Lecture>(
    { id:7, name:"Sorting", description:"Bubblesort, selectionsort, quicksort." },
    { id:8, name:"Trees", description:"Trees, binary search trees, self-balancing trees." },
    { id:9, name:"Graphs.", description:"Graphs, traversals, pathfinding." }))],
  ))

export let get_courses = () : Promise<Immutable.List<Course>> =>
  new Promise((resolve, reject) => console.log("Marco") || setTimeout(() => console.log("Polo") || resolve(courses), 1500))

export let get_course_lectures = (c:Course) : Promise<Immutable.List<Lecture>> =>
  lectures.has(c.id) ? Promise.resolve(lectures.get(c.id))
  : Promise.reject(`Cannot find course ${c.id}`)
