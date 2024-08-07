# Vanguard API Documentation

## API Introduction

Vanguard offers a RESTful API accessible through the `/api` endpoint (e.g., `https://app.vanguardbackup.com/api`). This documentation provides an overview of the API, its endpoints, and best practices for usage.

For authentication details, including how to obtain and use API tokens, please refer to the [Authentication documentation](/api/authentication).

### Response Codes

| Code | Description                   |
|------|-------------------------------|
| 200  | Success                       |
| 201  | Resource created              |
| 202  | Request accepted              |
| 400  | Bad request                   |
| 401  | Unauthorized                  |
| 403  | Forbidden                     |
| 404  | Not found                     |
| 409  | Conflict                      |
| 422  | Unprocessable entity          |
| 429  | Too many requests             |
| 500  | Internal server error         |

## Endpoints

You can find documentation for the endpoints below:

- [Backup Tasks](/api/backup-tasks/)
- [Backup Destinations](/api/backup-destinations/)
- [Remote Servers](/api/remote-servers/)
- [Notification Streams](/api/notification-streams/)
- [Tags](/api/tags/)
- [User](/api/user/)

## Rate Limiting

The API is rate-limited to prevent abuse. Current limits are:

- 60 requests per minute for most endpoints
- 5 requests per minute for resource-intensive operations (e.g., initiating backups)

If you exceed these limits, you'll receive a 429 Too Many Requests response.

## Best Practices

1. **Use appropriate scopes**: Only request the minimal set of permissions your application needs. See the [Authentication documentation](/api/authentication#available-scopes) for details on available scopes.
2. **Handle rate limits**: Implement exponential backoff when you hit rate limits.
3. **Paginate results**: Use pagination parameters to limit the amount of data returned in list endpoints.
4. **Error handling**: Be prepared to handle all possible HTTP status codes.
5. **Keep tokens secure**: Never expose your API tokens in client-side code or public repositories. Refer to the [API Token Security best practices](/api/authentication#best-practices-for-api-token-security) for more information.

For more detailed information on authentication and API token management, please see the [Authentication documentation](/api/authentication).