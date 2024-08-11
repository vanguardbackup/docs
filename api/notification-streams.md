# Notification Stream Endpoints

## List Notification Streams

Retrieve a paginated listing of the user's notification streams.

**GET** `/api/notification-streams`

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
      "label": "Email Notifications",
      "type": "email",
      "type_human": "Email",
      "notifications": {
        "on_success": true,
        "on_failure": true
      },
      "created_at": "2024-08-07T00:00:00Z",
      "updated_at": "2024-08-07T00:00:00Z"
    }
  ],
  "links": {
    "first": "http://example.com/api/notification-streams?page=1",
    "last": "http://example.com/api/notification-streams?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http://example.com/api/notification-streams",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

## Create Notification Stream

Create a new notification stream.

**POST** `/api/notification-streams`

### Request Body

```json
{
  "label": "Slack Notifications",
  "type": "slack",
  "value": "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
  "notifications": {
    "on_success": true,
    "on_failure": true
  }
}
```

### Response

```json
{
  "data": {
    "id": 2,
    "user_id": 1,
    "label": "Slack Notifications",
    "type": "slack",
    "type_human": "Slack",
    "notifications": {
      "on_success": true,
      "on_failure": true
    },
    "created_at": "2024-08-07T01:00:00Z",
    "updated_at": "2024-08-07T01:00:00Z"
  }
}
```

## Show Notification Stream

Retrieve details of a specific notification stream.

**GET** `/api/notification-streams/{id}`

### Response

```json
{
  "data": {
    "id": 1,
    "user_id": 1,
    "label": "Email Notifications",
    "type": "email",
    "type_human": "Email",
    "notifications": {
      "on_success": true,
      "on_failure": true
    },
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T00:00:00Z"
  }
}
```

## Update Notification Stream

Update an existing notification stream.

**PUT** `/api/notification-streams/{id}`

### Request Body

```json
{
  "label": "Updated Email Notifications",
  "notifications": {
    "on_success": false,
    "on_failure": true
  }
}
```

### Response

```json
{
  "data": {
    "id": 1,
    "user_id": 1,
    "label": "Updated Email Notifications",
    "type": "email",
    "type_human": "Email",
    "notifications": {
      "on_success": false,
      "on_failure": true
    },
    "created_at": "2024-08-07T00:00:00Z",
    "updated_at": "2024-08-07T02:00:00Z"
  }
}
```

## Delete Notification Stream

Delete a notification stream.

**DELETE** `/api/notification-streams/{id}`

### Response

```json
{
  "message": "Notification stream successfully deleted"
}
```

## Error Responses

In case of errors, the API will return a JSON response with an error message:

```json
{
  "error": "Not Found",
  "message": "Notification stream not found"
}
```

or

```json
{
  "error": "Forbidden",
  "message": "You are not authorized to access this notification stream"
}
```

or

```json
{
  "error": "Validation Error",
  "message": "The given data was invalid.",
  "errors": {
    "type": [
      "The selected type is invalid."
    ]
  }
}
```

## Notes

- The `type` field in the create and update requests must be one of: `email`, `discord`, `slack`, `teams`, or `pushover`.
- The `value` field should contain the appropriate destination for the chosen notification type (e.g., email address, webhook URL).
- The `notifications` object allows you to specify whether to receive notifications for successful backups (`on_success`) and failed backups (`on_failure`).
- The `type_human` field provides a human-readable version of the notification stream type.
- The `notifications.on_success` field corresponds to `receive_successful_backup_notifications` in the backend.
- The `notifications.on_failure` field corresponds to `receive_failed_backup_notifications` in the backend.