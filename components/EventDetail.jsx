import * as Icon from "../components/Icon";
import { useState } from "react";
import { useRouter } from "next/router";

export default function EventDetail() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("list");

  return (
    <div className="flex flex-col w-full px-4 py-28 space-y-4 relative bg-white">
      <div className="fixed z-30 bg-gray-600 top-0 left-0 right-0 h-14 px-4 flex items-center justify-between">
        <div className="flex space-x-4 items-center">
          <div onClick={() => router.back()}>
            <Icon.ArrowBack className="h-8 w-8 text-gray-100" />
          </div>
          <div className="font-semibold text-xl text-gray-100">
            Romeo & Juliete Wedding
          </div>
        </div>
        <Icon.Menu className="h-8 w-8 text-gray-100" />
      </div>
      <div className="grid grid-cols-12 font-semibold fixed top-14 left-4 right-4 z-50 bg-white">
        <div
          onClick={() => setTab("list")}
          className={`${
            tab == "list"
              ? "col-span-4 text-center py-1 border rounded-l bg-blue-400 text-white"
              : "col-span-4 text-center py-1 border rounded-l"
          }`}
        >
          List Tamu
        </div>
        <div
          onClick={() => setTab("tambah")}
          className={`${
            tab == "tambah"
              ? "col-span-4 text-center py-1 border bg-blue-400 text-white"
              : "col-span-4 text-center py-1 border "
          }`}
        >
          Tambah
        </div>
        <div
          onClick={() => setTab("undangan")}
          className={`${
            tab == "undangan"
              ? "col-span-4 text-center py-1 border rounded-r bg-blue-400 text-white"
              : "col-span-4 text-center py-1 border rounded-r"
          }`}
        >
          Undangan
        </div>
      </div>
      {tab == "list" && (
        <div className="flex flex-col space-y-3">
          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">Amanda Manopo</div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.MailOpen className="h-3 w-3" />
                  <Icon.Check className="h-3 w-3" />
                  <Icon.Chat className="h-3 w-3" />
                  <Icon.Pencil className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s"
                  alt=""
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">
                  Pamungkas Sejati
                </div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.MailOpen className="h-3 w-3" />
                  <Icon.XCircle className="h-3 w-3 text-red-500" />
                  <Icon.Chat className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">Kim Jsoo</div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.MailOpen className="h-3 w-3" />
                  <Icon.QuestionMark className="h-3 w-3 text-yellow-500" />

                  <Icon.Pencil className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s"
                alt=""
              /> */}
                <div className="text-xl font-semibold">S</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">Sholehudin</div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.MailOpen className="h-3 w-3" />
                  <Icon.Check className="h-3 w-3 text-green-500" />
                  <Icon.Chat className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s"
                alt=""
              /> */}
                <div className="text-xl font-semibold">D</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">
                  Diana Mayangsari
                </div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.MailOpen className="h-3 w-3" />
                  <Icon.Check className="h-3 w-3 text-green-500" />
                  <Icon.Chat className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s"
                alt=""
              /> */}
                <div className="text-xl font-semibold">N</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">
                  Nur Salim Rahmadi
                </div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.MailOpen className="h-3 w-3" />
                  <Icon.Check className="h-3 w-3 text-green-500" />
                  <Icon.Chat className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s"
                alt=""
              /> */}
                <div className="text-xl font-semibold">M</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">
                  Marsinah Sholekah
                </div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.MailOpen className="h-3 w-3" />
                  <Icon.Check className="h-3 w-3 text-green-500" />
                  <Icon.Chat className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s"
                alt=""
              /> */}
                <div className="text-xl font-semibold">A</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">Ariana Grande</div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.MailOpen className="h-3 w-3" />
                  <Icon.Check className="h-3 w-3 text-green-500" />
                  <Icon.Chat className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s"
                alt=""
              /> */}
                <div className="text-xl font-semibold">D</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">Djoko Widodo</div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.Mail className="h-3 w-3 text-yellow-500" />
                  <Icon.Check className="h-3 w-3 text-green-500" />
                  <Icon.Chat className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s"
                alt=""
              /> */}
                <div className="text-xl font-semibold">S</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">
                  Susilo Bambang
                </div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.Mail className="h-3 w-3 text-yellow-500" />
                  <Icon.Check className="h-3 w-3 text-green-500" />
                  <Icon.Chat className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full p-2 rounded shadow-lg h-16 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s"
                alt=""
              /> */}
                <div className="text-xl font-semibold">P</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="font-semibold text-gray-700">
                  Prabowo Subianto
                </div>
                <div className="flex text-xs text-green-500 items-center space-x-1">
                  <Icon.Mail className="h-3 w-3 text-yellow-500" />
                  <Icon.Check className="h-3 w-3 text-green-500" />
                  <Icon.Chat className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div onClick={() => setOpen(!open)}>
                <Icon.DotsVertical className="h-6 w-6 text-gray-700" />
              </div>
              {open && (
                <div className="absolute bg-white w-24 top-6 right-2 p-2 font-medium text-gray-700 space-y-2 rounded shadow-xl">
                  <div>Share</div>
                  <div>Edit</div>
                  <div>Remove</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
