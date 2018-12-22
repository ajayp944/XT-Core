# Use Cases Details

# UC2->Express Example

1. Mock the profile data as array id,name,city
2. CURD operation
    2.1 /api/profile =>List all profiles
    2.2 /api/profile/1 => get profile by id
    2.3 /api/profile/add =>add new profile
    2.4 /api/profile/id update city
    2.5 /api/profile/id remove profile
    also handle all error
3. use layer approch
    1.DAL
    2.Service
    3.Controller
    4.

# Steps to run

1. npm init
2. npm start
3. Open postman and try below urls
4. http://localhost:8080/api/profiles/16 -> get method for getting profile with 16 as id
5. http://localhost:8080/api/profiles/16 -> delete method for removing profile with 16 as id
6. http://localhost:8080/api/profiles/add -> post method to add profile  and pass body as {"name":"Ankur","city":"gurgaon"}
7. http://localhost:8080/api/profiles-> get method for listing all profiles
