
import { BlogList } from "./BlogList";
import useFetch from "./useFetch";

export const Home = () => {
    // const [name, setName] = useState('Mario');

    // const handleClick = () => {
    //     setName('Drew') 
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target)
    // }

    const { data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    // const [name, setName] = useState('Mario')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }


  return (
    <div className='home'>
        {/* <h2>
            Homepage
        </h2>
        <p>{ name }</p>
        <button onClick={handleClick}>Click me</button> */}
        {/* <button onClick={(e) => {
            handleClickAgain('mario', e)
        }}>Click me again</button> */}
        { error && <div>{error}</div> }
        {isLoading && <div>Loading...</div>}
       {blogs && <BlogList blogs={blogs} title='All Blogs' />}
         
         {/* <button onClick={() => (setName('Drew'))}>change name</button>
         <p>{name}</p> */}
         </div>
  )
}
