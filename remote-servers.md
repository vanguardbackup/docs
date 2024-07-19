# Remote Servers

Remote Servers in Vanguard are the data sources for your backups. Proper setup ensures effective and secure backup operations.

## Supported Configurations

- **OS**: Ubuntu and Debian distributions
- **Databases**: MySQL and PostgreSQL
- **Compatible with**: Ploi, Laravel Forge, and any server meeting our requirements

## Essential Requirements

1. **Accessibility**: Server must be publicly reachable
2. **User Access**: Use a non-root user for enhanced security
3. **Database Backups**: Requires database password (encrypted for safety)

## Adding a Remote Server

1. Navigate to Remote Servers in your Vanguard dashboard
2. Click "Add New Server"
3. Enter the following details:
    - Server name (for easy identification)
    - IP address or hostname
    - SSH username (non-root recommended)
    - SSH port (default is 22)
4. For database backups:
    - Provide the database password (securely encrypted)
5. Run a connection test
6. Save your configuration

## Best Practices

- Use SSH key authentication when possible
- Keep SSH credentials in Vanguard up-to-date
- Configure your firewall to allow Vanguard's IP addresses

## Connection Troubleshooting

If you encounter connection issues:

1. Verify server IP/hostname and SSH port
2. Confirm SSH credentials
3. Check firewall settings for Vanguard's IP
4. Test server's public accessibility
5. Ensure SSH service is active
6. Verify custom SSH port settings in Vanguard

::: tip
For persistent issues, review your server's SSH logs for connection attempt details.
:::