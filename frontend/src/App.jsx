import Board from "./components/Board";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <div className="flex-1">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default App;
