import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/posts">Posts</Link>
            </li>
            <li>
                <Link href="/examples">ReactExamples</Link>
            </li>
        </ul>
    </nav>
  )
}
