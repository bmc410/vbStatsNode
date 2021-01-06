import pool from '../dbconfig/dbconnector'
import { Pool } from 'pg';
class TodosController {

    public async get(req, res) {
        try {
            
          // const pool = new Pool({
          //   user: 'mtbijyawwysjzy',
          //   host: 'ec2-3-231-241-17.compute-1.amazonaws.com',
          //   database: 'd46kgtuu4i1a7',
          //   password: 'a629bbf09042ec1f8014a630864202e5fe9aa4bcb7afa59901035f50a988a88c',
          //   port: 5432,
          // });

          const client = await pool.connect();

            //const sql = "SELECT * FROM players";
            //const { rows } = await pool.query(sql);
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