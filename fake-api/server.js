const jsonServer = require('json-server');
const path = require('path');

const app = jsonServer.create();

function pickDbFile(acceptLanguage) {
  if (acceptLanguage && acceptLanguage.toLowerCase().startsWith('en')) {
    return path.join(__dirname, 'en-US.json');
  }
  // qualquer coisa que não seja "en*" cai no português, por padrão
  return path.join(__dirname, 'pt-BR.json');
}

// habilita CORS, headers padrão e cache desabilitado — necessário porque
// o Angular (porta 4200) e essa API (porta 3000) são origens diferentes
app.use(jsonServer.defaults());

app.use((req, res, next) => {
  const lang = req.headers['accept-language'];
  const dbFile = pickDbFile(lang);

  console.log('----------------');
  console.log(req.method, req.url);
  console.log('Accept-Language:', lang);
  console.log('Arquivo:', dbFile);


  const router = jsonServer.router(dbFile);
  router(req, res, next);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[fake-api] rodando em http://localhost:${PORT}`);
});
