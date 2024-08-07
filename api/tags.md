# Tag Endpoints

## List Tags

Retrieve a paginated listing of the user's tags.

**GET** `/api/tags`

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
      "label": "Production",
      "description": "Production servers and databases",
      "created_at": "2024-08-07T00:00:00Z",
      "updated_at": "2024-08-07T00:00:00Z"
    }
  ],
  "links": {
    "first": "http://example.com/api/tags?page=1",
    "last": "http://example.com/api/tags?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http://example.com/api/tags",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

## Create Tag

Create a new tag.

**POST** `/api/tags`

### Request Body

```json
{
  "label": "Development",
  "description": "Development and staging environments"
}
```

### Response

```json
{
  "data": {
    "id": 2,
    "user_id": 1,
    "label": "Development",
    "description": "Development and staging environments",
    "created_at": "2024-08-07T01:00:00Z",
    "updated_at": "2024-08-07T01:00:00Z"
  }
}
```

## Show Tag

Retrieve details of a specific tag.

**GET** `/api/tags/{id}`

### Response

```json
{
  "data": {
    "id": 1,
    "user_id": 1,
    "label": "Production",
    "description": "Production servers and databases",
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T00:00:00Z"
  }
}
```

## Update Tag

Update an existing tag.

**PUT** `/api/tags/{id}`

### Request Body

```json
{
  "label": "Prod",
  "description": "Updated description for production tag"
}
```

### Response

```json
{
  "data": {
    "id": 1,
    "user_id": 1,
    "label": "Prod",
    "description": "Updated description for production tag",
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T02:00:00Z"
  }
}
```

## Delete Tag

Delete a tag.

**DELETE** `/api/tags/{id}`

### Response

```json
{
  "message": "Tag successfully deleted"
}
```

## Error Responses

In case of errors, the API will return a JSON response with an error message:

```json
{
  "error": "Not Found",
  "message": "Tag not found"
}
```

or

```json
{
  "error": "Forbidden",
  "message": "You are not authorized to access this tag"
}
```

or

```json
{
  "error": "Validation Error",
  "message": "The given data was invalid.",
  "errors": {
    "label": [
      "The label field is required."
    ]
  }
}
```

## Notes

- The `label` field is required and must not exceed 255 characters.
- The `description` field is optional but must not exceed 1000 characters when provided.
- Tags are user-specific. Each user can only access and manage their own tags.
- When updating a tag, you can provide either `label`, `description`, or both. Omitted fields will retain their current values.