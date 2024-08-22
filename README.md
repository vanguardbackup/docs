# Vanguard Documentation

Welcome to the official documentation for Vanguard, an open-source Laravel application for managing remote server backups.

## About Vanguard

Vanguard is a powerful tool that allows users to:
1. Connect to remote Linux servers
2. Facilitate backups from these servers to various destinations (e.g., S3 buckets)
3. Enable both scheduled and manual backup operations

## Documentation Platform

Our documentation is powered by [VitePress](https://vitepress.dev/), a static site generator designed for building fast, content-focused websites.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/vanguardbackup/docs.git
   cd docs
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```
   npm run docs:dev
   # or
   yarn docs:dev
   ```

4. Build for production:
   ```
   npm run docs:build
   # or
   yarn docs:build
   ```

## Documentation Structure

- `/docs`: Contains all markdown files for the documentation
- `/docs/.vitepress`: VitePress configuration and theme customization
- `/public`: Static assets like images and icons

## Contributing

We welcome contributions to improve Vanguard's documentation! If you notice any mistakes, areas for improvement, or want to add new content:

1. Fork the repository
2. Create a new branch for your changes
3. Make your improvements
4. Submit a pull request with a clear description of your changes

## License

Vanguard's documentation is licensed under the MIT Licence. See the [LICENCE](LICENSE) file for more details.

## Security

If you discover a security vulnerability within the documentation or the Vanguard application itself, please follow our [security policy](https://github.com/vanguardbackup/vanguard/blob/main/SECURITY.md). Do not disclose security-related issues publicly until they have been addressed by the Vanguard team.

## Support

For questions, suggestions, or help with the documentation please open an issue in this repository.

Thank you for contributing to Vanguard's documentation.