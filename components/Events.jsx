import * as Icon from "../components/Icon";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Events() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full px-4 pt-16 pb-20 space-y-4 relative bg-white">
      <div className="fixed z-30 shadow-inner text-gray-700 bg-white top-0 left-0 right-0 h-14 px-3 flex items-center justify-between border-b">
        <Link href="/home">
          <a className="flex flex-col items-center justify-center">
            <div className="font-medium text-lg">My Events</div>
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
            <Icon.SpeakerBlack className="h-6 w-6" />
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

      <Link href="/event-detail">
        <a>
          <div className="w-full bg-gray-500 bg-opacity-10 h-64 rounded shadow-lg relative overflow-hidden">
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
              <div className="flex">
                <div className="h-10 w-10 bg-yellow-500 rounded-2xl border border-white overflow-hidden z-10">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="-ml-2 h-10 w-10 bg-yellow-500 rounded-2xl border border-white overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>
              <div className="font-semibold text-gray-700"></div>
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
            <div className="flex items-center justify-center space-x-2 text-gray-700 text-sm absolute left-1/2 transform -translate-x-1/2 bottom-4 font-semibold w-full">
              <div className="flex flex-col items-center justify-center mr-4">
                <Icon.Clock className="h-5 w-5" />
                <div>3 Bulan 10 hari</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center  justify-centers mr-4">
                  <Icon.Group className="h-5 w-5" />
                  <div>185</div>
                </div>
              </div>
              <div className="flex flex-col text-xs">
                <div className="flex items-center space-x-1">
                  <Icon.MailOpen className="h-4 w-4" />
                  <div>120</div>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon.Mail className="h-4 w-4" />
                  <div>65</div>
                </div>
              </div>
              <div className="flex flex-col text-xs">
                <div className="flex items-center space-x-1">
                  <Icon.Check className="h-4 w-4" />
                  <div>100</div>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon.XCircle className="h-4 w-4" />
                  <div>65</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>

      <div className="w-full bg-yellow-800 bg-opacity-20 h-64 rounded shadow-xl relative overflow-hidden">
        <div className="h-full w-full overflow-hidden absolute">
          <img
            className="h-full w-full opacity-40  object-center object-cover"
            src="https://images.unsplash.com/photo-1593033581137-5c19a566104e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZmZlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold py-2 px-4 rounded-bl-lg">
          SEMINAR
        </div>
        <div className="absolute   top-2 left-2 flex space-x-2 items-center">
          <div className="flex">
            <div className="h-10 w-10 bg-yellow-500 rounded-2xl border border-white overflow-hidden z-20">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="-ml-2 h-10 w-10 bg-yellow-500 rounded-2xl border border-white overflow-hidden z-10">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="-ml-2 h-10 w-10 flex items-center justify-center font-semibold bg-yellow-500 rounded-2xl border border-white overflow-hidden text-sm">
              +48
            </div>
          </div>
          <div className="font-semibold text-gray-700"></div>
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
        <div className="flex items-center justify-center space-x-2 text-gray-700 text-sm absolute left-1/2 transform -translate-x-1/2 bottom-4 font-semibold w-full">
          <div className="flex flex-col items-center justify-center mr-4">
            <Icon.Clock className="h-5 w-5" />
            <div>1 Bulan 10 hari</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center  justify-centers mr-4">
              <Icon.Group className="h-5 w-5" />
              <div>1000</div>
            </div>
          </div>
          <div className="flex flex-col text-xs">
            <div className="flex items-center space-x-1">
              <Icon.MailOpen className="h-4 w-4" />
              <div>700</div>
            </div>
            <div className="flex items-center space-x-1">
              <Icon.Mail className="h-4 w-4" />
              <div>300</div>
            </div>
          </div>
          <div className="flex flex-col text-xs">
            <div className="flex items-center space-x-1">
              <Icon.Check className="h-4 w-4" />
              <div>600</div>
            </div>
            <div className="flex items-center space-x-1">
              <Icon.XCircle className="h-4 w-4" />
              <div>65</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
