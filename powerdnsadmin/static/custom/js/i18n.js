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
        'Powered by': 'Powered by',
        // Modals
        'Error': 'Error',
        'Close': 'Close',
        'Success': 'Success',
        'Session timeout warning': 'Session timeout warning',
        'Your session is about to expire. You will be automatically signed out in': 'Your session is about to expire. You will be automatically signed out in',
        'To coninue your ssession, select': 'To continue your session, select',
        'Stay Signed In': 'Stay Signed In',
        'Sign Out': 'Sign Out',
        // Login page
        'Log In': 'Log In',
        'Username': 'Username',
        'Password': 'Password',
        'Please input your username': 'Please input your username',
        'Please input your password': 'Please input your password',
        'Remember Me': 'Remember Me',
        'Sign In': 'Sign In',
        '- OR -': '- OR -',
        'Sign in using OpenID Connect': 'Sign in using OpenID Connect',
        'Sign in using Github': 'Sign in using Github',
        'Sign in using Google': 'Sign in using Google',
        'Sign in using Microsoft Azure': 'Sign in using Microsoft Azure',
        'SAML login': 'SAML login',
        'Create an account': 'Create an account',
        'Resend confirmation email': 'Resend confirmation email',
        // User management page
        'Home': 'Home',
        'Create User': 'Create User',
        'Role': 'Role',
        'Privileges': 'Privileges',
        'Revoke Privileges': 'Revoke Privileges',
        'Edit User': 'Edit User',
        'Delete User': 'Delete User',
        'Confirmation': 'Confirmation',
        'Revoke': 'Revoke',
        'Delete': 'Delete',
        'Are you sure you want to revoke all privileges for user ': 'Are you sure you want to revoke all privileges for user ',
        '? They will not able to access any zone.': '? They will not able to access any zone.',
        'Are you sure you want to delete user ': 'Are you sure you want to delete user ',
        'Search': 'Search',
        'Show': 'Show',
        'entries': 'entries',
        'First': 'First',
        'Last': 'Last',
        'Next': 'Next',
        'Previous': 'Previous',
        'All': 'All',
        // Register page
        'Register': 'Register',
        'Enter your personal details below': 'Enter your personal details below',
        'First Name': 'First Name',
        'Last name': 'Last name',
        'Email': 'Email',
        'Enter your account details below': 'Enter your account details below',
        'Retype password': 'Retype password',
        'Please complete the CAPTCHA below': 'Please complete the CAPTCHA below',
        'CAPTCHA': 'CAPTCHA',
        'Back': 'Back',
        // User Editor page
        'User Editor': 'User Editor',
        'User Editor Help': 'User Editor Help',
        'Submit': 'Submit',
        'Two Factor Authentication': 'Two Factor Authentication',
        'If two-factor authentication is configured for this user and is causing problems due to a lost device or technical issue, it can be disabled here.': 'If two-factor authentication is configured for this user and is causing problems due to a lost device or technical issue, it can be disabled here.',
        'The user will need to reconfigure two-factor authentication, to re-enable it.': 'The user will need to reconfigure two-factor authentication, to re-enable it.',
        'Beware: This could compromise security!': 'Beware: This could compromise security!',
        'Disable Two Factor Authentication': 'Disable Two Factor Authentication',
        'Fill in all the fields to the in the form to the left.': 'Fill in all the fields to the in the form to the left.',
        'Newly created users do not have access to any zones.': 'Newly created users do not have access to any zones.',
        'You will need to grant access to the user once it is created via the zone management buttons on the dashboard.': 'You will need to grant access to the user once it is created via the zone management buttons on the dashboard.',
        'cannot be changed.': 'cannot be changed.',
        'can be left empty to keep the current password.': 'can be left empty to keep the current password.',
        'Are you sure you want to disable two factor authentication for user': 'Are you sure you want to disable two factor authentication for user',
        'The password cannot be blank.': 'The password cannot be blank.',
        'Confirm Password': 'Confirm Password',
        'E-mail address': 'E-mail address',
        'Enter username': 'Enter username',
        'Enter first name': 'Enter first name',
        'Enter last name': 'Enter last name',
        'Enter email': 'Enter email',
        'Enter password': 'Enter password',
        'Confirm password': 'Confirm password',
        
        // admin_edit_account.html
        'Edit Account': 'Edit Account',
        'Create Account': 'Create Account',
        'Account Editor': 'Account Editor',
        'Description': 'Description',
        'Contact Person': 'Contact Person',
        'Mail Address': 'Mail Address',
        'Account Name (required)': 'Account Name (required)',
        'Account Description (optional)': 'Account Description (optional)',
        'Contact Person (optional)': 'Contact Person (optional)',
        'Mail Address (optional)': 'Mail Address (optional)',
        'Cannot be blank and must only contain alphanumeric characters, dots, hyphens or underscores.': 'Cannot be blank and must only contain alphanumeric characters, dots, hyphens or underscores.',
        'Cannot be blank and must only contain alphanumeric characters.': 'Cannot be blank and must only contain alphanumeric characters.',
        'Account name already in use.': 'Account name already in use.',
        'Access Control': 'Access Control',
        'Users on the right have access to manage records in all zones associated with the account.': 'Users on the right have access to manage records in all zones associated with the account.',
        'Click on users to move between columns.': 'Click on users to move between columns.',
        'Zones on the right are associated with the account. Red marked zone names are already associated with other accounts. Moving already associated zones to this account will overwrite the previous associated account.': 'Zones on the right are associated with the account. Red marked zone names are already associated with other accounts. Moving already associated zones to this account will overwrite the previous associated account.',
        'Hover over the red zone names to show the associated account. Click on zones to move between columns.': 'Hover over the red zone names to show the associated account. Click on zones to move between columns.',
        'Account Editor Help': 'Account Editor Help',
        'An account allows grouping of zones belonging to a particular entity, such as a customer or department.': 'An account allows grouping of zones belonging to a particular entity, such as a customer or department.',
        'A zone can be assigned to an account upon zone creation or through the zone administration page.': 'A zone can be assigned to an account upon zone creation or through the zone administration page.',
        'Fill in all the fields to the in the form to the left.': 'Fill in all the fields to the in the form to the left.',
        'is an account identifier. It will be lowercase and can contain alphanumeric characters, dots, hyphens and underscores (no space or other special character is allowed).': 'is an account identifier. It will be lowercase and can contain alphanumeric characters, dots, hyphens and underscores (no space or other special character is allowed).',
        'is an account identifier. It will be lowercase and can contain alphanumeric characters (no extra character is allowed).': 'is an account identifier. It will be lowercase and can contain alphanumeric characters (no extra character is allowed).',
        'is a user-friendly name for this account.': 'is a user-friendly name for this account.',
        'is the name of a contact person at the account.': 'is the name of a contact person at the account.',
        'is an e-mail address for the contact person.': 'is an e-mail address for the contact person.',
        'Zone': 'Zone'
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
        'Powered by': '技术支持',
        // Modals
        'Error': '错误',
        'Close': '关闭',
        'Success': '成功',
        'Session timeout warning': '会话超时警告',
        'Your session is about to expire. You will be automatically signed out in': '您的会话即将过期。您将在以下时间后自动退出',
        'To coninue your ssession, select': '要继续您的会话，请选择',
        'Stay Signed In': '保持登录',
        'Sign Out': '退出登录',
        // Login page
        'Log In': '登录',
        'Username': '用户名',
        'Password': '密码',
        'Please input your username': '请输入您的用户名',
        'Please input your password': '请输入您的密码',
        'Remember Me': '记住我',
        'Sign In': '登录',
        '- OR -': '- 或者 -',
        'Sign in using OpenID Connect': '使用OpenID Connect登录',
        'Sign in using Github': '使用Github登录',
        'Sign in using Google': '使用Google登录',
        'Sign in using Microsoft Azure': '使用Microsoft Azure登录',
        'SAML login': 'SAML登录',
        'Create an account': '创建账户',
        'Resend confirmation email': '重新发送确认邮件',
        // 注册页面
         'Register': '注册',
         'Enter your personal details below': '请在下方输入您的个人信息',
         'First Name': '名字',
         'Last name': '姓氏',
         'Email': '电子邮箱',
         'Enter your account details below': '请在下方输入您的账户信息',
         'Retype password': '重新输入密码',
         'Please complete the CAPTCHA below': '请完成下方的验证码',
         'CAPTCHA': '验证码',
         'Back': '返回',
         // 仪表盘页面
         'Zones': '区域',
         'Synchronize Zones': '同步区域',
         'Name': '名称',
         'Type': '类型',
         'Serial': '序列号',
         'Primary': '主要',
         'Account': '账户',
         'Actions': '操作',
         'History Details': '历史详情',
         'Clone to template': '克隆为模板',
         'Save': '保存',
         'Sync Zones from backend': '从后端同步区域',
         'Update in progress': '更新进行中',
         // 用户管理页面
         'Home': '首页',
         'Create User': '创建用户',
         'Role': '角色',
         'Privileges': '权限',
         'Revoke Privileges': '撤销权限',
         'Edit User': '编辑用户',
         'Delete User': '删除用户',
         'Confirmation': '确认',
         'Revoke': '撤销',
         'Delete': '删除',
         'Are you sure you want to revoke all privileges for user ': '您确定要撤销用户 ',
         '? They will not able to access any zone.': ' 的所有权限吗？他们将无法访问任何区域。',
         'Are you sure you want to delete user ': '您确定要删除用户 ',
         'Search': '搜索',
         'Show': '显示',
         'entries': '条目',
         'First': '首页',
         'Last': '末页',
         'Next': '下一页',
         'Previous': '上一页',
         // 用户编辑页面
         'User Editor': '用户编辑器',
         'User Editor Help': '用户编辑器帮助',
         'Submit': '提交',
         'Two Factor Authentication': '两因素认证',
         'If two-factor authentication is configured for this user and is causing problems due to a lost device or technical issue, it can be disabled here.': '如果此用户配置了两因素认证，并且由于设备丢失或技术问题而导致问题，可以在此处禁用。',
         'The user will need to reconfigure two-factor authentication, to re-enable it.': '用户需要重新配置两因素认证才能重新启用它。',
         'Beware: This could compromise security!': '注意：这可能会影响安全性！',
         'Disable Two Factor Authentication': '禁用两因素认证',
         'Fill in all the fields to the in the form to the left.': '填写左侧表单中的所有字段。',
         'Newly created users do not have access to any zones.': '新创建的用户无法访问任何区域。',
         'You will need to grant access to the user once it is created via the zone management buttons on the dashboard.': '创建用户后，您需要通过仪表板上的区域管理按钮授予用户访问权限。',
         'cannot be changed.': '无法更改。',
         'can be left empty to keep the current password.': '可以留空以保持当前密码。',
         'Are you sure you want to disable two factor authentication for user': '您确定要为用户禁用两因素认证吗',
         'The password cannot be blank.': '密码不能为空。',
         'Confirm Password': '确认密码',
         'E-mail address': '电子邮箱地址',
         'Enter username': '输入用户名',
         'Enter first name': '输入名字',
         'Enter last name': '输入姓氏',
         'Enter email': '输入电子邮箱',
         'Enter password': '输入密码',
         'Confirm password': '确认密码',
         'All': '全部',
         // 错误消息
         'This field is required': '此字段为必填项',
         'Invalid email address': '无效的电子邮箱地址',
         'Password must be at least 6 characters': '密码必须至少6个字符',
         'Passwords do not match': '两次输入的密码不匹配',
         'Username already exists': '用户名已存在',
         'Email already exists': '电子邮箱已存在',
         'Invalid CAPTCHA': '验证码无效',
         'firstname_This field is required': '名字为必填项',
         'lastname_This field is required': '姓氏为必填项',
         'email_This field is required': '电子邮箱为必填项',
         'email_Invalid email address': '无效的电子邮箱地址',
         'username_This field is required': '用户名为必填项',
         'username_Username already exists': '用户名已存在',
         'password_This field is required': '密码为必填项',
         'password_Password must be at least 6 characters': '密码必须至少6个字符',
         'rpassword_This field is required': '请重新输入密码',
         'rpassword_Passwords do not match': '两次输入的密码不匹配',
         'captcha_result_Invalid CAPTCHA': '验证码无效'
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

