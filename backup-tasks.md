# Backup Tasks

## Overview

Backup Tasks are the core functionality of Vanguard. They serve as the central mechanism for defining, organizing, and executing your backups, allowing you to specify what data to protect, its location, and where to store it.

## Prerequisites

Before creating a Backup Task, ensure you have:

1. At least one **Remote Server** configured - the source of your backup data.
2. A **Backup Destination** set up - where your backed-up data will be stored.
3. (Optional) **Notification Streams** configured - for receiving alerts about your backup tasks.

## Creating a Backup Task

Vanguard offers an intuitive, step-by-step process for creating Backup Tasks:

1. **Specify Details**
   - Enter a label for your backup task
   - Provide a description for easy reference
   - Add relevant tags for organization

2. **Set Configuration**
   - Choose the backup destination
   - Select the backup type
   - Specify the maximum number of backups to retain
   - Pick the remote server to pull data from

3. **Configure Details**
   - Enter the path of the directory on the remote server to backup
   - Specify the directory on the backup destination for data storage
   - (Optional) Configure isolated environment details if required

4. **Set Schedule**
   - Define backup frequency
   - Use cron expressions for advanced scheduling options

5. **Notifications**
   - Select which notification streams to use for alerts

6. **Save**
   - Review your settings and save the backup task
   - You'll be redirected to the backup tasks overview, where you can run the task immediately if desired

## Best Practices

- Prioritize critical data for backup
- Regularly test your backups by attempting to restore from them
- Monitor task execution using Vanguard's dashboard
- Use descriptive labels and tags for efficient management of multiple backup tasks

## Managing Backup Tasks

### Paused Backups
Backup Tasks that are paused will not be scheduled and cannot be run manually.

### Backup Task History
A log is created for every backup task execution, regardless of its outcome, providing a comprehensive audit trail.

## Next Steps

After creating a Backup Task:
- Run the task manually to verify its configuration
- Monitor its execution in the Vanguard dashboard
- Set up additional tasks for other important data

::: tip
Regularly review and update your backup strategies to ensure they continue to meet your evolving needs.
:::