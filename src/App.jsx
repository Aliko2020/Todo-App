import CompletedTodos from "./components/CompletedTodos"
import Form from "./components/Form"
import { Header } from "./components/Header"
import Todos from "./components/Todos"


function App() {

  return (
    <main className="app">
      <Header />
      <Form />
      <Todos />
      <div className="completed todos">
        <p >Completed</p>
      </div>
      <CompletedTodos />
    </main>
  )
}

export default App
