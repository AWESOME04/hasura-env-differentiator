// Handle console loading
(function() {
    function addBanner() {
        const isProduction = window.location.port === '8081';
        
        // Create banner container
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.right = '0';
        container.style.zIndex = '999'; // Reduced z-index to allow toasts to show above

        // Main banner
        const banner = document.createElement('div');
        banner.style.backgroundColor = isProduction ? '#ff4d4d' : '#4CAF50';
        banner.style.color = 'white';
        banner.style.textAlign = 'center';
        banner.style.padding = '8px';
        banner.style.fontWeight = 'bold';
        banner.style.cursor = 'pointer';
        banner.textContent = `${isProduction ? 'PRODUCTION' : 'STAGING'} ENVIRONMENT - Click for details`;

        // Add warning icon for production
        if (isProduction) {
            const warningIcon = document.createElement('span');
            warningIcon.textContent = ' ⚠️ ';
            banner.prepend(warningIcon);
        }

        // Info panel with enhanced details
        const infoPanel = document.createElement('div');
        infoPanel.style.backgroundColor = '#f8f9fa';
        infoPanel.style.padding = '10px';
        infoPanel.style.borderBottom = '1px solid #ddd';
        infoPanel.style.display = 'none';
        
        // Enhanced environment details
        const details = {
            'Environment': isProduction ? 'Production' : 'Staging',
            'Database': isProduction ? 'postgres:5433' : 'postgres:5432',
            'Last Accessed': new Date().toLocaleString(),
            'Server': window.location.host,
            'User Role': 'Admin',
            'Allowed Operations': isProduction ? 'Read Only' : 'Read, Write, Delete',
            'Warning Level': isProduction ? 'High - Proceed with caution' : 'Low'
        };

        Object.entries(details).forEach(([key, value]) => {
            const row = document.createElement('div');
            row.style.margin = '5px 0';
            row.innerHTML = `<strong>${key}:</strong> ${value}`;
            infoPanel.appendChild(row);
        });

        // Add space for toast messages
        const style = document.createElement('style');
        style.textContent = `
            .toast-notification {
                margin-top: ${banner.offsetHeight + 10}px !important;
            }
        `;
        document.head.appendChild(style);

        // Toggle functionality
        banner.onclick = () => {
            infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
            adjustContent();
        };

        // Assemble the components
        container.appendChild(banner);
        container.appendChild(infoPanel);
        document.body.insertBefore(container, document.body.firstChild);

        // Adjust content
        function adjustContent() {
            const totalHeight = container.offsetHeight;
            document.body.style.paddingTop = `${totalHeight}px`;
        }

        adjustContent();
    }

    // Try to add banner immediately
    if (document.body) {
        addBanner();
    }

    // Also wait for DOM content to load
    document.addEventListener('DOMContentLoaded', addBanner);
})(); 