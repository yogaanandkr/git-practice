import "./filters.css";
function Filters({ setFilter }) {
  let options = [
    "background",
    "naturism",
    "wallpaper",
    "flowers",
    "woman",
    "business",
    "cat",
    "landscape",
    "people",
    "spring",
    "money",
    "easter",
    "iphone wallpaper",
  ];

  function handlefilter(option) {
    setFilter(option);
  }
  return (
    <>
      <div className="filters-all">
        <div className="filter-div">
          <div className="filters">
            {options.map(a => {
              return (
                <>
                  <div className="buttons" key={a}>
                    <button
                      className="btn btn-light border-dark"
                      onClick={() => handlefilter(a)}
                    >
                      {a}
                    </button>
                  </div>
                </>
              );
            })}
          </div>

          <div className="settings">
            <div className="settings-icon">
              <i class="fa-solid fa-gear"></i>
            </div>
            <div className="editor-btn">
              <button className="btn btn-pill btn-light border-dark">
                Editor's Choice
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
