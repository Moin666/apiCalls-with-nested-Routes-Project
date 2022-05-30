import React from "react";
import _ from "lodash";

function Pagination({pageSize, count, displayData, currentPagenumber}) {
  const paginationArr = Math.ceil(count.length / pageSize);
  const arrPagination = _.range(1, paginationArr+1);

console.log(currentPagenumber)

  return (
    <nav aria-label="..." className="text-center">
      <ul class="pagination pagination-lg justify-content-center ">
        {arrPagination.map((item) => (
          <li class = {(currentPagenumber == item) ? "page-item active" : "page-item" } onClick={() => {displayData(pageSize,count,item)}}>
            <a class="page-link" href="#" tabindex="-1" >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
