document.addEventListener('DOMContentLoaded', function() {
  // Load saved URLs
  chrome.storage.sync.get(['productionUrl', 'stagingUrl'], function(data) {
    document.getElementById('productionUrl').value = data.productionUrl || '';
    document.getElementById('stagingUrl').value = data.stagingUrl || '';
  });

  // Save URLs
  document.getElementById('saveBtn').addEventListener('click', function() {
    const productionUrl = document.getElementById('productionUrl').value;
    const stagingUrl = document.getElementById('stagingUrl').value;

    chrome.storage.sync.set({
      productionUrl: productionUrl,
      stagingUrl: stagingUrl
    }, function() {
      const successMessage = document.createElement('div');
      successMessage.textContent = 'Settings saved!';
      successMessage.style.color = 'green';
      successMessage.style.marginTop = '10px';
      document.body.appendChild(successMessage);


      setTimeout(() => {
        window.close();
      }, 2000);
    });
  });
}); 