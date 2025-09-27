import getConnection from "config/database";

const getAllUser = async () => {
  const connection = await getConnection();
  // query DB
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

const handleDeleteUser = async (id: string) => {
  const connection = await getConnection();
  try {
    const sql = "DELETE FROM `users` WHERE `id` = ? LIMIT 1";
    const values = [id];
    const [result, fields] = await connection.execute(sql, values);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getUserById = async (id: string) => {
  const connection = await getConnection();
  try {
    const sql = "SELECT * FROM `users` WHERE `id` = ?";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result[0];
  } catch (err) {
    console.log(err);
  }
};

const updateUserById = async (id: string, fullName: string, email: string, address: string) => {
  const connection = await getConnection();
  try {
    const sql = "UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?";
    const values = [fullName, email, address, id];

    const [result, fields] = await connection.execute(sql, values);
  } catch (err) {
    console.log(err);
  }
};

export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById };
