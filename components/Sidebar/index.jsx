import Link from "next/link";
export default function Sidebar(props) {
  return (
    <>
      <div
        onClick={() => props.setOpen(false)}
        className={`${
          props.Open
            ? "w-1/5 bg-gray-600 fixed h-screen right-0 bg-opacity-50 lg:hidden z-10"
            : "hidden "
        } `}
      />
      <div
        className={`${
          props.Open
            ? "bg-gray-800 w-4/5 fixed h-screen left-0 overflow-y-auto text-white z-10"
            : "hidden lg:block lg:fixed lg:bg-gray-800 lg:w-1/4 lg:h-screen lg:left-0 lg:overflow-y-auto lg:text-white"
        } `}
      >
        <div className="flex flex-col px-8 pt-8 pb-16">
          <Link href="/">
            <a>
              <div className="flex flex-col">
                <div className="text-6xl font-extrabold font-mono">ULeM</div>
                <span className="text-xs font-medium font-mono">
                  my event planner and assistans
                </span>
              </div>
            </a>
          </Link>

          <div className="flex flex-col space-y-6 justify-start items-start mt-12 font-semibold font-mono">
            {props.menu.map((cat) => (
              <div key={cat.id}>
                <div className="pb-2 uppercase">{cat.category}</div>
                <ul className="list-outside list-disc pl-6 space-y-2">
                  {cat.list.map((list) => (
                    <Link
                      key={list.menu}
                      href={`/${cat.category}/${list.menu}`}
                    >
                      <a>
                        <li
                          onClick={() => props.setOpen(false)}
                          onClick={() =>
                            props.setPage(
                              `${cat.id + cat.category + list.menu}`
                            )
                          }
                          className="capitalize cursor-pointer text-gray-300 hover:text-white"
                        >
                          {list.menu}
                        </li>
                      </a>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
