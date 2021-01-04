//import pool from '../dbconfig/dbconnector'

class TodosController {

    public async get(req, res) {
        try {
            //const client = await pool.connect();

            const sql = "SELECT * FROM players";
            //const { rows } = await client.query(sql);
            //const todos = rows;

            //client.release();
            const products = [
                {
                  id: 1,
                  name: "hammer",
                },
                {
                  id: 2,
                  name: "screwdriver",
                },
                ,
                {
                  id: 3,
                  name: "wrench",
                },
              ];
            
             //var j = JSON.stringify(products);

            res.send(products);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default TodosController;