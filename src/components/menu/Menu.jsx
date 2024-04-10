import "./menu.css";
function Menu() {
  return (
    <>
      <div className="menu-all">
        <div className="menu-items">
          <div className="home">
            <button className="btn ">
              {" "}
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </button>
          </div>

          <div className="photos">
            <button className="btn ">
              <i className="fas fa-image    "></i> Photos
            </button>
          </div>

          <div className="illustrations">
            <button className="btn ">
              {" "}
              <i className="fas fa-brush    "></i> Illustrations
            </button>
          </div>

          <div className="vectors">
            <button className="btn ">
              {" "}
              <i className="fas fa-vector-square    "></i> Vectors
            </button>
          </div>

          <div className="music">
            <button className="btn ">
              {" "}
              <i className="fa fa-music" aria-hidden="true"></i> Music
            </button>
          </div>

          <div className="sound">
            <button className="btn ">
              <i className="fa fa-soundcloud" aria-hidden="true"></i> Sound
              Effects
            </button>
          </div>

          <div className="gifs">
            <button className="btn ">
              <i className="fa-solid fa-fire-flame-curved"></i> GIFs
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
