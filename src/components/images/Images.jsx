import { useContext, useEffect, useState } from "react";
import Menu from "../menu/Menu";
import Filters from "../filters/Filters";
import "./images.css";
function Images() {
  let [images, setImages] = useState([]);
  let [search, setSearch] = useState("");
  let [filter, setFilter] = useState("");

  let date = new Date();

  useEffect(() => {
    if (filter) {
      setSearch("");
    }
  }, [filter]);
  useEffect(() => {
    if (search) {
      setFilter("");
    }
  }, [search]);

  console.log("after filtering form filter.jsx", filter);
  useEffect(() => {
    let api = fetch(
      `https://pixabay.com/api/?key=43243858-3093f89423f5b011d18633118&q=${search}${filter}`
    );
    api
      .then(resp => resp.json())
      .then(data => {
        setImages(data.hits);
      });
  }, [search, filter]);
  return (
    <>
      <div className="navbg">
        <div className="navcontent">
          <h2>Stunning royalty-free images & royalty-free stock</h2>
          <p>
            Over 4.4 million+ high quality stock images, videos and music shared
            by our talented community.
          </p>
          <input type="search" onChange={e => setSearch(e.target.value)} />
        </div>
      </div>
      <Menu></Menu>
      <Filters setFilter={setFilter}></Filters>
      <div className="images">
        <div className="image-grid float">
          {images.map(a => {
            return (
              <>
                <img src={a.largeImageURL} alt="" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Images;
