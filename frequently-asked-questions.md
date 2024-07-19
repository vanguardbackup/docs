# Frequently Asked Questions (FAQ)

## General Questions

### What is Vanguard?
Vanguard is an open-source backup tool designed to help you securely and efficiently back up your data from remote servers to various destinations.

### Is Vanguard free to use?
Yes, Vanguard is open-source and free to use. However, you may incur costs related to your server infrastructure and storage destinations.

## Setup and Configuration

### What operating systems does Vanguard support for remote servers?
Vanguard supports Ubuntu and Debian distributions.

### Can I use Vanguard with cloud providers like AWS or DigitalOcean?
Yes, as long as your server meets our requirements (Ubuntu/Debian OS, publicly accessible), you can use Vanguard with any cloud provider.

### Do I need to install anything on my remote servers?
No, Vanguard operates remotely. You only need to ensure SSH access is available and properly configured.

## Backup Tasks

### How often can I schedule backups?
You can schedule backups at any frequency using cron expressions, from every minute to once a year or any custom schedule in between.

### Can I backup databases?
Yes, Vanguard supports backing up MySQL and PostgreSQL databases.

### What happens if a backup fails?
If a backup fails, Vanguard will send a notification (if configured) and log the failure. You can review the logs and attempt the backup again manually if needed.

## Security

### Is my data encrypted during backups?
Data encryption depends on your chosen backup destination. For example, if you're using S3, data is encrypted in transit and at rest.

### Can Vanguard access my server without my knowledge?
No, Vanguard only accesses your server when executing scheduled or manual backup tasks that you've configured.

## Troubleshooting

### What should I do if I can't connect to my remote server?
Check our [troubleshooting guide](/troubleshooting) for steps to resolve connection issues. Common solutions include verifying SSH credentials and checking firewall settings.

### How can I view logs of backup operations?
Backup logs are available in the Vanguard dashboard. Navigate to the specific backup task to view its execution history and logs.

## Account Management

### How do I update my account email?
You can update your email address in the [Account Settings](/account-options) page.

### Can I delete my Vanguard account?
Yes, you can remove your account. Please refer to our [Account Removal](/account-removal) guide for the process and implications.

## Development and Contribution

### How can I contribute to Vanguard?
We welcome contributions! Please check our [Development Guide](/development) for information on how to contribute code, report issues, or suggest improvements.

### Is there an API available for Vanguard?
Currently, Vanguard does not offer a public API. For the latest information on available features, please check our documentation or GitHub repository.

If you have a question that's not answered here, please don't hesitate to reach out to our support team or community forums.