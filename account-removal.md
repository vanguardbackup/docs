# Account Removal

Vanguard allows you to remove your account if needed. However, it's important to understand the implications of this action.

## What Happens When You Remove Your Account

1. **Backup Data**:
    - Existing backups on your remote destinations will not be deleted.
    - You will retain access to all data backed up through Vanguard.

2. **Scheduled Backups**:
    - All scheduled backups will cease.
    - No new backups will be performed after account removal.

3. **SSH Keys**:
    - Vanguard's SSH keys will remain on your servers.
    - You will need to manually remove these keys for security purposes.

## Important Steps

1. Before removing your account:
    - Ensure you have local access to all important backups.
    - Note down the servers where Vanguard has SSH access.

2. After removing your account:
    - Manually remove Vanguard's SSH keys from all your servers.
    - Verify that no scheduled Vanguard tasks are running on your systems.


::: warning
Account removal is irreversible. Make sure you want to proceed before confirming the removal.
:::