import app from "./";
import dotenv from "dotenv";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";

dotenv.config();

const DB = process.env.DATABASE_URI?.replace(
  "<PASSWORD>",
  String(process.env.DATABASE_PASSWORD)
);

///////////// MongoDB connection with pure mongodb

if (DB) {
  (async () => {
    try {
      await mongoose.connect(DB);
      console.log("DB connected!");
    } catch (err) {
      console.log(err);
    }
  })();
}

const { PORT } = process.env;

if (!PORT) {
  console.error("ERROR: No PORT specified");
  throw new Error("PORT is not defined in .env");
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

///////////// MongoDB connection with pure mongodb

// if (DB) {
//   async function listDatabases(client: MongoClient) {
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach((db: any) => console.log(` - ${db.name}`));
//   }
//   (async () => {
//     const client = new MongoClient(DB);
//     try {
//       await client.connect();
//       console.log("DB connected!");
//       await listDatabases(client);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       await client.close();
//     }
//   })();
// }
