# Backup Task Endpoints

## List Backup Tasks

Retrieve a paginated listing of the user's backup tasks.

**GET** `/api/backup-tasks`

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
      "remote_server_id": 2,
      "backup_destination_id": 1,
      "label": "Daily Database Backup",
      "description": "Backup of production database",
      "source": {
        "path": "/var/www/html",
        "type": "database",
        "database_name": "production_db",
        "excluded_tables": "logs,cache"
      },
      "schedule": {
        "frequency": "daily",
        "time": "01:00",
        "custom_cron": null
      },
      "storage": {
        "max_backups": 7,
        "appended_filename": "daily_backup",
        "path": "/backups"
      },
      "status": "ready",
      "has_isolated_credentials": true,
      "created_at": "2024-08-07T00:00:00Z",
      "updated_at": "2024-08-07T00:00:00Z"
    }
  ],
  "links": {
    "first": "http://example.com/api/backup-tasks?page=1",
    "last": "http://example.com/api/backup-tasks?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http://example.com/api/backup-tasks",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

## Create Backup Task

Create a new backup task.

**POST** `/api/backup-tasks`

### Request Body

```json
{
  "remote_server_id": 2,
  "backup_destination_id": 1,
  "label": "Weekly Full Backup",
  "description": "Full backup of all files",
  "source_path": "/home",
  "frequency": "weekly",
  "maximum_backups_to_keep": 4,
  "type": "files",
  "time_to_run_at": "02:00",
  "store_path": "/backups/weekly"
}
```

### Response

```json
{
  "data": {
    "id": 2,
    "user_id": 1,
    "remote_server_id": 2,
    "backup_destination_id": 1,
    "label": "Weekly Full Backup",
    "description": "Full backup of all files",
    "source": {
      "path": "/home",
      "type": "files",
      "database_name": null,
      "excluded_tables": null
    },
    "schedule": {
      "frequency": "weekly",
      "time": "02:00",
      "custom_cron": null
    },
    "storage": {
      "max_backups": 4,
      "appended_filename": null,
      "path": "/backups/weekly"
    },
    "status": "ready",
    "has_isolated_credentials": false,
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T00:00:00Z"
  }
}
```

## Show Backup Task

Retrieve details of a specific backup task.

**GET** `/api/backup-tasks/{id}`

### Response

```json
{
  "data": {
    "id": 1,
    "user_id": 1,
    "remote_server_id": 2,
    "backup_destination_id": 1,
    "label": "Daily Database Backup",
    "description": "Backup of production database",
    "source": {
      "path": "/var/www/html",
      "type": "database",
      "database_name": "production_db",
      "excluded_tables": "logs,cache"
    },
    "schedule": {
      "frequency": "daily",
      "time": "01:00",
      "custom_cron": null
    },
    "storage": {
      "max_backups": 7,
      "appended_filename": "daily_backup",
      "path": "/backups"
    },
    "status": "ready",
    "has_isolated_credentials": true,
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T00:00:00Z"
  }
}
```

## Update Backup Task

Update an existing backup task.

**PUT** `/api/backup-tasks/{id}`

### Request Body

```json
{
  "label": "Updated Weekly Backup",
  "frequency": "weekly",
  "time_to_run_at": "03:00"
}
```

### Response

```json
{
  "data": {
    "id": 2,
    "user_id": 1,
    "remote_server_id": 2,
    "backup_destination_id": 1,
    "label": "Updated Weekly Backup",
    "description": "Full backup of all files",
    "source": {
      "path": "/home",
      "type": "files",
      "database_name": null,
      "excluded_tables": null
    },
    "schedule": {
      "frequency": "weekly",
      "time": "03:00",
      "custom_cron": null
    },
    "storage": {
      "max_backups": 4,
      "appended_filename": null,
      "path": "/backups/weekly"
    },
    "status": "ready",
    "has_isolated_credentials": false,
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T01:00:00Z"
  }
}
```

## Delete Backup Task

Delete a backup task.

**DELETE** `/api/backup-tasks/{id}`

### Response

```json
{
  "message": "Backup task successfully deleted"
}
```

## Get Backup Task Status

Retrieve the status of a specific backup task.

**GET** `/api/backup-tasks/{id}/status`

### Response

```json
{
  "data": {
    "id": 1,
    "status": "ready"
  }
}
```

## Get Latest Backup Task Log

Retrieve the latest log for a specific backup task.

**GET** `/api/backup-tasks/{id}/latest-log`

### Response

```json
{
  "data": {
    "id": 1,
    "backup_task_id": 1,
    "output": "Backup completed successfully",
    "finished_at": "2024-08-07T02:00:00Z",
    "status": "successful",
    "created_at": "2024-08-07T01:00:00Z"
  }
}
```

## Run Backup Task

Initiate a backup task execution.

**POST** `/api/backup-tasks/{id}/run`

### Response

```json
{
  "message": "Backup task initiated successfully."
}
```

## Error Responses

In case of errors, the API will return a JSON response with an error message:

```json
{
  "error": "Not Found",
  "message": "Backup task not found"
}
```