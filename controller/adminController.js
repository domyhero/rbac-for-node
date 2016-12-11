const model=require('../model/admin.js');
const request=require('../request/admin.js');
const crypto = require("crypto");

class Admin{

    //首页
    index(req,res,next){
        model.list( (result)=>{
            res.render('admin/admin/list',{"data":result});
        });


    }

    //添加
    add(req,res,next){
        res.render('admin/admin/add');
    }


    //接受提交添加 // req.files; req.fields;
    doAdd(req,res,next){

        //验证
        request.add(req,(err,result)=>{

            if(err>0){
                let myDate = new Date();

                //加密
                const md5 = crypto.createHash('md5');
                req.fields.password=md5.update( req.fields.password ).digest('base64')

                req.fields.add_time=myDate.toLocaleTimeString();
                // console.log( req.fields );
                //添加
                model.add(req.fields,(err,msg)=>{
                    if(err>0){
                        res.redirect('/admin/user');
                    }else{
                        res.json(msg);
                    }

                });
            }else{
                res.end(result);
            }

        });

    }

}

const admin=new Admin();
module.exports=admin;