import { useEffect, useState } from "react";
import { fetchPosts, createPost, deletePost, updatePost } from "./api/post";

const PostsAxiosV2 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])

  const handleCreatePost = () => {
    const newPost = { title: "Nesvarbu", body: "Only a few more hours until the Black Friday promotion ends! With the Computational Design course, you will have the opportunity to: Explore cutting-edge design: Discover how advanced algorithms shape innovative solutions. Gain cutting-edge skills: Gain access to the latest skills and knowledge in computational design to stay competitive. Don't miss your chance to be a real game-changer in the industry!" }

    createPost(newPost)
      .then((response) => {
        setPosts((prevPosts) => [...prevPosts, response])
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleDeletePost = (id) => {
    deletePost(id)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleUpdatePost = (updatingPost) => {
    const newPostData = { ...updatingPost, title: "Testeris", body: "Who is cutting onions? Passing graphics cards on to the next generation of gamers" }
    updatePost(newPostData)
      .then((response) => {
        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === response.id ? response : post))
        )
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>
      <h2>Axios Posts v2 way</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}{" "}</strong> 
            <br/>
            {post.body}{" "}
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            <button onClick={() => handleUpdatePost(post)}>Update name</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCreatePost}>Create new</button>
    </div>
  )
}

export default PostsAxiosV2
