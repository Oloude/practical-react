const employees = [
  {
    id: 1,
    name: "Ada",
    department: "Engineering",
    salary: 4500,
    yearsExperience: 3,
    skills: ["React", "TypeScript", "CSS"],
    active: true,
  },
  {
    id: 2,
    name: "Daniel",
    department: "Design",
    salary: 3800,
    yearsExperience: 5,
    skills: ["Figma", "UI", "UX"],
    active: true,
  },
  {
    id: 3,
    name: "Grace",
    department: "Engineering",
    salary: 5200,
    yearsExperience: 7,
    skills: ["React", "Node", "TypeScript"],
    active: true,
  },
  {
    id: 4,
    name: "Samuel",
    department: "Marketing",
    salary: 3200,
    yearsExperience: 2,
    skills: ["SEO", "Content"],
    active: false,
  },
  {
    id: 5,
    name: "Mary",
    department: "Engineering",
    salary: 4100,
    yearsExperience: 4,
    skills: ["Vue", "JavaScript", "CSS"],
    active: true,
  },
  {
    id: 6,
    name: "James",
    department: "Marketing",
    salary: 3500,
    yearsExperience: 6,
    skills: ["SEO", "Analytics", "Content"],
    active: true,
  },
  {
    id: 7,
    name: "Esther",
    department: "Design",
    salary: 4200,
    yearsExperience: 3,
    skills: ["Figma", "UX", "Illustrator"],
    active: false,
  },
  {
    id: 8,
    name: "Peter",
    department: "Engineering",
    salary: 6000,
    yearsExperience: 10,
    skills: ["React", "Node", "AWS", "TypeScript"],
    active: true,
  },
];

export default function LevelOne() {
  // getAllActiveUsers()
  // getEmployeeWithHighestSalary()
  // getMostExperiencedEmployee()
  //   averageEmployeeSalary()
  // getActiveAverageEmployeesSalary()
  // getEmployeesWithReactSkill()
  // getEmployeesWithReactAndTypescript()
  // getUniqueSkills()
  // getEmployeeCountByDepartment()
  // getEmpoyleeExpensesByDepartment()
//   findHighestPaidEmployeeByDepartment();
// transformEmployeesData()
// findEmployeesWithMoreThanFiveYearAndEarnLessThanForty()
getDepartmentWithFourthousandAverageSalary()
// rankingOfEmployeesBySalary()

  return <div>LevelOne</div>;
}

// Get the names of all active employees.
function getAllActiveUsers() {
  const allActiveUsers = employees
    .filter((employee) => employee.active)
    .map((user) => user.name);

  console.log(allActiveUsers);
}

// Find the employee with the highest salary.
function getEmployeeWithHighestSalary() {
  let highest = employees[0];

  for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highest.salary) {
      highest = employees[i];
    }
  }

  console.log(highest.name);
}

// Find the employee with the most years of experience.
function getMostExperiencedEmployee() {
  let mostExperiencedEmployee = employees[0];

  for (let i = 1; i < employees.length; i++) {
    if (
      employees[i].yearsExperience > mostExperiencedEmployee.yearsExperience
    ) {
      mostExperiencedEmployee = employees[i];
    }
  }

  console.log(mostExperiencedEmployee.name);
}

// Calculate the average salary of all employees.
function averageEmployeeSalary() {
  let totalEmployeeSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0,
  );
  let averageSalary = totalEmployeeSalary / employees.length;
  console.log(averageSalary);
}

// Calculate the average salary of active employees only.
function getActiveAverageEmployeesSalary() {
  let activeTotalEmployeesSalary = employees.reduce(
    (total, employee) => total + (employee.active ? employee.salary : 0),
    0,
  );
  let activeAverageEmployeesSalary =
    activeTotalEmployeesSalary /
    employees.filter((employee) => employee.active).length;
  console.log(activeAverageEmployeesSalary);
}

// Get all employees who know React.
function getEmployeesWithReactSkill() {
  let employeesWithReactSkill = employees.filter((employee) =>
    employee.skills.includes("React"),
  );

  console.log(employeesWithReactSkill);
}

// Get all employees who know both React and TypeScript.
function getEmployeesWithReactAndTypescript() {
  const employeesWithReactAndTypescript = employees.filter((employee) =>
    employee.skills.some((skill) => ["React", "TypeScript"].includes(skill)),
  );

  console.log(employeesWithReactAndTypescript);
}

// Get a list of every unique skill in the company.
function getUniqueSkills() {
  let skillsArr = employees.flatMap((employee) => employee.skills);

  let uniqueSkills = [...new Set(skillsArr)];

  console.log(uniqueSkills);
}

// Count how many employees belong to each department.
function getEmployeeCountByDepartment() {
  const employeeCountByDepartment = employees.reduce((count, employee) => {
    count[employee.department] = (count[employee.department] || 0) + 1;
    return count;
  }, {});

  console.log(employeeCountByDepartment);
}

// Calculate the total salary expense for each department.
function getEmpoyleeExpensesByDepartment() {
  let employeeExpensesByDepartment = employees.reduce((expenses, employee) => {
    expenses[employee.department] =
      (expenses[employee.department] || 0) + employee.salary;
    return expenses;
  }, {});

  console.log(employeeExpensesByDepartment);
}

// Find the highest-paid employee in each department.
function findHighestPaidEmployeeByDepartment() {
    let employeeCategorizeByDepartment = employees.reduce((department, employee)=>{
        if(!department[employee.department]){
            department[employee.department] = []
        }
        department[employee.department].push(employee)
        return department
    } ,{})

    
    for(let department in employeeCategorizeByDepartment){
        employeeCategorizeByDepartment[department] = employeeCategorizeByDepartment[department].toSorted((a,b) => b.salary - a.salary)
    }

    for(let department in employeeCategorizeByDepartment){
        employeeCategorizeByDepartment[department] = employeeCategorizeByDepartment[department][0]
    }

    console.log(employeeCategorizeByDepartment)
}

