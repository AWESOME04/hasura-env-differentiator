# Hasura Environment Differentiator

A lightweight solution that prevents accidental changes in Hasura production environments by providing clear visual distinctions between production and staging interfaces.

## Problem
When working with multiple Hasura environments (production and staging), the interfaces look nearly identical, which can lead to accidental changes in the production environment.

## Solution
This project implements a non-intrusive visual differentiation system using CSS injection through Docker configuration, making it immediately apparent which environment you're working in.

## Features
- 🎨 Distinct visual styling for different environments
- ⚡ Lightweight implementation
- 🔒 Helps prevent accidental production changes
- 🐳 Easy Docker integration
- 🛠 No modification of Hasura core functionality

## Quick Start
1. Clone this repository
2. Choose the appropriate docker-compose file for your environment
3. Follow the setup instructions in [docs/SETUP.md](docs/SETUP.md)

## Documentation
- [Setup Guide](docs/SETUP.md)
