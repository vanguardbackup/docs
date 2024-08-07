# Remote Server Endpoints

## List Remote Servers

Retrieve a paginated listing of the user's remote servers.

**GET** `/api/remote-servers`

### Query Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `per_page` | Items per page | 15 |

### Response

```json
{
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "label": "Production Server",
      "connection": {
        "ip_address": "192.168.1.100",
        "username": "admin",
        "port": 22,
        "is_database_password_set": true
      },
      "status": {
        "connectivity": "connected",
        "last_connected_at": "2024-08-07T00:00:00Z"
      },
      "created_at": "2024-08-07T00:00:00Z",
      "updated_at": "2024-08-07T00:00:00Z"
    }
  ],
  "links": {
    "first": "http://example.com/api/remote-servers?page=1",
    "last": "http://example.com/api/remote-servers?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http://example.com/api/remote-servers",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

## Create Remote Server

Create a new remote server.

**POST** `/api/remote-servers`

### Request Body

```json
{
  "label": "New Production Server",
  "ip_address": "192.168.1.101",
  "username": "admin",
  "port": 22,
  "database_password": "securepassword"
}
```

### Response

```json
{
  "data": {
    "id": 2,
    "user_id": 1,
    "label": "New Production Server",
    "connection": {
      "ip_address": "192.168.1.101",
      "username": "admin",
      "port": 22,
      "is_database_password_set": true
    },
    "status": {
      "connectivity": "unknown",
      "last_connected_at": null
    },
    "created_at": "2024-08-07T01:00:00Z",
    "updated_at": "2024-08-07T01:00:00Z"
  }
}
```

## Show Remote Server

Retrieve details of a specific remote server.

**GET** `/api/remote-servers/{id}`

### Response

```json
{
  "data": {
    "id": 1,
    "user_id": 1,
    "label": "Production Server",
    "connection": {
      "ip_address": "192.168.1.100",
      "username": "admin",
      "port": 22,
      "is_database_password_set": true
    },
    "status": {
      "connectivity": "connected",
      "last_connected_at": "2024-08-07T00:00:00Z"
    },
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T00:00:00Z"
  }
}
```

## Update Remote Server

Update an existing remote server.

**PUT** `/api/remote-servers/{id}`

### Request Body

```json
{
  "label": "Updated Production Server",
  "port": 2222
}
```

### Response

```json
{
  "data": {
    "id": 1,
    "user_id": 1,
    "label": "Updated Production Server",
    "connection": {
      "ip_address": "192.168.1.100",
      "username": "admin",
      "port": 2222,
      "is_database_password_set": true
    },
    "status": {
      "connectivity": "connected",
      "last_connected_at": "2024-08-07T00:00:00Z"
    },
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T02:00:00Z"
  }
}
```

## Delete Remote Server

Delete a remote server.

**DELETE** `/api/remote-servers/{id}`

### Response

```json
{
  "message": "Remote server successfully deleted"
}
```

## Error Responses

In case of errors, the API will return a JSON response with an error message:

```json
{
  "error": "Not Found",
  "message": "Remote server not found"
}
```

or

```json
{
  "error": "Forbidden",
  "message": "You are not authorized to access this remote server"
}
```

or

```json
{
  "error": "Validation Error",
  "message": "The given data was invalid.",
  "errors": {
    "ip_address": [
      "The ip address has already been taken."
    ]
  }
}
```