var express= require('express');
var app = express();
var ejs = require('ejs');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

// 파일을 디스크에 저장
var storage = multer.diskStorage({
	// 경로 지정
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // 파일명 지정
  filename: function (req, file, cb) {
  	// 이미지이면 | if(file.mimetype == 'image/jpeg'){}
    cb(null, file.originalname);
    // 텍스트이면 | if(text){}
  }
})
var upload = multer({ storage: storage })

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
app.use(express.static('public'));

// upload path에 uploads 폴더 지정
app.use('/uploads', express.static('uploads'));

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







// ------------------------------------------------
app.listen(3000, function(){
	console.log('Server Run at 3000 port!');
});
