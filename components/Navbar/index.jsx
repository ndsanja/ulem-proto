export default function Navbar(props) {
  return (
    <div className=" top-0 right-0 bg-gray-50 bg-opacity-30 p-4 lg:w-3/4 lg:fixed lg:py-5 lg:px-8">
      <div className="flex items-center justify-end space-x-4">
        <span
          onClick={() => props.setOpen(!props.Open)}
          className="flex-1 cursor-pointer lg:hidden"
        >
          menu
        </span>
        <span>Dark</span>
        <span>Notif</span>
        <span>Akun</span>
      </div>
    </div>
  );
}
