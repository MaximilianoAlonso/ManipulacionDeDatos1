
const db = require("../database/models")
    module.exports = {
        list : (req,res) => {
        db.Actor.findAll() 
        .then(actors => {
       
          return res.render("actorsList",{
            actors
          }) 
        })
    .catch(error => console.log(error))     
        },
        detail : (req,res) => {
         
                db.Actor.findByPk(req.params.id)
                .then(actors => {
               
                  return res.render("actorsDetail",{
                    actors
                  }) 
                })
            .catch(error => console.log(error))     
                }
    }
    