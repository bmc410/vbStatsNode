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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class TodosController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //const todos = null;
                const client = new pg_1.Client({
                    user: 'mtbijyawwysjzy',
                    host: 'ec2-3-231-241-17.compute-1.amazonaws.com',
                    database: 'd46kgtuu4i1a7',
                    password: 'a629bbf09042ec1f8014a630864202e5fe9aa4bcb7afa59901035f50a988a88c',
                    port: 5432,
                });
                client.connect()(err => {
                    if (err) {
                        throw err;
                    }
                    else {
                        console.log("Connected");
                    }
                });
                // client.query('SELECT NOW()', (err, res) => {
                //   if (err) {
                //     console.log(err.stack)
                //   } else {
                //     console.log(res)
                //   }
                //   const todos = res
                // });
                client.end();
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
                res.send(products);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.default = TodosController;
//# sourceMappingURL=TodosController.js.map