import React ,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// const rootElement = document.getElementById("root");

// const root = createRoot(rootElement);

// const element = React.createElement("h1",{className:"title",id:"title"},"xin chao ca lop")

// const element2 = React.createElement("h2",{className:"title",id:"title"},"xin chao ca lop 2")

// const username = "f8";

// // root.render(<div>{element} va{element2} <p>Hello {username}</p> </div>)

// // function myApp(name){
// //    return <h2>Hello{name}</h2>
// // }

// function MyApp2({name} = props){
//    return <h2>Hello{name}</h2>
// }

// root.render(<MyApp2 name={"f8"}></MyApp2>)
// root.render(<App ></App>)
