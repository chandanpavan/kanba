import { useState } from "react";
import Board from "./components/Board";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar search={search} setSearch={setSearch} />
      <div className="flex min-h-[calc(100vh-72px)] items-start">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          <Board search={search} setSearch={setSearch} />
        </main>
      </div>
    </div>
  );
};

export default App;
