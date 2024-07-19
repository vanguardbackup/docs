# Backup Destinations

Backup Destinations in Vanguard define where your backed-up data is stored. They are essential for completing your Backup Tasks.

## Supported Destination Types

Vanguard currently supports three types of Backup Destinations:

1. **Custom S3**
    - Use your preferred S3-compatible storage solution.

2. **Amazon S3**
    - Direct integration with Amazon's cloud storage.

3. **Local Storage**
    - Stores backups on the remote server itself.

## Setting Up a Backup Destination

1. Navigate to the Destinations section in your Vanguard dashboard.
2. Choose the destination type that fits your needs.
3. For S3 options:
    - Provide the required configuration details (e.g., access keys, bucket names).
4. For Local Storage:
    - Specify a label for the backup destination.
    - The actual path will be set during backup task creation.
5. Save your configuration.

Note: When creating a backup task using a local destination, you'll specify the exact destination path as part of the task setup.