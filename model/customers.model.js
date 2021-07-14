const db = require("../utils/db");

module.exports = {
    findAll(){
        return db.select().table('customer');
    },
    findbyId(id){
        return db('customer').where('customer_id',id);
    },
    add(customer){
        return db('customer').insert(customer);
    },
    delete(customer){
        return db('customer')
              .where('customer_id', customer)
              .del()
     },
    update(id,customerWithoutId){
        return db('customer')
               .where('customer_id',id)
               .update(customerWithoutId)
    }

}