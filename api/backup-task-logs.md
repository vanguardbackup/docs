# Backup Task Logs API

This page documents the API endpoints for managing backup task logs in the Vanguard application.

## List Backup Task Logs

Retrieve a paginated listing of the user's backup task logs.

**GET** `/api/backup-task-logs`

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
      "backup_task_id": 1,
      "output": "Backup completed successfully",
      "finished_at": "2024-08-07T01:30:00Z",
      "status": "successful",
      "created_at": "2024-08-07T01:00:00Z"
    }
  ],
  "links": {
    "first": "http://example.com/api/backup-task-logs?page=1",
    "last": "http://example.com/api/backup-task-logs?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http://example.com/api/backup-task-logs",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

## Show Backup Task Log

Retrieve details of a specific backup task log.

**GET** `/api/backup-task-logs/{id}`

### Response

```json
{
  "data": {
    "id": 1,
    "backup_task_id": 1,
    "output": "Backup completed successfully",
    "finished_at": "2024-08-07T01:30:00Z",
    "status": "successful",
    "created_at": "2024-08-07T01:00:00Z"
  }
}
```

## Delete Backup Task Log

Delete a backup task log.

**DELETE** `/api/backup-task-logs/{id}`

### Response

A successful deletion will return a `204 No Content` status with no body.

## Error Responses

In case of errors, the API will return a JSON response with an error message:

```json
{
  "error": "Not Found",
  "message": "Backup task log not found"
}
```

or

```json
{
  "error": "Forbidden",
  "message": "You are not authorized to access this backup task log"
}
```

## Notes

- Backup task logs are user-specific. Each user can only access and manage logs for their own backup tasks.
- The `status` field in the response will be either "successful" or "failed".
- All endpoints require authentication and appropriate permissions.
- The `view-backup-tasks` permission is required for listing and viewing backup task logs.
- The `delete-backup-tasks` permission is required for deleting backup task logs.