const express = require('express');
// Criando uma instância do Express
const app = express();
const path = require('path');

const router = express.Router();
app.use('/',router);
app.use(express.static(path.join(__dirname)));



router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,  'index.html'));
})

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname,  'login.html'));
})


app.get('/ongs', (req, res) => {    
    res.sendFile(path.join(__dirname,  'ongs.html'));
});


app.get('/particular', (req, res) => {    
    res.sendFile(path.join(__dirname,  'particular.html'));
});


app.get('/planos', (req, res) => {    
    res.sendFile(path.join(__dirname,  'planos.html'));
});


app.get('/register', (req, res) => {    
    res.sendFile(path.join(__dirname, 'register.html'));
});


app.get('/saibamais', (req, res) => {    
    res.sendFile(path.join(__dirname,  'saibamais.html'));
});


app.get('/template', (req, res) => {    
    res.sendFile(path.join(__dirname,  'template.html'));
});

// Configurando o servidor para escutar na porta 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});


