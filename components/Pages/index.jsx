export default function Pages(props) {
  return (
    <div className="flex">
      <div className="lg:w-1/4"></div>
      <div className="p-4 lg:w-3/4 lg:px-8 lg:py-16">
        {props.menu.map((cat) =>
          cat.list.map(
            (list) =>
              props.page == cat.id + cat.category + list.menu && (
                <div
                  className={`${
                    props.page == cat.id + cat.category + list.menu &&
                    "bg-red-400"
                  }`}
                  key={cat.id}
                >
                  <h1>ini berasal dari Categori:{cat.category}</h1>
                  {cat.list.map(
                    (list) =>
                      props.page == cat.id + cat.category + list.menu && (
                        <div key={list.menu}>
                          <p>menu:{list.menu}</p>
                          <p>content:{list.content}</p>
                        </div>
                      )
                  )}
                </div>
              )
          )
        )}
      </div>
    </div>
  );
}
