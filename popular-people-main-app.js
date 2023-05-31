const express = require("express");
const popularPeopleServer = express();
const PORT = 501;
const cors = require("cors");
const famousPeopleController = require("./conrollers/most_famous_people_controller/famous-people-controller");
popularPeopleServer.use(
  cors({
    origin: ["http://localhost:3000/"],
  })
);
popularPeopleServer.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
//http://localhost:501/api/famous-people
popularPeopleServer.use("/api/famous-people", cors(), famousPeopleController);
popularPeopleServer.get("*", (request, response) => {
  response.json("NOT FOUND 404");
});
popularPeopleServer.listen(PORT, () => {
  setInterval(() => {
    console.log("popular people server is upp and listen ton ");
  }, 2000);
});
