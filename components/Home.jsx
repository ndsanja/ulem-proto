import Link from "next/link";
import * as Icon from "../components/Icon";

export default function Home() {
  return (
    <div className="flex flex-col w-full px-4 py-14 space-y-4 relative bg-white">
      <div className="fixed z-30 bg-gray-600 top-0 left-0 right-0 h-14 px-4 flex items-center justify-between">
        <div className="flex space-x-4 items-center">
          <div className="font-semibold text-xl text-gray-100">Dashboard</div>
        </div>
        <Icon.Menu className="h-8 w-8 text-gray-100" />
      </div>
      <div className="flex space-x-4">
        <Link href="/undangan">
          <a className="w-full cursor-pointer">
            <div className="h-24 bg-green-500 text-white font-semibold rounded shadow-xl p-2 flex flex-col items-center justify-center">
              <div className="text-3xl">4</div>
              <div>Invitations</div>
            </div>
          </a>
        </Link>
        <Link href="/events">
          <a className="w-full cursor-pointer">
            <div className="h-24 bg-yellow-500 text-white font-semibold rounded shadow-xl p-2 flex flex-col items-center justify-center">
              <div className="text-3xl">2</div>
              <div>Events</div>
            </div>
          </a>
        </Link>
      </div>
      <div className="w-full h-64 rounded shadow-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        consequuntur!
      </div>
      <div className="w-full h-64 rounded shadow-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        consequuntur!
      </div>
    </div>
  );
}
