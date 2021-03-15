import Main from "./Main";
import Pages from "./Pages";

export default function Dashboard({ menu, isOpen, setIsOpen, page, setPage }) {
  return (
    <div>
      {/* <Main /> */}
      <Pages
        menu={menu}
        Open={isOpen}
        setOpen={setIsOpen}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
