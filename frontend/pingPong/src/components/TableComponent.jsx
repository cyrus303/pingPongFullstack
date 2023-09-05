import React, {useState, useEffect} from 'react';

const TableComponent = () => {
  const DB_URL = 'http://localhost:3001/api/characters';
  const CHAR_URL = 'http://localhost:3001/api/characters/';
  const [charDB, setCharDB] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(DB_URL);
    const data = await response.json();
    setCharDB(data);
  };

  const handleClick = (row) => {
    fetchCharDetails(row.original);
  };

  const fetchCharDetails = async (char) => {
    const response = await fetch(CHAR_URL + char);
    const data = await response.json();
    const stringy = JSON.stringify(data, null, 4);
    alert(stringy);
  };

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr>
            <th>Id</th>
            <th>Original</th>
            <th>Transformed</th>
            <th>Timestamp</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {charDB.map((row) => {
            return (
              <tr key={row._id}>
                <td>{row._id.slice(-4)}</td>
                <td>{row.original}</td>
                <td>{row.transformed}</td>
                <td>{row.sentAt}</td>
                <td>
                  <button onClick={() => handleClick(row)}>
                    More
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
