import * as Icon from "../components/Icon";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function EventDetail() {
  const tamu = [
    "Amanda Manopo",
    "Raisa Sarasvati",
    "Isyana Kamila",
    "Pamungkas",
    "Joko Widodo",
    "Susilo Bambang",
    "Prabowo Subianto",
    "Anggung C Sasmi",
    "Maia Estianti",
    "Katty Parry",
  ];

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("list");

  return (
    <div className="flex flex-col w-full px-3 pt-16 pb-20 space-y-4 relative bg-white">
      <div className="fixed z-30 shadow-inner text-gray-700 bg-white top-0 left-0 right-0 h-14 px-3 flex items-center justify-between border-b">
        <div className="flex space-x-2 items-center">
          <div onClick={() => router.back()}>
            <Icon.ArrowBack className="h-5 w-5" />
          </div>
          <div className="font-medium text-lg">Romeo & Juliete Wedding</div>
        </div>
        <Link href="/notif">
          <a className="flex flex-col items-center justify-center">
            <Icon.UserAdd className="h-6 w-6" />
          </a>
        </Link>
      </div>
      <div className="fixed z-30 shadow-inner text-gray-700 bg-white bottom-0 left-0 right-0 h-14 px-3 flex items-center justify-around">
        <Link href="/home">
          <a className="flex flex-col items-center justify-center">
            <Icon.Home className="h-6 w-6" />
            <div className="text-xs">Home</div>
          </a>
        </Link>
        <Link href="/undangan">
          <a className="flex flex-col items-center justify-center">
            <Icon.MailOpen className="h-6 w-6" />
            <div className="text-xs">Invitations</div>
          </a>
        </Link>
        <Link href="/add">
          <a className="flex flex-col items-center justify-center">
            <Icon.PlusCircle className="h-10 w-10" />
          </a>
        </Link>
        <Link href="/events">
          <a className="flex flex-col items-center justify-center">
            <Icon.Speakerphone className="h-6 w-6" />
            <div className="text-xs">Events</div>
          </a>
        </Link>
        <Link href="/notif">
          <a className="flex flex-col items-center justify-center">
            <Icon.Bell className="h-6 w-6" />
            <div className="text-xs">Notify</div>
          </a>
        </Link>
      </div>
      <div className="text-sm">128 peoples</div>
      {tamu.map((item) => (
        <div key={item} className="flex flex-col space-y-3">
          <div className="relative w-full p-2 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-14 w-14 bg-yellow-500 rounded-2xl overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="flex flex-col leading-tight space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="font-medium text-gray-700">{item}</div>
                  <div className="flex items-center justify-center border border-yellow-500 rounded text-yellow-600 text-xs font-medium px-1">
                    VIP
                  </div>
                </div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.MailOpen className="h-4 w-4" />
                  <Icon.Check className="h-4 w-4" />
                  <Icon.Chat className="h-4 w-4" />
                  <Icon.Pencil className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open && item)}>
                <Icon.DotsVertical className="h-5 w-5 text-gray-700" />
              </div>
              {open && item == open && (
                <div className="absolute z-30 bg-white w-24 top-6 right-2 py-2 px-4 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
