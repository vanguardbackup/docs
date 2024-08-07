# Frequently Asked Questions (FAQ)

## General Questions

### What is Vanguard?
Vanguard is a community-driven, open-source backup solution designed to securely and efficiently back up your servers and applications to various destinations.

### Is Vanguard free to use?
Yes, Vanguard is [open-source](https://github.com/vanguardbackup/vanguard) and free to use. However, you may incur costs related to your server infrastructure and storage destinations.

## Setup and Configuration

### What operating systems does Vanguard support for remote servers?
Vanguard supports Ubuntu and Debian distributions.

### Can I use Vanguard with cloud providers like AWS or DigitalOcean?
Yes, as long as your server meets our requirements (Ubuntu/Debian OS, publicly accessible), you can use Vanguard with any cloud provider.

### Is any installation required on remote servers?
Vanguard operates remotely, so no installation is needed on your servers. You just need to make sure SSH access is available and configured correctly. However, if you're using database backups, some software (like MySQL) will need to be installed on your server for those specific tasks.

## Backup Tasks

### How often can I schedule backups?
You can schedule backups at any frequency using cron expressions, from every minute to once a year or any custom schedule in between. We suggest using a tool like [Crontab Guru](https://crontab.guru/) to help you generate cron expressions.

### Does Vanguard support incremental backups?
No, Vanguard currently only supports full backups. Each backup operation creates a complete copy of the specified files and directories.

### Is there a file size limit for backups?
Yes, Vanguard imposes a 50GB size limit on individual files during backups. This limit helps ensure that backup tasks can complete within their allocated time window, as each backup operation has a maximum duration. Files exceeding this size will be skipped to prevent backups from timing out.

### How long can a backup task run?
Backup tasks have a timeout limit of 30 minutes. If a backup operation exceeds this time limit, it will be terminated, and you will be notified that the backup has failed.

### Does Vanguard use compression for backups?
Yes, Vanguard automatically compresses to reduce the size of backup files. This helps to minimize storage costs and transfer times.

### Can I backup databases?
Yes, Vanguard supports backing up MySQL and PostgreSQL databases.

### What happens if a backup fails?
If a backup fails, Vanguard will:
1. Send a notification to your account's registered email address
2. Alert you through any configured Notification Streams
3. Log the failure for future reference

### Does Vanguard support Laravel projects?
Yes, Vanguard fully supports Laravel projects. In fact, it's optimized for them:
- Vanguard automatically detects Laravel projects
- It intelligently excludes unnecessary folders (like node_modules)

This helps keep your backups efficient and focused on what matters most for your application.

## Security

### Is my data encrypted during backups?
Data encryption depends on your chosen backup destination. For example, if you're using S3, data is encrypted in transit and at rest.

### How does Vanguard handle sensitive information like database passwords or S3 credentials?
Vanguard encrypts sensitive data before storing it in the database. This means your passwords and credentials are never saved as plain text, keeping them secure.

### Can Vanguard access my server without my knowledge?
Vanguard only accesses your server when performing backup tasks you've scheduled or manually initiated. As an [open-source project](https://github.com/vanguardbackup/vanguard), you're welcome to review the code yourself to verify this behaviour.

## Troubleshooting

### How can I view logs of backup operations?
Backup logs are available in the Vanguard dashboard. Navigate to the backup tasks page to view all the logs.

## Account Management

### How do I update my account email?
You can update your email address on the [Profile](/your-profile) page.

### Can I delete my Vanguard account?
Yes, you can remove your account. Please refer to our [Account Removal](/account-removal) guide for the process and implications.

## Development and Contribution

### How can I contribute to Vanguard?
We welcome contributions! Please check our [Development Handbook](/development-handbook) for information on how to get started contributing to the project.

### How do I request a new feature?
To request a new feature:
1. Go to our [GitHub repository](https://github.com/vanguardbackup/vanguard/issues/new/choose)
2. Choose the "Feature request" issue template
3. Fill out the template with as much detail as possible about the feature you'd like to see

### How do I report a bug?
If you encounter a bug:
1. Visit our [GitHub repository](https://github.com/vanguardbackup/vanguard/issues/new/choose)
2. Select the "Bug report" issue template
3. Complete the template, including steps to reproduce, expected behavior, and actual behavior

### How do I report a security concern?
For security-related issues:
1. Do not open a public GitHub issue
2. Use GitHub's Security Advisory feature by visiting our [Security Advisories page](https://github.com/vanguardbackup/vanguard/security/advisories/new)
3. Click on "New draft security advisory" to submit your report privately

Alternatively, for critical issues, you can email security@vanguardbackup.com.

### Is there an API available for Vanguard?
Vanguard does offer an API. You can read more about it by visiting the [API Introduction](api/introduction) page.

If you have a question that's not answered here, please make a post on our [GitHub Discussions page](https://github.com/vanguardbackup/vanguard/discussions).