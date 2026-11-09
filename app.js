(() => {
  const K = window.BWH_KNOWLEDGE;
  const state = {lang: localStorage.getItem("bwh-lang") || "ar", currentSolution: null}; // جعلنا العربية هي الافتراضية
  const $ = (id) => document.getElementById(id);
  const t = (key) => (I18N[state.lang] && I18N[state.lang][key]) || I18N.ar[key] || key;
  const field = (obj, base) => obj[base + (state.lang === "ar" ? "Ar" : "En")] || obj[base + "En"] || "";

  const I18N = {
    en: {
      appName: "Al-Mathyoub", brandSub: "Personal Admin Playbook", workspace: "WORKSPACE", dashboard: "Dashboard", troubleshoot: "Search Guides", solutions: "Full Knowledge Base", powershell: "PowerShell Reference", topics: "Knowledge Domains", system: "SYSTEM", about: "About", offlineReady: "Offline-ready", credit: "Prepared by Eng. Abdulqader H. Al-Mathyoub", ruleBased: "Personal Reference", heroEyebrow: "PERSONAL IT ENCYCLOPEDIA", heroTitle: "Administer with clarity.<br>Configure with confidence.", heroText: "A structured technical knowledge base for Active Directory, Windows Server, and Networking administration.", startDiagnosis: "Search my guides", overview: "OVERVIEW", knowledgeAtGlance: "My Knowledge Base", starterContent: "Personal Admin Pack", domains: "Knowledge domains", noAiValue: "No AI", noAi: "Deterministic guides", cloudReadyValue: "Cloud", cloudReady: "Offline-ready", browse: "BROWSE", popularDomains: "Knowledge Domains", important: "Important:", noticeText: "This is a personal administration reference tool. Always validate commands and back up systems before making changes.", guidedDiagnosis: "SEARCH", troubleshootTitle: "What are you trying to do?", troubleshootIntro: "Search the knowledge base or select a topic to follow a structured administrative guide.", searchPlaceholder: "Search for a guide, setup, or configuration...", search: "Search", suggestedTopics: "Suggested topics", referenceLibrary: "KNOWLEDGE BASE", solutionsTitle: "My Admin Guides", solutionsIntro: "Browse documented configurations, step-by-step guides, and technical references.", filterSolutions: "Filter guides...", allDomains: "All domains", psTitle: "PowerShell Reference", psIntro: "A small starter set of administration commands, with explanations.", taxonomy: "KNOWLEDGE TAXONOMY", topicsTitle: "Knowledge Domains", topicsIntro: "The coverage map for my personal knowledge base.", projectInfo: "PROJECT INFORMATION", aboutTitle: "About My Playbook", aboutIntro: "A bilingual, rule-based web application for personal technical administration.", architecture: "Architecture", architectureText: "The current release is a static PWA prototype. Its contents are curated JSON knowledge records.", roadmap: "Next steps", roadmap1: "Connect to Firebase for dynamic content.", roadmap2: "Add more detailed AD guides.", footerText: "Personal IT Encyclopedia", noResults: "No matching entries found.", causes: "Prerequisites & Info", steps: "Steps", verify: "Verification", warning: "Safety note", commands: "Related commands", source: "Reference notes", open: "Open", copy: "Copy command", copied: "Copied", readOnly: "Read-only", actionCommand: "Changes system state", all: "All", online: "Online", offline: "Offline Mode"
    },
    ar: {
      appName: "المذيوب", brandSub: "دليل الإدارة الشخصي", workspace: "مساحة العمل", dashboard: "لوحة التحكم", troubleshoot: "البحث في الأدلة", solutions: "قاعدة المعرفة الكاملة", powershell: "مرجع PowerShell", topics: "مجالات المعرفة", system: "النظام", about: "حول التطبيق", offlineReady: "جاهز دون اتصال", credit: "إعداد م. عبد القادر حسين المذيوب", ruleBased: "مرجع شخصي", heroEyebrow: "دليل الإدارة الشخصي", heroTitle: "إدارة باحترافية.<br>وتهيئة بثقة.", heroText: "مرجع تقني شامل لإدارة Active Directory وWindows Server والشبكات والأمن.", startDiagnosis: "ابدأ البحث في أدلتي", overview: "نظرة عامة", knowledgeAtGlance: "قاعدة معرفتي", starterContent: "حزمة الإدارة الشخصية", domains: "مجالات المعرفة", noAiValue: "بدون AI", noAi: "أدلة حتمية", cloudReadyValue: "سحابي", cloudReady: "جاهز للعمل دون اتصال", browse: "تصفح", popularDomains: "مجالات المعرفة", important: "مهم:", noticeText: "هذا التطبيق مرجع شخصي. تحقق دائماً من الأوامر وخذ نسخاً احتياطية قبل إجراء التغييرات.", guidedDiagnosis: "البحث", troubleshootTitle: "ماذا تريد أن تفعل؟", troubleshootIntro: "ابحث في قاعدة المعرفة أو اختر موضوعاً لاتباع دليل إداري منظم.", searchPlaceholder: "ابحث عن دليل، إعداد، أو تهيئة...", search: "بحث", suggestedTopics: "موضوعات مقترحة", referenceLibrary: "قاعدة المعرفة", solutionsTitle: "أدلة الإدارة الخاصة بي", solutionsIntro: "تصفح التهيئات الموثقة، الأدلة خطوة بخطوة، والمراجع التقنية.", filterSolutions: "تصفية الأدلة...", allDomains: "كل المجالات", psTitle: "مرجع PowerShell", psIntro: "مجموعة أولية من أوامر الإدارة مع الشرح.", taxonomy: "تصنيف المعرفة", topicsTitle: "مجالات المعرفة", topicsIntro: "خريطة التغطية لقاعدة معرفتي الشخصية.", projectInfo: "معلومات المشروع", aboutTitle: "حول تطبيق المذيوب", aboutIntro: "تطبيق ويب ثنائي اللغة للإدارة التقنية الشخصية.", architecture: "البنية", architectureText: "الإصدار الحالي نموذج PWA ثابت يعمل دون اتصال. محتوياته سجلات معرفة JSON منتقاة.", roadmap: "الخطوات التالية", roadmap1: "الربط مع Firebase للمحتوى الديناميكي.", roadmap2: "إضافة المزيد من أدلة Active Directory.", footerText: "دليل الإدارة الشخصي", noResults: "لم يتم العثور على نتائج مطابقة.", causes: "المتطلبات والمعلومات", steps: "خطوات التنفيذ", verify: "التحقق", warning: "ملاحظة سلامة", commands: "الأوامر المرتبطة", source: "المراجع", open: "فتح", copy: "نسخ الأمر", copied: "تم النسخ", readOnly: "للقراءة فقط", actionCommand: "يغيّر حالة النظام", all: "الكل", online: "متصل", offline: "وضع عدم الاتصال"
    }
  };

  // دالة تحديث حالة الشبكة
  function updateNetworkStatus() {
    const statusEl = $("networkStatus");
    if (!statusEl) return;
    if (navigator.onLine) {
      statusEl.style.background = "#dcfce7"; statusEl.style.color = "#166534";
      statusEl.innerHTML = `<i></i><span>${t('online')}</span>`;
    } else {
      statusEl.style.background = "#fee2e2"; statusEl.style.color = "#991b1b";
      statusEl.innerHTML = `<i></i><span>${t('offline')}</span>`;
    }
  }

  function applyLanguage(){
    document.documentElement.lang = state.lang; 
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", state.lang === "ar");
    
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const val = t(el.dataset.i18n);
      if(val.includes("<br>")) el.innerHTML = val; else el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
    
    $("langBtn").textContent = state.lang === "en" ? "العربية" : "English";
    $("pageTitle").textContent = document.querySelector(".nav-item.active [data-i18n]")?.textContent || t("dashboard");
    
    renderDomains(); renderSolutions(); renderCommands(); renderQuickTopics();
    $("statSolutions").textContent = K.solutions.length;
    $("statDomains").textContent = K.domains.length;
    updateNetworkStatus(); // تحديث المؤشر عند تغيير اللغة
  }

  function domainName(id){ const d=K.domains.find(x=>x.id===id); return d?(state.lang==="ar"?d.ar:d.en):id; }
  
  function renderDomains(){
    const html = K.domains.map(d=>`<article class="domain-card" data-domain="${d.id}"><div class="domain-symbol">${d.icon}</div><h3>${state.lang==="ar"?d.ar:d.en}</h3><p>${state.lang==="ar"?d.descAr:d.descEn}</p><span class="domain-count">${K.solutions.filter(s=>s.domain===d.id).length} ${state.lang==="ar"?"أدلة":"guides"}</span></article>`).join("");
    $("domainGrid").innerHTML=html; $("allDomains").innerHTML=html;
    
    document.querySelectorAll(".domain-card").forEach(el=>el.addEventListener("click",()=>{
      showView("solutions"); $("domainFilter").value=el.dataset.domain; renderSolutions();
    }));
    $("domainFilter").innerHTML=`<option value="all">${t("allDomains")}</option>`+K.domains.map(d=>`<option value="${d.id}">${state.lang==="ar"?d.ar:d.en}</option>`).join("");
  }
  
  function renderSolutions(query=""){
    const domain=$("domainFilter")?.value||"all"; const q=query.toLowerCase().trim();
    const matches=K.solutions.filter(s=>(domain==="all"||s.domain===domain)&&(!q||[s.id,s.titleEn,s.titleAr,s.summaryEn,s.summaryAr,...s.symptoms].join(" ").toLowerCase().includes(q)));
    $("solutionGrid").innerHTML=matches.length?matches.map(s=>`<article class="solution-card" data-solution="${s.id}"><span class="tag">${domainName(s.domain)} · ${s.id}</span><h3>${field(s,"title")}</h3><p>${field(s,"summary")}</p></article>`).join(""):`<div class="empty">${t("noResults")}</div>`;
    document.querySelectorAll(".solution-card").forEach(el=>el.addEventListener("click",()=>openDiagnosis(el.dataset.solution)));
  }
  
  function renderQuickTopics(){
    $("quickTopics").innerHTML=K.domains.slice(0,6).map(d=>`<button data-topic="${d.id}" class="tag" style="cursor:pointer;margin:5px">${state.lang==="ar"?d.ar:d.en}</button>`).join("");
    document.querySelectorAll("[data-topic]").forEach(b=>b.addEventListener("click",()=>{showView("solutions");$("domainFilter").value=b.dataset.topic;renderSolutions();}));
  }
  
  function renderCommands(){
    $("commandList").innerHTML=K.commands.map((c,i)=>`<article class="command-card solution-card" style="cursor:default"><div class="command-head" style="display:flex;justify-content:space-between"><h3>${state.lang==="ar"?c.titleAr:c.titleEn}</h3><button class="tag" data-copy="${i}" style="cursor:pointer">${t("copy")}</button></div><p>${state.lang==="ar"?c.descAr:c.descEn}</p><pre style="background:#1e293b;color:#f8fafc;padding:10px;border-radius:8px;overflow-x:auto;"><code>${escapeHtml(c.cmd)}</code></pre><span class="tag">${c.safe?t("readOnly"):t("actionCommand")}</span></article>`).join("");
    document.querySelectorAll("[data-copy]").forEach(b=>b.addEventListener("click",async()=>{const c=K.commands[Number(b.dataset.copy)];try{await navigator.clipboard.writeText(c.cmd);b.textContent=t("copied");setTimeout(()=>b.textContent=t("copy"),1200);}catch{b.textContent=c.cmd;}}));
  }
  
  function escapeHtml(s){return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");}
  
  function openDiagnosis(id){
    const s=K.solutions.find(x=>x.id===id); if(!s)return; state.currentSolution=id;
    const list=(arr)=>`<ul>${arr.map(x=>`<li>${x}</li>`).join("")}</ul>`;
    const cmds=s.commands?.length?`<h3>${t("commands")}</h3><ul>${s.commands.map(x=>`<li><code>${escapeHtml(x)}</code></li>`).join("")}</ul>`:"";
    $("diagnosisDetail").innerHTML=`<article class="diagnosis-card"><span class="tag">${domainName(s.domain)} · ${s.id}</span><h2>${field(s,"title")}</h2><p>${field(s,"summary")}</p><h3>${t("causes")}</h3>${list(field(s,"causes"))}<h3>${t("steps")}</h3><ol>${field(s,"steps").map(x=>`<li>${x}</li>`).join("")}</ol><h3>${t("verify")}</h3><p>${field(s,"verify")}</p><h3>${t("warning")}</h3><p>${field(s,"warning")}</p>${cmds}<h3>${t("source")}</h3>${list(s.sources||[])}</article>`;
    $("diagnosisDetail").scrollIntoView({behavior:"smooth",block:"start"});
  }
  
  function runSearch(){
    const q=$("problemSearch").value.trim().toLowerCase(); const matches=K.solutions.filter(s=>[s.id,s.titleEn,s.titleAr,s.summaryEn,s.summaryAr,...s.symptoms,...s.causesEn,...s.causesAr].join(" ").toLowerCase().includes(q));
    $("diagnosisResults").innerHTML=matches.length?matches.map(s=>`<div class="result-row" data-result="${s.id}"><div><h3>${field(s,"title")}</h3><p>${field(s,"summary")}</p></div><span class="tag">${domainName(s.domain)}</span></div>`).join(""):`<div class="empty">${t("noResults")}</div>`;
    document.querySelectorAll("[data-result]").forEach(el=>el.addEventListener("click",()=>openDiagnosis(el.dataset.result)));
    $("diagnosisDetail").innerHTML="";
  }
  
  function showView(name){
    document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+name));
    document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.view===name));
    $("pageTitle").textContent=document.querySelector(`.nav-item[data-view="${name}"] [data-i18n]`)?.textContent||"";
    $("sidebar").classList.remove("open"); window.scrollTo({top:0,behavior:"smooth"});
  }

  // Event Listeners
  document.querySelectorAll(".nav-item").forEach(n=>n.addEventListener("click",()=>showView(n.dataset.view)));
  document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));
  $("langBtn").addEventListener("click",()=>{state.lang=state.lang==="en"?"ar":"en";localStorage.setItem("bwh-lang",state.lang);applyLanguage();});
  $("searchBtn").addEventListener("click",runSearch);
  $("problemSearch").addEventListener("keydown",e=>{if(e.key==="Enter")runSearch();});
  $("librarySearch").addEventListener("input",e=>renderSolutions(e.target.value));
  $("domainFilter").addEventListener("change",()=>renderSolutions($("librarySearch").value));
  $("menuBtn").addEventListener("click",()=>$("sidebar").classList.toggle("open"));
  
  // Network Listeners
  window.addEventListener("online", updateNetworkStatus);
  window.addEventListener("offline", updateNetworkStatus);

  // Init
  applyLanguage();
  if("serviceWorker" in navigator && location.protocol.startsWith("http")){
    window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));
  }
})();