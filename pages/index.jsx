import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function index() {
  const menu = [
    {
      id: 1,
      category: "panitia",
      list: ["event organizer", "wedding organizer"],
    },
    {
      id: 2,
      category: "administrasi",
      list: ["proposal", "anggaran", "perizinan"],
    },
    {
      id: 3,
      category: "kalender",
      list: ["list", "jadwal", "kalender"],
    },
    {
      id: 4,
      category: "undangan",
      list: ["daftar tamu", "buku tamu", "design undangan"],
    },
    {
      id: 5,
      category: "dokumentasi",
      list: ["foto", "video", "galeri"],
    },
    {
      id: 6,
      category: "akomodasi",
      list: [
        "tempat",
        "sound sistem",
        "dekorasi",
        "transportasi",
        "konsumsi",
        "souvenir",
        "Wardrobe & Make Up",
      ],
    },
    {
      id: 7,
      category: "acara",
      list: ["roundown", "MC", "hiburan", "perangkat acara", "multimedia"],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white">
      <Sidebar menu={menu} Open={isOpen} setOpen={setIsOpen} />
      <Navbar Open={isOpen} setOpen={setIsOpen} />
      <Dashboard />
    </div>
  );
}
