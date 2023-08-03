import { Injectable } from '@nestjs/common';
import { Employees } from './employee.constants';

@Injectable()
export class EmployeeService {
  getEmployees(): any {
    return Employees;
  }
}