// Get error message translation
i18n.getErrorTranslation = function(field, message) {
    if (!field || !message) return message;
    var errorKey = field + '_' + message;
    
    // Try to find specific field error message
    if (i18n.translations[i18n.currentLang] && i18n.translations[i18n.currentLang][errorKey]) {
        return i18n.translations[i18n.currentLang][errorKey];
    }
    
    // Try to find generic error message
    if (i18n.translations[i18n.currentLang] && i18n.translations[i18n.currentLang][message]) {
        return i18n.translations[i18n.currentLang][message];
    }
    
    return message; // If no translation found, return original text
};

// Add translations for admin_edit_user.html
i18n.translations['zh']['Edit User'] = '编辑用户';
i18n.translations['zh']['Create User'] = '创建用户';
i18n.translations['zh']['User Editor'] = '用户编辑器';
i18n.translations['zh']['First Name'] = '名';
i18n.translations['zh']['Last Name'] = '姓';
i18n.translations['zh']['Enter username'] = '输入用户名';
i18n.translations['zh']['Enter first name'] = '输入名';
i18n.translations['zh']['Enter last name'] = '输入姓';
i18n.translations['zh']['Enter email'] = '输入电子邮箱';
i18n.translations['zh']['Enter password'] = '输入密码';
i18n.translations['zh']['Enter password again'] = '再次输入密码';
i18n.translations['zh']['Select role'] = '选择角色';
i18n.translations['zh']['Edit'] = '编辑';
i18n.translations['zh']['Create'] = '创建';
i18n.translations['zh']['Two-Factor Authentication'] = '双因素认证';
i18n.translations['zh']['This user has two-factor authentication enabled.'] = '该用户已启用双因素认证。';
i18n.translations['zh']['Disable Two-Factor Authentication'] = '禁用双因素认证';
i18n.translations['zh']['Fill in all the fields to create a new user.'] = '填写所有字段以创建新用户。';
i18n.translations['zh']['Username is an user identifier. It can contain alphanumeric characters.'] = '用户名是用户标识符。它可以包含字母数字字符。';
i18n.translations['zh']['First Name is the first name of the user.'] = '名是用户的名。';
i18n.translations['zh']['Last Name is the last name of the user.'] = '姓是用户的姓。';
i18n.translations['zh']['Email is the email address of the user.'] = '电子邮箱是用户的电子邮件地址。';
i18n.translations['zh']['Password is the password of the user.'] = '密码是用户的密码。';
i18n.translations['zh']['Role is the role of the user. It can be User or Administrator.'] = '角色是用户的角色。可以是用户或管理员。';
i18n.translations['zh']['Disable Two-Factor Authentication for'] = '禁用双因素认证';
i18n.translations['zh']['Are you sure you want to disable two-factor authentication for'] = '您确定要禁用以下用户的双因素认证吗';
i18n.translations['zh']['Disable'] = '禁用';

