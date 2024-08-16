# Two-Factor Authentication (2FA) Overview

## Introduction

Two-Factor Authentication (2FA) adds an extra layer of security to your account. It requires a second form of verification in addition to your password, making it significantly harder for unauthorized users to access your account.

## Key Features

- **Multiple Authentication Methods**: Use authenticator apps like Google Authenticator, Authy, or password managers with 2FA support.
- **Backup Codes**: Generate and download backup codes for account recovery.
- **QR Code and Manual Entry**: Scan a QR code or manually enter a security key for setup.
- **Email Notifications**: Receive emails for 2FA activation, deactivation, and backup code events.

## Setting Up 2FA

1. Navigate to your account security settings.
2. Choose to enable 2FA.
3. Scan the QR code or manually enter the security key in your authenticator app.
4. Enter the 6-digit code to verify and enable 2FA.
5. Save your backup codes securely.

## Recommended Password Managers with 2FA Support

- 1Password
- Bitwarden

These offer secure storage for both your passwords and 2FA codes.

## Using 2FA

- You'll be prompted for a 2FA code after entering your password.
- This prompt appears once every 30 days or if there's a significant IP change.
- The system uses encrypted cookies to remember your authentication status.

## Backup and Recovery

- Download your backup codes and store them securely.
- Use a backup code if you can't access your authenticator app.
- Each backup code can only be used once.

## Troubleshooting Tips

- Can't scan the QR code? Use the manual entry option with the provided security key.
- Seeing "Invalid code"? Ensure your device's time is correctly synchronized.

## Important Notes

- You'll receive email notifications for 2FA activation, deactivation, backup code regeneration, and viewing.
- Backup codes older than a year trigger a weekly reminder email to regenerate them.
- For account security, we recommend using a password manager that supports 2FA.

## Emergency Measures

In case of emergencies, administrators can disable 2FA for a user with the following command:

```
php artisan vanguard:disable-two-factor {user_email}
```

This should only be used in exceptional circumstances and with proper verification.

## Automatic Notifications

Our system runs a weekly check for outdated backup codes that sends reminder emails to users with backup codes older than one year, encouraging them to regenerate their codes for enhanced security.

Remember, 2FA significantly enhances your account security. We strongly recommend enabling it and keeping your authentication methods and backup codes up to date.