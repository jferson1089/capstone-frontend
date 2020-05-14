# Project Overview

## Project Links

- Front End : https://sharp-minsky-727329.netlify.app/
- Back End :  https://jaimeautoshop3.herokuapp.com/api/customer/

## Project Description

I would like to create an application that used a React front end and a Python/Django/PostgreSQL backend. This application is for vehicle repairs at repair shops. This application is intended to be used by the employee to easily identify a customer , pull up their information/appointment. Having many years in experience in the automotive world most repair shops use anywhere from jumbled databases that you need to sort through to find anything, to even pen and paper schedules. This application is for ease of workflow coming into the shop.

## API


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

#### WireFrame

![github-small](https://res.cloudinary.com/jferson1089/image/upload/v1589496722/Screen_Shot_2020-05-14_at_6.50.58_PM_vuadlq.png)

https://docs.google.com/drawings/d/1J7ptZHwe3FXxhQ8mxQGlG8mCbCRPZLqLUGwuZUcnIEQ/edit?usp=sharing

#### React Architecture-

![github-small](https://res.cloudinary.com/jferson1089/image/upload/v1589496722/Screen_Shot_2020-05-14_at_6.50.03_PM_ogcftm.png)

https://docs.google.com/drawings/d/1AmdTz6oUKIMcr9Xl0Khcq0o6GoXttR1h6MsuvO-nRew/edit?usp=sharing

#### Models -

![github-small](https://res.cloudinary.com/jferson1089/image/upload/v1589496722/Screen_Shot_2020-05-14_at_6.50.39_PM_mavuqk.png)

https://docs.google.com/drawings/d/18OKJEnPBi9Y1XghU9xIM51o9sWESE-B_9gIpnQfjRz0/edit?usp=sharing



### MVP/PostMVP 

#### MVP 
- Create a Backend 
- Create a React Front End
- Get Customer Data
- Post new Customer Data
- Delete Customer Data
- Update Customer Data
- Use this Data to Generate a PDF

#### PostMVP 

- Additional styling
- Service Model : List out services offered.
- Full Working Calender

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Research | MVP| 6 hrs | 7hrs  | 7hrs |
| Backend | MVP | 8 hrs | 7hrs | 7hrs |
| Basic Front end layout | 4hrs| 4hrs | 4hrs|
| Building Components | MVP | 4 hrs |	4hrs| 4hrs	|
| Deployment | MVP | 8 hrs | 6 hrs | 6hrs|
| Working with RestAPI | MVP | 4 hrs| 4hrs | 4hrs |
| Testing API calls and bugs | postMVP | 2hrs | 4hrs | 4hrs
| Calender Functionality | postMVP | 4hrs| 2hrs | 2hrs |
|Additional Styling | postMVP | 4hrs | 4hrs	| 4hrs |
| Total | H | 44hrs | 46hrs | 46hrs |

## Additional Libraries

Reactstrap. https://reactstrap.github.io/
React Calender. https://www.npmjs.com/package/react-calendar
js PDF https://www.npmjs.com/package/jspdf


## Code Snippet

```
  <FaPrint size={20} onClick={() => handlePDF(customer)} />
  ```
  
```
    const handlePDF = (customer) => {
        const info = customer
        console.log("Handle pdf was clicked", info)
        var doc = new jsPDF()
        doc.text('Auto Repair Shop', 10, 10)
        doc.text('Repair Shop # 999-999-9999', 10, 15)
        doc.text(`${info.first_name} ${info.last_name}`, 20, 20)
        doc.text(`Phone Number :${info.phone_number}`, 80, 20)
        doc.text(`Appointment : ${info.date_requested}`, 80, 30)
        doc.text(`Vin Number : ${info.vin_number}`, 20, 40)
        doc.text(`Description :${info.reason}`, 5, 60)
        doc.text('Signature :____________________', 100, 250)
        doc.save('repairorder.pdf')
    }
```
This is the code snippet is for the PDF generator. It takes the Id of the customer clicked and then passes that customers Info into the handlePDF function. One it generates it saves and downloads.

## Issues

-I had issues with Heroku deploying. Thanks to Suresh we got it fixed up and deployed

- Updating using a form was a very tricky process, I had a decent amount of time invested into it, but using babysteps and plenty of console logs I corrected first the syntax error but also the error where it was picking a the ID of the last customer instead of the one being clicked.
