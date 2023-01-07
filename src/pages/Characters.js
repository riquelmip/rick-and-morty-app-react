import React, { useState, useEffect } from "react";

import "../css/app.css";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

function Characters() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App-characters">
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="spikes">
        <h1 className="text-center my-5 fw-bold">
          Rick and Morty <br />
          <span className="text-primary">Catálogo</span>
        </h1>
      </div>
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Filters
              setStatus={setStatus}
              setGender={setGender}
              setSpecies={setSpecies}
              setPageNumber={setPageNumber}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </>
    </div>
  );
}

export default Characters;