// Add translations for admin_edit_account.html
i18n.translations['zh']['Edit Account'] = '编辑账户';
i18n.translations['zh']['Create Account'] = '创建账户';
i18n.translations['zh']['Account Editor'] = '账户编辑器';
i18n.translations['zh']['Description'] = '描述';
i18n.translations['zh']['Contact Person'] = '联系人';
i18n.translations['zh']['Mail Address'] = '邮箱地址';
i18n.translations['zh']['Account Name (required)'] = '账户名称（必填）';
i18n.translations['zh']['Account Description (optional)'] = '账户描述（可选）';
i18n.translations['zh']['Contact Person (optional)'] = '联系人（可选）';
i18n.translations['zh']['Mail Address (optional)'] = '邮箱地址（可选）';
i18n.translations['zh']['Cannot be blank and must only contain alphanumeric characters, dots, hyphens or underscores.'] = '不能为空，且只能包含字母数字字符、点、连字符或下划线。';
i18n.translations['zh']['Cannot be blank and must only contain alphanumeric characters.'] = '不能为空，且只能包含字母数字字符。';
i18n.translations['zh']['Account name already in use.'] = '账户名称已被使用。';
i18n.translations['zh']['Access Control'] = '访问控制';
i18n.translations['zh']['Users on the right have access to manage records in all zones associated with the account.'] = '右侧的用户有权管理与该账户关联的所有区域中的记录。';
i18n.translations['zh']['Click on users to move between columns.'] = '点击用户在列之间移动。';
i18n.translations['zh']['Zones on the right are associated with the account. Red marked zone names are already associated with other accounts. Moving already associated zones to this account will overwrite the previous associated account.'] = '右侧的区域与该账户关联。红色标记的区域名称已与其他账户关联。将已关联的区域移动到此账户将覆盖先前关联的账户。';
i18n.translations['zh']['Hover over the red zone names to show the associated account. Click on zones to move between columns.'] = '将鼠标悬停在红色区域名称上以显示关联的账户。点击区域在列之间移动。';
i18n.translations['zh']['Cancel'] = '取消';
i18n.translations['zh']['Account Editor Help'] = '账户编辑器帮助';
i18n.translations['zh']['An account allows grouping of zones belonging to a particular entity, such as a customer or department.'] = '账户允许将属于特定实体（如客户或部门）的区域分组。';
i18n.translations['zh']['A zone can be assigned to an account upon zone creation or through the zone administration page.'] = '可以在创建区域时或通过区域管理页面将区域分配给账户。';
i18n.translations['zh']['is an account identifier. It will be lowercase and can contain alphanumeric characters, dots, hyphens and underscores (no space or other special character is allowed).'] = '是账户标识符。它将是小写的，可以包含字母数字字符、点、连字符和下划线（不允许使用空格或其他特殊字符）。';
i18n.translations['zh']['is an account identifier. It will be lowercase and can contain alphanumeric characters (no extra character is allowed).'] = '是账户标识符。它将是小写的，可以包含字母数字字符（不允许使用额外字符）。';
i18n.translations['zh']['is a user-friendly name for this account.'] = '是此账户的用户友好名称。';
i18n.translations['zh']['is the name of a contact person at the account.'] = '是账户联系人的姓名。';
i18n.translations['zh']['is an e-mail address for the contact person.'] = '是联系人的电子邮件地址。';
i18n.translations['zh']['Zone'] = '区域';

