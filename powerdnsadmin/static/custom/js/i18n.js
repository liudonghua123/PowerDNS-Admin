// i18n support for PowerDNS-Admin
// Author: PowerDNS-Admin Team

// Initialize i18n object
var i18n = {};

// Default language
i18n.defaultLang = 'en';

// Current language
i18n.currentLang = localStorage.getItem('pdns_lang') || i18n.defaultLang;

// Available languages
i18n.languages = {
    'en': 'English',
    'zh': '中文'
};

// Translation dictionary
i18n.translations = {
    'en': {
        // Navigation items
        'Edit Profile': 'Edit Profile',
        'Logout': 'Logout',
        'Zone Management': 'Zone Management',
        'Dashboard': 'Dashboard',
        'Create Zone': 'Create Zone',
        'Remove Zone': 'Remove Zone',
        'Administration': 'Administration',
        'Global Search': 'Global Search',
        'Activity': 'Activity',
        'Server Statistics': 'Server Statistics',
        'Server Configuration': 'Server Configuration',
        'Zone Templates': 'Zone Templates',
        'Accounts': 'Accounts',
        'Users': 'Users',
        'API Keys': 'API Keys',
        'Settings': 'Settings',
        'Basic': 'Basic',
        'Zone Records': 'Zone Records',
        'Server': 'Server',
        'Authentication': 'Authentication',
        // Footer
        'A PowerDNS web interface with advanced features': 'A PowerDNS web interface with advanced features',
        // Modals
        'Error': 'Error',
        'Close': 'Close',
        'Success': 'Success',
        'Session timeout warning': 'Session timeout warning',
        'Your session is about to expire. You will be automatically signed out in': 'Your session is about to expire. You will be automatically signed out in',
        'To coninue your ssession, select': 'To continue your session, select',
        'Stay Signed In': 'Stay Signed In',
        'Sign Out': 'Sign Out'
    },
    'zh': {
        // Navigation items
        'Edit Profile': '编辑个人资料',
        'Logout': '退出登录',
        'Zone Management': '区域管理',
        'Dashboard': '仪表盘',
        'Create Zone': '创建区域',
        'Remove Zone': '删除区域',
        'Administration': '管理',
        'Global Search': '全局搜索',
        'Activity': '活动',
        'Server Statistics': '服务器统计',
        'Server Configuration': '服务器配置',
        'Zone Templates': '区域模板',
        'Accounts': '账户',
        'Users': '用户',
        'API Keys': 'API密钥',
        'Settings': '设置',
        'Basic': '基本',
        'Zone Records': '区域记录',
        'Server': '服务器',
        'Authentication': '认证',
        // Footer
        'A PowerDNS web interface with advanced features': 'PowerDNS高级功能的Web界面',
        // Modals
        'Error': '错误',
        'Close': '关闭',
        'Success': '成功',
        'Session timeout warning': '会话超时警告',
        'Your session is about to expire. You will be automatically signed out in': '您的会话即将过期。您将在以下时间后自动退出',
        'To coninue your ssession, select': '要继续您的会话，请选择',
        'Stay Signed In': '保持登录',
        'Sign Out': '退出登录'
    }
};

// Get translation for a key
i18n.t = function(key) {
    if (i18n.translations[i18n.currentLang] && i18n.translations[i18n.currentLang][key]) {
        return i18n.translations[i18n.currentLang][key];
    } else if (i18n.translations[i18n.defaultLang] && i18n.translations[i18n.defaultLang][key]) {
        return i18n.translations[i18n.defaultLang][key];
    } else {
        return key;
    }
};

// Change language
i18n.changeLang = function(lang) {
    if (i18n.languages[lang]) {
        i18n.currentLang = lang;
        localStorage.setItem('pdns_lang', lang);
        i18n.applyTranslations();
        return true;
    }
    return false;
};

// Apply translations to the page
i18n.applyTranslations = function() {
    // Translate elements with data-i18n attribute
    $('[data-i18n]').each(function() {
        var key = $(this).data('i18n');
        $(this).text(i18n.t(key));
    });
};

// Initialize i18n when document is ready
$(document).ready(function() {
    // Apply initial translations
    i18n.applyTranslations();
});