var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views')
app.set('view engine', 'jade')
app.listen(port)

console.log('port' + port)

app.get('/',function(req,res){
    res.render('index',{
        title:'index'
    })
})
app.get('/detail',function(req,res){
    res.render('detail',{
        title:'detail'
    })
})
app.get('/admin',function(req,res){
    res.render('admin',{
        title:'admin'
    })
})
app.get('/list',function(req,res){
    res.render('list',{
        title:'list'
    })
})