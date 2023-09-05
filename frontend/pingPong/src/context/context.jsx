import {createContext, useState, useEffect} from 'react';

const CharContext = createContext();

const CharContextProvider = ({children}) => {
  const DB_URL = 'http://localhost:3001/api/characters';
  const [charactersDB, setCharactersDB] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    fetchAllData();
  }, [key]);

  const fetchAllData = async () => {
    console.log('triggred');
    const response = await fetch(DB_URL);
    const data = await response.json();
    setCharactersDB(data);
  };
  const valueToShare = {
    charactersDB,
    setKey,
  };

  return (
    <CharContext.Provider value={valueToShare}>
      {children}
    </CharContext.Provider>
  );
};

export {CharContext, CharContextProvider};
