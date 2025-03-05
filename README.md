# Indian Cuisine API

Welcome to the Indian Cuisine API! This Express application allows you to query a variety of Indian dishes based on multiple parameters.

## Features

- **GET /dishes**: Retrieve a list of dishes with various filtering and pagination options.
- **Swagger Documentation**: Access the Swagger documentation at `/api-docs` to interact with the API.

## Data Querying

The `/dishes` endpoint supports the following query parameters:

- `name` (string)
- `diet` (string)
- `prep_time` (number)
- `cook_time` (number)
- `flavor_profile` (string)
- `course` (string)
- `state` (string)
- `region` (string)
- `ingredients` (comma separated string)

### Supported Notations for above query param

Each query parameter supports the following notations for querying data except `ingredients`:

- `eq`: Equal to
- `ne`: Not equal to
- `lt`: Less than
- `gt`: Greater than
- `lte`: Less than or equal to
- `gte`: Greater than or equal to

### Pagination

- `pagination` (number)

### Supported Notation for pagination query param

- `pageSize`: Number of dishes per page
- `pageNumber`: should be less than totalPages

### Sorting

- `sort` (comma separated string eg;- name:asc, diet:desc)

### Example Queries

1. **Filter by diet equal to vegetarian**:

   ```
   /dishes?diet[eq]=vegetarian
   ```

2. **Filter by preparation time less than 30 minutes**:

   ```
   /dishes?prep_time[lt]=30
   ```

3. **Filter by cook time greater than or equal to 45 minutes**:

   ```
   /dishes?cook_time[gte]=45
   ```

4. **Filter by flavor profile not equal to spicy**:

   ```
   /dishes?flavor_profile[ne]=spicy
   ```

5. **Filter by course equal to main**:

   ```
   /dishes?course[eq]=main
   ```

6. **Filter by state equal to Punjab**:

   ```
   /dishes?state[eq]=Punjab
   ```

7. **Filter by region equal to North**:

   ```
   /dishes?region[eq]=North
   ```

8. **Filter by state equal to null**:

   ```
   /dishes?state[eq]=null
   ```

9. **Filter dishes that can be made with ingredients 'chicken' and 'rice'**:

   ```
   /dishes?ingredients=chicken,rice
   ```

10. **Filter by preparation time between 10 and 20 minutes**:

    ```
    /dishes?prep_time[gte]=10&prep_time[lte]=20
    ```

11. **Paginate results with page number and page size**:

    ```
    /dishes?pagination[pageNumber]=1&pagination[pageSize]=10
    ```


12. **Sort by name in ascending order and diet in descending order**:

        ```
        /dishes?sort=name:asc,diet:desc
        ```

### Response Structure

The response for the `/dishes` endpoint with pagination will have the following structure:

```json
{
  "pageNumber": 1,
  "pageSize": 10,
  "totalPages": 5,
  "data": []
}
```

## Getting Started

To get started with the Indian Cuisine API, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rohitsaw/indian-cuisine-api.git
   ```

2. **Install dependencies**:

   ```bash
   cd indian-cuisine-api
   npm install
   ```

3. **Start the server**:

   ```bash
   npm start
   ```

4. **Access the API**:
   Open your browser or API client and navigate to `http://localhost:3000/dishes`.

5. **Swagger Documentation**:
   Open your browser and navigate to `http://localhost:3000/api-docs` to access the Swagger documentation and interact with the API.

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact us at [support@example.com](mailto:support@example.com).
