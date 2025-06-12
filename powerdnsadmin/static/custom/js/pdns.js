// PowerDNS Admin custom JavaScript

// Make sure jQuery is defined before executing this code
if (typeof jQuery === 'undefined') {
    console.error('pdns.js: jQuery is not defined. Please load jQuery before this script.');
} else {
    // Your PowerDNS Admin specific code here
    $(document).ready(function() {
        console.log('PowerDNS Admin JavaScript initialized');
        // Add your PowerDNS Admin specific functionality here
    });
}