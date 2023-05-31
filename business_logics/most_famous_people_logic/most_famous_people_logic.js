const famousPeopleDal = require("../../data-access_layer/most_famous_people/famous-people-dal");
function getAllMostFamousPeople() {
  const allFamousPeople = famousPeopleDal.getAllMostFamousPeople();
  return allFamousPeople;
}
function getOneMostFamousPeople(id) {
  const allFamousPeople = famousPeopleDal.getAllMostFamousPeople();
  const famousPeople = allFamousPeople.find((famous) => {
    return famous.id === id;
  });
  return famousPeople;
}
module.exports={getAllMostFamousPeople,getOneMostFamousPeople}
