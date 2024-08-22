# User Endpoint

## Get Current User

Retrieve information about the currently authenticated user.

**GET** `/api/user`

### Response

```json
{
  "data": {
    "id": 1,
    "personal_info": {
      "name": "John Doe",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com",
      "avatar_url": "https://www.gravatar.com/avatar/..."
    },
    "account_settings": {
      "timezone": "UTC",
      "language": "en",
      "is_admin": false,
      "weekly_summary_enabled": true
    },
    "backup_tasks": {
      "total": 10,
      "active": 5,
      "logs": {
        "total": 100,
        "today": 5
      }
    },
    "related_entities": {
      "remote_servers": 3,
      "backup_destinations": 2,
      "tags": 5,
      "notification_streams": 2
    },
    "timestamps": {
      "account_created": "2024-01-01T00:00:00Z"
    }
  }
}
```

### Fields Description

- `id`: The user's unique identifier.
- `personal_info`: Object containing the user's personal information.
    - `name`: Full name of the user.
    - `first_name`: User's first name.
    - `last_name`: User's last name.
    - `email`: User's email address.
    - `avatar_url`: URL to the user's Gravatar image.
- `account_settings`: Object containing the user's account settings.
    - `timezone`: User's preferred timezone.
    - `language`: User's preferred language.
    - `is_admin`: Boolean indicating whether the user has admin privileges.
    - `weekly_summary_enabled`: Boolean indicating if the user has opted in for weekly summaries.
- `backup_tasks`: Object containing backup task statistics.
    - `total`: Total number of backup tasks for the user.
    - `active`: Number of active (ready) backup tasks.
    - `logs`: Object containing log statistics.
        - `total`: Total number of backup task logs.
        - `today`: Number of backup task logs created today.
- `related_entities`: Object containing counts of related entities.
    - `remote_servers`: Number of remote servers associated with the user.
    - `backup_destinations`: Number of backup destinations associated with the user.
    - `tags`: Number of tags created by the user.
    - `notification_streams`: Number of notification streams set up by the user.
- `timestamps`: Object containing important account-related dates.
    - `account_created`: ISO8601 formatted date-time when the user account was created.

### Error Response

If the request is made without a valid authentication token, the API will return:

```json
{
  "message": "The requested operation requires a valid authentication token."
}
```

Status Code: 401 Unauthorized

## Notes

- This endpoint requires authentication. Ensure you include a valid authentication token in the request headers.
- The avatar URL is generated using Gravatar based on the user's email address.
- The `is_admin`, `github_login_enabled`, and `weekly_summary_enabled` fields are derived from user permissions and settings.
- Backup task and log counts are calculated dynamically based on the user's associated data.
- All date-time fields are returned in ISO8601 format.