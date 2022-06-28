# Project Title

A brief description of what this project does and who it's for



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
-Lisa Mac[]
-Miguel Lamas[]
-Mohamed Ali[]
-Mutaz Obsiye []

