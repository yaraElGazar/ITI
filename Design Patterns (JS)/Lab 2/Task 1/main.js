// Singleton DP

class DBConnection {
  constructor(uri) {
    // Check if the connection already exists
    if (DBConnection.exists) {
      return DBConnection.instance;
    }
    // if connection doesnot exist, create a connection
    this.uri = uri;
    DBConnection.exists = true; // flag
    DBConnection.instance = this; // first connection created
  }

  connect() {
    console.log(`DB ${DBConnection.instance.uri} has been connected!`);
  }
  disconnect() {
    console.log("DB disconnected");
  }
}
const connection = new DBConnection("mongodb://...");
connection.connect();

const connection2 = new DBConnection("SQLdb://...");
connection2.connect();
