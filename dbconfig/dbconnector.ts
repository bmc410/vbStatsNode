import { Pool } from 'pg';

const pool = new Pool ({
    max: 20,
    //connectionString: process.env.DATABASE_URL + '?sslmode=require',
    connectionString: 'postgres://mtbijyawwysjzy:a629bbf09042ec1f8014a630864202e5fe9aa4bcb7afa59901035f50a988a88c@ec2-3-231-241-17.compute-1.amazonaws.com:5432/d46kgtuu4i1a7?sslmode=require',
    //connectionString: 'postgres://bmc410:Cocacola1!]@localhost:5432/vbStats',
    idleTimeoutMillis: 120000,
    ssl: {
        rejectUnauthorized: false
      }
    //ssl: true,
    //rejectUnauthorized: false
});

export default pool;