# Hasura Environment Differentiator

A lightweight solution that prevents accidental changes in Hasura production environments by providing clear visual distinctions between production and staging interfaces.

## Problem
When working with multiple Hasura environments (production and staging), the interfaces look nearly identical, which can lead to accidental changes in the production environment.

## Solution
This project implements:
1. Chrome extension for visual differentiation
2. Interactive environment banners
3. Environment-specific configurations
4. Secure credential management

## Features
- 🎨 Interactive environment banners with detailed information
- 🔍 Collapsible environment details panel
- ⚡ Lightweight Chrome extension
- 🔒 Environment-specific security settings
- 🐳 Docker-based deployment
- 🛠 No modification of Hasura core functionality

## Quick Start
1. Clone this repository
2. Set up environment variables
3. Install the Chrome extension
4. Start the environments
5. Follow the setup instructions in [docs/SETUP.md](docs/SETUP.md)

## Documentation
- [Setup Guide](docs/SETUP.md)
- [Environment Configuration](docs/SETUP.md#environment-configuration)
- [Extension Installation](docs/SETUP.md#chrome-extension)
