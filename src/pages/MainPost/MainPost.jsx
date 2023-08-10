import {} from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useLocation } from "react-router-dom"

function MainPosts() {
    const [posts, setPosts] = useState([])
    const { state: newPost } = useLocation()

    useEffect(() => {
        axios.get("https://dummyjson.com/posts")
            .then((response) => setPosts(response.data.posts))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <Link to="/new-post" >+ New Post</Link>
            {newPost && (
                <div key={newPost.id} >
                    <h2>{newPost.title}</h2>
                    <p>{newPost.body}</p>
                </div>
            )}
            {posts.map((post) => (
                <div key={post.id} >
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}
export default MainPosts