import getConnection from "config/database";

const getAllUser = async () => {
  const connection = await getConnection();
  // A simple SELECT query
  try {
    const [results, fields] = await connection.query("SELECT * FROM `users`");
    return results;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const handleCreateUser = async (fullName: string, email: string, address: string) => {
  const connection = await getConnection();
  // insert into DB
  try {
    const sql = "INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)";
    const values = [fullName, email, address];

    const [result, fields] = await connection.execute(sql, values);
  } catch (err) {
    console.log(err);
  }
};

export { handleCreateUser, getAllUser };
