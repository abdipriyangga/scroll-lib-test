
"use client"
import { useState } from 'react'
import ReactPaginate from 'react-paginate';

type Props = {
  itemPerPage: any,
}
type PropsItems = {
  currentItems: any
}
const employe = [
  {
    "no": 1,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 2,
    "id": "BDI-002",
    "name": "Ava Williams",
    "birth": "2010, 11, 26"
  },
  {
    "no": 3,
    "id": "BDI-003",
    "name": "Benjamin Davis",
    "birth": "2007, 10, 24"
  },
  {
    "no": 4,
    "id": "BDI-004",
    "name": "Olivia Martinez",
    "birth": "2002, 8, 19"
  },
  {
    "no": 5,
    "id": "BDI-005",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 6,
    "id": "BDI-006",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 7,
    "id": "BDI-007",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 8,
    "id": "BDI-008",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 9,
    "id": "BDI-009",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 10,
    "id": "BDI-010",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 11,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 12,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 13,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 14,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 15,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 16,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 17,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 18,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 19,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },
  {
    "no": 20,
    "id": "BDI-001",
    "name": "Ethan Thompson",
    "birth": "2006, 10, 23"
  },

]

function Home() {
  const totalData = employe.length;
  const dataPerPage = 5;
  const totalPage = Math.ceil(totalData / dataPerPage);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + dataPerPage;
  const currentItems = employe.slice(itemOffset, endOffset);
  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * dataPerPage) % totalData;
    setItemOffset(newOffset);
  };
  return (
    <main>

      <table className="table-auto w-1/2 border my-10 mx-96 text-center divide-y divide-gray-700 border-collapse">
        <thead>
          <tr>
            <th>NO</th>
            <th>ID</th>
            <th>NAME</th>
            <th>BIRTHDAY</th>
            <th>AGE</th>
          </tr>
        </thead>

        <tbody className='table-row-group divide-y divide-gray-700 '>
          {
            currentItems.map((data) => {
              const split = data.birth.split(",").map(Number);
              const fix = new Date(split.toString());
              const dateBirth = `${fix.getFullYear()}-${fix.getMonth()}-${fix.getDate()}`;
              const today = new Date();
              const age = today.getFullYear() - fix.getFullYear();
              return (
                <tr className='table-row'>
                  <td>{data.no}</td>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{dateBirth}</td>
                  <td>{age} ages</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className='flex gap-10 justify-center'
      />
    </main>
  )
}

export default Home