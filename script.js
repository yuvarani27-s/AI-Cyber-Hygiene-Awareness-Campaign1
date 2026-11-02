/**
 * ============================================================================
 * AI Cyber Hygiene Awareness Campaign for Students
 * Core Interactive Application Engine (Vanilla JavaScript)
 * 100% Client-Side - Zero Remote Data Transmission
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Toast Notification Utility
  // ==========================================================================
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'info', duration = 3500) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Icon based on type
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg class="icon-inline text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
    } else if (type === 'warning') {
      iconSvg = '<svg class="icon-inline" style="color:#F59E0B" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
    } else {
      iconSvg = '<svg class="icon-inline text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // ==========================================================================
  // 2. Sticky Navbar, Mobile Drawer & Active Link Highlighting
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinksContainer = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Navbar on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navLinksContainer.classList.toggle('mobile-open');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active Link Tracking via IntersectionObserver
  const trackedSections = document.querySelectorAll('section[id]');
  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, navObserverOptions);

  trackedSections.forEach(section => navObserver.observe(section));

  // ==========================================================================
  // 3. Hero Interactive Radar: Rotating Cybersecurity Rules
  // ==========================================================================
  const rotatingRules = [
    {
      title: "Rule #1: The AI Voice Clone Trap",
      desc: "Scammers clone a student's voice in 3 seconds from social media reels. Always establish a family offline safe-word."
    },
    {
      title: "Rule #2: Public Wi-Fi & Rogue Hotspots",
      desc: "Never conduct UPI payments or enter passwords on public cafe/airport Wi-Fi. Rogue hotspots can silently snoop unencrypted packets."
    },
    {
      title: "Rule #3: The Passphrase Advantage",
      desc: "4 random words like 'Falcon#Coffee$Library!99' take centuries to crack, while 8-character complex passwords fall in minutes."
    },
    {
      title: "Rule #4: Infostealers in Game Cracks",
      desc: "70% of cracked software and cheat engines bundle silent malware that exfiltrates browser cookies and Discord session tokens."
    },
    {
      title: "Rule #5: The Golden Hour 1930 Rule",
      desc: "If targeted by UPI or bank fraud in India, call National Helpline 1930 within 2 hours to freeze stolen money before withdrawal."
    }
  ];

  let currentRuleIndex = 0;
  const tipTitleEl = document.getElementById('rotating-tip-title');
  const tipDescEl = document.getElementById('rotating-tip-desc');

  function rotateRule() {
    if (!tipTitleEl || !tipDescEl) return;
    currentRuleIndex = (currentRuleIndex + 1) % rotatingRules.length;
    
    tipTitleEl.style.opacity = '0';
    tipDescEl.style.opacity = '0';

    setTimeout(() => {
      tipTitleEl.textContent = rotatingRules[currentRuleIndex].title;
      tipDescEl.textContent = rotatingRules[currentRuleIndex].desc;
      tipTitleEl.style.opacity = '1';
      tipDescEl.style.opacity = '1';
    }, 250);
  }

  // Rotate every 6 seconds
  setInterval(rotateRule, 6000);

  // ==========================================================================
  // 4. Section 1: Cyber Hygiene Tips - Filter Tabs & Accordion
  // ==========================================================================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const tipCards = document.querySelectorAll('.tip-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const category = tab.getAttribute('data-category');

      tipCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Tip Card Expandable Drawers
  const expandButtons = document.querySelectorAll('.btn-card-expand');
  expandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const drawer = btn.nextElementSibling;
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', !isExpanded);
      drawer.classList.toggle('open');
      btn.querySelector('span').textContent = isExpanded ? 'Detailed Best Practice' : 'Hide Details';
    });
  });

  // ==========================================================================
  // 5. Section 2: Phishing Awareness & Interactive Lab
  // ==========================================================================
  const phishingScenarios = {
    email: {
      typeTitle: "Inbound Message: Urgent College Examination Notice",
      html: `
        <div class="email-meta-strip">
          <div class="email-row"><span class="email-label">From:</span> <span class="email-val"><span class="phish-flag" data-reason="Fake lookalike domain '@univ-portal-alert.com' instead of official '@university.ac.in'">examination-controller@univ-portal-alert.com</span></span></div>
          <div class="email-row"><span class="email-label">To:</span> <span class="email-val">student@university.ac.in</span></div>
          <div class="email-row"><span class="email-label">Subject:</span> <span class="email-val"><span class="phish-flag" data-reason="Artificial panic & urgency tactic to prevent rational verification">[URGENT] Final Exam Hall Ticket Withheld - Verification Required in 2 Hours</span></span></div>
        </div>
        <div class="email-content">
          <p><span class="phish-flag" data-reason="Generic greeting without your name or student roll number">Dear Student,</span></p>
          <br>
          <p>Your Semester End Examination Hall Ticket has been temporarily suspended due to pending biometric KYC compliance.</p>
          <p>Failure to verify your identity within <strong>2 hours</strong> will lead to automatic debarment from the upcoming exams.</p>
          <br>
          <p style="text-align: center;">
            <a href="#phishing" class="cta-mockup-btn phish-flag" data-reason="Deceptive button link pointing to an external credential-harvesting server">
              CLICK HERE TO RE-ACTIVATE EXAM ADMIT CARD
            </a>
          </p>
          <br>
          <p>Attachment: <code class="phish-flag" data-reason="Dangerous macro-enabled document file extension (.docm)">HallTicket_Verification_Form.docm</code> (1.4 MB)</p>
          <br>
          <p>Regards,<br>Office of Academic Registrars</p>
        </div>
      `,
      analysisTitle: "Deconstruction: University Exam Spear-Phishing",
      redFlags: [
        {
          num: "01",
          title: "Spoofed Domain (@univ-portal-alert.com)",
          desc: "Attackers register cheap domains mimicking your institution. Real universities only send mail from their official accredited domain (.ac.in or .edu)."
        },
        {
          num: "02",
          title: "Psychological Coercion & Artificial Urgency",
          desc: "Threatening debarment within 2 hours induces intense panic, prompting students to bypass critical thinking and click immediately."
        },
        {
          num: "03",
          title: "Macro-Enabled Attachment (.docm)",
          desc: "Legitimate admit cards are provided as static PDFs. Files ending in .docm, .vbs, or .exe execute malware code upon opening."
        }
      ],
      dispText: "portal.university.ac.in/hallticket-verify",
      dispActual: "http://univ-portal-login.secure-verify-student.xyz/auth/steal.php"
    },

    sms: {
      typeTitle: "Inbound SMS: Urgent Banking KYC Suspension Alert",
      html: `
        <div class="email-meta-strip">
          <div class="email-row"><span class="email-label">Sender:</span> <span class="email-val"><span class="phish-flag" data-reason="Random non-official sender ID pretending to be a national bank">VK-HDFCBK-ALERT</span></span></div>
          <div class="email-row"><span class="email-label">Time:</span> <span class="email-val">Today, 03:15 PM</span></div>
        </div>
        <div class="email-content">
          <p>
            Dear Customer, Your Bank Account & UPI services have been <span class="phish-flag" data-reason="Immediate fear induction of financial loss">BLOCKED TODAY</span> due to incomplete PAN-Aadhaar KYC.
          </p>
          <br>
          <p>
            To avoid permanent account deactivation and ₹5,000 penalty, update immediately at: 
            <span class="phish-flag text-danger" data-reason="Unsecured HTTP link with third-party unauthorized TLD (.online)">http://hdfc-kyc-update-pan.online/verify</span>
          </p>
          <br>
          <p><em>- Team Bank Security Cell</em></p>
        </div>
      `,
      analysisTitle: "Deconstruction: Smishing (SMS Banking Phishing)",
      redFlags: [
        {
          num: "01",
          title: "Banks Never Send Threatening SMS with Links",
          desc: "RBI guidelines explicitly state Indian banks never require customers to update KYC via external hyperlinks embedded in SMS."
        },
        {
          num: "02",
          title: "Unencrypted Phishing URL (.online)",
          desc: "The URL uses 'http://' rather than 'https://' and lives on an arbitrary commercial TLD rather than the bank's official domain."
        },
        {
          num: "03",
          title: "False Penalty Threats",
          desc: "Scammers fabricate imminent monetary fines or account blocks to force rushed decisions."
        }
      ],
      dispText: "hdfcbank.com/kyc-update",
      dispActual: "http://hdfc-kyc-update-pan.online/verify"
    },

    social: {
      typeTitle: "Inbound DM: High-Paying Campus Internship Scam",
      html: `
        <div class="email-meta-strip">
          <div class="email-row"><span class="email-label">From:</span> <span class="email-val"><span class="phish-flag" data-reason="Unverified profile with stock image claiming to be Global HR">Apex Talent HR @apex_careers_ai</span></span></div>
          <div class="email-row"><span class="email-label">Platform:</span> <span class="email-val">Direct Message / Telegram</span></div>
        </div>
        <div class="email-content">
          <p>Hey there! We reviewed your profile and you have been shortlisted for our <span class="phish-flag" data-reason="Unrealistic compensation for zero technical qualification">AI Content Campus Ambassador role (₹4,500/day part-time)</span>!</p>
          <br>
          <p>Job tasks: Simply like 5 designated YouTube videos and submit review screenshots daily.</p>
          <br>
          <p>
            To begin immediate onboarding and claim your ₹1,500 joining bonus, transfer a <span class="phish-flag" data-reason="Classic advance-fee fraud: Legitimate employers NEVER charge applicants money">refundable registration fee of ₹499</span> to our official UPI: <code>apex.hr@upi</code>
          </p>
          <br>
          <p>Send screenshot here: <span class="phish-flag" data-reason="Channels victims to unmoderated encrypted chat groups">t.me/apex_payouts_bot</span></p>
        </div>
      `,
      analysisTitle: "Deconstruction: Part-Time Task & Advance-Fee Fraud",
      redFlags: [
        {
          num: "01",
          title: "Pay-to-Work Scheme",
          desc: "Any 'job' or 'internship' demanding an upfront deposit, training fee, or registration charge is 100% an advance-fee scam."
        },
        {
          num: "02",
          title: "Absurd Pay for Trivial Work",
          desc: "₹4,500/day for liking videos is economically impossible. Scammers lure students struggling with expenses."
        },
        {
          num: "03",
          title: "Off-Platform Telegram Redirection",
          desc: "Moving communication to Telegram enables anonymous pyramid schemes with fake payment receipts generated by bots."
        }
      ],
      dispText: "apexcareers.org/campus-ambassador",
      dispActual: "https://t.me/apex_payouts_bot?start=steal"
    }
  };

  const mockupBody = document.getElementById('mockup-body-content');
  const mockupTypeTitle = document.getElementById('mockup-type-title');
  const analysisTitle = document.getElementById('analysis-title');
  const redFlagsList = document.getElementById('red-flags-list');
  const dispTextEl = document.getElementById('disp-text');
  const dispActualEl = document.getElementById('disp-actual');
  const toggleFlagsBtn = document.getElementById('toggle-red-flags-btn');
  const flagBtnText = document.getElementById('flag-btn-text');
  const scenarioBtns = document.querySelectorAll('.scenario-btn');
  const decisionBtns = document.querySelectorAll('.decision-btn');
  const decisionFeedback = document.getElementById('decision-feedback');

  let currentScenarioKey = 'email';
  let flagsVisible = false;

  function loadPhishingScenario(key) {
    const data = phishingScenarios[key];
    if (!data) return;

    currentScenarioKey = key;
    flagsVisible = false;
    flagBtnText.textContent = "Highlight Red Flags";

    mockupTypeTitle.textContent = data.typeTitle;
    mockupBody.innerHTML = data.html;
    mockupBody.classList.remove('flags-active');

    analysisTitle.textContent = data.analysisTitle;

    // Populate red flags
    redFlagsList.innerHTML = data.redFlags.map(f => `
      <div class="flag-item">
        <span class="flag-num">${f.num}</span>
        <div class="flag-text">
          <h5>${f.title}</h5>
          <p>${f.desc}</p>
        </div>
      </div>
    `).join('');

    dispTextEl.textContent = data.dispText;
    dispActualEl.textContent = data.dispActual;

    // Reset decision box
    if (decisionFeedback) {
      decisionFeedback.style.display = 'none';
      decisionFeedback.className = 'decision-feedback';
    }
  }

  // Initial scenario render
  loadPhishingScenario('email');

  // Scenario button clicks
  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadPhishingScenario(btn.getAttribute('data-scenario'));
    });
  });

  // Toggle Highlight Red Flags
  if (toggleFlagsBtn) {
    toggleFlagsBtn.addEventListener('click', () => {
      flagsVisible = !flagsVisible;
      mockupBody.classList.toggle('flags-active', flagsVisible);
      flagBtnText.textContent = flagsVisible ? "Hide Red Flags" : "Highlight Red Flags";

      if (flagsVisible) {
        showToast("Red flags highlighted in dashed red borders!", "warning");
      }
    });
  }

  // Interactive decision response
  decisionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = btn.getAttribute('data-choice');
      if (!decisionFeedback) return;

      decisionFeedback.style.display = 'block';

      if (choice === 'click') {
        decisionFeedback.className = 'decision-feedback feedback-error';
        decisionFeedback.innerHTML = `
          <strong>❌ Vulnerability Compromised:</strong> If this were real, clicking would have transmitted your student credentials or bank tokens directly to an attacker's listener server. Always verify via independent official channels!
        `;
      } else {
        decisionFeedback.className = 'decision-feedback feedback-success';
        decisionFeedback.innerHTML = `
          <strong>🛡️ Excellent Defense Reflex:</strong> Correct! You spotted the anomalies. The safest response is to ignore the link, report to college IT or cybercrime.gov.in, and warn your fellow students.
        `;
      }
    });
  });

  // ==========================================================================
  // 6. Section 3: Client-Side Password Safety Checker & Generator
  // ==========================================================================
  const pwInput = document.getElementById('password-input');
  const togglePwVisibilityBtn = document.getElementById('toggle-pw-visibility');
  const eyeIcon = document.getElementById('eye-icon');
  const strengthBar = document.getElementById('strength-bar');
  const strengthLabel = document.getElementById('strength-label');
  const crackTimeValue = document.getElementById('crack-time-value');
  const pwAdviceBox = document.getElementById('pw-advice-box');

  // Criteria elements
  const critLength = document.getElementById('crit-length');
  const critUpper = document.getElementById('crit-upper');
  const critLower = document.getElementById('crit-lower');
  const critNumber = document.getElementById('crit-number');
  const critSpecial = document.getElementById('crit-special');
  const critPattern = document.getElementById('crit-pattern');

  // Show/Hide Password
  if (togglePwVisibilityBtn && pwInput) {
    togglePwVisibilityBtn.addEventListener('click', () => {
      const isPassword = pwInput.type === 'password';
      pwInput.type = isPassword ? 'text' : 'password';
      
      // Update eye icon SVG
      if (isPassword) {
        eyeIcon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
      } else {
        eyeIcon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
      }
    });
  }

  // Common leaked passwords & predictable dictionary patterns
  const commonWeakPatterns = [
    'password', '123456', '12345678', 'qwerty', 'admin', 'welcome', 'letmein',
    'student', 'college', 'campus', 'iloveyou', 'abc123', 'monkey', 'dragon',
    'football', 'master', 'sunshine', 'princess', 'login'
  ];

  function evaluatePassword(pw) {
    if (!pw || pw.length === 0) {
      // Reset state
      strengthBar.style.width = '0%';
      strengthBar.style.backgroundColor = 'transparent';
      strengthLabel.textContent = 'Awaiting Input';
      strengthLabel.className = 'strength-level-tag level-empty';
      crackTimeValue.textContent = 'Enter a password above';
      pwAdviceBox.style.display = 'none';

      [critLength, critUpper, critLower, critNumber, critSpecial].forEach(el => {
        el.className = 'criterion-item';
        el.querySelector('.crit-icon').textContent = '✕';
      });
      critPattern.className = 'criterion-item';
      critPattern.querySelector('.crit-icon').textContent = '✓';
      return;
    }

    const len = pw.length;
    const hasUpper = /[A-Z]/.test(pw);
    const hasLower = /[a-z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecial = /[^A-Za-z0-9]/.test(pw);
    
    // Pattern check
    const lowerPw = pw.toLowerCase();
    const hasPattern = commonWeakPatterns.some(pattern => lowerPw.includes(pattern)) || /(.)\1{3,}/.test(pw);

    // Update Criteria checklist items
    updateCriterion(critLength, len >= 12);
    updateCriterion(critUpper, hasUpper);
    updateCriterion(critLower, hasLower);
    updateCriterion(critNumber, hasNumber);
    updateCriterion(critSpecial, hasSpecial);
    updateCriterion(critPattern, !hasPattern);

    // Calculate Entropy Bits
    let poolSize = 0;
    if (hasLower) poolSize += 26;
    if (hasUpper) poolSize += 26;
    if (hasNumber) poolSize += 10;
    if (hasSpecial) poolSize += 33;

    let entropy = poolSize > 0 ? len * (Math.log2(poolSize)) : 0;
    if (hasPattern) entropy = Math.max(10, entropy - 25);

    // Estimate Crack Time
    let crackTime = "Instant (under 1 second)";
    let strengthScore = 0; // 0 to 4

    if (entropy < 28 || len < 6) {
      crackTime = "Instant (under 1 second)";
      strengthScore = 0;
    } else if (entropy < 40 || len < 8) {
      crackTime = "A few seconds to 5 minutes";
      strengthScore = 1;
    } else if (entropy < 55 || len < 11) {
      crackTime = "A few hours to 3 weeks";
      strengthScore = 2;
    } else if (entropy < 75 || len < 15) {
      crackTime = "Several decades (50+ years)";
      strengthScore = 3;
    } else {
      crackTime = "Millions of centuries (Mathematically Infeasible)";
      strengthScore = 4;
    }

    crackTimeValue.textContent = crackTime;

    // Render Strength Meter Bar & Label
    renderStrengthUI(strengthScore, len, hasPattern);
  }

  function updateCriterion(el, isValid) {
    if (isValid) {
      el.className = 'criterion-item valid';
      el.querySelector('.crit-icon').textContent = '✓';
    } else {
      el.className = 'criterion-item invalid';
      el.querySelector('.crit-icon').textContent = '✕';
    }
  }

  function renderStrengthUI(score, len, hasPattern) {
    pwAdviceBox.style.display = 'block';

    if (score === 0) {
      strengthBar.style.width = '15%';
      strengthBar.style.backgroundColor = '#EF4444';
      strengthLabel.textContent = 'Critically Weak';
      strengthLabel.className = 'strength-level-tag level-very-weak';
      pwAdviceBox.className = 'pw-advice-box feedback-error';
      pwAdviceBox.innerHTML = '⚠️ <strong>Severe Danger:</strong> Automated brute-force wordlists will compromise this password immediately. Increase length and mix symbols.';
    } else if (score === 1) {
      strengthBar.style.width = '35%';
      strengthBar.style.backgroundColor = '#F59E0B';
      strengthLabel.textContent = 'Weak';
      strengthLabel.className = 'strength-level-tag level-weak';
      pwAdviceBox.className = 'pw-advice-box feedback-warning';
      pwAdviceBox.innerHTML = '⚠️ <strong>Inadequate:</strong> A modern GPU cluster can crack this within hours. Add more words or characters to achieve 14+ length.';
    } else if (score === 2) {
      strengthBar.style.width = '60%';
      strengthBar.style.backgroundColor = '#EAB308';
      strengthLabel.textContent = 'Moderate';
      strengthLabel.className = 'strength-level-tag level-moderate';
      pwAdviceBox.className = 'pw-advice-box';
      pwAdviceBox.style.background = 'rgba(234, 179, 8, 0.1)';
      pwAdviceBox.style.border = '1px solid rgba(234, 179, 8, 0.3)';
      pwAdviceBox.innerHTML = '💡 <strong>Acceptable for minor accounts:</strong> Good foundation, but sensitive accounts (Google, Bank, GitHub) require 16+ characters or a 4-word passphrase.';
    } else if (score === 3) {
      strengthBar.style.width = '85%';
      strengthBar.style.backgroundColor = '#10B981';
      strengthLabel.textContent = 'Strong';
      strengthLabel.className = 'strength-level-tag level-strong';
      pwAdviceBox.className = 'pw-advice-box feedback-success';
      pwAdviceBox.innerHTML = '🛡️ <strong>Robust Defense:</strong> High entropy makes this resistant to offline dictionary and rainbow-table attacks.';
    } else {
      strengthBar.style.width = '100%';
      strengthBar.style.backgroundColor = '#00F0FF';
      strengthBar.style.boxShadow = '0 0 12px #00F0FF';
      strengthLabel.textContent = 'Unbreakable Fortress';
      strengthLabel.className = 'strength-level-tag level-excellent';
      pwAdviceBox.className = 'pw-advice-box feedback-success';
      pwAdviceBox.innerHTML = '💎 <strong>Maximum Security:</strong> Exceptional entropy! Pair this with an Authenticator App (2FA) for an impenetrable student defense.';
    }

    if (hasPattern) {
      pwAdviceBox.innerHTML += '<br><span style="color:#EF4444;">⚠️ Notice: Detected common word patterns or repeated characters which reduce real-world safety.</span>';
    }
  }

  if (pwInput) {
    pwInput.addEventListener('input', (e) => {
      evaluatePassword(e.target.value);
    });
  }

  // Password Generator Engine
  const pwLengthSlider = document.getElementById('pw-length-slider');
  const pwLengthVal = document.getElementById('pw-length-val');
  const genOptUpper = document.getElementById('gen-opt-upper');
  const genOptLower = document.getElementById('gen-opt-lower');
  const genOptNum = document.getElementById('gen-opt-num');
  const genOptSym = document.getElementById('gen-opt-sym');
  const generatePwBtn = document.getElementById('generate-pw-btn');
  const generatedPasswordDisplay = document.getElementById('generated-password-display');
  const copyPwBtn = document.getElementById('copy-pw-btn');
  const useInCheckerBtn = document.getElementById('use-in-checker-btn');

  if (pwLengthSlider && pwLengthVal) {
    pwLengthSlider.addEventListener('input', (e) => {
      pwLengthVal.textContent = e.target.value;
    });
  }

  function generateSecurePassword() {
    const length = parseInt(pwLengthSlider.value, 10);
    const useUpper = genOptUpper.checked;
    const useLower = genOptLower.checked;
    const useNum = genOptNum.checked;
    const useSym = genOptSym.checked;

    let charset = '';
    if (useLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNum) charset += '0123456789';
    if (useSym) charset += '!@#$%^&*()_+~|}{[]:;?><,.-=';

    if (charset === '') {
      showToast('Please check at least one character set!', 'warning');
      return;
    }

    // Cryptographically secure pseudorandom numbers
    const randomBuffer = new Uint32Array(length);
    window.crypto.getRandomValues(randomBuffer);

    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset[randomBuffer[i] % charset.length];
    }

    generatedPasswordDisplay.textContent = password;
  }

  if (generatePwBtn) {
    generatePwBtn.addEventListener('click', generateSecurePassword);
    // Initial generation
    generateSecurePassword();
  }

  // Copy Generated Password
  if (copyPwBtn) {
    copyPwBtn.addEventListener('click', () => {
      const text = generatedPasswordDisplay.textContent;
      if (!text || text === 'Click Generate Below') return;

      navigator.clipboard.writeText(text).then(() => {
        showToast('Password copied to clipboard safely!', 'success');
      }).catch(() => {
        showToast('Unable to copy to clipboard', 'warning');
      });
    });
  }

  // Use Generated Password in Checker
  if (useInCheckerBtn && pwInput) {
    useInCheckerBtn.addEventListener('click', () => {
      const text = generatedPasswordDisplay.textContent;
      if (!text || text === 'Click Generate Below') return;

      pwInput.value = text;
      evaluatePassword(text);
      pwInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast('Password placed in checker!', 'info');
    });
  }

  // ==========================================================================
  // 7. Section 4: Cyber Safety Quiz (10 Comprehensive Scenarios)
  // ==========================================================================
  const quizQuestions = [
    {
      category: "AI Threat Defense",
      scenario: "You receive an urgent phone call where the caller's voice sounds EXACTLY like your roommate. 'They' claim they're stranded with a broken vehicle, need ₹4,000 immediately, and ask you to send it to an unfamiliar UPI ID.",
      options: [
        { text: "Transfer the money immediately to prevent your roommate from being stranded.", correct: false },
        { text: "Hang up, call your roommate directly on their registered number, or ask for your family/roommate safe-word.", correct: true },
        { text: "Ask them to send a selfie on WhatsApp and then immediately pay.", correct: false },
        { text: "Send half the money to minimize potential loss.", correct: false }
      ],
      explanation: "Generative AI voice cloning only requires 3-5 seconds of audio from Instagram stories or TikTok to mimic someone's exact pitch and cadence. Always hang up and call back on a trusted verified line, or verify with an offline pre-agreed safe-word!"
    },
    {
      category: "Network Defense",
      scenario: "While studying in the campus cafeteria, your laptop detects an open Wi-Fi network named 'Free_HighSpeed_Campus_WiFi' requiring no password. What is the safest course of action?",
      options: [
        { text: "Connect immediately to download large course video lectures quickly.", correct: false },
        { text: "Connect, but only log into your bank account through private incognito mode.", correct: false },
        { text: "Never connect. Use your personal smartphone hotspot or the authenticated official campus 802.1x network.", correct: true },
        { text: "Connect, but disable your laptop's screen brightness to deter hackers.", correct: false }
      ],
      explanation: "Rogue actors deploy 'Evil Twin' access points that silently capture unencrypted packets, hijack session cookies, and inject malicious scripts. Incognito mode does NOT protect network traffic from MITM packet sniffing."
    },
    {
      category: "Account Authentication",
      scenario: "At 2:45 AM, your phone receives 10 rapid Two-Factor Authentication (2FA) push notifications from your Microsoft/Google account asking: 'Did you just attempt to sign in?'",
      options: [
        { text: "Tap 'Approve' to silence the repeated vibrating alerts so you can sleep.", correct: false },
        { text: "Deny the prompts immediately, log into your account from a clean device, and change your password.", correct: true },
        { text: "Ignore them; 2FA means they can never break in anyway.", correct: false },
        { text: "Forward the notifications to your class WhatsApp group.", correct: false }
      ],
      explanation: "This attack is known as 'MFA Fatigue' or 'Prompt Bombing'. Attackers already have your password and flood you with prompts hoping you will click 'Approve' out of frustration. Deny and reset your password immediately."
    },
    {
      category: "Physical Security",
      scenario: "You spot a shiny 64GB USB thumb drive lying on the college library study table with a sticker labeled 'Semester_8_Final_Exams_Solved.pdf'. What should you do?",
      options: [
        { text: "Plug it into your laptop to inspect who it belongs to so you can return it.", correct: false },
        { text: "Plug it in, but only open it inside a guest user account.", correct: false },
        { text: "Never plug it in. Hand it over to the college security desk or IT administrator.", correct: true },
        { text: "Plug it into a campus public computer instead of your own laptop.", correct: false }
      ],
      explanation: "This classic 'USB Drop Attack' often employs malicious microcontroller hardware (like a Rubber Ducky or BadUSB) that emulates a super-fast keyboard, executing reverse-shell terminal payloads within 2 seconds of insertion."
    },
    {
      category: "Software & Piracy Hygiene",
      scenario: "You need a costly CAD or video editing program for a college project. A senior sends you a torrent link with a 'Patcher/Crack' and says: 'Make sure you disable Windows Defender before running Setup.exe'.",
      options: [
        { text: "Disable antivirus as requested; all game cracks trigger false positives.", correct: false },
        { text: "Run it inside your browser to see if it downloads safely.", correct: false },
        { text: "Refuse to install. Seek free open-source alternatives (like Blender/GIMP) or student educational licenses.", correct: true },
        { text: "Install it, but turn Windows Defender back on 10 minutes later.", correct: false }
      ],
      explanation: "Asking users to disable antivirus is the hallmark of modern Infostealers (e.g. Lumma, RedLine, Vidar). Once executed, they harvest all stored browser passwords, session tokens, and cryptocurrency wallets in seconds."
    },
    {
      category: "AI Tool Privacy",
      scenario: "When using generative AI chatbots like ChatGPT or Claude for your college assignments or hackathon coding, which guideline is crucial?",
      options: [
        { text: "Paste your team's live AWS/Firebase private API keys so the AI writes perfect database queries.", correct: false },
        { text: "Sanitize your input: never paste proprietary code, database credentials, or personal student ID information.", correct: true },
        { text: "You can paste anything as long as you delete the chat history afterwards.", correct: false },
        { text: "AI chatbots are legally prohibited from storing user prompts, so anything goes.", correct: false }
      ],
      explanation: "Public LLMs may ingest prompt inputs for future training iterations. Deleting chat history does not scrub prompts from ingestion logs. Never upload confidential tokens, server passwords, or student PII."
    },
    {
      category: "QR Code Defense (Quishing)",
      scenario: "A notice on the college canteen table has a fresh QR code sticker that says: 'Pay bills with 30% student cashback! Scan now'.",
      options: [
        { text: "Scan and immediately enter your UPI PIN on the landing page.", correct: false },
        { text: "Inspect the sticker physically, preview the URL before opening, and confirm payment details with staff.", correct: true },
        { text: "Scan it, but enter a wrong PIN first to test if it's real.", correct: false },
        { text: "Forward the QR image to 10 friends to verify.", correct: false }
      ],
      explanation: "'Quishing' (QR Phishing) involves fraudsters pasting rogue stickers over legitimate payment codes. Remember: receiving money or cashback NEVER requires entering your UPI PIN!"
    },
    {
      category: "Privacy & Social Media",
      scenario: "You just passed your university semester examinations with top honors! You are excited to celebrate on Instagram and LinkedIn. What should you avoid?",
      options: [
        { text: "Writing a caption thanking your professors and mentors.", correct: false },
        { text: "Posting an unblurred photo of your mark sheet and admit card showing your roll number, QR barcode, and date of birth.", correct: true },
        { text: "Tagging the official university campus handle.", correct: false },
        { text: "Sharing your achievement in a text status without personal metadata.", correct: false }
      ],
      explanation: "Barcodes and admit card numbers encode your sensitive government IDs and student registration numbers. Criminals harvest these high-res images to bypass portal recovery questions and forge identities."
    },
    {
      category: "Password Engineering",
      scenario: "Which of the following credentials provides the strongest resistance against modern high-speed GPU offline cracking clusters?",
      options: [
        { text: "P@ssw0rd! (8 characters)", correct: false },
        { text: "Tr0ub4dor&3 (10 characters)", correct: false },
        { text: "sunset-velvet-galaxy-beacon-99 (30 characters, 5 words)", correct: true },
        { text: "1234567890Aa! (13 characters sequential)", correct: false }
      ],
      explanation: "Length exponentially multiplies entropy! A 30-character passphrase of random dictionary words has over 90 bits of entropy, requiring millions of years to compute, whereas complex 8-10 character passwords are routinely cracked in minutes."
    },
    {
      category: "Incident Response in India",
      scenario: "You accidentally typed your net banking credentials into a fake college portal and noticed an unauthorized ₹25,000 debit from your account. What is your immediate first step?",
      options: [
        { text: "Post on X (Twitter) complaining about banking security.", correct: false },
        { text: "Call the National Cybercrime Helpline 1930 immediately to freeze the money in the Golden Hour, then notify your bank.", correct: true },
        { text: "Wait 48 hours to see if the transaction auto-reverses.", correct: false },
        { text: "Format your laptop and install a new browser.", correct: false }
      ],
      explanation: "The Citizen Financial Cyber Fraud Reporting System connects police with all major banks. Dialing 1930 immediately within the 'Golden Hour' allows the system to freeze the beneficiary account before the fraudster withdraws the money."
    }
  ];

  let currentQuestionIdx = 0;
  let quizScore = 0;
  let userAnswers = []; // records { question, selectedIdx, isCorrect }

  const qNumberEl = document.getElementById('q-number');
  const qTotalEl = document.getElementById('q-total');
  const qCategoryEl = document.getElementById('q-category');
  const quizLiveScoreEl = document.getElementById('quiz-live-score');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const questionTextEl = document.getElementById('question-text');
  const quizOptionsContainer = document.getElementById('quiz-options');
  const quizFeedbackBox = document.getElementById('quiz-feedback-box');
  const feedbackHeadline = document.getElementById('feedback-headline');
  const feedbackExplanation = document.getElementById('feedback-explanation');
  const quizNextBtn = document.getElementById('quiz-next-btn');

  const quizActiveScreen = document.getElementById('quiz-active-screen');
  const quizResultScreen = document.getElementById('quiz-result-screen');
  const finalScoreNum = document.getElementById('final-score-num');
  const resultRankTitle = document.getElementById('result-rank-title');
  const resultRankDesc = document.getElementById('result-rank-desc');
  const resAccuracy = document.getElementById('res-accuracy');
  const resCorrectCount = document.getElementById('res-correct-count');
  const resWrongCount = document.getElementById('res-wrong-count');
  const retakeQuizBtn = document.getElementById('retake-quiz-btn');
  const toggleQuizReviewBtn = document.getElementById('toggle-quiz-review-btn');
  const quizReviewList = document.getElementById('quiz-review-list');

  function loadQuestion(index) {
    const q = quizQuestions[index];
    if (!q) return;

    qNumberEl.textContent = index + 1;
    qTotalEl.textContent = quizQuestions.length;
    qCategoryEl.textContent = q.category;
    quizLiveScoreEl.textContent = quizScore;
    quizProgressFill.style.width = `${((index + 1) / quizQuestions.length) * 100}%`;

    questionTextEl.textContent = q.scenario;
    quizFeedbackBox.style.display = 'none';
    quizNextBtn.style.display = 'none';

    // Populate options
    quizOptionsContainer.innerHTML = '';
    const prefixes = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="opt-prefix">${prefixes[optIdx]}</span>
        <span>${opt.text}</span>
      `;
      btn.addEventListener('click', () => handleOptionSelection(optIdx, btn));
      quizOptionsContainer.appendChild(btn);
    });
  }

  function handleOptionSelection(selectedIdx, btnSelected) {
    const q = quizQuestions[currentQuestionIdx];
    const optionBtns = quizOptionsContainer.querySelectorAll('.option-btn');

    // Disable all options
    optionBtns.forEach(b => b.disabled = true);

    const isCorrect = q.options[selectedIdx].correct;

    if (isCorrect) {
      btnSelected.classList.add('opt-correct');
      quizScore += 1;
      quizLiveScoreEl.textContent = quizScore;
      quizFeedbackBox.className = 'quiz-feedback-box feedback-success';
      feedbackHeadline.textContent = "🛡️ Excellent Decision!";
      feedbackExplanation.textContent = q.explanation;
    } else {
      btnSelected.classList.add('opt-wrong');
      // Highlight the correct one
      q.options.forEach((opt, idx) => {
        if (opt.correct) {
          optionBtns[idx].classList.add('opt-correct');
        }
      });
      quizFeedbackBox.className = 'quiz-feedback-box feedback-error';
      feedbackHeadline.textContent = "⚠️ Dangerous Trap!";
      feedbackExplanation.textContent = q.explanation;
    }

    quizFeedbackBox.style.display = 'flex';
    quizNextBtn.style.display = 'inline-flex';

    // Record answer
    userAnswers.push({
      question: q.scenario,
      selectedText: q.options[selectedIdx].text,
      correctText: q.options.find(o => o.correct).text,
      isCorrect: isCorrect,
      explanation: q.explanation
    });
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener('click', () => {
      currentQuestionIdx++;
      if (currentQuestionIdx < quizQuestions.length) {
        loadQuestion(currentQuestionIdx);
      } else {
        renderQuizResults();
      }
    });
  }

  function renderQuizResults() {
    quizActiveScreen.style.display = 'none';
    quizResultScreen.style.display = 'block';

    finalScoreNum.textContent = quizScore;
    const accuracy = Math.round((quizScore / quizQuestions.length) * 100);
    resAccuracy.textContent = `${accuracy}%`;
    resCorrectCount.textContent = quizScore;
    resWrongCount.textContent = quizQuestions.length - quizScore;

    if (quizScore >= 9) {
      resultRankTitle.textContent = "Cyber Sentinel Master 🛡️";
      resultRankDesc.textContent = "Exceptional instincts! You possess elite cybersecurity reflexes and can easily guide peers through AI and digital campus threats.";
    } else if (quizScore >= 6) {
      resultRankTitle.textContent = "Digital Cyber Defender ⚡";
      resultRankDesc.textContent = "Solid cyber hygiene foundation! You identified the majority of attacks, but review the explanations below to spot more subtle psychological traps.";
    } else {
      resultRankTitle.textContent = "Cyber Hygiene Novice ⚠️";
      resultRankDesc.textContent = "Your digital habits have vulnerable blind spots. Review the core hygiene tips and retake the quiz to sharpen your online defenses!";
    }

    // Build review list
    quizReviewList.innerHTML = userAnswers.map((ans, idx) => `
      <div class="review-item ${ans.isCorrect ? 'rev-correct' : 'rev-wrong'}">
        <h5 class="review-q-title">Q${idx + 1}: ${ans.question}</h5>
        <div class="review-answer-line">
          <strong>Your Answer:</strong> ${ans.selectedText} ${ans.isCorrect ? '✅' : '❌'}
        </div>
        ${!ans.isCorrect ? `<div class="review-answer-line text-success"><strong>Correct Action:</strong> ${ans.correctText}</div>` : ''}
        <div class="review-answer-line" style="margin-top: 6px; font-style: italic;">
          ${ans.explanation}
        </div>
      </div>
    `).join('');
  }

  // Toggle Review Accordion
  if (toggleQuizReviewBtn && quizReviewList) {
    toggleQuizReviewBtn.addEventListener('click', () => {
      const isVisible = quizReviewList.style.display === 'block';
      quizReviewList.style.display = isVisible ? 'none' : 'block';
      toggleQuizReviewBtn.querySelector('span').textContent = isVisible ? 'Review All Questions & Answers' : 'Hide Review Summary';
    });
  }

  // Retake Quiz
  if (retakeQuizBtn) {
    retakeQuizBtn.addEventListener('click', () => {
      currentQuestionIdx = 0;
      quizScore = 0;
      userAnswers = [];
      quizResultScreen.style.display = 'none';
      quizActiveScreen.style.display = 'block';
      loadQuestion(0);
    });
  }

  // Initialize Quiz
  loadQuestion(0);

  // ==========================================================================
  // 8. Section 5: Daily Cyber Safety Checklist (with LocalStorage)
  // ==========================================================================
  const checklistInputs = document.querySelectorAll('.checklist-item-input');
  const checklistCounterText = document.getElementById('checklist-counter-text');
  const checklistProgressFill = document.getElementById('checklist-progress-fill');
  const resetChecklistBtn = document.getElementById('reset-checklist-btn');
  const checklistCompleteBanner = document.getElementById('checklist-complete-banner');

  const CHECKLIST_STORAGE_KEY = 'cyber_hygiene_checklist_v1';

  function loadChecklistState() {
    try {
      const saved = JSON.parse(localStorage.getItem(CHECKLIST_STORAGE_KEY) || '{}');
      checklistInputs.forEach(input => {
        const parent = input.closest('.custom-check-box');
        const id = parent ? parent.getAttribute('data-id') : null;
        if (id && saved[id]) {
          input.checked = true;
        } else {
          input.checked = false;
        }
      });
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    updateChecklistProgress();
  }

  function saveChecklistState() {
    try {
      const state = {};
      checklistInputs.forEach(input => {
        const parent = input.closest('.custom-check-box');
        const id = parent ? parent.getAttribute('data-id') : null;
        if (id) {
          state[id] = input.checked;
        }
      });
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    updateChecklistProgress();
  }

  function updateChecklistProgress() {
    const total = checklistInputs.length;
    let checkedCount = 0;

    checklistInputs.forEach(input => {
      if (input.checked) checkedCount++;
    });

    const percent = total > 0 ? Math.round((checkedCount / total) * 100) : 0;
    if (checklistCounterText) {
      checklistCounterText.textContent = `${checkedCount} of ${total} completed (${percent}%)`;
    }
    if (checklistProgressFill) {
      checklistProgressFill.style.width = `${percent}%`;
    }

    if (checklistCompleteBanner) {
      if (checkedCount === total && total > 0) {
        checklistCompleteBanner.style.display = 'flex';
      } else {
        checklistCompleteBanner.style.display = 'none';
      }
    }
  }

  checklistInputs.forEach(input => {
    input.addEventListener('change', () => {
      saveChecklistState();
      if (input.checked) {
        showToast('Habit checked off! Keep building your defense.', 'success');
      }
    });
  });

  if (resetChecklistBtn) {
    resetChecklistBtn.addEventListener('click', () => {
      if (confirm('Reset all checked habits on your checklist?')) {
        checklistInputs.forEach(input => input.checked = false);
        saveChecklistState();
        showToast('Checklist reset successfully.', 'info');
      }
    });
  }

  // Load saved checklist on start
  loadChecklistState();

  // ==========================================================================
  // 9. Section 6: Slogans Carousel, Tip Sharing & Certificate Generator
  // ==========================================================================
  const slogansList = [
    {
      quote: "Passwords are like toothbrushes: pick a good one, don't share it, and change it regularly!",
      author: "— Student Cyber Hygiene Golden Principle"
    },
    {
      quote: "Think before you click, verify before you trust, and never let artificial urgency rush your judgment.",
      author: "— Anti-Phishing Defense Creed"
    },
    {
      quote: "Free Wi-Fi has a price if your personal data and passwords are lost in transit.",
      author: "— Campus Network Security Standard"
    },
    {
      quote: "Cracked software isn't free—it costs your session cookies, identity, and computer health.",
      author: "— Malware Prevention Rule"
    },
    {
      quote: "When in financial distress from an online scam, dial 1930 without delay!",
      author: "— National Cyber Support Guideline"
    }
  ];

  let currentSloganIdx = 0;
  const sloganQuoteEl = document.getElementById('slogan-quote');
  const sloganAuthorEl = document.getElementById('slogan-author');
  const sloganPrevBtn = document.getElementById('slogan-prev-btn');
  const sloganNextBtn = document.getElementById('slogan-next-btn');
  const copySloganBtn = document.getElementById('copy-slogan-btn');

  function renderSlogan(idx) {
    if (!sloganQuoteEl || !sloganAuthorEl) return;
    sloganQuoteEl.style.opacity = '0';
    setTimeout(() => {
      sloganQuoteEl.textContent = `"${slogansList[idx].quote}"`;
      sloganAuthorEl.textContent = slogansList[idx].author;
      sloganQuoteEl.style.opacity = '1';
    }, 200);
  }

  if (sloganPrevBtn && sloganNextBtn) {
    sloganPrevBtn.addEventListener('click', () => {
      currentSloganIdx = (currentSloganIdx - 1 + slogansList.length) % slogansList.length;
      renderSlogan(currentSloganIdx);
    });

    sloganNextBtn.addEventListener('click', () => {
      currentSloganIdx = (currentSloganIdx + 1) % slogansList.length;
      renderSlogan(currentSloganIdx);
    });
  }

  if (copySloganBtn) {
    copySloganBtn.addEventListener('click', () => {
      const text = `${sloganQuoteEl.textContent} ${sloganAuthorEl.textContent}`;
      navigator.clipboard.writeText(text).then(() => {
        showToast('Slogan copied to clipboard!', 'success');
      });
    });
  }

  // Shareable Tip Buttons
  const shareTipBtns = document.querySelectorAll('.btn-share-tip');
  shareTipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tipText = btn.getAttribute('data-tip');
      if (!tipText) return;

      navigator.clipboard.writeText(tipText).then(() => {
        showToast('Safety tip copied! Ready to share on WhatsApp or socials.', 'success');
      }).catch(() => {
        showToast('Tip copied!', 'info');
      });
    });
  });

  // Cyber Pledge Certificate Generator
  const studentNameInput = document.getElementById('pledge-student-name');
  const generateCertBtn = document.getElementById('generate-certificate-btn');
  const certPreviewBox = document.getElementById('certificate-preview-box');
  const certStudentName = document.getElementById('cert-student-name');
  const certDate = document.getElementById('cert-date');
  const printCertBtn = document.getElementById('print-certificate-btn');

  if (generateCertBtn && studentNameInput && certPreviewBox) {
    generateCertBtn.addEventListener('click', () => {
      const name = studentNameInput.value.trim();
      if (!name || name.length < 2) {
        showToast('Please enter your valid name to generate the certificate.', 'warning');
        studentNameInput.focus();
        return;
      }

      certStudentName.textContent = name.toUpperCase();

      // Format current month & year
      const now = new Date();
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      certDate.textContent = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;

      certPreviewBox.style.display = 'block';
      certPreviewBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      showToast(`Pledge certificate generated for ${name}!`, 'success');
    });
  }

  if (printCertBtn) {
    printCertBtn.addEventListener('click', () => {
      window.print();
    });
  }

});