// Add translations for domain.html
i18n.translations['zh']['Zone Records'] = '区域记录';
i18n.translations['zh']['Dashboard'] = '仪表盘';
i18n.translations['zh']['Warning: Unsaved Changes'] = '警告：未保存的更改';
i18n.translations['zh']['Zone Editor'] = '区域编辑器';
i18n.translations['zh']['Zone Settings'] = '区域设置';
i18n.translations['zh']['Changelog'] = '变更日志';
i18n.translations['zh']['Add Record'] = '添加记录';
i18n.translations['zh']['Save Changes'] = '保存更改';
i18n.translations['zh']['Update from Primary'] = '从主服务器更新';
i18n.translations['zh']['Name'] = '名称';
i18n.translations['zh']['Type'] = '类型';
i18n.translations['zh']['Status'] = '状态';
i18n.translations['zh']['TTL'] = 'TTL';
i18n.translations['zh']['Data'] = '数据';
i18n.translations['zh']['Comment'] = '注释';
i18n.translations['zh']['Actions'] = '操作';
i18n.translations['zh']['Invisible Sorting Column'] = '隐藏排序列';
i18n.translations['zh']['Edit'] = '编辑';
i18n.translations['zh']['Delete'] = '删除';
i18n.translations['zh']['Close'] = '关闭';
i18n.translations['zh']['Confirmation'] = '确认';
i18n.translations['zh']['Apply Changes'] = '应用更改';
i18n.translations['zh']['Custom Record'] = '自定义记录';
i18n.translations['zh']['Save'] = '保存';
i18n.translations['zh']['Unsaved Changes'] = '未保存的更改';
i18n.translations['zh']['You have unsaved changes. Are you sure you want to navigate away?'] = '您有未保存的更改。确定要离开吗？';
i18n.translations['zh']['Stay'] = '留下';
i18n.translations['zh']['Leave'] = '离开';

