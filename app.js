(() => {
  const K = window.BWH_KNOWLEDGE;
  const state = {lang: localStorage.getItem("bwh-lang") || "en", currentSolution: null};
  const $ = (id) => document.getElementById(id);
  const t = (key) => (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
  const field = (obj, base) => obj[base + (state.lang === "ar" ? "Ar" : "En")] || obj[base + "En"] || "";
  const I18N = {
    en:{brandSub:"Knowledge & Troubleshooting",workspace:"WORKSPACE",dashboard:"Dashboard",troubleshoot:"Troubleshooting",solutions:"Solution library",powershell:"PowerShell reference",topics:"Knowledge domains",system:"SYSTEM",about:"About BWH",offlineReady:"Offline-ready interface",ruleBased:"Rule-based engine",heroEyebrow:"INDEPENDENT KNOWLEDGE PLATFORM",heroTitle:"Troubleshoot with clarity.<br>Resolve with confidence.",heroText:"A structured technical knowledge system for Active Directory, Windows Server, networking and security.",startDiagnosis:"Start troubleshooting",overview:"OVERVIEW",knowledgeAtGlance:"Knowledge at a glance",starterContent:"Starter knowledge pack",domains:"Knowledge domains",noAiValue:"No AI",noAi:"Deterministic rule engine",cloudReadyValue:"Cloud",cloudReady:"Static-hosting ready",browse:"BROWSE",popularDomains:"Knowledge domains",important:"Important:",noticeText:"BWH is an independent reference and diagnostic guide. It does not connect to, inspect, or modify your Active Directory environment. Always validate commands and back up systems before making changes.",guidedDiagnosis:"GUIDED DIAGNOSIS",troubleshootTitle:"What problem are you facing?",troubleshootIntro:"Search the knowledge base or select a symptom to follow a structured diagnostic path.",searchPlaceholder:"Describe an error, symptom, event ID or topic...",search:"Search",suggestedTopics:"Suggested topics",referenceLibrary:"REFERENCE LIBRARY",solutionsTitle:"Solution library",solutionsIntro:"Browse documented symptoms, causes, diagnostic steps and remediation guidance.",filterSolutions:"Filter solutions...",allDomains:"All domains",psTitle:"PowerShell reference",psIntro:"A small starter set of diagnostic commands, with explanations and safety notes.",taxonomy:"KNOWLEDGE TAXONOMY",topicsTitle:"Knowledge domains",topicsIntro:"The planned coverage map for the BWH knowledge base.",projectInfo:"PROJECT INFORMATION",aboutTitle:"About BWH",aboutIntro:"BWH is a bilingual, rule-based web application for technical troubleshooting education and reference.",architecture:"Architecture",architectureText:"The current release is a static PWA prototype. Its diagnostic decisions are explicit JavaScript rules and curated JSON knowledge records. No AI model is included.",cloudDeployment:"Cloud deployment",cloudText:"Deploy the folder to any HTTPS static hosting provider. HTTPS is required for service worker installation in production (localhost is also supported for development).",roadmap:"Next development steps",roadmap1:"Expand and verify the technical knowledge base.",roadmap2:"Add references and version metadata to each solution.",roadmap3:"Add optional user accounts and cloud synchronization only if needed.",boundaries:"Safety boundaries",boundariesText:"Commands are guidance only. BWH does not execute commands, request domain credentials, or establish a connection to company infrastructure.",footerText:"Independent troubleshooting knowledge system · Version 0.1.0",noResults:"No matching entries found. Try another phrase or browse a knowledge domain.",causes:"Potential causes",steps:"Diagnostic and resolution steps",verify:"How to verify",warning:"Safety note",commands:"Related commands",source:"Reference notes",open:"Open diagnosis",copy:"Copy command",copied:"Copied",readOnly:"Read-only diagnostic",actionCommand:"Changes system state",all:"All"},
    ar:{brandSub:"المعرفة واستكشاف الأخطاء",workspace:"مساحة العمل",dashboard:"لوحة التحكم",troubleshoot:"استكشاف المشكلات",solutions:"مكتبة الحلول",powershell:"مرجع PowerShell",topics:"مجالات المعرفة",system:"النظام",about:"حول BWH",offlineReady:"واجهة جاهزة للعمل دون اتصال",ruleBased:"محرك قائم على القواعد",heroEyebrow:"منصة معرفية مستقلة",heroTitle:"شخّص بوضوح.<br>واحلل بثقة.",heroText:"نظام معرفي تقني منظم لـ Active Directory وWindows Server والشبكات والأمن.",startDiagnosis:"ابدأ استكشاف المشكلة",overview:"نظرة عامة",knowledgeAtGlance:"المعرفة في لمحة",starterContent:"حزمة المعرفة الأولية",domains:"مجالات المعرفة",noAiValue:"بدون AI",noAi:"محرك قواعد حتمي",cloudReadyValue:"سحابي",cloudReady:"جاهز للاستضافة الثابتة",browse:"تصفح",popularDomains:"مجالات المعرفة",important:"مهم:",noticeText:"BWH مرجع مستقل ودليل تشخيص. لا يتصل ببيئة Active Directory ولا يفحصها أو يعدلها. تحقق دائماً من الأوامر وخذ نسخاً احتياطية قبل إجراء التغييرات.",guidedDiagnosis:"تشخيص موجّه",troubleshootTitle:"ما المشكلة التي تواجهها؟",troubleshootIntro:"ابحث في قاعدة المعرفة أو اختر عرضاً لاتباع مسار تشخيص منظم.",searchPlaceholder:"اكتب الخطأ أو العرض أو Event ID أو الموضوع...",search:"بحث",suggestedTopics:"موضوعات مقترحة",referenceLibrary:"المكتبة المرجعية",solutionsTitle:"مكتبة الحلول",solutionsIntro:"تصفح الأعراض والأسباب وخطوات التشخيص والمعالجة الموثقة.",filterSolutions:"تصفية الحلول...",allDomains:"كل المجالات",psTitle:"مرجع PowerShell",psIntro:"مجموعة أولية من أوامر التشخيص مع الشرح وملاحظات السلامة.",taxonomy:"تصنيف المعرفة",topicsTitle:"مجالات المعرفة",topicsIntro:"خريطة التغطية المخطط لها لقاعدة معرفة BWH.",projectInfo:"معلومات المشروع",aboutTitle:"حول BWH",aboutIntro:"BWH تطبيق ويب ثنائي اللغة قائم على القواعد للتعلم والمرجعية في استكشاف المشكلات التقنية.",architecture:"البنية",architectureText:"الإصدار الحالي نموذج PWA ثابت. قرارات التشخيص مبنية على قواعد JavaScript صريحة وسجلات معرفة JSON منتقاة. لا يتضمن أي نموذج AI.",cloudDeployment:"النشر السحابي",cloudText:"ارفع المجلد إلى أي استضافة ملفات ثابتة تدعم HTTPS. يتطلب تثبيت Service Worker استخدام HTTPS في الإنتاج (ويدعم localhost أثناء التطوير).",roadmap:"خطوات التطوير التالية",roadmap1:"توسيع قاعدة المعرفة التقنية والتحقق منها.",roadmap2:"إضافة المراجع وبيانات الإصدارات لكل حل.",roadmap3:"إضافة حسابات مستخدمين ومزامنة سحابية اختيارية عند الحاجة فقط.",boundaries:"حدود السلامة",boundariesText:"الأوامر إرشادية فقط. لا ينفذ BWH الأوامر ولا يطلب بيانات دخول الدومين ولا ينشئ اتصالاً ببنية المؤسسة.",footerText:"نظام معرفي مستقل لاستكشاف المشكلات · الإصدار 0.1.0",noResults:"لم يتم العثور على نتائج مطابقة. جرّب عبارة أخرى أو تصفح أحد المجالات.",causes:"الأسباب المحتملة",steps:"خطوات التشخيص والمعالجة",verify:"كيفية التحقق",warning:"ملاحظة سلامة",commands:"الأوامر المرتبطة",source:"ملاحظات المراجع",open:"فتح التشخيص",copy:"نسخ الأمر",copied:"تم النسخ",readOnly:"تشخيص للقراءة فقط",actionCommand:"يغيّر حالة النظام",all:"الكل"}
  };
  function applyLanguage(){
    document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==="ar"?"rtl":"ltr";document.body.classList.toggle("rtl",state.lang==="ar");
    document.querySelectorAll("[data-i18n]").forEach(el=>{const val=t(el.dataset.i18n);if(val.includes("<br>"))el.innerHTML=val;else el.textContent=val;});
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
    $("langBtn").textContent=state.lang==="en"?"العربية":"English";
    $("pageTitle").textContent=document.querySelector(".nav-item.active [data-i18n]")?.textContent||t("dashboard");
    renderDomains();renderSolutions();renderCommands();renderQuickTopics();
    $("statSolutions").textContent=K.solutions.length;$("statDomains").textContent=K.domains.length;
  }
  function domainName(id){const d=K.domains.find(x=>x.id===id);return d?(state.lang==="ar"?d.ar:d.en):id;}
  function renderDomains(){
    const html=K.domains.map(d=>`<article class="domain-card" data-domain="${d.id}"><div class="domain-symbol">${d.icon}</div><h3>${state.lang==="ar"?d.ar:d.en}</h3><p>${state.lang==="ar"?d.descAr:d.descEn}</p><span class="domain-count">${K.solutions.filter(s=>s.domain===d.id).length} ${state.lang==="ar"?"حلول أولية":"starter solutions"}</span></article>`).join("");
    $("domainGrid").innerHTML=html;$("allDomains").innerHTML=html;
    document.querySelectorAll(".domain-card").forEach(el=>el.addEventListener("click",()=>{showView("solutions");$("domainFilter").value=el.dataset.domain;renderSolutions();}));
    $("domainFilter").innerHTML=`<option value="all">${t("allDomains")}</option>`+K.domains.map(d=>`<option value="${d.id}">${state.lang==="ar"?d.ar:d.en}</option>`).join("");
  }
  function renderSolutions(query=""){
    const domain=$("domainFilter")?.value||"all";const q=query.toLowerCase().trim();
    const matches=K.solutions.filter(s=>(domain==="all"||s.domain===domain)&&(!q||[s.id,s.titleEn,s.titleAr,s.summaryEn,s.summaryAr,...s.symptoms].join(" ").toLowerCase().includes(q)));
    $("solutionGrid").innerHTML=matches.length?matches.map(s=>`<article class="solution-card" data-solution="${s.id}"><span class="tag">${domainName(s.domain)} · ${s.id}</span><h3>${field(s,"title")}</h3><p>${field(s,"summary")}</p></article>`).join(""):`<div class="empty">${t("noResults")}</div>`;
    document.querySelectorAll(".solution-card").forEach(el=>el.addEventListener("click",()=>openDiagnosis(el.dataset.solution)));
  }
  function renderQuickTopics(){
    $("quickTopics").innerHTML=K.domains.slice(0,6).map(d=>`<button data-topic="${d.id}">${state.lang==="ar"?d.ar:d.en}</button>`).join("");
    document.querySelectorAll("[data-topic]").forEach(b=>b.addEventListener("click",()=>{showView("solutions");$("domainFilter").value=b.dataset.topic;renderSolutions();}));
  }
  function renderCommands(){
    $("commandList").innerHTML=K.commands.map((c,i)=>`<article class="command-card"><div class="command-head"><h3>${state.lang==="ar"?c.titleAr:c.titleEn}</h3><button class="copy-btn" data-copy="${i}">${t("copy")}</button></div><p>${state.lang==="ar"?c.descAr:c.descEn}</p><pre><code>${escapeHtml(c.cmd)}</code></pre><span class="tag">${c.safe?t("readOnly"):t("actionCommand")}</span></article>`).join("");
    document.querySelectorAll("[data-copy]").forEach(b=>b.addEventListener("click",async()=>{const c=K.commands[Number(b.dataset.copy)];try{await navigator.clipboard.writeText(c.cmd);b.textContent=t("copied");setTimeout(()=>b.textContent=t("copy"),1200);}catch{b.textContent=c.cmd;}}));
  }
  function escapeHtml(s){return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");}
  function openDiagnosis(id){
    const s=K.solutions.find(x=>x.id===id);if(!s)return;state.currentSolution=id;
    const list=(arr)=>`<ul>${arr.map(x=>`<li>${x}</li>`).join("")}</ul>`;
    const cmds=s.commands?.length?`<h3>${t("commands")}</h3><ul>${s.commands.map(x=>`<li><code>${escapeHtml(x)}</code></li>`).join("")}</ul>`:"";
    $("diagnosisDetail").innerHTML=`<article class="diagnosis-card"><span class="tag">${domainName(s.domain)} · ${s.id}</span><h2>${field(s,"title")}</h2><p>${field(s,"summary")}</p><h3>${t("causes")}</h3>${list(field(s,"causes"))}<h3>${t("steps")}</h3><ol>${field(s,"steps").map(x=>`<li>${x}</li>`).join("")}</ol><h3>${t("verify")}</h3><p>${field(s,"verify")}</p><h3>${t("warning")}</h3><p>${field(s,"warning")}</p>${cmds}<h3>${t("source")}</h3>${list(s.sources||[])}</article>`;
    $("diagnosisDetail").scrollIntoView({behavior:"smooth",block:"start"});
  }
  function runSearch(){
    const q=$("problemSearch").value.trim().toLowerCase();const matches=K.solutions.filter(s=>[s.id,s.titleEn,s.titleAr,s.summaryEn,s.summaryAr,...s.symptoms,...s.causesEn,...s.causesAr].join(" ").toLowerCase().includes(q));
    $("diagnosisResults").innerHTML=matches.length?matches.map(s=>`<div class="result-row" data-result="${s.id}"><div><h3>${field(s,"title")}</h3><p>${field(s,"summary")}</p></div><span class="tag">${domainName(s.domain)}</span></div>`).join(""):`<div class="empty">${t("noResults")}</div>`;
    document.querySelectorAll("[data-result]").forEach(el=>el.addEventListener("click",()=>openDiagnosis(el.dataset.result)));
    $("diagnosisDetail").innerHTML="";
  }
  function showView(name){
    document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+name));
    document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.view===name));
    $("pageTitle").textContent=document.querySelector(`.nav-item[data-view="${name}"] [data-i18n]`)?.textContent||"BWH";
    $("sidebar").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});
  }
  document.querySelectorAll(".nav-item").forEach(n=>n.addEventListener("click",()=>showView(n.dataset.view)));
  document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));
  $("langBtn").addEventListener("click",()=>{state.lang=state.lang==="en"?"ar":"en";localStorage.setItem("bwh-lang",state.lang);applyLanguage();});
  $("searchBtn").addEventListener("click",runSearch);$("problemSearch").addEventListener("keydown",e=>{if(e.key==="Enter")runSearch();});
  $("librarySearch").addEventListener("input",e=>renderSolutions(e.target.value));$("domainFilter").addEventListener("change",()=>renderSolutions($("librarySearch").value));
  $("menuBtn").addEventListener("click",()=>$("sidebar").classList.toggle("open"));
  applyLanguage();
  if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));
})();