const Sidebar = () => {
  return (
    <div className="mt-6 w-56 h-screen flex flex-col">
      <div className="text-2xl w-full px-4 py-2 hover:bg-gray-200   hover:text-black">
        Projects
      </div>
      <div className="text-2xl w-full px-4 py-2 hover:bg-gray-200 hover:text-black">
        Teams
      </div>
      <div className="text-2xl w-full px-4 py-2 hover:bg-gray-200  hover:text-black">
        Settings
      </div>
    </div>
  );
};

export default Sidebar;