// Add translations for domain_add.html
i18n.translations['zh']['Create Zone'] = '创建区域';
i18n.translations['zh']['New Zone'] = '新区域';
i18n.translations['zh']['Zone Editor Help'] = '区域编辑器帮助';
i18n.translations['zh']['Zone Name'] = '区域名称';
i18n.translations['zh']['Enter a valid zone name (required)'] = '输入有效的区域名称（必填）';
i18n.translations['zh']['Zone Override Record'] = '区域覆盖记录';
i18n.translations['zh']['Account'] = '账户';
i18n.translations['zh']['- No Account -'] = '- 无账户 -';
i18n.translations['zh']['Zone Type'] = '区域类型';
i18n.translations['zh']['Native'] = '本地';
i18n.translations['zh']['Primary'] = '主要';
i18n.translations['zh']['Secondary'] = '次要';

// Add translations for domain_setting.html
i18n.translations['zh']['Edit Zone'] = '编辑区域';
i18n.translations['zh']['Change Zone Account'] = '更改区域账户';
i18n.translations['zh']['Update Account'] = '更新账户';
i18n.translations['zh']['Auto PTR creation'] = '自动PTR创建';
i18n.translations['zh']['Allow automatic reverse pointer creation on record updates?'] = '允许在记录更新时自动创建反向指针？';
i18n.translations['zh']['This setting is only effective if the global setting for Auto PTR is enabled.'] = '此设置仅在全局自动PTR设置启用时有效。';
i18n.translations['zh']['DynDNS 2 Settings'] = 'DynDNS 2 设置';
i18n.translations['zh']['Allow on-demand creation of records via DynDNS updates?'] = '允许通过DynDNS更新按需创建记录？';
i18n.translations['zh']['Zone Access Control'] = '区域访问控制';
i18n.translations['zh']['Users on the right have access to manage the records in the zone.'] = '右侧的用户有权管理区域中的记录。';
i18n.translations['zh']['Click on users to move from between columns.'] = '点击用户在列之间移动。';
i18n.translations['zh']['Users in red are Administrators and already have access to ALL zones.'] = '红色的用户是管理员，已经有权访问所有区域。';
i18n.translations['zh']['Remove Zone'] = '删除区域';
i18n.translations['zh']['This function is used to remove a zone from PowerDNS-Admin AND PowerDNS. All records and user privileges associated with this zone will also be removed. This change cannot be reverted.'] = '此功能用于从PowerDNS-Admin和PowerDNS中删除区域。与此区域关联的所有记录和用户权限也将被删除。此更改无法撤销。';
i18n.translations['zh']['Delete Zone'] = '删除区域';
i18n.translations['zh']['Are you sure you want to delete'] = '您确定要删除';
i18n.translations['zh']['Enter valid Primary Server IP addresses (separated by commas)'] = '输入有效的主服务器IP地址（用逗号分隔）';
i18n.translations['zh']['Zone Template'] = '区域模板';
i18n.translations['zh']['No template'] = '无模板';
i18n.translations['zh']['SOA-EDIT-API'] = 'SOA-EDIT-API';
i18n.translations['zh']['DEFAULT'] = '默认';
i18n.translations['zh']['INCREASE'] = '递增';
i18n.translations['zh']['EPOCH'] = '纪元';
i18n.translations['zh']['OFF'] = '关闭';
i18n.translations['zh']['Cancel'] = '取消';
i18n.translations['zh']['The type decides how the zone will be replicated across multiple DNS servers.'] = '类型决定了区域将如何在多个DNS服务器之间复制。';
i18n.translations['zh']['The server will not perform any Primary or Secondary zone functions.'] = '服务器不会执行任何主要或次要区域功能。';
i18n.translations['zh']['The server will serve as the Primary and will send zone transfers (AXFRs) to other servers configured as secondaries.'] = '服务器将作为主服务器，并将区域传输(AXFRs)发送到配置为次要服务器的其他服务器。';
i18n.translations['zh']['The server will serve as the Secondary and will request and receive zone transfers (AXFRs) from other servers configured as Primaries.'] = '服务器将作为次要服务器，并将从配置为主服务器的其他服务器请求和接收区域传输(AXFRs)。';
i18n.translations['zh']['Specifies the existing zone template which this zone should initially be replicated from.'] = '指定此区域最初应从中复制的现有区域模板。';
i18n.translations['zh']['The SOA-EDIT-API setting defines how the SOA serial number will be updated after a change is made to the zone.'] = 'SOA-EDIT-API设置定义了在对区域进行更改后SOA序列号将如何更新。';
i18n.translations['zh']['Generate a soa serial of YYYYMMDD01. If the current serial is lower than the generated serial, use the generated serial. If the current serial is higher or equal to the generated serial, increase the current serial by 1.'] = '生成YYYYMMDD01格式的SOA序列号。如果当前序列号低于生成的序列号，则使用生成的序列号。如果当前序列号高于或等于生成的序列号，则将当前序列号增加1。';
i18n.translations['zh']['Increase the current serial by 1.'] = '将当前序列号增加1。';
i18n.translations['zh']['Change the serial to the number of seconds since the EPOCH, AKA UNIX timestamps'] = '将序列号更改为自EPOCH以来的秒数，即UNIX时间戳';
i18n.translations['zh']['Disable automatic updates of the SOA serial.'] = '禁用SOA序列号的自动更新。';
i18n.translations['zh']['Enter your zone name in the format of name.tld (eg. powerdns-admin.com). You can also enter sublevel zones to create delegate zones (eg. sub.powerdns-admin.com) which can be useful for delegating control to other users.'] = '以name.tld格式输入您的区域名称（例如powerdns-admin.com）。您还可以输入子级区域以创建委托区域（例如sub.powerdns-admin.com），这对于将控制权委托给其他用户很有用。';
i18n.translations['zh']['When enabled, this will allow the user to by-pass validation errors if the user doesn\'t have administration rights to a parent zone.'] = '启用后，如果用户没有父区域的管理权限，这将允许用户绕过验证错误。';
i18n.translations['zh']['Specifies the PowerDNS account value to use for the zone.'] = '指定用于该区域的PowerDNS账户值。';
i18n.translations['zh']['WARNING'] = '警告';
i18n.translations['zh']['CLOSE'] = '关闭';
i18n.translations['zh']['DNSSEC'] = 'DNSSEC';
i18n.translations['zh']['Serial'] = '序列号';
i18n.translations['zh']['Zones'] = '区域';
i18n.translations['zh']['Synchronize Zones'] = '同步区域';
i18n.translations['zh']['History Details'] = '历史详情';
i18n.translations['zh']['Clone to template'] = '克隆到模板';
i18n.translations['zh']['Template name'] = '模板名称';
i18n.translations['zh']['Enter a valid template name (required)'] = '输入有效的模板名称（必填）';
i18n.translations['zh']['Template description'] = '模板描述';
i18n.translations['zh']['Enter a template description (optional)'] = '输入模板描述（可选）';
i18n.translations['zh']['Sync Zones from backend'] = '从后端同步区域';
i18n.translations['zh']['Update in progress'] = '更新进行中';

