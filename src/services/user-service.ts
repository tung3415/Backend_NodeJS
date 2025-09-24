import getConnection from "../config/database";

const handleCreateUser = (fullName: string, email: string, address: string) => {
  // insert into DB

  // return result
  console.log(">>> inserted a new user");
};

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

export { handleCreateUser, getAllUser };
