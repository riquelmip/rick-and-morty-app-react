import React from "react";

function Search({ setSearch, setPageNumber }) {
  return (
    <div id="cards" className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="form-group col-sm-12">
            <input
              onChange={(e) => {
                setPageNumber(1);
                setSearch(e.target.value);
              }}
              type="text"
              className="form-control mt-1"
              placeholder="Buscar personaje"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Search;
