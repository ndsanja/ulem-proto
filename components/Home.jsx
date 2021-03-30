import Link from "next/link";
import * as Icon from "../components/Icon";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("home");

  return (
    <div className="flex flex-col w-full px-4 pt-16 pb-20 space-y-4 relative bg-white">
      <div className="fixed z-30 shadow-inner text-gray-700 bg-white top-0 left-0 right-0 h-14 px-3 flex items-center justify-between border-b">
        <Link href="/home">
          <a className="flex flex-col items-center justify-center">
            <div className="font-semibold text-xl">ULeM</div>
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
          <a
            onClick={() => setActive("home")}
            className="flex flex-col items-center justify-center"
          >
            {active == "home" ? (
              <Icon.HomeBlack className="h-6 w-6" />
            ) : (
              <Icon.Home className="h-6 w-6" />
            )}

            <div className="text-xs">Home</div>
          </a>
        </Link>
        <Link href="/undangan">
          <a
            onClick={() => setActive("invitations")}
            className="flex flex-col items-center justify-center"
          >
            {active == "invitations" ? (
              <Icon.MailBlack className="h-6 w-6" />
            ) : (
              <Icon.MailOpen className="h-6 w-6" />
            )}

            <div className="text-xs">Invitations</div>
          </a>
        </Link>
        <Link href="/add">
          <a className="flex flex-col items-center justify-center">
            <Icon.PlusCircle className="h-10 w-10" />
          </a>
        </Link>
        <Link href="/events">
          <a
            onClick={() => setActive("events")}
            className="flex flex-col items-center justify-center"
          >
            {active == "events" ? (
              <Icon.SpeakerBlack className="h-6 w-6" />
            ) : (
              <Icon.Speakerphone className="h-6 w-6" />
            )}
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
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center leading-snug">
          <div className="h-24 w-24 bg-yellow-500 rounded-3xl overflow-hidden">
            <img
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="h-2"></div>
          <div className="font-bold">@juliete</div>
          <div className="text-gray-500">Juliete Mayangsari</div>
        </div>
        <div className="grid grid-cols-12 pt-4">
          <div className="col-span-3"></div>
          <div className="col-span-2 flex flex-col items-center justify-center">
            <div className="font-medium"> Follower</div>
            <div>100</div>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-2 flex flex-col items-center justify-center">
            <div className="font-medium"> Following</div>
            <div>200</div>
          </div>
          <div className="col-span-3"></div>
        </div>

        <div className="flex items-center justify-center pt-8 w-full space-x-2">
          <div className="flex flex-col items-center justify-center py-4 px-6 w-full border rounded-lg border-gray-500">
            <div className="text-4xl">4</div>
            <div className="font-medium">Invitations</div>
          </div>
          <div className="flex flex-col items-center justify-center py-4 px-6 w-full border rounded-lg border-gray-500">
            <div className="text-4xl">2</div>
            <div className="font-medium">Events</div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-2 w-full space-x-2">
          <div className="flex flex-col items-center justify-center py-4 px-3 w-full border rounded-lg border-gray-500">
            <div className="text pb-4">Your Next Events & Invitations</div>
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-14 w-14 bg-yellow-500 rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-medium text-lg">Seminar Kopi</div>
                  <div className="flex items-center space-x-1">
                    <Icon.Location className="h-3 w-3" />
                    <div className="text-xs">Filosofi Kopi Kaliurang</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end">
                <div className="text-xs font-semibold">Today</div>
                <div className="text-xs">21 april 2021</div>
                <div className="text-xs">20.00 WIB</div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-14 w-14 bg-yellow-500 rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-medium text-lg">Romeo & Juliete</div>
                  <div className="flex items-center space-x-1">
                    <Icon.Location className="h-3 w-3" />
                    <div className="text-xs">Grha Sabha Buana</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end">
                <div className="text-xs font-semibold">Next Month</div>
                <div className="text-xs">22 May 2021</div>
                <div className="text-xs">10.00 WIB</div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-14 w-14 bg-yellow-500 rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-medium text-lg">Office Dinner</div>
                  <div className="flex items-center space-x-1">
                    <Icon.Location className="h-3 w-3" />
                    <div className="text-xs">Aston Hotel Surabaya </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end">
                <div className="text-xs font-semibold"></div>
                <div className="text-xs">22 Juni 2021</div>
                <div className="text-xs">20.00 WIB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
