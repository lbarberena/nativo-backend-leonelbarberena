### Instructions

- **Test command:** `npm run dev`
- **PORT:** Use a .env file with port number 8080
> PORT = 8080

> Server will run on: `http://localhost:8080/api/`

### Response Model

The REST API will send back a JSON response to the client as:
```
{
    "success": true/false,
    "msg": "A message goes here",
    "data": {
        Response data goes here
    }
}
```

### Endpoints

- `/zipcodes`: Will return all de ZIP Codes,
only the numbers, this will be used to fill the autocomplete input in the FrontEnd.
- `/zipcodes/{zipCode}`: Will return the information of the selected ZIP Code.