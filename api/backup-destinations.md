# Backup Destination Endpoints

## List Backup Destinations

Retrieve a paginated listing of the user's backup destinations.

**GET** `/api/backup-destinations`

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
      "label": "AWS S3 Backup",
      "type": "s3",
      "s3_bucket_name": "my-backups",
      "path_style_endpoint": false,
      "s3_region": "us-west-2",
      "created_at": "2024-08-07T00:00:00Z",
      "updated_at": "2024-08-07T00:00:00Z"
    }
  ],
  "links": {
    "first": "http://example.com/api/backup-destinations?page=1",
    "last": "http://example.com/api/backup-destinations?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http://example.com/api/backup-destinations",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

## Create Backup Destination

Create a new backup destination.

**POST** `/api/backup-destinations`

### Request Body

```json
{
  "label": "Custom S3 Backup",
  "type": "custom_s3",
  "s3_access_key": "your_access_key",
  "s3_secret_key": "your_secret_key",
  "s3_bucket_name": "custom-backups",
  "custom_s3_endpoint": "https://custom-s3.example.com",
  "path_style_endpoint": true
}
```

### Response

```json
{
  "data": {
    "id": 2,
    "user_id": 1,
    "label": "Custom S3 Backup",
    "type": "custom_s3",
    "s3_bucket_name": "custom-backups",
    "path_style_endpoint": true,
    "s3_endpoint": "https://custom-s3.example.com",
    "created_at": "2024-08-07T01:00:00Z",
    "updated_at": "2024-08-07T01:00:00Z"
  }
}
```

## Show Backup Destination

Retrieve details of a specific backup destination.

**GET** `/api/backup-destinations/{id}`

### Response

```json
{
  "data": {
    "id": 1,
    "user_id": 1,
    "label": "AWS S3 Backup",
    "type": "s3",
    "s3_bucket_name": "my-backups",
    "path_style_endpoint": false,
    "s3_region": "us-west-2",
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T00:00:00Z"
  }
}
```

## Update Backup Destination

Update an existing backup destination.

**PUT** `/api/backup-destinations/{id}`

### Request Body

```json
{
  "label": "Updated S3 Backup",
  "s3_bucket_name": "new-backups"
}
```

### Response

```json
{
  "data": {
    "id": 1,
    "user_id": 1,
    "label": "Updated S3 Backup",
    "type": "s3",
    "s3_bucket_name": "new-backups",
    "path_style_endpoint": false,
    "s3_region": "us-west-2",
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T02:00:00Z"
  }
}
```

## Delete Backup Destination

Delete a backup destination.

**DELETE** `/api/backup-destinations/{id}`

### Response

```json
{
  "message": "Backup destination successfully deleted"
}
```

## Error Responses

In case of errors, the API will return a JSON response with an error message:

```json
{
  "error": "Not Found",
  "message": "Backup destination not found"
}
```

or

```json
{
  "error": "Forbidden",
  "message": "You are not authorized to access this backup destination"
}
```