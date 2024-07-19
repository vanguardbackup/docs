# Commands

Vanguard has several commands that are designed to be run, however most commands for Vanguard are for internal use and for the scheduler. Below are commands that **can** be manually ran:

| Command                         | Full Command                                        | Description                                                     | Usage Notes                                                                                     |
|---------------------------------|-----------------------------------------------------|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| `vanguard:generate-ssh-key`     | `php artisan vanguard:generate-ssh-key`             | Generates an SSH key required for backup operations.            | The generated keys will be stored in the `storage/app/ssh` directory. Keep the private key safe. |
| `vanguard:version`              | `php artisan vanguard:version`                      | Displays the current version of Vanguard.                       | Use `--check` flag to check for newer versions on GitHub.                                        |
| `vanguard:validate-s3-connection {id}` | `php artisan vanguard:validate-s3-connection {id}` | Validates the connection to an S3 backup destination.           | Replace `{id}` with the primary key of the backup destination.                                   |

> [!NOTE]
> The `vanguard:generate-ssh-key` command can only be run once. You will not be allowed to generate another SSH key if one is already configured.

> [!WARNING]
> There are other commands used internally by Vanguard's scheduler. These are not intended for manual execution and should be left to the system to manage.