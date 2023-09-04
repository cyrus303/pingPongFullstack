const {Router} = require('express');
const router = Router();

const isVowel = (char) => {
  charLower = char.toLowerCase();
  if (
    charLower === 'a' ||
    charLower === 'e' ||
    charLower === 'i' ||
    charLower === 'o' ||
    charLower === 'o'
  ) {
    return true;
  } else {
    return false;
  }
};

const charDB = [];

router.get('/', (request, response) => {
  response.send(charDB);
});

router.get('/:char', (request, response) => {
  const char = request.params.char.toLowerCase();

  if (parseInt(char)) {
    response.sendStatus(400);
  } else {
    const responseObj = {
      isVowel: isVowel(char),
      isConsonant: !isVowel(char),
      asciiValue: char.charCodeAt(),
      alphaIndex: char.charCodeAt() - 96,
    };

    response.send(responseObj);
  }
});

router.post('/', (request, response) => {
  const {char} = request.body;

  const data = {
    _id: new Date(),
    original: char,
    transformed: char.toUpperCase(),
    sentAt: new Date().toLocaleDateString(),
  };

  charDB.push(data);
  response.send(charDB);
});

module.exports = router;
