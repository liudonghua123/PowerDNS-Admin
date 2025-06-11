// Language switcher for PowerDNS-Admin
// Author: PowerDNS-Admin Team

$(document).ready(function() {
    // Initialize language switcher
    initLanguageSwitcher();
});

/**
 * Initialize the language switcher
 */
function initLanguageSwitcher() {
    // Set current language indicator
    updateLanguageIndicator();
    
    // Add event listeners to language selector buttons
    $('.lang-select').on('click', function(e) {
        e.preventDefault();
        var lang = $(this).data('lang');
        if (i18n.changeLang(lang)) {
            updateLanguageIndicator();
        }
    });
}

/**
 * Update the language indicator in the UI
 */
function updateLanguageIndicator() {
    // Hide all check marks
    $('.lang-check').css('visibility', 'hidden');
    
    // Show check mark for current language
    $('.lang-select[data-lang="' + i18n.currentLang + '"] .lang-check').css('visibility', 'visible');
}