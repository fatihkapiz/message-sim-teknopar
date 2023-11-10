# message-sim-teknopar
message-sim-teknopar is a Javascript application that enables the user to select messages from a predetermined pool of messages and push selected messages to a table.
The table can then be saved as a PDF file or XLSX file.

# startup
The application must be started using http-server

To install http server, run:
```npm install -g http-server```

to start http server
  1. clone the application
  2. go to the application directory
  3. run:
  ```http-server .```



# Used Libraries
1. html2pdf to save the table as a pdf file
2. XLSX library to save the table as an XLSX file

# Functions in the Application
1. AddMessage()
2. ClearTable()
3. SendAll()
4. SelectAll()
5. DeselectAll()

# Notes and Program Logic
1. fetch api was used to load the data.json file into an array messages
2. HTML elements were populated using createElement() and appendChild() functions
3. Relevant onclick() functions were embedded to buttons and checkboxes
4. Messages were sorted by their categories as they were being loaded
5. Error checks were implemented before the calls to AddMessage() function to prevent sending with empty input fields
