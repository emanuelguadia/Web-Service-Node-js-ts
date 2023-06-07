const express = require("express");
const Employees = require("./../../models/employees_model/employee-model");
const employeesBusinessLogic = require("./../../business_logics/employees_business_logics/employees_business_logics");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const allEmployees = await employeesBusinessLogic.getAllEmployees();
    if (allEmployees) {
      res.json(allEmployees);
    }
  } catch (err) {
    res.json("The employees database is null");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    const employee = await employeesBusinessLogic.getOneEmployee(id);
    if (employee) {
      res.json(employee);
    }
  } catch (err) {
    res.json("There was error not found the employee ");
  }
});

router.post("/create", async (req, res) => {
  try {
    let name = req.body.name;
    let age = req.body.age;
    let country = req.body.country;
    let position = req.body.position;
    let wage = req.body.wage;
    const employee = new Employees(
      undefined,
      name,
      age,
      country,
      position,
      wage
    );
    //const errors = employee.validatePost();
    // if (errors) {
    //   console.log("The Employees from controller post  errors")
    //   console.log(errors)

    //   response.status(400).json(errors);
    //   return;
    // }

    const addedEmployee = await employeesBusinessLogic.addNewEmployee(employee);
       console.log(addedEmployee)

    res.json(addedEmployee);
  } catch (err) {
    res.json("The Employee is not added to the database");
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    let name = req.body.name;
    let age = req.body.age;
    let country = req.body.country;
    let position = req.body.position;
    let wage = req.body.wage;
    const employee = new Employees(id, name, age, country, position, wage);
    // const errors = employee.validatePUt();
    // if (errors) {
    //   response.status(400).send(errors);
    //   return;
    // }
    const employeeUpdated = await employeesBusinessLogic.updateFullEmployee(
      employee
    );
    if (employeeUpdated) {
      res.json(employeeUpdated);
    }
  } catch (err) {
    res.json();
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    await employeesBusinessLogic.deleteOneEmployee(id);
    res.status(204).json();
  } catch (err) {
    res.json();
  }
});
module.exports = router;
