const mongoose = require("mongoose");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolvers");

const { ApolloServer } = require("apollo-server");

require("dotenv").config({ path: ".env" });

mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: true,
    //useCreateIndex: true,
  },
  (err, _) => {
    if (err) {
      console.log("No connection");
    } else {
      server();
    }
  }
);

function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
  });

  serverApollo.listen().then(({ url }) => {
    console.log("################################");
    console.log(`Server On ${url}`);
    console.log("################################");
  });
}
