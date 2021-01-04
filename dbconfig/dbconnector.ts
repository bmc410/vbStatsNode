import { Pool } from 'pg';

const pool = new Pool ({
    max: 20,
    //connectionString: 'postgres://root:newPassword@localhost:port/dbname',
    connectionString: 'postgres://bmc410:Cocacola1!]@localhost:5432/vbStats',
    idleTimeoutMillis: 30000
});

export default pool;