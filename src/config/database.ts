// Get the client
import { get } from "http";
import mysql from "mysql2/promise";

const getConnection = async () => {
  // Create the connection to database
  const connection = await mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "1234",
    database: "nodejs_backend",
  });
  return connection;
};

export default getConnection;
