import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("");
  return (
    <div className="bg-white">
      <Sidebar
        menu={menu}
        Open={isOpen}
        setOpen={setIsOpen}
        page={page}
        setPage={setPage}
      />
      <Navbar Open={isOpen} setOpen={setIsOpen} />
      <Dashboard />
    </div>
  );
}
