import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>

  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}

const Content = (props) => {
  const courses = props.parts;
  return (
    <div>
      <Part part={courses[0].name} exercise={courses[0].exercises}/>
      <Part part={courses[1].name} exercise={courses[1].exercises}/>
      <Part part={courses[2].name} exercise={courses[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  const courses = props.parts;
  return (
    <div>
      <p>Number of exercises {courses[0].exercises + courses[1].exercises + courses[2].exercises}</p>
    </div>
    
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))