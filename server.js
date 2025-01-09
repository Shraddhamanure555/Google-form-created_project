const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse the form data from the POST request
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.use(express.static('public'));  // Assuming the HTML form is in a 'public' directory

// Handle the form submission
app.post('/submit', (req, res) => {
    const { myname, phonenumber, myemail, myDOB, date, mygender, myconditions, myaddress, mydepartment } = req.body;

    // Here you can save the data to a database or perform other actions
    console.log("Form Data Submitted:");
    console.log("Name:", myname);
    console.log("Phone Number:", phonenumber);
    console.log("Email:", myemail);
    console.log("Bonus:", myDOB);
    console.log("Date:", date);
    console.log("Gender:", mygender);
    console.log("Terms Accepted:", myconditions ? "Yes" : "No");
    console.log("Address:", myaddress);
    console.log("Department:", mydepartment);

    // Send a response back to the client
    res.send('Form successfully submitted!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
