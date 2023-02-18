import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { CreateContainer, MainContainer } from "./components";

const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-red-50">
      <Header />
      <main className="mt-24 p-8 w-full ">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
