# SOC Survival Guide Back End

This repository can be run independently, but can also run alongside the front end repository: https://github.com/SchoolOfCode/w9_frontend-project-nott-in-london

This repository holds the code to make RESTful API, it runs on an Express Server, making queries to a POSTGRESQL Database.
The credentials for the databse will be stored in your environment variables.

The server handles requests to a database that contains online learning resources for coding bootcampers.
The SOC Survival Guide website makes fetch requests to this server




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

PGUSER
PGHOST
PGDATABASE
PGPASSWORD
PGPORT



## Run Locally

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-nott-in-london
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```




## Running Tests

To run tests, run the following command

```bash
  npm run test
```




## API Reference

#### Get all entries

```http
  GET /api/v1/resources
```

No parameters needed to get all entries


#### Get entry by category

```http
  GET /api/v1/resources?category={}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`| `string` | **Required**. Name of category    |


#### Post entry to database

```http
  POST /api/v1/resources
```

| Parameter    | Type     | Description                                       |
| :--------    | :------- | :------------------------------------------------ |
| `body`       | `object` | **Required**. Object containing the parameters    |
| `headline`   | `string` | **Required**. Title of resource                   |
| `description`| `string` | **Required**. Brief description about the resource|
| `url`        | `string` | **Required**. link to the resource                |
| `category`   | `string` | **Required**. what topic is the resource about    |
| `format`     | `string` | **Required**. video or documentation              |


#### Delete Item item

```http
 Delete /api/items/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :----------------------------------|
| `id`      | `string` | **Required**. Id of item to delete |






## Authors

-Christophe Charbonneau-Freeston[https://github.com/St0neofFr33dom]
-Lisa Mac[https://github.com/hamstercat007]
-Miguel Lamas[https://github.com/MiguelLamas]
-Mohamed Ali[https://github.com/CodeNameMoe]
-Mutaz Obsiye [https://github.com/MumtazO]

