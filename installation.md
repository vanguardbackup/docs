# Vanguard Installation Guide

This guide provides step-by-step instructions for installing Vanguard, a web application built on the Laravel framework. Follow the steps below to set up the project.


## Prerequisites

- PHP 8.1 or higher
- Composer
- Node.js and npm
- MySQL or PostgreSQL database
- Open ports for SSH connections on destination servers

## Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/vanguardbackup/vanguard vanguard
   cd vanguard
   ```

2. **Install PHP Dependencies**
   ```bash
   composer install
   ```

3. **Set Up Environment File**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file to configure your environment:
   - Set database credentials (`DB_*` variables)
   - Configure `REVERB_HOST` and `REVERB_PORT`
   - Add your email to `ADMIN_EMAIL_ADDRESSES` (comma-separated for multiple)
   - Set `SSH_PASSPHRASE` for SSH key generation

4. **Generate Application Key**
   ```bash
   php artisan key:generate
   ```

5. **Run Database Migrations**
   ```bash
   php artisan migrate
   ```

6. **Install and Compile Frontend Dependencies**
   ```bash
   npm install
   npm run dev
   ```

7. **Configure GitHub Login (Optional)**
   If you want to enable GitHub login:
   - Create a new GitHub OAuth App at https://github.com/settings/developers
   - Set the Authorization callback URL to `http://your-app-url/auth/github/callback`
   - Update your `.env` file with the GitHub app credentials:
     ```
     GITHUB_CLIENT_ID=your_github_client_id
     GITHUB_CLIENT_SECRET=your_github_client_secret
     ```

8. **Configure Flare for Error Handling**
   Vanguard uses Flare for error tracking. Update your `.env` file with your Flare API key:
   ```
   FLARE_KEY=your_flare_api_key
   ```

9. **Generate SSH Key**
   ```bash
   php artisan vanguard:generate-ssh-key
   ```

10. **Set Up Reverb for Web Sockets**
    ```bash
    php artisan reverb:start
    ```

11. **Start the Development Server**
    ```bash
    php artisan serve
    ```

Your Vanguard application should now be accessible at `http://localhost:8000` (or the URL provided by the `serve` command).

## Post-Installation Steps

1. **Create Your Account**
   - Navigate to the Vanguard application in your web browser.
   - Register a new account using the registration form or log in with GitHub if configured.
   - After registration, add your email address to the `ADMIN_EMAIL_ADDRESSES` list in the `.env` file to grant admin privileges.

2. **Configure SSH Connections**
   - Ensure that the relevant ports are open on the destination servers for SSH connections.
   - Verify that the SSH credentials and configurations in your Vanguard settings are correct.
   - Test the SSH connections to ensure Vanguard can successfully connect to remote servers.

## Production Deployment

For production environments, consider the following:

::: tip
For easier management of Laravel applications in production, we highly recommend using a server management provider such as Ploi or Laravel Forge. These platforms automate many of the deployment steps, handle server provisioning, and provide easy-to-use interfaces for managing your Laravel applications. They can significantly simplify your deployment process and ongoing maintenance.
:::

1. **Web Server Configuration**
   - Configure Nginx or Apache to serve your application.
   - Ensure proper permissions on storage and bootstrap/cache directories.

2. **Background Job Processing**
   - Start Horizon for production:
     ```bash
     php artisan horizon
     ```
   - Set up a process monitor like Supervisor to keep Horizon running.

3. **Scheduled Tasks**
   Add this Cron entry to your server:
   ```
   * * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
   ```

4. **Environment Optimization**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

5. **SSL Configuration**
   Ensure you have a valid SSL certificate installed and configured.

6. **Firewall Configuration**
   - Configure your firewall to allow incoming connections on the necessary ports for SSH.
   - Ensure that Vanguard can make outgoing SSH connections to your destination servers.

## Troubleshooting

- If you encounter any issues with web sockets, ensure Reverb is properly configured and running.
- For database-related problems, verify your database credentials in the `.env` file.
- If Horizon isn't processing jobs, check its configuration and ensure it's running.
- If SSH connections fail, verify that the necessary ports are open and that the SSH credentials are correct.

## Updating Vanguard

To update Vanguard to the latest version:

1. Pull the latest changes:
   ```bash
   git pull origin main
   ```
2. Update dependencies:
   ```bash
   composer update
   npm update
   ```
3. Run migrations:
   ```bash
   php artisan migrate
   ```
4. Rebuild assets:
   ```bash
   npm run build
   ```

Remember to check the changelog for any breaking changes or additional update steps.

::: warning
Always backup your database and project files before performing updates.
:::

For more detailed information, consult the official documentation for Laravel, Reverb, Horizon, and Pulse.