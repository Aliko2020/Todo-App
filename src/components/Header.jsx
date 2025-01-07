import logo from '../assets/logo.png'
export const Header = () => {
  return (
    <header>
        <img src={logo} alt="todo logo" className='logo' />
        <h1>Todo List</h1>
    </header>
  )
}
