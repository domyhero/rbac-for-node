const express = require('express');
const formidable = require('express-formidable');
const admin = require('./controller/adminController');
const index = require('./controller/indexController');
const app = express();

app.set('view engine','ejs');
app.use('/static', express.static('public'));
app.use(formidable({
    encoding: 'utf-8',
    uploadDir: '/upload',
    multiples: true,
}) );

// app.get('/',(req,res)=>{
// 	res.send("前台首页");
// });

app.get('/admin',index.index);		//后台首页

app.get('/admin/user',admin.index);	//管理员列表
app.get('/admin/user/add',admin.add);	//管理员添加
app.post('/admin/user/add',admin.doAdd);	//管理员添加


app.listen(3000,()=>{
	console.log('127.0.0.1:3000 正在运行');
});