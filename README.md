# Company Financial Tracker - Backend

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

The project is to create a complete tracker for the company and do various analysis of the company. The user will add the details 


## Stats
Total No. of Routes: 37<br>
Completed Routes: 8<br>


## Checklist

### Income Statement
 - [x] Model - Anjani
 - Controllers
   - [x] GET - Anjani
   - [ ] GET by ID - Anjani
   - [x] POST - Anjani
   - [ ] PUT - Anjani
   - [ ] DELETE - Anjani
### Balance Sheet 
- [x] Model - Yash
 - Controllers
   - [x] GET - Mohit
   - [x] GET by ID - Mohit
   - [x] POST - Mohit
   - [ ] PUT - Mohit
   - [ ] DELETE - Mohit
### Cash Flow
- [x] Model - Chandrasekhar
- Controllers
   - [ ] GET - Chandrasekhar
   - [ ] GET by ID - Chandrasekhar
   - [ ] POST - Chandrasekhar
   - [ ] PUT
   - [ ] DELETE
### Confidential
- [x] Model - Mohit
- Controllers
   - [ ] GET - Abhishek
   - [ ] GET by ID - Abhishek
   - [ ] POST - Abhishek
   - [ ] PUT
   - [ ] DELETE
### User
- [x] Model - Mohit
- Controllers
   - [x] GET - Mohit
   - [x] GET by ID - Mohit
   - [x] Login - Mohit
   - [x] POST - Mohit
   - [ ] PUT - Mohit
   - [ ] DELETE - Mohit
### Company
- [x] Model - HV
- Controllers
   - [ ] GET - Srinivas
   - [ ] GET by ID - Srivinas
   - [ ] POST - Srinivas
   - [ ] PUT
   - [ ] DELETE

### Profitability Ratio
- Controllers
  - [ ] GET by ID -> Calculate and Get Profitability Ratio for the respective company

### DuPont Analysis
- Controllers
  - [ ] GET by ID -> Calculate and Get DuPont analysis for the respective company

### Liquidity and Solvency Analysis
- Controllers
  - [ ] GET by ID -> Calculate and Get Liquidity and Solvency analysis for the respective company

### Coverage Ratio
- Controllers
  - [ ] GET by ID -> Calculate and Get Coverage Ratio for the respective company

### Activity Ratio
- Controllers
  - [ ] GET by ID -> Calculate and Get Activity Ratio for the respective company

### Turnover Ratio
- Controllers
  - [ ] GET by ID -> Calculate and Get Turnover Ratio for the respective company

### Common Size Analysis
- Controllers
  - [ ] GET by ID -> Calculate and Get Common Size Analysis for the respective company

## User Route

List of User routes are :
<br>
POST `http://localhost:3001/register` <br>
POST `http://localhost:3001/login` <br>
GET `http://localhost:3001/users` <br>
GET `http://localhost:3001/user/:id` <br>

Payload is : 
``` JSON 
{
    "name":"mohit",
    "email":"123@abc.com",
    "password":"!@#1",
    "usertype":"student"
}
```

