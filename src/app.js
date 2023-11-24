// Importando o módulo Express
const express = require('express');

// Criando uma instância do Express
const app = express();


const path = require('path');


// Define a pasta 'views' como o local dos arquivos de visualização
app.use(express.static(path.join(__dirname, 'views')));


// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.get('/login', (req, res) => {    
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.get('/ongs', (req, res) => {    
    res.sendFile(path.join(__dirname, 'views', 'ongs.html'));
});


app.get('/particular', (req, res) => {    
    res.sendFile(path.join(__dirname, 'views', 'particular.html'));
});


app.get('/planos', (req, res) => {    
    res.sendFile(path.join(__dirname, 'views', 'planos.html'));
});


app.get('/register', (req, res) => {    
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});


app.get('/saibamais', (req, res) => {    
    res.sendFile(path.join(__dirname, 'views', 'saibamais.html'));
});


app.get('/template', (req, res) => {    
    res.sendFile(path.join(__dirname, 'views', 'template.html'));
});



// Configurando o servidor para escutar na porta 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
