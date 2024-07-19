window.onload = function() {
    document.getElementById('loadingOverlay').style.display = 'block';

   
    setTimeout(function() {
        document.getElementById('loadingOverlay').style.display = 'none';
        alert('Scan Complete!');
    }, 60000); // 1 minute
};
