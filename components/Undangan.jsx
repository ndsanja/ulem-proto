import * as Icon from "../components/Icon";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Undangan() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full px-4 pt-16 pb-20 space-y-4 relative bg-white">
      <div className="fixed z-30 shadow-inner text-gray-700 bg-white top-0 left-0 right-0 h-14 px-3 flex items-center justify-between border-b">
        <Link href="/home">
          <a className="flex flex-col items-center justify-center">
            <div className="font-medium text-lg">My Invitations</div>
          </a>
        </Link>
        <Link href="/notif">
          <a className="flex flex-col items-center justify-center">
            <Icon.Message className="h-6 w-6" />
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
            <Icon.MailBlack className="h-6 w-6" />
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

      <Link href="/invitations">
        <a>
          <div className="w-full bg-gray-500 bg-opacity-10 h-52 rounded shadow-lg relative overflow-hidden">
            <div className="h-full w-full overflow-hidden absolute">
              <img
                className="h-full w-full opacity-40 object-center object-cover"
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold py-2 px-4 rounded-bl-lg">
              WEDDING
            </div>
            <div className="absolute top-2 left-2 flex space-x-2 items-center">
              <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="font-semibold text-gray-700">juliete</div>
            </div>
            <div className="p-2 flex flex-col items-center justify-center w-full h-full font-semibold relative">
              <div className="text-gray-700 text-2xl"> Romeo & Juliete</div>
              <div className="text-gray-600 text-sm">Wedding Celebration</div>
              <div className="text-gray-600 text-sm">17 Agustus 2021</div>
              <div className="flex space-x-1 items-center justify-center py-2 underline">
                <Icon.Location className="h-3 w-3 text-gray-700" />
                <div className="text-gray-700 text-xs">
                  Hotel Grand Indonesia
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-700 text-sm absolute left-1/2 transform -translate-x-1/2 bottom-4 font-semibold w-full">
              <div className="flex items-center space-x-1">
                <Icon.Clock className="h-4 w-4" />
                <div>3 Bulan 10 hari</div>
              </div>
              <div className="flex items-center space-x-1">
                <Icon.Check className="h-4 w-4" />
                <div>Hadir</div>
              </div>
            </div>
          </div>
        </a>
      </Link>

      <div className="w-full bg-yellow-800 bg-opacity-20 h-52 rounded shadow-lg relative overflow-hidden">
        <div className="h-full w-full overflow-hidden absolute">
          <img
            className="h-full w-full opacity-40 object-center object-cover"
            src="https://images.unsplash.com/photo-1593033581137-5c19a566104e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZmZlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold py-2 px-4 rounded-bl-lg">
          SEMINAR
        </div>
        <div className="absolute   top-2 left-2 flex space-x-2 items-center">
          <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden">
            <img
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="font-semibold text-gray-700">komunitasngopi</div>
        </div>
        <div className="p-2 flex flex-col items-center justify-center w-full h-full font-semibold relative">
          <div className="text-gray-700 text-2xl">"Perkopian Duniawi"</div>
          <div className="text-gray-600 text-sm">
            Sebuah diskusi pemikiran nietze
          </div>
          <div className="text-gray-600 text-sm">5 juni 2021</div>
          <div className="flex space-x-1 items-center justify-center py-2 underline">
            <Icon.Location className="h-3 w-3 text-gray-700" />
            <div className="text-gray-700 text-xs">
              Filosofi Kopi - Kaliurang
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 text-gray-700 text-sm absolute left-1/2 transform -translate-x-1/2 bottom-4 font-semibold w-full">
          <div className="flex items-center space-x-1">
            <Icon.Clock className="h-4 w-4" />
            <div>1 Bulan 15 hari</div>
          </div>
          <div className="flex items-center space-x-1">
            <Icon.Check className="h-4 w-4" />
            <div>Hadir</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-pink-600 bg-opacity-20 h-52 rounded shadow-lg relative overflow-hidden">
        <div className="h-full w-full overflow-hidden absolute">
          <img
            className="h-full w-full opacity-50 object-center object-cover"
            src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlZGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold py-2 px-4 rounded-bl-lg">
          WEDDING
        </div>
        <div className="absolute   top-2 left-2 flex space-x-2 items-center">
          <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden">
            <img
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="font-semibold text-gray-700">andiiiien</div>
        </div>
        <div className="p-2 flex flex-col items-center justify-center w-full h-full font-semibold relative">
          <div className="text-gray-700 text-2xl">Al & Andien</div>
          <div className="text-gray-600 text-sm">Wedding Celebration</div>
          <div className="text-gray-600 text-sm">12 Desember 2021</div>
          <div className="flex space-x-1 items-center justify-center py-2 underline">
            <Icon.Location className="h-3 w-3 text-gray-700" />
            <div className="text-gray-700 text-xs">
              Grha Sabha Buana - Surakarta
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 text-gray-700 text-sm absolute left-1/2 transform -translate-x-1/2 bottom-4 font-semibold w-full">
          <div className="flex items-center space-x-1">
            <Icon.Clock className="h-4 w-4" />
            <div>6 Bulan 1 hari</div>
          </div>
          <div className="flex items-center space-x-1">
            <Icon.QuestionMark className="h-4 w-4" />
            <div>Belum Konfirmasi</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-green-800 bg-opacity-10 h-52 rounded shadow-lg relative overflow-hidden">
        <div className="h-full w-full overflow-hidden absolute">
          <img
            className="h-full w-full opacity-50 object-center object-cover"
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-semibold py-2 px-4 rounded-bl-lg">
          MEET UP
        </div>
        <div className="absolute   top-2 left-2 flex space-x-2 items-center">
          <div className="h-10 w-10 bg-yellow-500 rounded-2xl overflow-hidden">
            <img
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1579197073550-bf44b469a6fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRpbm9zYXVyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="font-semibold text-gray-700">dinosaurus</div>
        </div>
        <div className="p-2 flex flex-col items-center justify-center w-full h-full font-semibold relative">
          <div className="text-gray-700 text-2xl">RUTINAN</div>
          <div className="text-gray-600 text-sm">belantara hutan rimba</div>
          <div className="text-gray-600 text-sm">1 april 2021</div>
          <div className="flex space-x-1 items-center justify-center py-2 underline">
            <Icon.Location className="h-3 w-3 text-gray-700" />
            <div className="text-gray-700 text-xs">Hutan Pinus - Bantul</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 text-gray-700 text-sm absolute left-1/2 transform -translate-x-1/2 bottom-4 font-semibold w-full">
          <div className="flex items-center space-x-1">
            <Icon.Clock className="h-4 w-4" />
            <div>6 hari lagi</div>
          </div>
          <div className="flex items-center space-x-1">
            <Icon.XCircle className="h-4 w-4" />
            <div>Tidak Hadir</div>
          </div>
        </div>
      </div>
    </div>
  );
}
