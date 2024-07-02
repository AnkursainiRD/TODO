import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import CreateTodoPage from "./pages/CreateTodoPage"
import CompletedTodoPage from "./pages/CompletedTodoPage"
import UpdateTodoPage from "./pages/UpdateTodoPage"

function App() {

  return (
    <div className='w-max-[100vw] top-0 h-[100vh]'>
      <div className='w-full relative h-full'>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="createTodo" element={<CreateTodoPage/>}/>
          <Route path="completedTodo" element={<CompletedTodoPage/>}/>  
          <Route path="updateTodo/:id" element={<UpdateTodoPage/>}/>   
          <Route path="deleteTodo/:id"/>     
      </Routes>
    </div>
    </div>
  )
}

export default App
