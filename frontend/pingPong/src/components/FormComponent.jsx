import React, {useState} from 'react';

const FormComponent = () => {
  const [char, setChar] = useState('');
  const URL = 'http://localhost:3001/api/characters/';

  const handleChange = (event) => {
    setChar(event?.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setChar('');
    console.log(char);
    const response = await fetch(URL + char);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Enter A Character</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={char}
          onChange={handleChange}
          maxLength={1}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default FormComponent;
