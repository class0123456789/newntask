module.exports = app => {
    "use strict";
    var Users = app.db.Users;
     Users.create({name:'itbilu1', password:'itbilu1.com',email:'itbilu1@126.com'});
    //console.log(Users);
    app.route("/user")
    .all(app.auth.authenticate())
    .get((req,res)=>{
      Users.findById(req.params.id,{
        attributes:["id","name","email"]
      })
      .then(result=>res.json(result))
      .catch(error=>{
        res.status(412).json({msg:error.message});
      });
    })
    .delete((req,res)=>{
      Users.destroy({where:{id:req.user.id}})
      .then(result=>res.sendStatus(204))
      .catch(error=>{
        res.status(412).json({msg:error.message});
      });
    });
/*    app.get("/users/:id",(req,res)=>{
      Users.findById(req.params.id,{
        attributes:["id","name","password","email"]
      })
      .then(result=>res.json(result))
      .catch(error=>{
        res.status(412).json({msg:error.message});
      });

    });*/

/*    app.delete("/users/:id",(req,res)=>{
      Users.destroy({where:{id:req.params.id}})
      .then(result=>res.sendStatus(204))
      .catch(error=>{
        res.status(412).json({msg:error.message});
      });

    });*/

    app.post("/users",(req,res)=>{//仅支持json方式提交Content-Type=application/json
      Users.create(req.body)
      .then(result=>res.json(result))
      .catch(error=>{
        res.status(412).json({msg:error.message});
      });

    });

}
