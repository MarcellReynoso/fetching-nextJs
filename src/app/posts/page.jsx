import PostCard from "../../components/PostCard";
import React from "react";

async function loadPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

async function Posts() {
  const posts = await loadPosts();
  console.log(posts);
  return (
    <article>
      <h1>Estos son los posts</h1>
      {posts.map((post) => (
        <PostCard post = {post} key={post.id} />
      ))}
    </article>
  );
}

export default Posts;
