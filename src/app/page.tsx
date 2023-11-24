"use client"

import AddTask from "./components/AddTask";
import List from "./components/List";
import Navbar from "./components/Nav";


export default function Home() {
  return (
    <section className="w-4/5 m-auto">
      <Navbar />
      <AddTask />
      <List />
    </section >
  )
}