// Add translations for admin_setting_authentication.html
i18n.translations['zh']['Authentication Settings'] = '认证设置';
i18n.translations['zh']['Settings'] = '设置';
i18n.translations['zh']['Settings Editor'] = '设置编辑器';
i18n.translations['zh']['Loading'] = '加载中';
i18n.translations['zh']['Saving'] = '保存中';
i18n.translations['zh']['Save Successful'] = '保存成功';
i18n.translations['zh']['Save Failed'] = '保存失败';
i18n.translations['zh']['Additional Information'] = '附加信息';
i18n.translations['zh']['Local'] = '本地';
i18n.translations['zh']['LDAP'] = 'LDAP';
i18n.translations['zh']['Google OAuth'] = 'Google OAuth';
i18n.translations['zh']['GitHub OAuth'] = 'GitHub OAuth';
i18n.translations['zh']['Azure OAuth'] = 'Azure OAuth';
i18n.translations['zh']['OpenID Connect OAuth'] = 'OpenID Connect OAuth';
i18n.translations['zh']['Local Authentication Settings'] = '本地认证设置';
i18n.translations['zh']['Local DB Authentication'] = '本地数据库认证';
i18n.translations['zh']['Allow users to sign up'] = '允许用户注册';
i18n.translations['zh']['Password Requirements'] = '密码要求';
i18n.translations['zh']['Enforce Character Requirements'] = '强制字符要求';
i18n.translations['zh']['Minimum Password Length'] = '最小密码长度';
i18n.translations['zh']['Minimum Lowercase Characters'] = '最小小写字母数';
i18n.translations['zh']['Minimum Uppercase Characters'] = '最小大写字母数';
i18n.translations['zh']['Minimum Digit Characters'] = '最小数字字符数';
i18n.translations['zh']['Minimum Special Characters'] = '最小特殊字符数';
i18n.translations['zh']['Enforce Complexity Requirement'] = '强制复杂度要求';
i18n.translations['zh']['Minimum Complexity (zxcvbn)'] = '最小复杂度 (zxcvbn)';

