export const navLinks = [
  { href: '#about', label: 'About Me' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
];

export const typingRoles = [
  'SOC Analyst',
  'Cybersecurity Analyst',
  'Junior Penetration Tester',
  'Ethical Hacking',
  'Vulnerability Assessment & Penetration Testing (VAPT)',
  'Information Security Analyst',
  'Cyber Forensics',
  'Network Security Analyst',
];

export const aboutParagraphs = [
  "Hello, I'm Bhavya Sri Lakshmi Deva, a motivated B.Tech student specializing in Computer Science and Technology at Sasi Institute of Technology and Engineering, graduating in 2026 with a CGPA of 8.65.",
  'I am passionate about Cybersecurity, with a strong interest in Ethical Hacking, vulnerability assessment, and security operations. During my internship at Clinchsoft Technologies, I gained hands-on experience performing Vulnerability Assessment and Penetration Testing (VAPT) across web applications and enterprise networks. My responsibilities included conducting OWASP-based security assessments, simulating SOC incident response workflows, identifying vulnerabilities, and preparing structured security reports with remediation recommendations.',
  "I am driven by the challenge of understanding systems from an attacker's perspective and transforming those insights into effective defensive strategies. Currently, I am expanding my expertise in SIEM technologies such as Splunk and Microsoft Sentinel, with plans to pursue industry certifications including CEH, CompTIA Security+, and eJPT.",
];

export const EMAIL = 'bhavyadeva2329@gmail.com';
export const RESUME_URL = '/resume.pdf';

export const INTERNSHIP_CERTIFICATE_URL =
  'https://drive.google.com/file/d/1_RZKIrqefUPznQGj014sqg-omYk16ay7/view';
export const PHONE = '+91 7670929939';
export const PHONE_HREF = 'tel:+917670929939';
export const WHATSAPP_NUMBER = '917670929939';

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/bhavyasrideva22', icon: 'github' },
  { label: 'Email', href: 'mailto:bhavyadeva2329@gmail.com', icon: 'email' },
];

export const stats = [
  { num: '8.65', label: 'CGPA / 10' },
  { num: '4', label: 'Security Projects' },
  { num: '1', label: 'Internship' },
  { num: '10+', label: 'Security Tools' },
];

export const skills = [
  {
    icon: '🔍',
    title: 'VAPT & Offensive Security',
    tags: ['Web App Pentesting', 'Network Pentesting', 'OWASP Top 10', 'SQL Injection', 'XSS', 'API Testing', 'Exploitation'],
  },
  {
    icon: '🛡️',
    title: 'SOC & Monitoring',
    tags: ['SIEM Concepts', 'Log Analysis', 'Alert Triage', 'IDS/IPS', 'Splunk', 'Azure Sentinel', 'Threat Detection'],
  },
  {
    icon: '🔧',
    title: 'Security Tools',
    tags: ['Nmap', 'Wireshark', 'Burp Suite', 'Kali Linux', 'Metasploit', 'Maltego'],
  },
  {
    icon: '🌐',
    title: 'Network & Infrastructure',
    tags: ['Firewalls', 'TCP/IP', 'DNS/HTTP', 'Wireless Security', 'Network Hardening', 'Cloud Security'],
  },
  {
    icon: '🚨',
    title: 'Incident Response & Forensics',
    tags: ['SOC Workflows', 'Playbook Execution', 'IoC Analysis', 'Malware Analysis', 'Digital Forensics', 'Threat Intel'],
  },
  {
    icon: '💻',
    title: 'Programming & Concepts',
    tags: ['Python', 'Bash/Shell', 'JavaScript', 'Cryptography', 'Steganography', 'Risk Management', 'Active Directory'],
  },
];

export const softSkills = [
  {
    icon: '🤝',
    title: 'Communication & Collaboration',
    tags: [
      'Verbal Communication',
      'Technical Writing',
      'Team Collaboration',
      'Stakeholder Reporting',
      'Presentation Skills',
      'Cross-functional Coordination',
    ],
  },
  {
    icon: '🧠',
    title: 'Problem Solving & Analysis',
    tags: [
      'Critical Thinking',
      'Problem Solving',
      'Attention to Detail',
      'Analytical Mindset',
      'Root Cause Analysis',
      'Decision Making',
    ],
  },
  {
    icon: '⚡',
    title: 'Professional Attributes',
    tags: [
      'Time Management',
      'Adaptability',
      'Ethics & Integrity',
      'Self-Learning',
      'Working Under Pressure',
      'Security Documentation',
    ],
  },
];

