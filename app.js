var nodemailer = require('nodemailer');
var express= require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'uploads/'}); // 파일 업로드 경로 지정(자동 생성)

var fs = require('fs');

app.listen(3000, function(){
	console.log('Server Run at 3000 port!');
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// ------------------------------------------------
 app.get('/upload', (req, res) => {
 	res.render('upload');
 })

// 파라미터: upload.single(form 필드 name) - 하나의 파일만 전송(다중 파일은 array)
// 텍스트 필드가 있는 경우, req.body가 이를 포함할 것입니다.
// req에 file 전달(req.file)
 app.post('/upload', upload.single('photo'), (req, res) => {
 	res.send('uploaded!!' + req.file);
 	console.log(req.file);
 })


