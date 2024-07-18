// Na przykład, że chcemy dodać plik do żądania postu w skrypcie,
// aby przetestować zdolność backendu do przetwarzania załączonych plików.
// Artillery nie ma takiej wbudowanej funkcji.Musimy więc napisać niestandardową metodę,
// która tworzy obiekt FormData, dodaje do niego nowy klucz z wartością zawartości pliku,
// a następnie dodaje ten obiekt do ciała żądania postu. Mamy tu test.yml i processor.js
// W tym samym katalogu jest również plik o nazwie photo.jpg.


const formData = require('form-data');
const fs = require('fs');

function setupMultipartFormData(requestParams, context, ee, next) {
  const form = new formData();
  form.append('file', fs.createReadStream(__dirname + '/photo.jpg'));
  requestParams.body = form;
  return next();
}

module.exports = {
  setupMultipartFormData,
}