
/**
 * Module dependencies.
 */

var express = require('express');
var data = require('./data');
var mov = data.movimientos;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('login', {
    title: 'Banco de Guayaquil',
    pageId: 'login'
  });
});

app.get('/login2', function(req, res){
  res.render('login2', {
    title: 'Banco de Guayaquil',
    pageId: 'login',
    layout: 'layout-login'
  });
});

app.get('/logged', function(req, res){
  var cuentas = [
    {numero: '09123456', disponible: '101.22', contable: '101.22'},
    {numero: '08223344', disponible: '12,000.00', contable: '12,000.00'}
  ]
  var tarjetas = [
    {numero: '376633337855782', disponible: '1,020.00', minimo: '305.88', saldoContado: '3003.79'}
  ]
  res.render('index', {
    pageId: 'index',
    cuentas: cuentas,
    tarjetas: tarjetas,
    title: 'Banco de Guayaquil',
  });
});

app.get('/coordenadas/', function(req, res){
  res.render('coordenadas', {
    title: 'Banco de Guayaquil',
    coordenadas: {codigo1: 'A1', codigo2: 'B9'},
    pageId: 'transferencias',
    layout: 'layout-dialog'
  });
});

app.get('/pagook/', function(req, res){
  res.render('pagook', {
    title: 'Banco de Guayaquil',
    pageId: 'pagook'
  });
});

app.get('/transferencias/', function(req, res){
  res.render('transferencias', {
    title: 'Banco de Guayaquil',
    data: mov[req.params.cuenta],
    pageId: 'transferencias'
  });
});

app.get('/movimientos/:cuenta', function(req, res){
  res.render('movimientos', {
    title: 'Banco de Guayaquil',
    data: mov[req.params.cuenta],
    pageId: 'movimientos'
  });
});

app.get('/pagos/postpago/', function(req, res){
  res.render('pagos-postpago', {
    title: 'Banco de Guayaquil',
    pageId: 'pagos-postpago'
  });
});

app.get('/pagos/recargas/', function(req, res){
  res.render('pagos-recargas', {
    title: 'Banco de Guayaquil',
    pageId: 'pagos-recargas'
  });
});

app.get('/pagos/telefono/', function(req, res){
  res.render('pagos-telefono', {
    title: 'Banco de Guayaquil',
    pageId: 'pagos-telefono'
  });
});

app.get('/pagos/luz/', function(req, res){
  res.render('pagos-luz', {
    title: 'Banco de Guayaquil',
    pageId: 'pagos-luz'
  });
});

app.get('/pagos/agua/', function(req, res){
  res.render('pagos-agua', {
    title: 'Banco de Guayaquil',
    pageId: 'pagos-agua'
  });
});

app.get('/pagos/', function(req, res){
  res.render('pagos', {
    title: 'Banco de Guayaquil',
    pageId: 'pagos'
  });
});

app.get('/agencias/', function(req, res){
  res.render('agencias', {
    title: 'Banco de Guayaquil',
    pageId: 'agencias'
  });
});

app.get('/comprasqr/of11012012', function(req, res){
  res.render('compra', {
    title: 'Banco de Guayaquil',
      pageId: 'compra'
  });
});

app.get('/comprasqr/pagar', function(req, res){
  res.render('pagar', {
    title: 'Banco de Guayaquil',
      pageId: 'pagar'
  });
});

app.get('/comprasqr/pagar2', function(req, res){
  res.render('pagar2', {
    title: 'Banco de Guayaquil',
      pageId: 'pagar2'
  });
});

app.get('/coordenadaspago', function(req, res){
  res.render('coordenadaspago', {
    title: 'Banco de Guayaquil',
    pageId: 'coordenadaspago',
    coordenadas: {codigo1: 'C7', codigo2: 'H1'},
  });
});

app.get('/confirmacionpago', function(req, res){
  res.render('confirmacionpago', {
    title: 'Banco de Guayaquil',
      pageId: 'confirmacionpago'
  });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
