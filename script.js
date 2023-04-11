// задание 1
// class Employee {
	
// }
// class User extends Employee {
	
// }

// задание 2

// class User {
// 	setName(name) {
// 		this.name = name;
// 	}
// 	getName() {
// 		return this.name;
// 	}
// }
// class Employee extends User {
	
// }
// let employee = new Employee;
// employee.setName('john');
// let name = employee.getName();
// console.log(name);

// задание 3

// class User {
//     setName(name) {
//       this.name = name;
//     }
//     getName() {
//       return this.name;
//     }
//   }
  
//   class Employee extends User {
//     setSalary(salary) {
//       this.salary = salary;
//     }
//     getSalary() {
//       return this.salary;
//     }
//   }
  
//   let emp = new Employee();
//   emp.setName('john');
//   emp.setSalary(50000);
//   let name = emp.getName();
//   let salary = emp.getSalary();
  
//   console.log(name, salary);

// задание 4

// class User {
//     setName(name) {
//       this.name = name;
//     }
//     getName() {
//       return this.name;
//     }
//   }
  
//   class Employee extends User {
//     setAge(age) {
//       if (age >= 18 && age <= 65) {
//         this.age = age;
//       } else {
//         throw new Error('employee age error');
//       }
//     }
//     getAge() {
//       return this.age;
//     }
//   }
  
//   let emp = new Employee();
//   emp.setName('john');
//   emp.setAge(25);
//   let name = emp.getName();
//   let age = emp.getAge();
  
//   console.log(name, age);

// задание 5

// class User {
//     setAge(age) {
//     if (age >= 0) {
//     this.age = age;
//     } else {
//     throw new Error('need age more 0'); }
// } 
//    }
//     class Employee extends User {
//     setAge(age) {
//     if (age <= 120) {
//     super.setAge(age);
//     } else {
//     throw new Error('need age less 120'); }
//  }
//     }

// задание 6

// class User {
//     constructor(name, surn) {
//     this.name = name;
//     this.surn = surn;
//  }
//     getName() {
//     return this.name;
//     }
//     getSurn() {
//     return this.surn;
//  }
//     }
//     class Employee extends User {
//     constructor(name, surn, age, salary) {
//     super(name, surn);
//     this.age = age;
//     this.salary = salary;
//  }
//     getAge() {
//     return this.age + 'yrs.';
// }
//     getSalary() {
//     return this.salary + '$';
//  }
//     }
//     let emp = new Employee('john', 'doe', 30, 5000);
//     console.log(emp.getName(), emp.getSurn(), emp.getAge(), emp.getSalary());

// задание 8

// class User {
// 	#name;
// 	#surn;
	
// 	setName(name) {
// 		this.#name = name;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
	
// 	setSurn(surn) {
// 		this.#surn = surn;
// 	}
// 	getSurn() {
// 		return this.#surn;
// 	}
// }
// class Employee extends User {
// getFull() {
// 	return this.#name + ' ' + this.#surn;
// }
// }
// let employee = new Employee;
// employee.setName('Gleb')
// employee.setSurn('Belogesch')
// console.log(employee.getName() + ' ' + employee.getSurn());
// console.log(employee.getFull())