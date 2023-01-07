import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  
  return (
    <div className="col-md-12">
      <ReactPaginate
        className="pagination flex-wrap justify-content-center gap-2 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousLabel="Anterior"
        nextLabel="Siguiente"
        previousClassName="page-link"
        nextClassName="page-link"
        pageCount={info?.pages}
        onPageChange={(data) => {
          setPageNumber(data.selected+1);
        }}
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
