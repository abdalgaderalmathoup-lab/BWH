/* BWH Personal Admin Playbook - Full Knowledge Base */
window.BWH_KNOWLEDGE = {
  domains: [
    {id:"ad",icon:"AD",en:"Active Directory",ar:"Active Directory",descEn:"Domain services, users, computers, OUs.",descAr:"خدمات الدومين والمستخدمون والأجهزة والوحدات التنظيمية."},
    {id:"gpo",icon:"GPO",en:"Group Policy",ar:"Group Policy",descEn:"Policy processing, linking, security.",descAr:"معالجة السياسات والربط والأمن."},
    {id:"dns",icon:"DNS",en:"DNS",ar:"DNS",descEn:"Name resolution and zones.",descAr:"حل أسماء النطاقات."},
    {id:"server",icon:"WS",en:"Windows Server",ar:"Windows Server",descEn:"Core server roles and services.",descAr:"أدوار الخادم والخدمات."},
    {id:"network",icon:"NET",en:"Networking",ar:"Networking",descEn:"Connectivity, ports, routing.",descAr:"الاتصال والمنافذ والتوجيه."},
    {id:"security",icon:"SEC",en:"Security",ar:"Security",descEn:"Permissions, auditing, hardening.",descAr:"الصلاحيات والتحصين."},
    {id:"replication",icon:"REP",en:"Replication",ar:"Replication",descEn:"Directory replication health.",descAr:"صحة تكرار بيانات الدليل."}
  ],
  solutions: [
    /* --- الأدلة العشرة الجديدة المستخرجة من كود GPO Master Reference --- */
    {
      id:"GPO-SEC-01", domain:"gpo", titleEn:"1. Account & Password Security Policies", titleAr:"1. سياسات كلمات المرور وقفل الحسابات", 
      summaryEn:"Enforce password length, complexity, and account lockout thresholds.", summaryAr:"فرض طول كلمة المرور وتعقيدها وحدود قفل الحسابات.", 
      symptoms:["password policy","account lockout","كلمات المرور","قفل الحساب"], 
      causesEn:["Access to GPMC (gpmc.msc).","Apply to Default Domain Policy."], causesAr:["الوصول إلى GPMC (gpmc.msc).","تطبق على Default Domain Policy."], 
      stepsEn:["Path: Computer Configuration > Policies > Windows Settings > Security Settings > Account Policies","Minimum password length: 12 to 14 Characters.","Password must meet complexity requirements: Enabled.","Enforce password history: 24 passwords remembered.","Account lockout threshold: 5 invalid attempts.","Account lockout duration: 15 or 30 Minutes."], 
      stepsAr:["المسار: Computer Configuration > Policies > Windows Settings > Security Settings > Account Policies","الحد الأدنى لطول كلمة المرور (Minimum password length): 12 إلى 14 حرفاً.","تعقيد كلمة المرور (Complexity): Enabled (مفعل).","تاريخ كلمة المرور (History): 24 كلمة مرور.","حد قفل الحساب (Lockout threshold): 5 محاولات خاطئة.","مدة قفل الحساب (Lockout duration): 15 أو 30 دقيقة."], 
      verifyEn:"Run 'net accounts' in CMD.", verifyAr:"شغّل 'net accounts' في موجه الأوامر.", 
      warningEn:"These policies apply to the entire domain.", warningAr:"هذه السياسات تطبق على الدومين بالكامل.", 
      commands:["gpmc.msc","net accounts"], sources:["Microsoft Learn: Account Policies"]
    },
    {
      id:"GPO-SYS-01", domain:"gpo", titleEn:"2. System Restrictions & Workstation Security", titleAr:"2. تقييد النظام ومحطات العمل", 
      summaryEn:"Prevent access to CMD, Registry Editor, and Control Panel.", summaryAr:"منع الوصول لموجه الأوامر، محرر التسجيل، ولوحة التحكم.", 
      symptoms:["block cmd","disable registry","restrict control panel","حظر cmd","تعطيل لوحة التحكم"], 
      causesEn:["Access to GPMC.","Apply to User Configuration."], causesAr:["الوصول إلى GPMC.","تطبق على User Configuration."], 
      stepsEn:["Path: User Configuration > Administrative Templates > System","Prevent access to the command prompt: Enabled.","Prevent access to registry editing tools: Enabled.","Prohibit access to Control Panel and PC settings: Enabled (Path: Control Panel)."], 
      stepsAr:["المسار: User Configuration > Administrative Templates > System","منع الوصول لموجه الأوامر (Prevent access to the command prompt): Enabled.","منع أدوات التعديل (Prevent access to registry editing tools): Enabled.","حظر لوحة التحكم (Prohibit access to Control Panel): Enabled (المسار: Control Panel)."], 
      verifyEn:"Log in as a standard user and try opening CMD or Regedit.", verifyAr:"سجل الدخول كمستخدم عادي وحاول فتح CMD أو Regedit.", 
      warningEn:"Do not apply to IT Administrators to avoid locking yourself out.", warningAr:"لا تطبقها على مسؤولي IT لتجنب إغلاق حسابك.", 
      commands:["gpmc.msc"], sources:["Microsoft Learn: System Policies"]
    },
    {
      id:"GPO-LOCK-01", domain:"gpo", titleEn:"3. Screen Saver & Session Lockout", titleAr:"3. شاشة التوقف والقفل الأوتوماتيكي", 
      summaryEn:"Force screen lock after inactivity to secure unattended PCs.", summaryAr:"إجبار قفل الشاشة بعد فترة خمول لتأمين الأجهزة غير المراقبة.", 
      symptoms:["screen saver","lock pc","شاشة التوقف","قفل الجهاز"], 
      causesEn:["Access to GPMC."], causesAr:["الوصول إلى GPMC."], 
      stepsEn:["Path: User Configuration > Administrative Templates > Control Panel > Personalization","Enable screen saver: Enabled.","Password protect the screen saver: Enabled.","Screen saver timeout: Enabled (Value: 300 seconds = 5 mins)."], 
      stepsAr:["المسار: User Configuration > Administrative Templates > Control Panel > Personalization","تفعيل شاشة التوقف (Enable screen saver): Enabled.","حماية الشاشة بكلمة مرور (Password protect...): Enabled.","مهلة شاشة التوقف (Timeout): Enabled (القيمة: 300 ثانية = 5 دقائق)."], 
      verifyEn:"Leave the PC idle for 5 minutes and see if it locks.", verifyAr:"اترك الجهاز خاملاً لمدة 5 دقائق وتحقق من قفله.", 
      warningEn:"Ensure it doesn't interrupt critical processes (e.g., presentations).", warningAr:"تأكد من أنها لا تقاطع العمليات الحرجة (مثل العروض التقديمية).", 
      commands:["gpmc.msc"], sources:["Microsoft Learn: Security Policies"]
    },
    {
      id:"GPO-USB-01", domain:"gpo", titleEn:"4. USB & Removable Media Restrictions", titleAr:"4. قيود وسائط التخزين والأجهزة الخارجية (USB)", 
      summaryEn:"Block or restrict USB drives to prevent data leakage.", summaryAr:"حظر أو تقييد فلاشات USB لمنع تسريب البيانات.", 
      symptoms:["block usb","disable usb","منع usb","حظر فلاشة"], 
      causesEn:["Access to GPMC."], causesAr:["الوصول إلى GPMC."], 
      stepsEn:["Path: Computer Configuration > Administrative Templates > System > Removable Storage Access","All Removable Storage classes: Deny all access: Enabled (Full block).","Removable Disks: Deny write access: Enabled (Read-only).","CD and DVD: Deny execute access: Enabled."], 
      stepsAr:["المسار: Computer Configuration > Administrative Templates > System > Removable Storage Access","جميع فئات التخزين (Deny all access): Enabled (حظر كلي).","الأقراص القابلة للإزالة (Deny write access): Enabled (قراءة فقط).","أقراص CD/DVD (Deny execute access): Enabled."], 
      verifyEn:"Insert a USB drive; it should be blocked.", verifyAr:"أدخل فلاشة USB؛ يجب أن يتم حظرها.", 
      warningEn:"May block USB mice/keyboards if applied to all classes.", warningAr:"قد تحظر الفأرة ولوحة المفاتيح إذا طبقت على كل الفئات.", 
      commands:["gpmc.msc","gpupdate /force"], sources:["Microsoft Learn: Removable Storage"]
    },
    {
      id:"GPO-AUD-01", domain:"gpo", titleEn:"5. Advanced Audit Configuration", titleAr:"5. سياسات تدقيق ومراقبة الحوادث (Audit)", 
      summaryEn:"Enable logging for security forensics and SIEM integration.", summaryAr:"تفعيل تسجيل الأحداث للتحليل الجنائي وتكامل SIEM.", 
      symptoms:["audit policy","security logs","تدقيق الحوادث","سجلات الأمن"], 
      causesEn:["Access to GPMC."], causesAr:["الوصول إلى GPMC."], 
      stepsEn:["Path: Computer Configuration > Windows Settings > Security Settings > Advanced Audit Policy Configuration","Audit Logon: Success & Failure.","Audit Account Management: Success & Failure.","Audit Process Creation: Success.","Audit Privilege Use: Failure."], 
      stepsAr:["المسار: Computer Configuration > Windows Settings > Security Settings > Advanced Audit Policy Configuration","تسجيل الدخول (Audit Logon): Success & Failure.","إدارة الحسابات (Audit Account Management): Success & Failure.","إنشاء العمليات (Audit Process Creation): Success.","استخدام الصلاحيات (Audit Privilege Use): Failure."], 
      verifyEn:"Check Event Viewer > Windows Logs > Security for new events.", verifyAr:"افحص Event Viewer > Windows Logs > Security للأحداث الجديدة.", 
      warningEn:"Generates large logs. Ensure you have sufficient disk space.", warningAr:"ينتج سجلات ضخمة. تأكد من كفاية مساحة القرص.", 
      commands:["gpmc.msc","eventvwr.msc"], sources:["Microsoft Learn: Advanced Audit"]
    },
    {
      id:"GPO-RDP-01", domain:"gpo", titleEn:"6. Remote Desktop (RDP) Security Policies", titleAr:"6. إدارة وتعزيز أمان سطح المكتب البعيد (RDP)", 
      summaryEn:"Enforce NLA and SSL encryption for RDP connections.", summaryAr:"فرض NLA وتشفير SSL لاتصالات RDP.", 
      symptoms:["rdp security","nla","أمان rdp","سطح المكتب البعيد"], 
      causesEn:["Access to GPMC."], causesAr:["الوصول إلى GPMC."], 
      stepsEn:["Path: Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Security","Require use of specific security layer for remote (RDP) connections: SSL (TLS 1.0).","Require user authentication for remote connections by using NLA: Enabled.","Set time limit for active but idle Remote Desktop Services sessions: Enabled (15 mins)."], 
      stepsAr:["المسار: Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Security","فرض طبقة أمان محددة (Specific security layer): SSL (TLS 1.0).","طلب مصادقة NLA (Require user authentication...): Enabled.","تحديد وقت للجلسات الخاملة (Set time limit...): Enabled (15 دقيقة)."], 
      verifyEn:"Attempt an RDP connection; it should prompt for credentials first (NLA).", verifyAr:"حاول الاتصال بـ RDP؛ يجب أن يطلب بيانات الاعتماد أولاً (NLA).", 
      warningEn:"Ensure clients support NLA before enforcing.", warningAr:"تأكد من دعم العملاء لـ NLA قبل الفرض.", 
      commands:["gpmc.msc"], sources:["Microsoft Learn: RDP Security"]
    },
    {
      id:"GPO-DEP-01", domain:"gpo", titleEn:"7. Software Deployment via MSI", titleAr:"7. التثبيت التلقائي للبرامج (MSI)", 
      summaryEn:"Assign MSI packages to deploy automatically at startup.", summaryAr:"تعيين حزم MSI لتثبت تلقائياً عند بدء التشغيل.", 
      symptoms:["deploy software","install msi","نشر برامج","تثبيت تلقائي"], 
      causesEn:["MSI file in a shared folder with Read access for Domain Computers."], causesAr:["ملف MSI في مجلد مشترك بصلاحية قراءة لـ Domain Computers."], 
      stepsEn:["Path: Computer Configuration > Policies > Software Settings > Software installation","Right-click > New > Package.","Select the UNC path (e.g., \\\\DC01\\SoftwareShare\\app.msi).","Choose 'Assigned' for silent install at boot."], 
      stepsAr:["المسار: Computer Configuration > Policies > Software Settings > Software installation","اضغط بزر الفأرة الأيمن > New > Package.","اختر مسار UNC (مثلاً \\\\DC01\\SoftwareShare\\app.msi).","اختر 'Assigned' للتثبيت الصامت عند الإقلاع."], 
      verifyEn:"Restart client PC and check Programs and Features.", verifyAr:"أعد تشغيل جهاز العميل وافحص قائمة البرامج.", 
      warningEn:"Must use UNC path, not a local drive letter.", warningAr:"يجب استخدام مسار UNC، وليس حرف قرص محلي.", 
      commands:["gpmc.msc"], sources:["Microsoft Learn: Software Deployment"]
    },
    {
      id:"GPO-BRW-01", domain:"gpo", titleEn:"8. Browser Policies (Chrome & Edge)", titleAr:"8. سياسات متصفحات الإنترنت (Chrome & Edge)", 
      summaryEn:"Enforce incognito blocking and homepage configuration.", summaryAr:"فرض حظر التصفح المتخفي وتهيئة الصفحة الرئيسية.", 
      symptoms:["browser policy","block incognito","سياسات المتصفح","حظر التخفي"], 
      causesEn:["ADMX templates imported to PolicyDefinitions folder."], causesAr:["استيراد قوالب ADMX إلى مجلد PolicyDefinitions."], 
      stepsEn:["Path: Computer Configuration > Administrative Templates > Google Chrome / Microsoft Edge","IncognitoModeAvailability (Chrome) / InPrivateModeAvailability (Edge): Enabled (Disabled mode).","HomepageLocation: Set to company intranet URL.","ExtensionInstallForcelist: Add Extension IDs."], 
      stepsAr:["المسار: Computer Configuration > Administrative Templates > Google Chrome / Microsoft Edge","حظر التصفح المتخفي (IncognitoModeAvailability): Enabled.","تحديد الصفحة الرئيسية (HomepageLocation): أدخل رابط الشركة.","فرض إضافات معينة (ExtensionInstallForcelist): أضف معرفات الإضافات."], 
      verifyEn:"Open browser and check if incognito is disabled.", verifyAr:"افتح المتصفح وتحقق من تعطيل التصفح المتخفي.", 
      warningEn:"Requires downloading ADMX templates from Google/Microsoft.", warningAr:"يتطلب تحميل قوالب ADMX من جوجل/مايكروسوفت.", 
      commands:["gpmc.msc"], sources:["Microsoft Learn: Browser Policies"]
    },
    {
      id:"GPO-WIFI-01", domain:"gpo", titleEn:"9. Enterprise Wi-Fi (802.1X)", titleAr:"9. سياسات شبكات اللاسلكي للمؤسسات (Wi-Fi 802.1X)", 
      summaryEn:"Deploy WPA2-Enterprise Wi-Fi profiles automatically.", summaryAr:"توزيع إعدادات WPA2-Enterprise تلقائياً.", 
      symptoms:["wifi policy","802.1x","سياسات الواي فاي","شبكات لاسلكية"], 
      causesEn:["Access to GPMC.","Certificates for EAP-TLS (optional)."], causesAr:["الوصول إلى GPMC.","شهادات لـ EAP-TLS (اختياري)."], 
      stepsEn:["Path: Computer Configuration > Policies > Windows Settings > Security Settings > Wireless Network (IEEE 802.11) Policies","Right-click > Create A New Wireless Network Policy...","Set SSID.","Security tab: Select WPA2-Enterprise and AES.","Network Authentication: PEAP or EAP-TLS."], 
      stepsAr:["المسار: Computer Configuration > Policies > Windows Settings > Security Settings > Wireless Network (IEEE 802.11) Policies","اضغط بزر الفأرة الأيمن > إنشاء سياسة جديدة.","أدخل اسم الشبكة (SSID).","تبويب الأمان (Security): اختر WPA2-Enterprise و AES.","المصادقة (Authentication): PEAP أو EAP-TLS."], 
      verifyEn:"Check available Wi-Fi networks on a client; it should auto-connect.", verifyAr:"تحقق من شبكات الواي فاي المتاحة على العميل؛ يجب أن يتصل تلقائياً.", 
      warningEn:"Requires a RADIUS/NPS server for 802.1X authentication.", warningAr:"يتطلب خادم RADIUS/NPS لمصادقة 802.1X.", 
      commands:["gpmc.msc"], sources:["Microsoft Learn: Wi-Fi Policies"]
    },
    {
      id:"GPO-CLI-01", domain:"gpo", titleEn:"10. GPO CLI & Troubleshooting Commands", titleAr:"10. أوامر التطبيق والتحقق (CLI)", 
      summaryEn:"Force update and generate GPO reports.", summaryAr:"إجبار التحديث وإنشاء تقارير GPO.", 
      symptoms:["gpupdate","gpresult","تحديث السياسات","أوامر gpo"], 
      causesEn:["Command Prompt access."], causesAr:["الوصول إلى موجه الأوامر."], 
      stepsEn:["Run 'gpupdate /force' to apply policies immediately.","Run 'gpresult /r' to see applied policies.","Run 'gpresult /h C:\\GPO_Report.html' to generate an HTML report.","Run 'rsop.msc' for Resultant Set of Policy."], 
      stepsAr:["شغّل 'gpupdate /force' لتطبيق السياسات فوراً.","شغّل 'gpresult /r' لعرض السياسات المطبقة.","شغّل 'gpresult /h C:\\GPO_Report.html' لإنشاء تقرير HTML.","شغّل 'rsop.msc' لعرض مجموعة النتائج (Resultant Set of Policy)."], 
      verifyEn:"Check the output of each command.", verifyAr:"تحقق من مخرجات كل أمر.", 
      warningEn:"Always run CMD as Administrator.", warningAr:"قم بتشغيل CMD كمسؤول دائماً.", 
      commands:["gpupdate /force","gpresult /r","gpresult /h C:\\GPO_Report.html","rsop.msc"], sources:["Microsoft Learn: GPO CLI"]
    },

    /* --- الأدلة السابقة --- */
    {
      id:"AD-001", domain:"ad", titleEn:"Create a new User in Active Directory", titleAr:"إنشاء مستخدم جديد في Active Directory", 
      summaryEn:"Step-by-step to create a user, assign OU, and set password.", summaryAr:"خطوات إنشاء مستخدم، تعيينه في وحدة تنظيمية، وضبط كلمة المرور.", 
      symptoms:["create user","new user","مستخدم جديد","إنشاء مستخدم"], 
      causesEn:["Access to ADUC (dsa.msc).","Domain Admin privileges."], causesAr:["الوصول إلى ADUC (dsa.msc).","صلاحيات Domain Admin."], 
      stepsEn:["Open 'Active Directory Users and Computers' (dsa.msc).","Right-click the target OU > New > User.","Enter First name, Last name, and User logon name (e.g., jdoe).","Set the password. Check 'User must change password at next logon'.","Click Next > Finish."], 
      stepsAr:["افتح أداة 'Active Directory Users and Computers' (dsa.msc).","اضغط بزر الفأرة الأيمن على الوحدة التنظيمية (OU) > New > User.","أدخل الاسم الأول، اسم العائلة، واسم تسجيل الدخول (مثلاً jdoe).","قم بتعيين كلمة المرور. فعّل خيار 'User must change password at next logon'.","اضغط Next > Finish."], 
      verifyEn:"Log in to a client PC with the new account.", verifyAr:"سجل الدخول إلى جهاز عميل بالحساب الجديد.", 
      warningEn:"Always place users in the correct OU for GPOs to apply.", warningAr:"ضع المستخدم دائماً في OU الصحيحة لتطبيق سياسات Group Policy.", 
      commands:["dsa.msc","New-ADUser"], sources:["Microsoft Learn: AD DS"]
    },
    {
      id:"AD-002", domain:"ad", titleEn:"Reset a User Password in Active Directory", titleAr:"إعادة تعيين كلمة مرور مستخدم في AD", 
      summaryEn:"Unlock or reset a forgotten password.", summaryAr:"فتح قفل الحساب أو إعادة تعيين كلمة مرور منسية.", 
      symptoms:["reset password","unlock account","إعادة تعيين كلمة المرور","فتح حساب"], 
      causesEn:["Helpdesk or Admin rights."], causesAr:["صلاحيات Helpdesk أو Admin."], 
      stepsEn:["Open ADUC (dsa.msc).","Find the user > Right-click > Reset Password.","Enter the new password.","Check 'Unlock the user's account' if locked.","Check 'User must change password at next logon'.","Click OK."], 
      stepsAr:["افتح ADUC (dsa.msc).","ابحث عن المستخدم > اضغط بزر الفأرة الأيمن > Reset Password.","أدخل كلمة المرور الجديدة.","حدد 'Unlock the user's account' إذا كان مقفلاً.","حدد 'User must change password at next logon'.","اضغط OK."], 
      verifyEn:"Ask user to log in.", verifyAr:"اطلب من المستخدم تسجيل الدخول.", 
      warningEn:"Verify user identity before resetting.", warningAr:"تحقق من هوية المستخدم قبل إعادة التعيين.", 
      commands:["dsa.msc","Set-ADAccountPassword"], sources:["Microsoft Learn: AD DS"]
    },
    {
      id:"AD-003", domain:"ad", titleEn:"Create Organizational Units (OUs) and Delegate Control", titleAr:"إنشاء وحدات تنظيمية (OUs) وتفويض الصلاحيات", 
      summaryEn:"Structure your AD and delegate specific admin rights to helpdesk.", summaryAr:"هيكلة الـ AD وتفويض صلاحيات إدارية محددة لفريق الدعم.", 
      symptoms:["create ou","delegate control","وحدات تنظيمية","تفويض صلاحيات"], 
      causesEn:["Access to ADUC.","Domain Admin privileges."], causesAr:["الوصول إلى ADUC.","صلاحيات Domain Admin."], 
      stepsEn:["Open ADUC (dsa.msc).","Right-click the domain name > New > Organizational Unit. Name it.","To delegate: Right-click the OU > 'Delegate Control'.","Add the user/group (e.g., 'Helpdesk_Team').","Select 'Reset user passwords' and other rights.","Click Next > Finish."], 
      stepsAr:["افتح ADUC (dsa.msc).","اضغط بزر الفأرة الأيمن على اسم الدومين > New > Organizational Unit. سمها.","للتفويض: اضغط بزر الفأرة الأيمن على الـ OU > 'Delegate Control'.","أضف المستخدم أو المجموعة (مثلاً 'Helpdesk_Team').","اختر 'Reset user passwords' وغيرها من الصلاحيات.","اضغط Next > Finish."], 
      verifyEn:"Log in as Helpdesk user and reset a password inside the OU.", verifyAr:"سجل الدخول كمستخدم Helpdesk وأعد تعيين كلمة مرور داخل الـ OU.", 
      warningEn:"Never delegate control at the domain root level.", warningAr:"لا تقم أبداً بتفويض التحكم على مستوى جذر الدومين.", 
      commands:["dsa.msc"], sources:["Microsoft Learn: Delegation of Control"]
    },
    {
      id:"AD-004", domain:"ad", titleEn:"Enable and Use Active Directory Recycle Bin", titleAr:"تفعيل واستخدام سلة محذوفات Active Directory", 
      summaryEn:"Restore deleted users or OUs without a full system restore.", summaryAr:"استعادة المستخدمين المحذوفين دون الحاجة لاستعادة نظام كامل.", 
      symptoms:["recycle bin","restore user","سلة المحذوفات","استعادة مستخدم"], 
      causesEn:["Forest Functional Level 2008 R2 or higher."], causesAr:["Forest Functional Level 2008 R2 أو أعلى."], 
      stepsEn:["Open 'Active Directory Administrative Center' (dsac.exe).","Click your domain name.","In right pane, click 'Enable Recycle Bin'. (Irreversible).","To restore: Click domain > 'Deleted Objects'.","Right-click the user/OU > Restore."], 
      stepsAr:["افتح 'Active Directory Administrative Center' (dsac.exe).","اضغط على اسم الدومين.","في الجزء الأيمن، اضغط 'Enable Recycle Bin'. (لا رجعة فيه).","للاستعادة: اضغط على الدومين > 'Deleted Objects'.","اضغط بزر الفأرة الأيمن على المستخدم > Restore."], 
      verifyEn:"Delete a test user, then restore it from the Recycle Bin.", verifyAr:"احذف مستخدماً تجريبياً، ثم استعده من سلة المحذوفات.", 
      warningEn:"Enabling cannot be undone. Verify it's enabled before a disaster.", warningAr:"لا يمكن التراجع عن التفعيل. تأكد من تفعيلها قبل وقوع كارثة.", 
      commands:["dsac.exe","Enable-ADOptionalFeature"], sources:["Microsoft Learn: AD Recycle Bin"]
    },
    {
      id:"AD-005", domain:"ad", titleEn:"Transfer FSMO Roles to another DC", titleAr:"نقل أدوار FSMO إلى Domain Controller آخر", 
      summaryEn:"Move critical AD operations to a new server.", summaryAr:"نقل العمليات الحرجة في AD إلى خادم جديد.", 
      symptoms:["fsmo roles","transfer roles","نقل الأدوار","fsmo"], 
      causesEn:["Access to Domain Admin.","Two DCs in the network."], causesAr:["الوصول إلى Domain Admin.","وجود اثنين من DCs في الشبكة."], 
      stepsEn:["Open CMD as Administrator on target DC.","Type 'ntdsutil' > Enter.","Type 'roles' > Enter.","Type 'connections' > Enter.","Type 'connect to server <New-DC>' > Enter.","Type 'quit' > Enter.","Type 'transfer <role-name>' (e.g., naming master)."], 
      stepsAr:["افتح موجه الأوامر كمسؤول على الخادم المستهدف.","اكتب 'ntdsutil' > Enter.","اكتب 'roles' > Enter.","اكتب 'connections' > Enter.","اكتب 'connect to server <اسم الخادم>' > Enter.","اكتب 'quit' > Enter.","اكتب 'transfer <اسم الدور>' (مثلاً naming master)."], 
      verifyEn:"Run 'netdom query fsmo' in CMD.", verifyAr:"شغّل 'netdom query fsmo' في موجه الأوامر.", 
      warningEn:"Ensure the new DC is healthy before transferring.", warningAr:"تأكد من أن الـ DC الجديد سليم قبل نقل الأدوار.", 
      commands:["netdom query fsmo","ntdsutil"], sources:["Microsoft Learn: FSMO Roles"]
    },
    {
      id:"AD-006", domain:"ad", titleEn:"Configure AD Sites and Services", titleAr:"تهيئة مواقع وخدمات Active Directory (AD Sites)", 
      summaryEn:"Optimize replication between different physical locations.", summaryAr:"تحسين حركة مرور التكرار بين المواقع الفيزيائية المختلفة.", 
      symptoms:["ad sites","replication traffic","مواقع ad","فروع"], 
      causesEn:["Access to AD Sites and Services.","Multiple subnets defined."], causesAr:["الوصول إلى AD Sites and Services.","تحديد شبكات فرعية متعددة."], 
      stepsEn:["Open (dssite.msc).","Right-click 'Sites' > New Site. Name it.","Expand 'Subnets'. Right-click > New Subnet.","Enter subnet (e.g., 192.168.2.0/24) and associate it with the site.","Move the Branch DC into this site.","Configure Site Link schedule to limit replication."], 
      stepsAr:["افتح (dssite.msc).","اضغط بزر الفأرة الأيمن على 'Sites' > New Site. قم بتسميته.","قم بتوسيع 'Subnets'. اضغط بزر الفأرة الأيمن > New Subnet.","أدخل الشبكة الفرعية (مثلاً 192.168.2.0/24) واربطها بالموقع.","انقل الـ DC الخاص بالفرع إلى هذا الموقع.","قم بتهيئة جدول Site Link لتقييد التكرار."], 
      verifyEn:"Use 'repadmin /showrepl'.", verifyAr:"استخدم 'repadmin /showrepl'.", 
      warningEn:"Proper site config prevents WAN link saturation.", warningAr:"التهيئة الصحيحة للمواقع تمنع إشباع روابط WAN.", 
      commands:["dssite.msc","repadmin"], sources:["Microsoft Learn: AD Sites"]
    },
    {
      id:"AD-007", domain:"ad", titleEn:"Create an AD Trust", titleAr:"إنشاء علاقة ثقة في AD (AD Trust)", 
      summaryEn:"Allow users from one domain to access resources in another.", summaryAr:"السماح للمستخدمين من دومين بالوصول إلى موارد دومين آخر.", 
      symptoms:["trust","forest trust","علاقة ثقة","ربط دومينات"], 
      causesEn:["Domain Admin on both domains.","DNS resolution working."], causesAr:["صلاحيات Domain Admin على كلا الدومينين.","عمل تحليل DNS."], 
      stepsEn:["Open (domain.msc).","Right-click domain > Properties > Trusts.","Click 'New Trust' > Next.","Enter the other domain name.","Choose direction (One-way/Two-way).","Choose type (Forest/External).","Set password > Finish."], 
      stepsAr:["افتح (domain.msc).","اضغط بزر الفأرة الأيمن على الدومين > Properties > Trusts.","اضغط 'New Trust' > Next.","أدخل اسم الدومين الآخر.","اختر الاتجاه (One-way/Two-way).","اختر النوع (Forest/External).","عين كلمة المرور > Finish."], 
      verifyEn:"Click 'Validate' under the Trusts tab.", verifyAr:"اضغط 'Validate' تحت تبويب Trusts.", 
      warningEn:"Ensure DNS conditional forwarders are set up first.", warningAr:"تأكد من إعداد موجهات DNS الشرطية أولاً.", 
      commands:["domain.msc","netdom trust"], sources:["Microsoft Learn: AD Trusts"]
    },
    {
      id:"GPO-003", domain:"gpo", titleEn:"Map Network Drives automatically via GPO", titleAr:"ربط أقراص الشبكة تلقائياً عبر GPO", 
      summaryEn:"Assign a network drive to users automatically.", summaryAr:"تعيين قرص شبكة للمستخدمين تلقائياً.", 
      symptoms:["map drive","network drive","ربط قرص","مشاركة درايف"], 
      causesEn:["A shared folder must exist.","GPMC access."], causesAr:["يجب أن يكون المجلد المشترك موجوداً.","الوصول إلى GPMC."], 
      stepsEn:["Open GPMC. Edit the GPO linked to Users OU.","Navigate to: User Configuration > Preferences > Windows Settings > Drive Maps.","Right-click > New > Mapped Drive.","Action: Update. Location: \\\\ServerIP\\SharedFolder.","Map: Z: > OK > gpupdate /force."], 
      stepsAr:["افتح GPMC. قم بتعديل الـ GPO المرتبط بـ OU المستخدمين.","انتقل إلى: User Configuration > Preferences > Windows Settings > Drive Maps.","اضغط بزر الفأرة الأيمن > New > Mapped Drive.","Action: Update. Location: \\\\ServerIP\\SharedFolder.","Map: Z: > OK > gpupdate /force."], 
      verifyEn:"Log in to client PC. The Z: drive should appear.", verifyAr:"سجل الدخول إلى جهاز العميل. يجب أن يظهر قرص Z:.", 
      warningEn:"Ensure the user has NTFS permissions to the folder.", warningAr:"تأكد من أن المستخدم يمتلك صلاحيات NTFS للمجلد.", 
      commands:["gpmc.msc","gpupdate /force"], sources:["Microsoft Learn: Drive Maps"]
    },
    {
      id:"GPO-004", domain:"gpo", titleEn:"Folder Redirection (Documents & Desktop)", titleAr:"إعادة توجيه المجلدات (المستندات وسطح المكتب)", 
      summaryEn:"Redirect user folders to a network server.", summaryAr:"إعادة توجيه مجلدات المستخدم إلى خادم الشبكة.", 
      symptoms:["folder redirection","redirect desktop","إعادة توجيه","حفظ المستندات"], 
      causesEn:["A shared folder with permissions.","GPMC access."], causesAr:["مجلد مشترك بصلاحيات.","الوصول إلى GPMC."], 
      stepsEn:["Open GPMC. Edit GPO linked to Users OU.","Go to: User Configuration > Policies > Windows Settings > Folder Redirection.","Right-click 'Documents' > Properties.","Setting: 'Basic'. Target: 'Create a folder for each user'.","Root Path: \\\\ServerIP\\UserData\\ > OK."], 
      stepsAr:["افتح GPMC. قم بتعديل الـ GPO المرتبط بـ OU المستخدمين.","انتقل إلى: User Configuration > Policies > Windows Settings > Folder Redirection.","اضغط بزر الفأرة الأيمن على 'Documents' > Properties.","Setting: 'Basic'. Target: 'Create a folder for each user'.","Root Path: \\\\ServerIP\\UserData\\ > OK."], 
      verifyEn:"Check Documents folder properties on client.", verifyAr:"تحقق من خصائص مجلد المستندات على العميل.", 
      warningEn:"Changing redirection can cause slow logins.", warningAr:"تغيير إعادة التوجيه قد يسبب بطئاً في تسجيل الدخول.", 
      commands:["gpmc.msc","gpupdate /force"], sources:["Microsoft Learn: Folder Redirection"]
    },
    {
      id:"SRV-001", domain:"server", titleEn:"Install and Configure DHCP Server", titleAr:"تثبيت وإعداد خادم DHCP", 
      summaryEn:"Automatically assign IP addresses.", summaryAr:"توزيع عناوين IP تلقائياً.", 
      symptoms:["dhcp","install dhcp","تثبيت dhcp","توزيع ip"], 
      causesEn:["Server Manager access.","Static IP on server."], causesAr:["الوصول إلى Server Manager.","IP ثابت على الخادم."], 
      stepsEn:["Server Manager > Add Roles > DHCP Server.","Complete post-install.","Open (dhcpmgmt.msc).","Right-click IPv4 > New Scope.","Enter IP range, Gateway, DNS.","Activate."], 
      stepsAr:["Server Manager > Add Roles > DHCP Server.","أكمل التهيئة بعد التثبيت.","افتح (dhcpmgmt.msc).","اضغط بزر الفأرة الأيمن على IPv4 > New Scope.","أدخل نطاق IP، البوابة، DNS.","قم بالتفعيل (Activate)."], 
      verifyEn:"Run 'ipconfig /renew' on client.", verifyAr:"شغّل 'ipconfig /renew' على العميل.", 
      warningEn:"Authorize server in AD.", warningAr:"قم بتفويض الخادم في AD.", 
      commands:["dhcpmgmt.msc","ipconfig /renew"], sources:["Microsoft Learn: DHCP"]
    },
    {
      id:"SRV-002", domain:"server", titleEn:"Create a Shared Folder with NTFS Permissions", titleAr:"إنشاء مجلد مشترك وصلاحيات NTFS", 
      summaryEn:"Share a folder and secure it.", summaryAr:"مشاركة مجلد وتأمينه.", 
      symptoms:["share folder","ntfs","مشاركة مجلد","صلاحيات"], 
      causesEn:["Data drive prepared.","AD Groups created."], causesAr:["قرص بيانات جاهز.","مجموعات AD تم إنشاؤها."], 
      stepsEn:["Create folder (D:\\CompanyData).","Right-click > Properties > Sharing > Advanced Sharing.","Check 'Share this folder'.","Go to Security tab > Edit > Add.","Add AD Group (e.g., IT_Team). Grant 'Modify'."], 
      stepsAr:["أنشئ مجلداً (D:\\CompanyData).","اضغط بزر الفأرة الأيمن > Properties > Sharing > Advanced Sharing.","حدد 'Share this folder'.","انتقل إلى تبويب Security > Edit > Add.","أضف مجموعة AD (مثلاً IT_Team). امنح 'Modify'."], 
      verifyEn:"Access share from client.", verifyAr:"ادخل إلى المشاركة من عميل.", 
      warningEn:"Don't use 'Everyone' on NTFS tab.", warningAr:"لا تستخدم 'Everyone' في تبويب NTFS.", 
      commands:["fsmgmt.msc","icacls"], sources:["Microsoft Learn: File Services"]
    },
    {
      id:"SRV-003", domain:"server", titleEn:"Promote a Server to a Domain Controller", titleAr:"ترقية خادم إلى Domain Controller", 
      summaryEn:"Install AD DS and create a new forest.", summaryAr:"تثبيت AD DS وإنشاء غابة جديدة.", 
      symptoms:["install ad","promote dc","تثبيت اكتف دايركتري","ترقية دومين"], 
      causesEn:["Static IP configured.","Strong Admin password."], causesAr:["IP ثابت.","كلمة مرور Admin قوية."], 
      stepsEn:["Server Manager > Add Roles > AD DS.","Click 'Promote this server to a domain controller'.","Select 'Add a new forest'. Enter Root domain name.","Ensure DNS Server is checked. Enter DSRM password.","Install and reboot."], 
      stepsAr:["Server Manager > Add Roles > AD DS.","اضغط 'Promote this server to a domain controller'.","اختر 'Add a new forest'. أدخل اسم النطاق.","تأكد من تحديد DNS Server. أدخل كلمة مرور DSRM.","قم بالتثبيت وأعد التشغيل."], 
      verifyEn:"Open ADUC to verify.", verifyAr:"افتح ADUC للتحقق.", 
      warningEn:"Saves DSRM password securely.", warningAr:"احفظ كلمة مرور DSRM في مكان آمن.", 
      commands:["Install-ADDSForest"], sources:["Microsoft Learn: AD DS"]
    },
    {
      id:"SRV-004", domain:"server", titleEn:"Install and Configure Print Server", titleAr:"تثبيت وإعداد خادم الطباعة", 
      summaryEn:"Set up a central print server.", summaryAr:"إعداد خادم طباعة مركزي.", 
      symptoms:["print server","install printer","خادم طباعة","مشاركة طابعة"], 
      causesEn:["Print Server role not installed."], causesAr:["دور Print Server غير مثبت."], 
      stepsEn:["Server Manager > Add Roles > Print and Document Services.","Open (printmanagement.msc).","Right-click Printers > Add Printer.","Choose TCP/IP printer.","Enter IP and driver."], 
      stepsAr:["Server Manager > Add Roles > Print and Document Services.","افتح (printmanagement.msc).","اضغط بزر الفأرة الأيمن على Printers > Add Printer.","اختر TCP/IP printer.","أدخل IP والتعريف."], 
      verifyEn:"Add from a client PC.", verifyAr:"أضفها من جهاز عميل.", 
      warningEn:"Ensure drivers are compatible.", warningAr:"تأكد من توافق التعريفات.", 
      commands:["printmanagement.msc"], sources:["Microsoft Learn: Print Server"]
    },
    {
      id:"SRV-005", domain:"server", titleEn:"Install and Configure WSUS", titleAr:"تثبيت وإعداد خادم التحديثات WSUS", 
      summaryEn:"Centralize Windows updates.", summaryAr:"مركزة توزيع تحديثات ويندوز.", 
      symptoms:["wsus","install updates","خادم تحديثات","تحديثات ويندوز"], 
      causesEn:["Windows Server.","GPMC access."], causesAr:["نظام Windows Server.","الوصول إلى GPMC."], 
      stepsEn:["Server Manager > Add Roles > WSUS.","Complete post-install (D:\\WSUS).","Open (wsus.msc) and run wizard.","Create GPO: Windows Components > Windows Update.","Enable 'Specify intranet Microsoft update service location'."], 
      stepsAr:["Server Manager > Add Roles > WSUS.","أكمل التثبيت (D:\\WSUS).","افتح (wsus.msc) وشغّل المعالج.","أنشئ GPO: Windows Components > Windows Update.","فعّل 'Specify intranet Microsoft update service location'."], 
      verifyEn:"Check Windows Update on client.", verifyAr:"افتح Windows Update على العميل.", 
      warningEn:"Requires significant disk space.", warningAr:"يتطلب مساحة تخزين كبيرة.", 
      commands:["wsus.msc","wuauclt /reportnow"], sources:["Microsoft Learn: WSUS"]
    },
    {
      id:"SRV-006", domain:"server", titleEn:"Configure Windows Server Backup", titleAr:"إعداد النسخ الاحتياطي", 
      summaryEn:"Schedule automatic backups.", summaryAr:"جدولة نسخ احتياطي تلقائي.", 
      symptoms:["backup","server backup","نسخ احتياطي","حفظ البيانات"], 
      causesEn:["External drive or network share.","Server Manager access."], causesAr:["قرص خارجي أو مشاركة شبكة.","الوصول إلى Server Manager."], 
      stepsEn:["Server Manager > Add Roles > Windows Server Backup.","Open (wbadmin.msc).","Click 'Backup Schedule'.","Select 'Custom' or 'Full server'.","Select destination and schedule."], 
      stepsAr:["Server Manager > Add Roles > Windows Server Backup.","افتح (wbadmin.msc).","اضغط 'Backup Schedule'.","اختر 'Custom' أو 'Full server'.","اختر الوجهة والجدول."], 
      verifyEn:"Run a manual backup.", verifyAr:"قم بتشغيل نسخ احتياطي يدوي.", 
      warningEn:"Always test restoring from a backup.", warningAr:"اختبر الاستعادة دائماً.", 
      commands:["wbadmin.msc","wbadmin get versions"], sources:["Microsoft Learn: Windows Server Backup"]
    },
    {
      id:"SRV-007", domain:"server", titleEn:"Configure FSRM Quotas", titleAr:"إعداد حصص التخزين FSRM", 
      summaryEn:"Limit folder size.", summaryAr:"تحديد حجم المجلدات.", 
      symptoms:["fsrm","quota","limit folder","تحديد مساحة","حصص التخزين"], 
      causesEn:["File Server Resource Manager installed."], causesAr:["أداة FSRM مثبتة."], 
      stepsEn:["Server Manager > Add Roles > File Server Resource Manager.","Open (fsrm.msc).","Go to Quota Management > Quotas.","Right-click > Create Quota.","Select path and define limit."], 
      stepsAr:["Server Manager > Add Roles > File Server Resource Manager.","افتح (fsrm.msc).","اذهب إلى Quota Management > Quotas.","اضغط بزر الفأرة الأيمن > Create Quota.","اختر المسار وحدد الحد."], 
      verifyEn:"Copy a large file to the folder.", verifyAr:"انسخ ملفاً كبيراً إلى المجلد.", 
      warningEn:"Do not apply quotas to C:\\ drive.", warningAr:"لا تطبق الحصص على قرص C:\\", 
      commands:["fsrm.msc"], sources:["Microsoft Learn: FSRM Quotas"]
    },
    {
      id:"SRV-008", domain:"server", titleEn:"Install and Configure IIS Web Server", titleAr:"تثبيت وإعداد خادم الويب IIS", 
      summaryEn:"Host an internal website.", summaryAr:"استضافة موقع ويب داخلي.", 
      symptoms:["iis","web server","install iis","خادم ويب"], 
      causesEn:["Server Manager access."], causesAr:["الوصول إلى Server Manager."], 
      stepsEn:["Server Manager > Add Roles > Web Server (IIS).","Open (inetmgr).","Expand server > Sites.","Place HTML files in C:\\inetpub\\wwwroot.","Browse to http://ServerIP."], 
      stepsAr:["Server Manager > Add Roles > Web Server (IIS).","افتح (inetmgr).","قم بتوسيع الخادم > Sites.","ضع ملفات HTML في C:\\inetpub\\wwwroot.","تصفح http://ServerIP."], 
      verifyEn:"Browse to server IP.", verifyAr:"تصفح عنوان IP الخادم.", 
      warningEn:"Do not expose directly to Internet without hardening.", warningAr:"لا تعرضه للإنترنت دون تحصين.", 
      commands:["inetmgr"], sources:["Microsoft Learn: IIS"]
    },
    {
      id:"SRV-009", domain:"server", titleEn:"Install and Configure Hyper-V", titleAr:"تثبيت وإعداد Hyper-V", 
      summaryEn:"Create Virtual Machines.", summaryAr:"إنشاء أجهزة افتراضية.", 
      symptoms:["hyper-v","virtual machine","vm","خوادم افتراضية"], 
      causesEn:["Hardware virtualization in BIOS."], causesAr:["تمكين المحاكاة الافتراضية في BIOS."], 
      stepsEn:["Server Manager > Add Roles > Hyper-V.","Restart.","Open (virtmgmt.msc).","New > Virtual Machine.","Assign RAM, Network, VHDX, ISO."], 
      stepsAr:["Server Manager > Add Roles > Hyper-V.","أعد التشغيل.","افتح (virtmgmt.msc).","New > Virtual Machine.","خصص RAM، الشبكة، VHDX، ISO."], 
      verifyEn:"Start the VM.", verifyAr:"قم بتشغيل الجهاز الافتراضي.", 
      warningEn:"Ensure enough RAM and Storage.", warningAr:"تأكد من كفاية RAM والتخزين.", 
      commands:["virtmgmt.msc","Get-VM"], sources:["Microsoft Learn: Hyper-V"]
    },
    {
      id:"SRV-010", domain:"server", titleEn:"Configure DHCP Failover", titleAr:"إعداد التخزين التلقائي لـ DHCP", 
      summaryEn:"Ensure IP assignment continues if one server fails.", summaryAr:"ضمان استمرار توزيع IP عند تعطل خادم.", 
      symptoms:["dhcp failover","high availability","تعطل dhcp"], 
      causesEn:["Two DHCP servers.","Both authorized in AD."], causesAr:["خادمان DHCP.","مفوضان في AD."], 
      stepsEn:["Open (dhcpmgmt.msc) on primary.","Right-click IPv4 > Configure Failover.","Select partner server.","Choose Load Balance or Hot Standby.","Enter Shared Secret."], 
      stepsAr:["افتح (dhcpmgmt.msc) على الخادم الأساسي.","اضغط بزر الفأرة الأيمن على IPv4 > Configure Failover.","اختر الخادم الشريك.","اختر Load Balance أو Hot Standby.","أدخل Shared Secret."], 
      verifyEn:"Stop primary DHCP service and test.", verifyAr:"أوقف خدمة DHCP الأساسية واختبر.", 
      warningEn:"Identical configurations needed.", warningAr:"مطلوب تهيئة متطابقة.", 
      commands:["dhcpmgmt.msc","Add-DhcpServerv4Failover"], sources:["Microsoft Learn: DHCP Failover"]
    },
    {
      id:"SRV-011", domain:"security", titleEn:"Enable BitLocker Drive Encryption", titleAr:"تفعيل تشفير الأقراص BitLocker", 
      summaryEn:"Encrypt the hard drive.", summaryAr:"تشفير القرص الصلب.", 
      symptoms:["bitlocker","encryption","تشفير القرص"], 
      causesEn:["TPM chip or USB key."], causesAr:["شريحة TPM أو مفتاح USB."], 
      stepsEn:["Server Manager > Add Roles > BitLocker.","Control Panel > BitLocker Drive Encryption.","Turn on BitLocker.","Save recovery key.","Encrypt and restart."], 
      stepsAr:["Server Manager > Add Roles > BitLocker.","لوحة التحكم > BitLocker Drive Encryption.","Turn on BitLocker.","احفظ مفتاح الاسترداد.","قم بالتشفير وأعد التشغيل."], 
      verifyEn:"Padlock icon in File Explorer.", verifyAr:"رمز القفل في مستكشف الملفات.", 
      warningEn:"NEVER lose the Recovery Key.", warningAr:"لا تفقد مفتاح الاسترداد أبداً.", 
      commands:["manage-bde -status"], sources:["Microsoft Learn: BitLocker"]
    },
    {
      id:"SRV-012", domain:"server", titleEn:"Install and Configure Windows Server Core", titleAr:"تثبيت وإدارة Windows Server Core", 
      summaryEn:"Manage a server with no GUI.", summaryAr:"إدارة خادم بدون واجهة رسومية.", 
      symptoms:["server core","no gui","سيرفر كور"], 
      causesEn:["ISO.","RSAT tools."], causesAr:["ملف ISO.","أدوات RSAT."], 
      stepsEn:["Install 'Core' edition.","Login to CMD.","Use 'sconfig'.","Use RSAT from Windows 10."], 
      stepsAr:["قم بتثبيت نسخة 'Core'.","سجل الدخول إلى CMD.","استخدم 'sconfig'.","استخدم RSAT من Windows 10."], 
      verifyEn:"Ping and remote manage.", verifyAr:"اختبار ping والإدارة عن بعد.", 
      warningEn:"No GUI. Command-line required.", warningAr:"بدون واجهة. يتطلب سطر أوامر.", 
      commands:["sconfig"], sources:["Microsoft Learn: Server Core"]
    },
    {
      id:"DNS-001", domain:"dns", titleEn:"Create a DNS Forward Lookup Zone", titleAr:"إنشاء منطقة بحث أمامية في DNS", 
      summaryEn:"Resolve internal names.", summaryAr:"حل الأسماء الداخلية.", 
      symptoms:["dns zone","forward zone","إنشاء منطقة dns"], 
      causesEn:["DNS Console."], causesAr:["وحدة تحكم DNS."], 
      stepsEn:["Open (dnsmgmt.msc).","Right-click Forward Lookup Zones > New Zone.","Primary zone > AD integrated.","Name: corp.local."], 
      stepsAr:["افتح (dnsmgmt.msc).","اضغط بزر الفأرة الأيمن على Forward Lookup Zones > New Zone.","Primary zone > AD integrated.","الاسم: corp.local."], 
      verifyEn:"Run 'nslookup corp.local'.", verifyAr:"شغّل 'nslookup corp.local'.", 
      warningEn:"Ensure AD integration.", warningAr:"تأكد من التكامل مع AD.", 
      commands:["dnsmgmt.msc","nslookup"], sources:["Microsoft Learn: DNS"]
    },
    {
      id:"DNS-002", domain:"dns", titleEn:"Configure DNS Forwarders", titleAr:"إعداد موجهات DNS", 
      summaryEn:"Resolve external internet names.", summaryAr:"حل أسماء الإنترنت الخارجية.", 
      symptoms:["dns forwarders","internet dns","توجيه dns"], 
      causesEn:["DNS Manager access."], causesAr:["الوصول إلى DNS Manager."], 
      stepsEn:["Open (dnsmgmt.msc).","Right-click server > Properties.","Forwarders tab > Edit.","Add 8.8.8.8 and 1.1.1.1."], 
      stepsAr:["افتح (dnsmgmt.msc).","اضغط بزر الفأرة الأيمن على الخادم > Properties.","تبويب Forwarders > Edit.","أضف 8.8.8.8 و 1.1.1.1."], 
      verifyEn:"Run 'nslookup google.com'.", verifyAr:"شغّل 'nslookup google.com'.", 
      warningEn:"Only on Server, not clients.", warningAr:"فقط على الخادم، وليس العملاء.", 
      commands:["dnsmgmt.msc","nslookup"], sources:["Microsoft Learn: DNS Forwarders"]
    },
    {
      id:"DNS-003", domain:"dns", titleEn:"Create a DNS Reverse Lookup Zone", titleAr:"إنشاء منطقة بحث عكسية في DNS", 
      summaryEn:"Resolve IP to hostname.", summaryAr:"حل عناوين IP إلى أسماء.", 
      symptoms:["reverse lookup","ptr record","بحث عكسي"], 
      causesEn:["DNS Manager access."], causesAr:["الوصول إلى DNS Manager."], 
      stepsEn:["Open (dnsmgmt.msc).","Right-click Reverse Lookup Zones > New Zone.","Primary > AD integrated.","IPv4 > Enter Network ID (192.168.1)."], 
      stepsAr:["افتح (dnsmgmt.msc).","اضغط بزر الفأرة الأيمن على Reverse Lookup Zones > New Zone.","Primary > AD integrated.","IPv4 > أدخل Network ID (192.168.1)."], 
      verifyEn:"Run 'nslookup 192.168.1.X'.", verifyAr:"شغّل 'nslookup 192.168.1.X'.", 
      warningEn:"Ensure Network ID is correct.", warningAr:"تأكد من صحة Network ID.", 
      commands:["dnsmgmt.msc","nslookup"], sources:["Microsoft Learn: Reverse Lookup"]
    },
    {
      id:"NET-001", domain:"network", titleEn:"How to change IP Address in Windows", titleAr:"كيفية تغيير عنوان IP في ويندوز", 
      summaryEn:"Configure a static IP address.", summaryAr:"تهيئة عنوان IP ثابت.", 
      symptoms:["change ip","static ip","تغيير ip","عنوان ثابت"], 
      causesEn:["Network adapter available."], causesAr:["كرت شبكة متاح."], 
      stepsEn:["Open (ncpa.cpl).","Right-click adapter > Properties.","IPv4 > Properties.","Use the following IP address.","Enter IP, Mask, Gateway, DNS."], 
      stepsAr:["افتح (ncpa.cpl).","اضغط بزر الفأرة الأيمن على المحول > Properties.","IPv4 > Properties.","Use the following IP address.","أدخل IP، القناع، البوابة، DNS."], 
      verifyEn:"Run 'ipconfig'.", verifyAr:"شغّل 'ipconfig'.", 
      warningEn:"Ensure IP is not in use.", warningAr:"تأكد من أن IP غير مستخدم.", 
      commands:["ncpa.cpl","ipconfig"], sources:["Microsoft Learn: TCP/IP"]
    },
    {
      id:"NET-002", domain:"network", titleEn:"Join a Windows Client to Domain", titleAr:"ربط جهاز ويندوز بالدومين", 
      summaryEn:"Connect a PC to Active Directory.", summaryAr:"ربط جهاز بـ Active Directory.", 
      symptoms:["join domain","add to domain","ربط بالدومين"], 
      causesEn:["Client uses AD DNS.","Admin credentials."], causesAr:["العميل يستخدم AD DNS.","بيانات اعتماد Admin."], 
      stepsEn:["Open (sysdm.cpl).","Change > Domain.","Type domain name.","Enter credentials.","Restart."], 
      stepsAr:["افتح (sysdm.cpl).","Change > Domain.","اكتب اسم الدومين.","أدخل بيانات الاعتماد.","أعد التشغيل."], 
      verifyEn:"Login screen shows domain.", verifyAr:"شاشة الدخول تعرض الدومين.", 
      warningEn:"DNS must be configured first.", warningAr:"يجب تهيئة DNS أولاً.", 
      commands:["sysdm.cpl"], sources:["Microsoft Learn: Join Domain"]
    },
    {
      id:"NET-003", domain:"network", titleEn:"Install and Configure VPN", titleAr:"تثبيت وإعداد شبكة خاصة افتراضية (VPN)", 
      summaryEn:"Allow secure remote connection.", summaryAr:"السماح بالاتصال الآمن عن بعد.", 
      symptoms:["vpn","remote access","اتصال عن بعد"], 
      causesEn:["Two NICs.","Public IP or Port Forwarding."], causesAr:["كرتا شبكة.","IP عام أو Port Forwarding."], 
      stepsEn:["Server Manager > Remote Access > VPN.","Open (rrasmgmt.msc).","Configure and Enable.","Custom > VPN access.","Enable user in ADUC Dial-in."], 
      stepsAr:["Server Manager > Remote Access > VPN.","افتح (rrasmgmt.msc).","Configure and Enable.","Custom > VPN access.","فعّل المستخدم في ADUC Dial-in."], 
      verifyEn:"Create VPN connection on client.", verifyAr:"أنشئ اتصال VPN على العميل.", 
      warningEn:"Ensure firewall rules allow VPN traffic.", warningAr:"تأكد من قواعد الفايرول للسماح بـ VPN.", 
      commands:["rrasmgmt.msc"], sources:["Microsoft Learn: VPN"]
    },
    {
      id:"SEC-001", domain:"security", titleEn:"Configure Windows Firewall for AD Ports", titleAr:"تهيئة جدار الحماية لمنافذ AD", 
      summaryEn:"Allow essential ports for AD.", summaryAr:"السماح بالمنافذ الأساسية لـ AD.", 
      symptoms:["firewall ports","ad ports","منافذ الفايرول"], 
      causesEn:["Firewall management access."], causesAr:["الوصول لإدارة الجدار الناري."], 
      stepsEn:["Open (wf.msc).","Inbound Rules > New Rule.","Port > TCP.","Enter ports: 53, 88, 389, 445, 636, 3268.","Allow connection."], 
      stepsAr:["افتح (wf.msc).","Inbound Rules > New Rule.","Port > TCP.","أدخل المنافذ: 53, 88, 389, 445, 636, 3268.","Allow connection."], 
      verifyEn:"Test-NetConnection -Port 389.", verifyAr:"Test-NetConnection -Port 389.", 
      warningEn:"Don't expose to internet.", warningAr:"لا تعرضها للإنترنت.", 
      commands:["wf.msc","Test-NetConnection"], sources:["Microsoft Learn: AD Ports"]
    },
    {
      id:"REP-001", domain:"replication", titleEn:"Active Directory replication is failing", titleAr:"فشل تكرار بيانات Active Directory", 
      summaryEn:"Changes are not appearing on another DC.", summaryAr:"التغييرات لا تظهر على خادم آخر.", 
      symptoms:["replication failing","repadmin","التكرار لا يعمل"], 
      causesEn:["DNS issues.","Network issues.","Time sync issues."], causesAr:["مشكلات DNS.","مشكلات الشبكة.","مشكلات الوقت."], 
      stepsEn:["Run 'repadmin /replsummary'.","Run 'repadmin /showrepl'.","Validate DNS resolution.","Check time sync."], 
      stepsAr:["شغّل 'repadmin /replsummary'.","شغّل 'repadmin /showrepl'.","تحقق من DNS.","افحص مزامنة الوقت."], 
      verifyEn:"Run 'repadmin /replsummary'.", verifyAr:"شغّل 'repadmin /replsummary'.", 
      warningEn:"Do not force replication before understanding the cause.", warningAr:"لا تفرض التكرار قبل فهم السبب.", 
      commands:["repadmin /replsummary","repadmin /showrepl"], sources:["Microsoft Learn: AD Replication"]
    }
  ],
  commands: [
    {titleEn:"Refresh Group Policy",titleAr:"تحديث Group Policy",descEn:"Force policy update.",descAr:"إجبار تحديث السياسات.",cmd:"gpupdate /force",safe:false},
    {titleEn:"Show AD Replication",titleAr:"عرض تكرار AD",descEn:"Show replication summary.",descAr:"عرض ملخص التكرار.",cmd:"repadmin /replsummary",safe:true},
    {titleEn:"Show DNS Config",titleAr:"عرض إعدادات DNS",descEn:"Show IP and DNS config.",descAr:"عرض إعدادات IP و DNS.",cmd:"ipconfig /all",safe:true},
    {titleEn:"Show Password Policy",titleAr:"عرض سياسة كلمات المرور",descEn:"Display domain password policy.",descAr:"عرض سياسة كلمات المرور.",cmd:"net accounts",safe:true},
    {titleEn:"Open ADUC",titleAr:"فتح ADUC",descEn:"Open Active Directory Users and Computers.",descAr:"فتح أداة المستخدمين والأجهزة.",cmd:"dsa.msc",safe:true},
    {titleEn:"Open GPMC",titleAr:"فتح GPMC",descEn:"Open Group Policy Management.",descAr:"فتح أداة إدارة السياسات.",cmd:"gpmc.msc",safe:true},
    {titleEn:"Test AD Port 389",titleAr:"اختبار منفذ AD 389",descEn:"Test connection to Domain Controller LDAP.",descAr:"اختبار الاتصال بـ LDAP.",cmd:"Test-NetConnection -ComputerName DC-IP -Port 389",safe:true},
    {titleEn:"Show FSMO Roles",titleAr:"عرض أدوار FSMO",descEn:"Query FSMO role holders.",descAr:"استعلام عن حاملي أدوار FSMO.",cmd:"netdom query fsmo",safe:true},
    {titleEn:"Generate GPO Report",titleAr:"إنشاء تقرير GPO",descEn:"Generate HTML report of applied GPOs.",descAr:"إنشاء تقرير HTML بالسياسات المطبقة.",cmd:"gpresult /h C:\\GPO_Report.html",safe:true},
    {titleEn:"Show Resultant Set of Policy",titleAr:"عرض نتائج السياسات",descEn:"Open RSOP console.",descAr:"فتح وحدة تحكم RSOP.",cmd:"rsop.msc",safe:true}
  ]
};