import Link from "next/link";

export default function index() {
  return (
    <>
      <Link href="/home">
        <a>
          <div className="flex flex-col items-center justify-center h-screen w-screen">
            <div className="font-mono font-extrabold text-9xl">ULeM</div>
            <div className="font-semibold text-gray-700  font-mono tracking-tighter">
              my invitations, events & assistant
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}
