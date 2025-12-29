import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chatcontainer from "../components/Chatcontainer";
import Rightsidebar from "../components/Rightsidebar";

const Homepage = () => {
    const [selectedUser,setselectedUser]=useState(false)
  return (
    <div className="w-full border h-screen sm:px-[15%] sm:py-[5%]">
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser?"md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]":"md:grid-cols-2"}`}>
        <Sidebar selectedUser={selectedUser} setselectedUser={setselectedUser}  />
        <Chatcontainer  selectedUser={selectedUser} setselectedUser={setselectedUser} />
        <Rightsidebar  selectedUser={selectedUser} setselectedUser={setselectedUser} />
      </div>
    </div>
  );
};

export default Homepage;