// Create this structure:
// [
//   {
//     name: "Ada",
//     department: "Engineering",
//     salary: 4500,
//     monthlySalary: 375
//   },
//   ...
// ]

function transformEmployeesData (){
const transformedData = employees.map(employee => ({name : employee.name, department : employee.department, salary : employee.salary, monthlySalary : Math.round(employee.salary/12)}))

console.log(transformedData)
}

//Find employees who have more than 5 years of experience AND earn less than 4,000.
function findEmployeesWithMoreThanFiveYearAndEarnLessThanForty(){
    let employee = employees.filter(employee => employee.yearsExperience > 5 && employee.salary < 4000)

    console.log(employee)
}

//Get departments where the average salary is above 4,000.

function getDepartmentWithFourthousandAverageSalary(){
let averageSalaryByDepartment = employees.reduce((department, employee)=>{
    if(!department[employee.department]){
  department[employee.department] = []
    }
      department[employee.department].push(employee.salary)
    
    return department
} ,{})

for(let department in averageSalaryByDepartment){
    averageSalaryByDepartment[department] = Math.round(averageSalaryByDepartment[department].reduce((total, salary) => total+salary,0) / averageSalaryByDepartment[department].length)
}

let departmentWithFourthousand = ''


for(let department in averageSalaryByDepartment){
    if(averageSalaryByDepartment[department] === 4000){
        departmentWithFourthousand = department
    }
}


console.log(departmentWithFourthousand)
}



// Create a ranking of employees by salary:
// [
//   {
//     rank: 1,
//     name: "Peter",
//     salary: 6000
//   },
//   ...
// ]
function rankingOfEmployeesBySalary(){
const employeesRankingBySalary  = employees.toSorted((a,b)=> b.salary - a.salary).map((employee, i)=> ({
    rank : i+1,
    name : employee.name,
    salary : employee.salary,
}))

console.log(employeesRankingBySalary)
}


// Yes. The key idea is:

// > **If you only need the highest/lowest item, don't sort everything. Use `reduce()` to keep track of the current winner.**

// For your `findHighestPaidEmployeeByDepartment()`, there are two levels to understand.

// ### 1. Finding the highest-paid employee overall

// Instead of:

// ```js
// const highestPaid = employees
//   .toSorted((a, b) => b.salary - a.salary)[0];
// ```

// you can use:

// ```js
// const highestPaid = employees.reduce((highest, employee) => {
//   if (employee.salary > highest.salary) {
//     return employee;
//   }

//   return highest;
// }, employees[0]);

// console.log(highestPaid);
// ```

// Think of `highest` as:

// > "The highest-paid employee I've seen **so far**."

// For example:

// ```text
// Ada      4500 → highest = Ada
// Daniel   3800 → highest = Ada
// Grace    5200 → highest = Grace
// Samuel   3200 → highest = Grace
// Mary     4100 → highest = Grace
// ...
// Peter    6000 → highest = Peter
// ```

// So you never need to sort.

// ---

// ## 2. Finding the highest-paid employee **per department**

// This is where it gets more interesting.

// You want:

// ```js
// {
//   Engineering: Peter,
//   Design: Daniel,
//   Marketing: James
// }
// ```

// You can build that object directly with `reduce()`:

// ```js
// function findHighestPaidEmployeeByDepartment() {
//   const result = employees.reduce((departments, employee) => {
//     const department = employee.department;

//     if (
//       !departments[department] ||
//       employee.salary > departments[department].salary
//     ) {
//       departments[department] = employee;
//     }

//     return departments;
//   }, {});

//   console.log(result);
// }
// ```

// ### Let's break down the important part

// Initially:

// ```js
// departments = {}
// ```

// Ada comes in:

// ```js
// department = "Engineering"
// ```

// There is no Engineering yet:

// ```js
// !departments["Engineering"]
// ```

// So:

// ```js
// departments["Engineering"] = Ada;
// ```

// Now:

// ```js
// {
//   Engineering: Ada
// }
// ```

// Then Grace comes in:

// ```js
// employee.salary = 5200
// departments.Engineering.salary = 4500
// ```

// This is true:

// ```js
// 5200 > 4500
// ```

// So replace Ada:

// ```js
// {
//   Engineering: Grace
// }
// ```

// Then Peter comes in:

// ```js
// 6000 > 5200
// ```

// Replace Grace:

// ```js
// {
//   Engineering: Peter
// }
// ```

// By the end:

// ```js
// {
//   Engineering: Peter,
//   Design: Daniel,
//   Marketing: James
// }
// ```

// ### The important pattern

// This:

// ```js
// if (
//   !departments[department] ||
//   employee.salary > departments[department].salary
// ) {
//   departments[department] = employee;
// }
// ```

// is a **very useful `reduce()` pattern**.

// It basically says:

// > "If I haven't seen this category before, store this item. Otherwise, replace the stored item only if this item is better."

// You can use the exact same idea for:

// * highest salary per department
// * lowest salary per department
// * oldest employee per department
// * youngest employee per department
// * highest transaction per user
// * most expensive product per category
// * most recent transaction per user

// ---

// ### `sort()` vs `reduce()`

// If you need **all employees ordered**:

// ```js
// employees.toSorted((a, b) => b.salary - a.salary)
// ```

// Use sorting.

// If you only need **the highest one**:

// ```js
// employees.reduce((highest, employee) =>
//   employee.salary > highest.salary ? employee : highest
// )
// ```

// Use `reduce()`.

// So the mental rule is:

// > **Need the whole order? → `sort()`**
// > **Need only the winner? → `reduce()`**

