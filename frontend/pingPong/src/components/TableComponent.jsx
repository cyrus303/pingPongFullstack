import {useContext} from 'react';
import {CharContext} from '../context/context';

const TableComponent = () => {
  const CHAR_URL = 'http://localhost:3001/api/characters/';
  const {charactersDB} = useContext(CharContext);

  const handleClick = (row) => {
    fetchCharDetails(row.original);
  };

  const fetchCharDetails = async (char) => {
    const response = await fetch(CHAR_URL + char);
    const data = await response.json();
    const stringy = JSON.stringify(data, null, 4);
    alert(stringy);
  };

  console.log(charactersDB);

  return (
    charactersDB.length > 0 && (
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
            {charactersDB.map((row) => {
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
    )
  );
};

export default TableComponent;
