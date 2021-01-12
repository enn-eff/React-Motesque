# Frontend Developer Home Assignment

You are tasked to create a user interface for a diagnostics app.

>The application fetches a collection of tests from the backend and performs calls to the backend API to execute the individual tests.
>

Application scaffolding has already been done.<br>
You can launch the mock API and React app in developer mode by running:<br>
`yarn start`

The collection of tests should be fetched with GET request from the following URL:<br>
`http://localhost:8001/api/v1/diagnostics/tests`

Individual tests from the collection are executed with POST requests.

You can test the API response from the console, for example:<br>
`curl -X POST http://localhost:8001/api/v1/diagnostics/system/check-info`
<br>
`{"result": "✅"} `

The API is expected to respond with standard HTTP status codes.

**Please create a UI in React that runs and displays the tests.**

The UI should have two pages:

1. The main page with the list of tests
2. A page with the history of test runs (you can store the test results in localstorage)

#### Additional requirements:
* Hooks should be used where suitable
* A CSS framework of your choice may be used to style the components

We will accept either a GitHub link to the finished project or a zip with the entire `react-interview` folder.<br>
Good luck! 
