import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { CreateContainer, MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-zinc-100">
        <Header />
        <main className="mt-24 p-8 w-full ">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};
export default App;
