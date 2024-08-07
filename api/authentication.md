# Authentication

To use the Vanguard API, you need to authenticate your requests using an API token. This document explains how to obtain and use API tokens, as well as the available scopes for fine-grained access control.

## Obtaining an API Token

1. Log in to your Vanguard account.
2. Navigate to your account settings.
3. Find the "Manage API Tokens" section.
4. Click on "Create New Token".
5. Select the necessary scopes for your intended operations.
6. Save the token securely - you won't be able to see it again!

## Using Your API Token

Include your API token in the `Authorization` header of each request:

```
Authorization: Bearer YOUR_API_TOKEN
```

Always keep your API token secure and never share it publicly.

## API Headers

Include these headers with each request:

```
Accept: application/json
Content-Type: application/json
Authorization: Bearer YOUR_API_TOKEN
```

## Available Scopes

API tokens can have limited permissions to enhance security. Ensure your token has the necessary scopes for the operations you intend to perform. Available scopes are:

| Scope                         | Description                                     |
|-------------------------------|-------------------------------------------------|
| manage-tags                   | Allows managing of your tags                    |
| view-backup-destinations      | Allows viewing backup destinations              |
| create-backup-destinations    | Allows creating new backup destinations         |
| update-backup-destinations    | Allows updating existing backup destinations    |
| delete-backup-destinations    | Allows deleting backup destinations             |
| view-remote-servers           | Allows viewing remote servers                   |
| create-remote-servers         | Allows creating new remote servers              |
| update-remote-servers         | Allows updating existing remote servers         |
| delete-remote-servers         | Allows deleting remote servers                  |
| view-notification-streams     | Allows viewing notification streams             |
| create-notification-streams   | Allows creating new notification streams        |
| update-notification-streams   | Allows updating existing notification streams   |
| delete-notification-streams   | Allows deleting notification streams            |
| view-backup-tasks             | Allows viewing backup tasks                     |
| create-backup-tasks           | Allows creating new backup tasks                |
| update-backup-tasks           | Allows updating existing backup tasks           |
| delete-backup-tasks           | Allows deleting backup tasks                    |
| run-backup-tasks              | Allows the running of backup tasks              |

When creating or updating an API token, you can select one or more of these scopes to grant the token specific permissions.

## Best Practices for API Token Security

1. Use appropriate scopes: Only request the minimal set of permissions your application needs.
2. Rotate tokens regularly: Create new tokens and deprecate old ones periodically.
3. Use environment variables: Store your API tokens in environment variables rather than hardcoding them.
4. Revoke unused tokens: If you no longer need a token, revoke it immediately.

Remember, your API token is a secret key that grants access to your Vanguard account. Always handle it with care and never expose it in public repositories or client-side code.