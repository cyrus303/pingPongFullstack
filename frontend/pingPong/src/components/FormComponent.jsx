import {useState, useContext} from 'react';
import {CharContext} from '../context/context';

const FormComponent = () => {
  const [character, setCharacter] = useState('');
  const URL = 'http://localhost:3001/api/characters';
  const {setKey} = useContext(CharContext);

  const handleChange = (event) => {
    const value = event?.target?.value;
    const regex = /^[a-zA-Z]*$/;

    if (regex.test(value) && value !== ' ') {
      setCharacter(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCharacter('');
    setKey((prev) => prev + 1);

    if (character.length > 0) {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({char: character}),
      });

      if (!response.ok) {
        console.error('Error:', response.status, response.statusText);
      }
    }
  };

  return (
    <div>
      <h1>Enter A Character</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={character}
          onChange={handleChange}
          maxLength={1}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default FormComponent;