// Add translations for admin_setting_pdns.html
i18n.translations['zh']['PowerDNS Settings'] = 'PowerDNS设置';
i18n.translations['zh']['PowerDNS API Configuration Error'] = 'PowerDNS API配置错误';
i18n.translations['zh']['PowerDNS API URL'] = 'PowerDNS API URL';
i18n.translations['zh']['PowerDNS API Key'] = 'PowerDNS API密钥';
i18n.translations['zh']['PowerDNS Version'] = 'PowerDNS版本';

// Add translations for domain_remove.html
i18n.translations['zh']['Remove Zone'] = '删除区域';
i18n.translations['zh']['Zone Selector'] = '区域选择器';
i18n.translations['zh']['Select a zone'] = '选择区域';
i18n.translations['zh']['Remove'] = '删除';
i18n.translations['zh']['Zone Selector Help'] = '区域选择器帮助';
i18n.translations['zh']['This function is used to remove a zone from PowerDNS-Admin AND PowerDNS'] = '此功能用于从PowerDNS-Admin和PowerDNS中删除区域';
i18n.translations['zh']['All records and user privileges associated with this zone will also be removed'] = '与此区域关联的所有记录和用户权限也将被删除';
i18n.translations['zh']['This change cannot be reverted'] = '此更改无法撤销';
i18n.translations['zh']['Please select a zone to remove'] = '请选择要删除的区域';
i18n.translations['zh']['Are you sure you want to remove zone'] = '您确定要删除区域';

