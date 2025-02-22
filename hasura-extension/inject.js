// Handle console loading
(function() {
    function addBanner() {
        // Get saved URLs
        chrome.storage.sync.get(['productionUrl', 'stagingUrl'], function(data) {
            const currentUrl = window.location.href;
            const isProduction = currentUrl.includes(data.productionUrl);
            const isStaging = currentUrl.includes(data.stagingUrl);

            console.log('Current URL:', currentUrl);
            console.log('Production URL:', data.productionUrl);
            console.log('Staging URL:', data.stagingUrl);
            console.log('Is Production:', isProduction);
            console.log('Is Staging:', isStaging);

            // Only proceed if this is a Hasura environment
            if (!isProduction && !isStaging) return;

            // Create banner container
            const container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.top = '0';
            container.style.left = '0';
            container.style.right = '0';
            container.style.zIndex = '999';

            // Main banner
            const banner = document.createElement('div');
            banner.style.backgroundColor = isProduction ? '#ff4d4d' : '#4CAF50';
            banner.style.color = 'white';
            banner.style.textAlign = 'center';
            banner.style.padding = '8px';
            banner.style.fontWeight = 'bold';
            banner.style.cursor = 'pointer';
            banner.textContent = `${isProduction ? 'PRODUCTION' : 'STAGING'} ENVIRONMENT - Click for details`;

            if (isProduction) {
                const warningIcon = document.createElement('span');
                warningIcon.textContent = ' ⚠️ ';
                banner.prepend(warningIcon);
            }

            const infoPanel = document.createElement('div');
            infoPanel.style.backgroundColor = '#f8f9fa';
            infoPanel.style.padding = '10px';
            infoPanel.style.borderBottom = '1px solid #ddd';
            infoPanel.style.display = 'none';
            
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

            const style = document.createElement('style');
            style.textContent = `
                .toast-notification {
                    margin-top: ${banner.offsetHeight + 10}px !important;
                }
            `;
            document.head.appendChild(style);

            banner.onclick = () => {
                infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
                adjustContent();
            };

            container.appendChild(banner);
            container.appendChild(infoPanel);
            document.body.insertBefore(container, document.body.firstChild);

            function adjustContent() {
                const totalHeight = container.offsetHeight;
                document.body.style.paddingTop = `${totalHeight}px`;
            }

            adjustContent();
        });
    }

    // Try to add banner immediately
    if (document.body) {
        addBanner();
    }

    // Also wait for DOM content to load
    document.addEventListener('DOMContentLoaded', addBanner);
})(); 