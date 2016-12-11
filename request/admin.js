class admin{

    add(req,callback){
        // console.log( req.fields );
        let username=req.fields.username;
        let password=req.fields.password;
        let mail=req.fields.mail;
        let role_id=req.fields.role_id;

        if( username.length <= 0 ){
            callback(-1,'用户名不能为空');
            return;
        }else if( password.length <= 0){
            callback(-1,'密码不能为空');
            return;
        }else if( mail.length <= 0 ){
            callback(-1,'邮箱不能为空');
            return;
        }else{
            callback(1,'ok');
            return;
        }

    }

}

const request=new admin();
module.exports=request;