export const timeline = [
  {
    meta: 'MAR 2026 — APR 2026 · REMOTE',
    title: 'Cybersecurity Analyst Intern',
    subtitle: 'Clinchsoft Technologies',
    bullets: [
      'Performed VAPT across web applications and network environments, identifying vulnerabilities including SQL Injection and XSS.',
      'Conducted Web Application Security Audits using OWASP Top 10 methodology with Burp Suite.',
      'Monitored and analyzed security alerts applying SIEM concepts for threat detection and log analysis across firewalls and IDS/IPS systems.',
      'Simulated SOC incident response workflows — triaging alerts, analyzing threat indicators, containing simulated breaches.',
      'Investigated malware behavior through sandbox-based analysis and gained exposure to digital forensics and cloud security.',
      'Documented all findings in structured VAPT-style reports with impact analysis, risk ratings, and actionable remediation steps.',
    ],
    certificateUrl: INTERNSHIP_CERTIFICATE_URL,
  },
];

export const education = [
  {
    period: '2022 — 2026',
    degree: 'B.Tech — Computer Science & Technology',
    institution: 'Sasi Institute of Technology and Engineering',
    location: 'Tadepalligudem, Andhra Pradesh',
    score: '8.65',
    scoreLabel: 'CGPA / 10',
    highlights: [],
  },
];

export const projects = [
  {
    num: 'PROJECT_01',
    title: 'AI-Based Phishing Email Detection System',
    description:
      'Machine learning–powered web application that analyzes email content and metadata to classify messages as legitimate or phishing, helping users identify social engineering attacks before they cause harm.',
    tags: ['Python', 'Machine Learning', 'NLP', 'Phishing Detection', 'Email Security'],
    demoUrl: 'https://phishing-detection-1-bb5e.onrender.com',
  },
  {
    num: 'PROJECT_02',
    title: 'SOC Log Monitoring & Threat Detection System',
    description:
      'Security operations dashboard for ingesting and correlating log events, surfacing suspicious activity, and supporting alert triage workflows aligned with real-world SOC monitoring practices.',
    tags: ['SOC', 'Log Analysis', 'SIEM', 'Threat Detection', 'Alert Triage'],
    demoUrl: 'https://soc-5-kdin.onrender.com/',
  },
  {
    num: 'PROJECT_03',
    title: 'Automated Vulnerability Scanner & Network Analyzer',
    description:
      'Tool for scanning hosts and services to discover open ports, misconfigurations, and common vulnerabilities, with structured output to support prioritization and remediation planning.',
    tags: ['Nmap', 'Network Security', 'Vulnerability Scanning', 'Port Scanning', 'Risk Assessment'],
    demoUrl: 'https://vulnerability1-4.onrender.com/',
  },
  {
    num: 'PROJECT_04',
    title: 'Secure File Encryption & Steganography Suite',
    description:
      'Application combining file encryption with steganography techniques to protect sensitive data and conceal information within media files for secure transfer and storage.',
    tags: ['Cryptography', 'Steganography', 'AES', 'File Security', 'Python'],
    demoUrl: 'https://securefile-3.onrender.com/',
  },
];

export const certifications = [
  {
    icon: '🏅',
    title: 'Cybersecurity Internship Completion',
    detail: 'Clinchsoft Technologies · March–April 2026',
    certificateUrl: INTERNSHIP_CERTIFICATE_URL,
  },
  { icon: '⚡', title: 'Art of Hacking (AOH) Course', detail: 'Ethical Hacking · Social Engineering · Web Hacking' },
  { icon: '🎯', title: 'CEH — Certified Ethical Hacker', detail: 'Planned · EC-Council' },
  { icon: '🔐', title: 'CompTIA Security+', detail: 'Planned · CompTIA' },
  { icon: '🧪', title: 'eJPT — Junior Penetration Tester', detail: 'Planned · eLearnSecurity' },
];

