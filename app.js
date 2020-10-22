/************  전역변수   */ 
const express=require('express');
const app = express();
const path = require('path');

/************  ROUTER 등록   */ 
const memberRouter = require('./routes/member');

/************  서버 등록   */ 
app.listen('3000', ()=>{ console.log('http://127.0.0.1:3000'); });

/************  PUG 등록   */ 
app.set('viewengine', 'pug');
app.set('views','./views');
app.locals.pretty = true;


/************  ROUTER    */ 
// For post method 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// For post method 


app.use('/', express.static(path.join(__dirname, './public')));
app.use('/storage', express.static(path.join(__dirname, './uploads')));
app.use('/member', memberRouter);
