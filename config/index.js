const connection = require("./connection");

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    //view all the employees
    viewAllEmployees() {
        return this.connection.query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(e2.first_name, ' ' , e2.last_name) AS manager
            FROM employee 
            LEFT JOIN role ON role.id = employee.role_id 
            LEFT JOIN department ON department.id = role.department_id
            LEFT JOIN employee AS e2 ON e2.id = employee.manager_id`
        );
    } 