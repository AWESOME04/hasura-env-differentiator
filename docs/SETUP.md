# Setup Guide

## Prerequisites
- Docker and Docker Compose
- Google Chrome browser
- Hasura GraphQL Engine
- Access to your Hasura environments

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/AWESOME04/hasura-env-differentiator.git
cd hasura-env-differentiator
```

### 2. Environment Configuration

#### Create Environment Files

1. For Staging (hasura-instances/staging/.env):
```bash
POSTGRES_PASSWORD=your_staging_db_password
HASURA_GRAPHQL_ADMIN_SECRET=your_staging_admin_secret
```

2. For Production (hasura-instances/production/.env):
```bash
POSTGRES_PASSWORD=your_production_db_password
HASURA_GRAPHQL_ADMIN_SECRET=your_production_admin_secret
```

### 3. Chrome Extension Setup

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `hasura-extension` directory
5. Enter the production and staging URLs in the popup that appears when you click the extension icon.

### 4. Start the Environments

#### For Staging Environment
```bash
cd hasura-instances/staging
docker-compose up -d
```

#### For Production Environment
```bash
cd ../production
docker-compose up -d
```

### 5. Verify Installation

1. Access Staging Console:
   - URL: http://localhost:8080/console
   - Look for green banner
   - Use staging admin secret

2. Access Production Console:
   - URL: http://localhost:8081/console
   - Look for red banner with warning
   - Use production admin secret

## Features

### Environment Banner
- Click the banner to view environment details
- Shows database connection info
- Displays environment permissions
- Indicates warning levels

### Security
- Different ports for each environment
- Separate database instances
- Environment-specific admin secrets
- Visual differentiation for safety

## Troubleshooting

If you encounter issues:
1. Check environment variables are set correctly
2. Ensure all ports are available
3. Verify Chrome extension is enabled
4. Check Docker containers are running