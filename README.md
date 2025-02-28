# Vanguard Documentation

Documentation for Vanguard, an open-source Laravel application for managing remote server backups.

## About

Vanguard enables users to connect to remote Linux servers, create backups to various destinations (S3, etc.), and run scheduled or manual backup operations.

## Development

This documentation uses [VitePress](https://vitepress.dev/).

### Prerequisites

- Node.js (v20+)
- npm or yarn

### Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run docs:dev

# Build for production
npm run docs:build
```

## Structure

- `/`: Documentation markdown files
- `/.vitepress`: Configuration and theme
- `/api`: API markdown files
- `/public`: Static assets

## Contributing

To contribute:
1. Fork the repository
2. Create a branch for your changes
3. Submit a pull request

## License

MIT License. See the [LICENSE](LICENSE) file.

## Security

Please report security vulnerabilities according to our [security policy](https://github.com/vanguardbackup/vanguard/blob/main/SECURITY.md).

## Support

For questions or suggestions, please open an issue in this repository.