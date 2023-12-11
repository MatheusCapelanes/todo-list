"use client"
import store from "@/redux/store";
import AddTask from "./components/AddTask";
import List from "./components/List";
import Navbar from "./components/Nav";
import { Provider } from "react-redux";


export default function Home() {

  return (
    <section className="w-4/5 m-auto">
      <Provider store={store}>
        <Navbar />
        <AddTask />
        <List />
      </Provider>
    </section >
  )
}
