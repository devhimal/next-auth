// Dummy data
const posts = [
  {
    title: "Understanding JavaScript Closures",
    slug: "understanding-javascript-closures",
    content:
      "Closures are a fundamental concept in JavaScript that allow inner functions to access outer function variables.",
  },
  {
    title: "Next.js vs React: Which One to Choose?",
    slug: "nextjs-vs-react",
    content:
      "Next.js extends React with server-side rendering and static site generation, making it a great choice for SEO-friendly applications.",
  },
  {
    title: "Mastering CSS Grid Layout",
    slug: "mastering-css-grid-layout",
    content:
      "CSS Grid is a powerful layout system that allows you to design complex web pages with ease.",
  },
  {
    title: "The Basics of TypeScript",
    slug: "the-basics-of-typescript",
    content:
      "TypeScript is a strongly typed superset of JavaScript that helps developers write safer code.",
  },
  {
    title: "How to Optimize Performance in React Apps",
    slug: "optimize-performance-react",
    content:
      "Performance optimization in React involves techniques such as memoization, lazy loading, and code splitting.",
  },
  {
    title: "Understanding the Virtual DOM",
    slug: "understanding-virtual-dom",
    content:
      "The Virtual DOM is a lightweight copy of the actual DOM, allowing React to update UI efficiently.",
  },
  {
    title: "Building a REST API with Node.js",
    slug: "building-rest-api-nodejs",
    content:
      "A REST API allows applications to communicate over HTTP using standard methods like GET, POST, PUT, and DELETE.",
  },
  {
    title: "Deploying Next.js Apps on Vercel",
    slug: "deploying-nextjs-vercel",
    content:
      "Vercel provides an easy way to deploy Next.js applications with minimal configuration.",
  },
  {
    title: "Introduction to Tailwind CSS",
    slug: "introduction-tailwind-css",
    content:
      "Tailwind CSS is a utility-first CSS framework that enables rapid UI development.",
  },
  {
    title: "JavaScript ES6 Features You Should Know",
    slug: "javascript-es6-features",
    content:
      "ES6 introduced features like arrow functions, template literals, destructuring, and promises.",
  },
  {
    title: "GraphQL vs REST: Key Differences",
    slug: "graphql-vs-rest",
    content:
      "GraphQL provides a flexible query language for APIs, while REST relies on fixed endpoints for data retrieval.",
  },
  {
    title: "The Role of Webpack in Modern Development",
    slug: "role-of-webpack",
    content:
      "Webpack is a powerful module bundler that optimizes JavaScript, CSS, and assets for better performance.",
  },
];

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(posts);
}
