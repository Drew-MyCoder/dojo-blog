import { Link } from "react-router-dom/cjs/react-router-dom.min"

// style={{
//     color: 'white',
//     backgroundColor:'#f1356d',
//     borderRadius: '8px',
// }}

export const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" >New Blog</Link>
        </div>
    </nav>
  )
}
