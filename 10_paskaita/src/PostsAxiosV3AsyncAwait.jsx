import { useEffect, useState } from "react";
import { fetchPosts, createPost, deletePost, updatePost } from "./api/post";

const PostsAxiosV3AsyncAwait = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetchPosts()
      setPosts(response)
    } catch (error) {
      console.error(error)
    }
  }

    getData()
  }, [])

  const handleCreatePost = async () => {
    const newPost = { title: "Nesvarbu", body: "Only a few more hours until the Black Friday promotion ends! With the Computational Design course, you will have the opportunity to: Explore cutting-edge design: Discover how advanced algorithms shape innovative solutions. Gain cutting-edge skills: Gain access to the latest skills and knowledge in computational design to stay competitive. Don't miss your chance to be a real game-changer in the industry!" }

    try {
      const response = await createPost(newPost)
      setPosts((prevPosts) => [...prevPosts, response])
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePost = async (updatingPost) => {
    const newPostData = { ...updatingPost, title: "Testeris", body: "Who is cutting onions? Passing graphics cards on to the next generation of gamers" }

    try {
      const response = await updatePost(newPostData)
      const postUpdater = (post) => (post.id === response.id ? response : post)
      setPosts((prevPosts) => prevPosts.map(postUpdater))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h2>Axios Posts v2 Async Await way</h2>
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

export default PostsAxiosV3AsyncAwait