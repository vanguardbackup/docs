# Backup Tasks

## Overview

Backup Tasks are the core functionality of Vanguard. They serve as the central mechanism for defining, organizing, and executing your backups.

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

4. **Set Schedule**
   - Define backup frequency
   - Use cron expressions for advanced scheduling options

5. **Notifications**
   - Select which notification streams to use for alerts

6. **Save**
   - Review your settings and save the backup task
   - You'll be redirected to the backup tasks overview, where you can run the task immediately if desired

If you don't specify any notification streams, you will still be notified via your account email of any backup failures.

## Managing Backup Tasks

### Paused Backups
Backup Tasks that are paused will not be scheduled and cannot be run manually in any circumstances.

### Backup Task History
A log is created for every backup task execution, regardless of its outcome helping to provide detailed information about each run.

## Automated Triggering via Webhook

Each Backup Task can be triggered using a secure webhook URL. This feature allows for flexible integration with external systems such as CI/CD pipelines for running a backup task when you need to.

### Where is it?

The webhook URL can be found by clicking the 'View Webhook URL' button located on the 'Backup Tasks' page. Click the button to bring up the modal.

For security, tokens can be re-generated per Backup Task. You will find an option to do this in the modal. In addition, the modal also displays the last time a successful request was sent to the webhook endpoint.

### Webhook Request Details

- **Method**: POST only
- **Authentication**: Token is embedded in the URL itself
- **Rate Limit**: 10 requests per minute per backup task

### Example Webhook Trigger (cURL)

This is using the official instance's URL, however if you're self-hosting Vanguard please swap this out for yours.

```bash
curl -X POST "https://app.vanguardbackup.com/webhooks/backup-tasks/123/run?token=your-webhook-token" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

### Possible Response Scenarios

| Status Code | Meaning                                    |
|-------------|--------------------------------------------|
| 202         | Backup task initiated successfully         |
| 403         | Invalid authentication token               |
| 404         | Record not found                           |
| 409         | Task cannot be run (paused or conflicting) |
| 429         | Rate limit exceeded                        |