import React, {useState} from 'react';

const FormComponent = () => {
  const [chara, setChara] = useState('');
  const URL = 'http://localhost:3001/api/characters';

  const handleChange = (event) => {
    setChara(event?.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setChara('');

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({char: chara}),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Error:', response.status, response.statusText);
    }
  };

  return (
    <div>
      <h1>Enter A Character</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={chara}
          onChange={handleChange}
          maxLength={1}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default FormComponent;
