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

// 应用翻译到输入元素的placeholder、title和data-error属性
function applyInputTranslations() {
    // 翻译placeholder
    $('[data-i18n-placeholder]').each(function() {
        var key = $(this).attr('data-i18n-placeholder');
        var translation = i18n.t(key);
        $(this).attr('placeholder', translation);
    });
    
    // 翻译title属性
    $('[data-i18n-title]').each(function() {
        var key = $(this).attr('data-i18n-title');
        var translation = i18n.t(key);
        $(this).attr('title', translation);
    });
    
    // 翻译错误消息
    $('[data-i18n-error]').each(function() {
        var field = $(this).attr('data-i18n-error');
        var message = $(this).text().trim();
        var translation = i18n.getErrorTranslation(field, message);
        $(this).text(translation);
    });
}

// 扩展i18n对象的applyTranslations方法，包含对输入元素的翻译
i18n.applyTranslations = function() {
    // 应用普通文本翻译
    $('[data-i18n]').each(function() {
        var key = $(this).attr('data-i18n');
        var translation = i18n.t(key);
        $(this).text(translation);
    });
    
    // 应用输入元素翻译
    applyInputTranslations();
    
    // 更新语言指示器
    updateLanguageIndicator();
    
    // 设置HTML根元素的lang属性
    $('#html-root').attr('lang', i18n.currentLang);
};