// Add translations for user_profile.html
i18n.translations['zh']['Edit Profile'] = '编辑个人资料';
i18n.translations['zh']['Profile Editor'] = '个人资料编辑器';
i18n.translations['zh']['Personal Info'] = '个人信息';
i18n.translations['zh']['Change Password'] = '修改密码';
i18n.translations['zh']['Authentication'] = '认证';
i18n.translations['zh']['First Name'] = '名字';
i18n.translations['zh']['Last Name'] = '姓氏';
i18n.translations['zh']['E-Mail'] = '电子邮件';
i18n.translations['zh']['Save Profile'] = '保存个人资料';
i18n.translations['zh']['Your account password is managed via LDAP which isn\'t supported to change here'] = '您的账户密码通过LDAP管理，不支持在此处更改';
i18n.translations['zh']['New Password'] = '新密码';
i18n.translations['zh']['Re-type New Password'] = '重新输入新密码';
i18n.translations['zh']['Save Password'] = '保存密码';
i18n.translations['zh']['Enable Two Factor Authentication'] = '启用双因素认证';
i18n.translations['zh']['Your secret key is'] = '您的密钥是';
i18n.translations['zh']['You can use Google Authenticator'] = '您可以使用Google认证器';
i18n.translations['zh']['or'] = '或';
i18n.translations['zh']['on your smartphone to scan the QR code'] = '在您的智能手机上扫描二维码';
i18n.translations['zh']['Make sure only you can see this QR Code and secret key and nobody can capture them'] = '确保只有您能看到此二维码和密钥，且没有人能捕获它们';

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