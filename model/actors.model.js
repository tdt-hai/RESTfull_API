const db = require("../utils/db");

module.exports = {
    findAll(){
        return db.select().table('actor');
    },
    findbyId(id){
        return db('actor').where('actor_id',id);
    },
    add(actor){
        return db('actor').insert(actor);
    },
    delete(actor){
       return db('actor')
             .where('actor_id', actor)
             .del()
    },
    update(id,actorWithoutId){
        return db('actor')
               .where('actor_id',id)
               .update(actorWithoutId)
    }


}