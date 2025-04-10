"use client";

import React from "react";

export default function PostCard({ post }) {
  return (
    <section key={post.id}>
      <h2> <strong>N°: </strong> {post.id}</h2>
      <h3> <strong>Título: </strong> {post.title}</h3>
      <p> <strong>Párrafo: </strong> {post.body}</p>
      <div className="botones">
        <button
          className="boton"
          onClick={() => {
            alert("Te gusta");
          }}
        >
          Me gusta
        </button>
        <button
          className="boton"
          onClick={() => {
            alert("No te gusta");
          }}
        >
          No me gusta
        </button>
      </div>
    </section>
  );
}
