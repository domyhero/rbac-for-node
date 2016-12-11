class Index{

    index(req,res,next){
        res.render('admin/index');
    }
}

const index=new Index();
module.exports=index;