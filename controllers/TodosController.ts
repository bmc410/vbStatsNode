//import client from '../dbconfig/dbconnector'
import { Pool, Client } from 'pg';
class TodosController {

    public async get(req, res) {
        try {
            


          var todos = null;
          const client = new Pool({
            user: 'mtbijyawwysjzy',
            host: 'ec2-3-231-241-17.compute-1.amazonaws.com',
            database: 'd46kgtuu4i1a7',
            password: 'a629bbf09042ec1f8014a630864202e5fe9aa4bcb7afa59901035f50a988a88c',
            port: 5432,
          });

          client.connect(function (err, client, done) {
            if(err) {
              throw err
            } else {
              client.query('SELECT * from players', (err, res) => {
                if (err) {
                  throw err
                } else {
                  todos = res.rows;
                  console.log(res);
                }
                todos = res
              });
              console.log("Connected");
            }
          });

          // client.connect()(err => {
          //   if(err) {
          //     throw err
          //   } else {
          //     console.log("Connected");
          //   }
          // })
          
          

          client.end()
          //   res.send(todos);
          // })
          //const client = await pool.connect();

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
            
            //  //var j = JSON.stringify(products);

            res.send(todos);
        } catch (error) {
          res.status(400).send(error.stack);
        }
    }
}

export default TodosController;