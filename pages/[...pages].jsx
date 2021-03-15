import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { menu } from "../utils/data";
import { useState } from "react";

export default function index() {
  const [page, setPage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
      <Dashboard
        menu={menu}
        Open={isOpen}
        setOpen={setIsOpen}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
