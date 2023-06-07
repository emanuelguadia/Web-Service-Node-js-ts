//const createsTablesCommandsInMysql = require("./../../creates_tables_ commands_in_mysql/creates-tables-commands-in-mysql");
const dataAccessLayers = require("./../../data_access_layers/data-access-layers");
//getAllEmployees
async function getAllEmployees() {
  try {
    const sql = `SELECT * FROM employees`;
    const allEmployees = await dataAccessLayers.sendQueryMysqlWithNodeJs(sql);
    return allEmployees;
  } catch (err) {
    return err;
  }
}
//getOneEmployee
async function getOneEmployee(id) {
  try {
    const sql = `SELECT * FROM employees WHERE id=?`;
    const values = [id];
    const allEmployees = await dataAccessLayers.sendQueryMysqlWithNodeJs(
      sql,
      values
    );
    const employee = allEmployees[0];
    return employee;
  } catch (err) {
    return err;
  }
}
//addNewEmployee
async function addNewEmployee(employee) {
  try {
    const sql = `INSERT INTO employees(name,age,country,position,wage) value(?,?,?,?,?)`;
    const values = [
      employee.name,
      employee.age,
      employee.country,
      employee.position,
      employee.wage,
    ];
    const info = await dataAccessLayers.sendQueryMysqlWithNodeJs(sql, values);
    employee.id = info.insetId;
    return info.insetId > 0 ? employee : null;
  } catch (err) {
    return err;
  }
}
//updateEmployee
async function updateFullEmployee(employee) {
  try {
    const sql = `UPDATE employees SET name='${employee.name}',age=${employee.age},country='${employee.country}',position='${employee.position}',wage=${employee.wage} WHERE id=${employee.id}`;
    const values = [
      employee.id,
      employee.name,
      employee.age,
      employee.country,
      employee.position,
      employee.wage,
      employee.id,
    ];
    const info = await dataAccessLayers.sendQueryMysqlWithNodeJs(sql, values);
    return info.affectedRows > 0 ? employee : null;
  } catch (err) {
    return err;
  }
}
//deleteOneEmployee
async function deleteOneEmployee(id) {
  try {
    const sql = "DELETE FROM employees WHERE id=?";
    const values = [id];
    await dataAccessLayers.sendQueryMysqlWithNodeJs(sql, values);
  } catch (err) {
    return err;
  }
}

//createDatabase
async function createDatabase() {
  try {
    const sql = "CREATE DATABASE employeeSystem";
    const answer = await createsTablesCommandsInMysql.createDatabaseOrTable(
      sql
    );
    console.log(answer);
  } catch (err) {}
}
//createDatabase()
//createTable
async function createTable() {
  try {
  } catch (err) {}
  const sql =`CREATE TABLE employees(id int PRIMARY KEY  AUTO_INCREMENT,name varchar(255),age int,country varchar(255) ,position varchar(255),wage int)`;
  const answer = await createsTablesCommandsInMysql.createDatabaseOrTable(sql);
  console.log(answer);
}
//createTable();

deleteOneEmployee(67);

module.exports = {
  getAllEmployees,
  getOneEmployee,
  addNewEmployee,
  updateFullEmployee,
  deleteOneEmployee,
};
