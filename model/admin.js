const model = require('../schema/admin.js');

class Admin{

    //列表页面
    list(callback){
        model.findAll().then( (result)=>{
            // console.log( result );
            callback(result);
        });

    }


    //添加页面
    add(res,callback){
        //添加
        model.create(res).then((result)=>{
            callback(1,'ok');
            return;
        }).catch( (err)=>{
            callback(-1,err.message);
            return;
        });

        // model.sync({force: true}).then(function () {
        //     // 已创建数据表
        //     return model.create(res);
        // });

    }


}

const admin = new Admin();
module.exports=admin;