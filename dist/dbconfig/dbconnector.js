"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    max: 20,
    //connectionString: process.env.DATABASE_URL + '?sslmode=require',
    connectionString: 'postgres://mtbijyawwysjzy:a629bbf09042ec1f8014a630864202e5fe9aa4bcb7afa59901035f50a988a88c@ec2-3-231-241-17.compute-1.amazonaws.com:5432/d46kgtuu4i1a7?sslmode=require',
    //connectionString: 'postgres://bmc410:Cocacola1!]@localhost:5432/vbStats',
    idleTimeoutMillis: 30000,
    ssl: {
        rejectUnauthorized: false
    }
    //ssl: true,
    //rejectUnauthorized: false
});
exports.default = pool;
//# sourceMappingURL=dbconnector.js.map