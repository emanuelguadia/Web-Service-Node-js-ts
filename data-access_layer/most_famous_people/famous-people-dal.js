const famousPeopleDatabase =require('../../mock_databases/most_famous_people_databases/famous-people-database');
function getAllMostFamousPeople(){
    const   allFamousPeople= famousPeopleDatabase.mostFamousPeopleDb;
    return allFamousPeople;
   }
   
  
   module.exports ={getAllMostFamousPeople};
    