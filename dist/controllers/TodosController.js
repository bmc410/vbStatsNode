"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnector_1 = __importDefault(require("../dbconfig/dbconnector"));
//import { Pool, Client } from 'pg';
class TodosController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var todos = null;
                // const pool = new client({
                //   user: 'mtbijyawwysjzy',
                //   host: 'ec2-3-231-241-17.compute-1.amazonaws.com',
                //   database: 'd46kgtuu4i1a7',
                //   password: 'a629bbf09042ec1f8014a630864202e5fe9aa4bcb7afa59901035f50a988a88c',
                //   port: 5432,
                // });
                dbconnector_1.default.connect(function (err, client1, done) {
                    if (err) {
                        throw err;
                    }
                    else {
                        client1.end();
                        //res.end();
                        res.status(200).send("Connected");
                        // client1.query("SELECT NOW()", (err, res) => {
                        //   done();
                        //   if (err) {
                        //     res.status(400).send(err.stack);
                        //   } else {
                        //     res.status(200).send(res.rows);
                        //     //console.log(res.rows);
                        //   }
                        //   //todos = res
                        // });
                        // console.log("Connected");
                    }
                });
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
            }
            catch (error) {
                res.status(400).send(error.stack);
            }
        });
    }
}
exports.default = TodosController;
//# sourceMappingURL=TodosController.js.map