import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://react.indexial.in/api/contacts.php/create";

class EmployeeService {

     getEmployees(){
         return axios.get(EMPLOYEE_API_BASE_URL);
     }

    createEmployee(employee){
        console.log("save")
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

     getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
        
    }

     updateEmployee(employee, employeeId){
         return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
     }

     deleteEmployee(employeeId){
         return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()