# Company Financial Tracker - Backend

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FUnpredictablePrashant%2FFinancial67_Backend&count_bg=%2316B5A0&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)



## About the Project
The project is to create a complete tracker for the company and do various analysis of the company. The user will add the details of company for certain years and the 
various financial calculations will be done. 
The project is part of the Capstone project by HeroVired. The project is created in collaboration with the Finance Program.


## Stats
Total No. of Routes: 38<br>
Completed Routes: 31<br>


## Checklist

### Income Statement
 - [x] Model - Anjani
 - Controllers
   - [x] GET - Anjani
   - [x] GET by ID - Anjani
   - [x] POST - Anjani
   - [x] PUT - Anjani
   - [x] DELETE - Anjani
### Balance Sheet 
- [x] Model - Yash
 - Controllers
   - [x] GET - Mohit
   - [x] GET by ID - Mohit
   - [x] POST - Mohit
   - [x] PUT - Mohit
   - [x] DELETE - Mohit
### Cash Flow
- [x] Model - Chandrasekhar
- Controllers
   - [x] GET - Chandrasekhar
   - [x] GET by ID - Chandrasekhar
   - [x] POST - Chandrasekhar
   - [x] PUT - PK
   - [x] DELETE - PK
### Confidential
- [x] Model - Mohit
- Controllers
   - [x] GET - Abhishek
   - [x] GET by ID - Abhishek
   - [x] POST - Abhishek
   - [x] PUT - PK
   - [x] DELETE - PK
### User
- [x] Model - Mohit
- Controllers
   - [x] GET - Mohit
   - [x] GET by ID - Mohit
   - [x] Login - Mohit
   - [x] POST - Mohit
   - [x] PUT - Mohit
   - [x] DELETE - Mohit
### Company
- [x] Model - HV
- Controllers
   - [x] GET - Srinivas
   - [x] GET by ID - Srivinas
   - [x] POST - Srinivas
   - [x] PUT
   - [x] DELETE

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

## Setting up the Project

### From code base

```sh
git clone git@github.com:UnpredictablePrashant/Financial67_Backend.git
cd Financial67_Backend
```
Create a `.env` file inside it with the following parameters.

```env
PORT=3001
MONGO_URI=""
JWT_SECRET_KEY=qwertyuiop
HASH_KEY=passwordhashingkey
```
Install all the modules.
```sh
npm install
node index.js
```
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

## Concerned People

Tech Co-ordinator: Prashant Kumar Dey<br>
Finance Co-ordinator: Lalit Fulera<br>

### Development Contributors:

![GitHub Contributors Image](https://contrib.rocks/image?repo=UnpredictablePrashant/Financial67_Backend)
