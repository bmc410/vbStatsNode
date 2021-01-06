import pg from '../dbconfig/dbconnector'
//import { Pool, Client } from 'pg';
class TodosController {

    public async get(req, res) {
        try {
          var todos = null;

          // const pool = new client({
          //   user: 'mtbijyawwysjzy',
          //   host: 'ec2-3-231-241-17.compute-1.amazonaws.com',
          //   database: 'd46kgtuu4i1a7',
          //   password: 'a629bbf09042ec1f8014a630864202e5fe9aa4bcb7afa59901035f50a988a88c',
          //   port: 5432,
          // });

          // pg.connect(function (err, client, done) {
          //   if(err) {
          //     throw err
          //   } else {
          //     //client1.end();
          //     //res.end();
          //     res.status(200).send("Connected");
              pg.query("SELECT NOW()", (err, res) => {
                //done();
                if (err) {
                  res.status(400).send(err.stack);
                } else {
                  res.status(200).send(res.rows);
                  //console.log(res.rows);
                }
                //todos = res
              });
              // console.log("Connected");
            }
          //});

          // client.connect()(err => {
          //   if(err) {
          //     throw err
          //   } else {
          //     console.log("Connected");
          //   }
          // })
          
          

          //client.end()
          //   res.send(todos);
          // })
          //const client = await pool.connect();

            //const sql = "SELECT * FROM players";
            //const { rows } = await pool.query(sql);
            //const todos = rows;

            //client.release();
            
            //  //var j = JSON.stringify(products);

            //res.status(200).send("HERE");
        } catch (error) {
          res.status(400).send(error.stack);
        }
    }
}

export default TodosController;