
:root {
    --google-blue: #8ab4f8; /* Adjusted for dark mode contrast */
    --primary-bg: #ffffff;
    --secondary-bg: #f1f3f4;
    --text-primary: #202124;
    --text-secondary: #5f6368;
    --border-color: #dadce0;
    --hover-light-blue: #e8f0fe;
}

body.dark-mode {
    --google-blue: #8ab4f8;
    --primary-bg: #202124;
    --secondary-bg: #2d2e30;
    --text-primary: #e8eaed;
    --text-secondary: #9aa0a6;
    --border-color: #3c4043;
    --hover-light-blue: #3c4043;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Roboto', 'Google Sans', sans-serif;
    background-color: var(--primary-bg);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    transition: background-color 0.5s ease, color 0.5s ease;
}

body.modal-open {
    overflow: hidden;
}

/* --- Global Styles & Header --- */
.hero-header {
    height: 50vh;
    min-height: 400px;
    background-color: #005f73;
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='50' height='50'/%3E%3Crect x='50' y='50' width='50' height='50'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 20px;
    position: relative;
    overflow: hidden;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 2rem;
    position: relative;
    z-index: 1;
}

.placement-logo {
    width: 100px;
    height: 100px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    border: 2px solid white;
    backdrop-filter: blur(5px);
}

.hero-header h1 {
    font-family: 'Google Sans', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.particle-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

/* --- Sticky Navigation --- */
.chip-nav {
    background-color: var(--primary-bg);
    padding: 16px 5%;
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    transition: background-color 0.3s ease, border-color 0.3s ease, display 0.3s ease;
}

.nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.chip-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; 
    gap: 12px;
    width: 100%;
    position: relative;
}

#active-chip-bg {
    position: absolute;
    height: 100%;
    background-color: var(--hover-light-blue);
    border: 1px solid var(--google-blue);
    border-radius: 999px;
    z-index: 0;
    transition: all 0.4s cubic-bezier(0.45, 0, 0.55, 1);
    animation: pulse-glow 2.5s infinite alternate;
}

@keyframes pulse-glow {
    from { box-shadow: 0 0 4px -2px var(--google-blue); }
    to { box-shadow: 0 0 12px 2px var(--google-blue); }
}

.nav-chip, .home-button {
    font-family: 'Google Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    border-radius: 999px;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s ease-in-out;
    user-select: none;
    position: relative;
    z-index: 1;
    background: transparent;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0; 
}

.nav-chip:hover, .home-button:hover {
    background-color: var(--secondary-bg);
}

.nav-chip .chip-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--text-secondary);
    display: inline-block;
    transition: all 0.3s ease-in-out;
    position: relative;
}

.nav-chip.active {
    color: var(--google-blue);
    border-color: transparent;
}

.nav-chip.active .chip-icon {
    border-color: var(--google-blue);
    background-color: var(--google-blue);
}

.nav-chip.active .chip-icon::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

/* --- Mobile Navigation Dropdown --- */
.mobile-header, .mobile-home-btn {
    display: none;
}

.mobile-nav-toggle {
    display: none;
}

.mobile-nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--primary-bg);
    border: 1px solid var(--border-color);
    border-top: none;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    z-index: 999;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-out;
}
.mobile-nav-menu.open {
    display: block;
    max-height: 500px; /* Adjust as needed */
}
.mobile-nav-menu a {
    display: block;
    padding: 15px 20px;
    color: var(--text-primary);
    text-decoration: none;
    border-bottom: 1px solid var(--border-color);
}
.mobile-nav-menu a:last-child {
    border-bottom: none;
}
.mobile-nav-menu a:hover {
    background-color: var(--secondary-bg);
}


/* Dark Mode Toggle Styles in Footer */
.dark-mode-toggle {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-secondary);
}
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
}
.switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
}
.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}
input:checked + .slider {
    background-color: var(--google-blue);
}
input:checked + .slider:before {
    transform: translateX(24px);
}

/* --- Content Visibility & Transitions --- */
#mainContent, #eventPage {
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
}

.content-hidden {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    width: 100%;
    top: 0;
    left: -9999px; /* Move off-screen */
}

#eventPage {
    display: block; /* Use block and control with class */
    padding: 0;
}

.page-section {
    padding: 80px 5%;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease;
}

#overview { 
    background-color: var(--secondary-bg);
}

.page-section:nth-child(odd) {
        background-color: var(--secondary-bg);
}

/* --- Professional Scroll Transitions --- */
.animated-item {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animated-item.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Staggered animation for grid items */
.committee-grid.is-visible .team-card,
.events-grid.is-visible .event-card,
.card-grid.is-visible .card,
.policy-grid.is-visible .policy-card,
.initiative-grid.is-visible .initiative-card {
    opacity: 1;
    transform: translateY(0);
}

.committee-grid .team-card,
.events-grid .event-card,
.card-grid .card,
.policy-grid .policy-card,
.initiative-grid .initiative-card {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.committee-grid .team-card:nth-child(2),
.events-grid .event-card:nth-child(2),
.card-grid .card:nth-child(2),
.policy-grid .policy-card:nth-child(2),
.initiative-grid .initiative-card:nth-child(2) { transition-delay: 0.1s; }
.committee-grid .team-card:nth-child(3),
.events-grid .event-card:nth-child(3),
.card-grid .card:nth-child(3),
.policy-grid .policy-card:nth-child(3),
.initiative-grid .initiative-card:nth-child(3) { transition-delay: 0.2s; }
.committee-grid .team-card:nth-child(4) { transition-delay: 0.3s; }
.committee-grid .team-card:nth-child(5) { transition-delay: 0.4s; }
.committee-grid .team-card:nth-child(6) { transition-delay: 0.5s; }

.section-header {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
    z-index: 1;
}

.sub-header {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 2rem;
    font-family: 'Google Sans', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    color: var(--text-primary);
}

.section-header h2 {
    font-family: 'Google Sans', sans-serif;
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    transition: color 0.3s ease;
}

.section-header p {
    max-width: 700px;
    margin: 0 auto;
    color: var(--text-secondary);
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

/* --- Overview Section --- */
.overview-text { 
    text-align: center; 
    position: relative; 
    z-index: 1; 
    margin-bottom: 6rem;
}
.overview-text:last-child {
    margin-bottom: 0;
}
.overview-text .icon { font-size: 3.5rem; color: var(--google-blue); margin-bottom: 1.5rem; }
.overview-text h2 { font-family: 'Google Sans', sans-serif; font-size: 4rem; margin-bottom: 1.5rem; color: var(--text-primary); }
.overview-text p, .overview-text li { font-size: 1.4rem; color: var(--text-secondary); line-height: 1.7; max-width: 700px; margin: auto; }
.overview-text ul { list-style: none; padding: 0; margin-top: 1.5rem; }
.overview-text li { margin-bottom: 1rem; }

/* --- T&P Policy Section --- */
.policy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
}

.policy-card {
    background: var(--primary-bg);
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}
body.dark-mode .policy-card {
    background: var(--secondary-bg);
}
.policy-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    border-color: var(--google-blue);
}
.policy-card h3 {
    font-family: 'Google Sans', sans-serif;
    font-size: 1.5rem;
    color: var(--google-blue);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}
.policy-card p, .policy-card li {
    color: var(--text-secondary);
    font-size: 1rem;
}
.policy-card ul {
    list-style: none;
    padding-left: 0;
}
.policy-card ul li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
}
.policy-card ul li::before {
    content: '\f105'; /* Font Awesome right arrow */
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    left: 0;
    top: 2px;
    color: var(--google-blue);
}

.policy-container { display: flex; flex-direction: column; width: 100%; max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; background: var(--primary-bg); border-radius: 16px; box-shadow: 0 8px 30px rgba(0,0,0,0.08); overflow: hidden; transition: background-color 0.3s ease; }
.policy-nav { display: flex; justify-content: flex-start; background-color: var(--secondary-bg); padding: 1rem; border-bottom: 1px solid var(--border-color); overflow-x: auto; scrollbar-width: none; transition: background-color 0.3s ease, border-color 0.3s ease; }
.policy-nav::-webkit-scrollbar { display: none; }
.policy-nav-item { font-family: 'Google Sans', sans-serif; padding: 0.75rem 1.5rem; margin: 0 0.5rem; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; font-weight: 500; color: var(--text-secondary); white-space: nowrap; border: 1px solid transparent; }
.policy-nav-item:hover { background-color: var(--border-color); }
.policy-nav-item.active { background-color: var(--hover-light-blue); color: var(--google-blue); border-color: var(--google-blue); box-shadow: 0 2px 4px rgba(25, 103, 210, 0.2); }
.policy-content-area { padding: 2rem 3rem; }
.policy-page { display: none; animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
.policy-page.active { display: block; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
.policy-page h3 { font-family: 'Google Sans', sans-serif; font-size: 2rem; color: var(--google-blue); margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--google-blue); display: inline-block; }
.policy-page h4 { font-family: 'Google Sans', sans-serif; font-size: 1.3rem; margin-top: 1.5rem; margin-bottom: 1rem; }
.policy-page p, .policy-page li { font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 1rem; }
.policy-page ul { list-style: none; padding-left: 0; }
.policy-page ul li { padding-left: 2rem; position: relative; }
.policy-page ul li::before { content: '\f058'; font-family: 'Font Awesome 6 Free'; font-weight: 900; position: absolute; left: 0; top: 5px; color: var(--google-blue); font-size: 1.2rem; }

.initiative-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}
.initiative-card {
    background-color: var(--secondary-bg);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
}
.initiative-card:hover {
    color: var(--google-blue);
    background-color: var(--hover-light-blue);
    border-color: var(--google-blue);
    transform: scale(1.05);
}

/* --- Accordion (Internships & Training) --- */
.accordion-container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
.accordion-item {
    background-color: var(--primary-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    margin-bottom: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
}
.accordion-item:hover {
    border-color: var(--google-blue);
    box-shadow: 0 8px 25px rgba(0,0,0,0.07);
}
.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    cursor: pointer;
    font-family: 'Google Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
}
.accordion-header i {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--google-blue);
}
.accordion-item.active .accordion-header i {
    transform: rotate(45deg);
}
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.accordion-content-inner {
    padding: 0 1.5rem 1.5rem 1.5rem;
    color: var(--text-secondary);
}
.accordion-content-inner ul {
    list-style-position: inside;
    padding-left: 0.5rem;
}
.accordion-content-inner li {
    margin-bottom: 0.5rem;
}
.accordion-content-inner h4 {
    font-family: 'Google Sans', sans-serif;
    color: var(--text-primary);
    font-size: 1.1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}


/* --- Meet the Team Section --- */
.committee-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    justify-content: center;
}

/* Alignment fix for grids with few items */
.advisors-grid {
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    gap: 2rem;
}


.team-card { background: var(--primary-bg); border-radius: 16px; padding: 1.5rem; text-align: center; border: 1px solid var(--border-color); box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; flex-direction: column; cursor: pointer; }
.team-card:hover { transform: translateY(-8px); box-shadow: 0 12px 25px rgba(0,0,0,0.1); border-color: var(--google-blue); }
.team-card-photo { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem auto; border: 3px solid var(--border-color); }
.team-card-name { font-family: 'Google Sans', sans-serif; font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.25rem; }
.team-card-role { font-size: 0.9rem; color: var(--google-blue); margin-bottom: 1rem; flex-grow: 1; }
.team-card-socials {
    margin-top: auto;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}
.social-icon {
    color: var(--text-secondary);
    font-size: 1.3rem;
    transition: color 0.3s ease, transform 0.3s ease;
}
.social-icon:hover {
    color: var(--google-blue);
    transform: scale(1.2);
}


/* --- Team Member Modal --- */
.team-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); backdrop-filter: blur(8px); display: flex; justify-content: center; align-items: center; z-index: 2000; opacity: 0; visibility: hidden; transition: opacity 0.4s ease; }
.team-modal-overlay.active { opacity: 1; visibility: visible; }
.team-modal-content { background: var(--primary-bg); border-radius: 20px; width: 90%; max-width: 800px; max-height: 90vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.2); position: relative; display: flex; transform: scale(0.95); transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease; }
.team-modal-overlay.active .team-modal-content { transform: scale(1); }
.team-modal-close { position: absolute; top: 15px; right: 20px; background: none; border: none; font-size: 2.2rem; color: var(--text-secondary); cursor: pointer; transition: transform 0.2s ease, color 0.2s ease; z-index: 10; }
.team-modal-close:hover { transform: scale(1.2) rotate(90deg); color: var(--google-blue); }
.modal-left { background-color: var(--secondary-bg); padding: 2.5rem; width: 40%; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; transition: background-color 0.3s ease; }
.modal-photo { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 5px solid var(--primary-bg); box-shadow: 0 0 0 4px var(--google-blue); }
.modal-name { font-family: 'Google Sans', sans-serif; font-size: 1.6rem; margin-top: 1.5rem; color: var(--text-primary); }
.modal-role { font-size: 1rem; color: var(--google-blue); margin-top: 0.25rem; }
.modal-right { padding: 2.5rem; width: 60%; }
.modal-right h4 { font-family: 'Google Sans', sans-serif; font-size: 1.4rem; color: var(--text-primary); margin-bottom: 1rem; }
.modal-details { color: var(--text-secondary); margin-bottom: 1.5rem; }
.modal-details ul { list-style-position: inside; padding-left: 0; }
.modal-details li { margin-bottom: 0.5rem; }
.modal-contact-info { margin-top: 1rem; }
.modal-contact-info a { display: block; color: var(--google-blue); font-weight: 500; text-decoration: none; margin-bottom: 0.75rem; transition: color 0.3s ease; }
.modal-contact-info a:hover { color: var(--text-primary); }
.modal-contact-info i { margin-right: 0.75rem; width: 20px; text-align: center; }

/* --- Industry-Recognized Certifications Section --- */
.certifications-container { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 4rem; margin-top: 2rem; position: relative; z-index: 1; }
.cert-logo { font-size: 5rem; color: var(--text-secondary); transition: all 0.3s ease; }
.cert-logo:hover { color: var(--google-blue); transform: scale(1.1); }

/* --- Brochure Section --- */
.brochure-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
}
.brochure-image {
    flex: 1;
    min-width: 250px;
    max-width: 300px;
}
.brochure-image img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}
.brochure-image img:hover {
    transform: scale(1.05);
}
.brochure-content {
    flex: 2;
    min-width: 300px;
}
.brochure-content h3 {
    font-family: 'Google Sans', sans-serif;
    font-size: 2rem;
    margin-bottom: 1rem;
}
.brochure-content p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}
.brochure-btn, .view-events-btn, .back-to-home-btn {
    display: inline-block;
    background-color: var(--google-blue);
    color: var(--primary-bg);
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    font-family: 'Google Sans', sans-serif;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}
.brochure-btn:hover, .view-events-btn:hover, .back-to-home-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
}
.brochure-btn:disabled {
    background-color: var(--secondary-bg);
    color: var(--text-secondary);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

/* --- Events Section --- */
.events-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
.event-card { background: var(--primary-bg); border: 1px solid var(--border-color); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: all 0.3s ease; cursor: pointer; }
.event-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.08); }
.event-date { background-color: var(--google-blue); color: white; text-align: center; padding: 1rem; font-family: 'Google Sans', sans-serif; }
.event-date span { display: block; }
.event-date .month { font-size: 1rem; text-transform: uppercase; }
.event-date .day { font-size: 2.5rem; font-weight: 700; line-height: 1; }
.event-content { padding: 1.5rem; }
.event-title { font-family: 'Google Sans', sans-serif; font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.5rem; }
.event-description { color: var(--text-secondary); margin-bottom: 1.5rem; }
.event-action .btn { display: inline-block; background-color: transparent; color: var(--google-blue); border: 2px solid var(--google-blue); padding: 10px 20px; border-radius: 999px; text-decoration: none; font-weight: 500; transition: all 0.3s ease; }
.event-action .btn:hover { background-color: var(--google-blue); color: var(--primary-bg); }
.event-action .notice { color: var(--text-secondary); font-style: italic; }
.event-card.completed .event-date { background-color: var(--text-secondary); }
.event-card.completed .event-action .btn { background-color: var(--secondary-bg); border-color: var(--secondary-bg); color: var(--text-secondary); }

/* --- Event Page Styles --- */
#eventNav {
    padding: 16px 5%;
    display: none; /* Hidden by default */
}
#eventNav .nav-container {
    justify-content: space-between;
}
#eventNav .back-button {
    font-family: 'Google Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    border-radius: 999px;
    padding: 10px 20px;
    cursor: pointer;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 8px;
}
#eventNav .back-button:hover {
        background-color: var(--secondary-bg);
}
#eventNav .event-header-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: 'Google Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
}
#eventNav .event-logo {
    width: 30px;
    height: 30px;
    background-color: var(--secondary-bg);
    border-radius: 50%;
    border: 1px solid var(--border-color);
}

#eventPage .page-section {
    padding-top: 60px;
    padding-bottom: 60px;
}
#eventPage .page-section:first-child {
    padding-top: 0;
}
.event-page-container { max-width: 1200px; margin: 0 auto; }

#eventHero {
    height: 45vh;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 2rem;
    position: relative;
    width: 100%; /* Full width */
}
#eventHero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
    z-index: 1;
}
#eventHero > * {
    position: relative;
    z-index: 2;
}
#eventHero h2, #eventHero p { display: none; } /* Hide text from hero */

#eventOverview p { font-size: 1.2rem; color: var(--text-secondary); text-align: center; max-width: 800px; margin: 0 auto; }

#eventRegistration {
    background-color: var(--secondary-bg);
    text-align: center;
}
#eventRegistration .registration-box {
    background-color: var(--primary-bg);
    padding: 2.5rem;
    border-radius: 16px;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    border: 1px solid var(--border-color);
}
#eventRegistration h3 {
        font-family: 'Google Sans', sans-serif;
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
}

.agenda-container.agenda-timeline { max-width: 800px; margin: 2rem auto 0 auto; position: relative; }
.agenda-container.agenda-timeline::before { content: ''; position: absolute; left: 20px; top: 0; bottom: 0; width: 3px; background-color: var(--border-color); }
.agenda-item { position: relative; padding-left: 60px; margin-bottom: 2.5rem; }
.agenda-container.agenda-timeline .agenda-item::before { content: ''; position: absolute; left: 8px; top: 5px; width: 25px; height: 25px; background-color: var(--secondary-bg); border: 3px solid var(--google-blue); border-radius: 50%; z-index: 1; }

.agenda-container.agenda-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}
.agenda-container.agenda-grid .agenda-item {
    padding: 1.5rem;
    background-color: var(--secondary-bg);
    border-radius: 12px;
    border: 1px solid var(--border-color);
}

.agenda-time { font-family: 'Google Sans', sans-serif; font-weight: 500; color: var(--google-blue); font-size: 1.1rem; }
.agenda-title { font-weight: 700; color: var(--text-primary); font-size: 1.2rem; margin: 0.25rem 0; }
.agenda-speaker { color: var(--text-secondary); font-size: 1rem; }

.speaker-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
.speaker-card { text-align: center; }
.speaker-card img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem auto; border: 4px solid var(--border-color); }
.speaker-card h4 { font-family: 'Google Sans', sans-serif; font-size: 1.2rem; }
.speaker-card p { color: var(--text-secondary); }

.photo-gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; }
.photo-gallery-grid img { width: 100%; height: 200px; object-fit: cover; border-radius: 12px; cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.photo-gallery-grid img:hover { transform: scale(1.05); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

.lightbox-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: center; z-index: 3000; opacity: 0; visibility: hidden; transition: opacity 0.4s ease; }
.lightbox-overlay.active { opacity: 1; visibility: visible; }
.lightbox-content { position: relative; max-width: 90vw; max-height: 90vh; }
.lightbox-content img { width: 100%; height: 100%; object-fit: contain; border-radius: 12px; }
.lightbox-close { position: absolute; top: -40px; right: 0; background: none; border: none; font-size: 2.5rem; color: white; cursor: pointer; }

.video-section-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; }
.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
.video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }

.testimonial-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.testimonial-card { background: var(--secondary-bg); padding: 2rem; border-radius: 16px; border-left: 5px solid var(--google-blue); }
.testimonial-card p { font-style: italic; color: var(--text-secondary); margin-bottom: 1rem; }
.testimonial-card .author { font-weight: bold; color: var(--text-primary); }
.testimonial-card .author-role { font-size: 0.9rem; color: var(--text-secondary); }

.highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; text-align: center; }
.highlight-item .stat { font-family: 'Google Sans', sans-serif; font-size: 3rem; font-weight: 700; color: var(--google-blue); }
.highlight-item .label { font-size: 1.1rem; color: var(--text-secondary); }

.upcoming-events-list { list-style: none; padding: 0; max-width: 600px; margin: 0 auto; }
.upcoming-events-list li { background: var(--secondary-bg); padding: 1rem 1.5rem; border-radius: 8px; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; }
.upcoming-events-list .event-info span { display: block; }
.upcoming-events-list .event-info .title { font-weight: 500; }
.upcoming-events-list .event-info .date { font-size: 0.9rem; color: var(--text-secondary); }
.upcoming-events-list .event-link { color: var(--google-blue); text-decoration: none; font-weight: 500; }

#eventCTA, #backToHome { text-align: center; }

/* --- Contact Section --- */
.contact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    background: var(--primary-bg);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}
.contact-info {
    flex: 1;
    padding: 2.5rem;
    min-width: 300px;
}
.contact-info h4 {
    font-family: 'Google Sans', sans-serif;
    font-size: 1.5rem;
    color: var(--google-blue);
    margin-bottom: 1.5rem;
}
.contact-person {
    margin-bottom: 1.5rem;
}
.contact-person strong {
    font-weight: 500;
    color: var(--text-primary);
}
.contact-person p {
    color: var(--text-secondary);
    margin: 0.25rem 0;
}
.contact-person a {
    color: var(--google-blue);
    text-decoration: none;
}
.contact-person a:hover {
    text-decoration: underline;
}
.contact-photo {
    flex: 1;
    min-width: 300px;
}
.contact-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}


/* --- Footer --- */
.site-footer {
    padding: 1.5rem 5%;
    background-color: var(--secondary-bg);
    border-top: 1px solid var(--border-color);
    transition: background-color 0.3s ease, border-color 0.3s ease;
}
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 1rem;
}
.footer-content p {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* --- Back to Top Button --- */
.back-to-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: var(--google-blue);
    color: var(--primary-bg);
    border: none;
    border-radius: 50px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    cursor: pointer;
    z-index: 1001;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
    text-decoration: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
}
.back-to-top-btn.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
.back-to-top-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.25);
}

/* --- Growing Plant Animation --- */
.growing-plant {
    width: 150px;
    height: auto;
    position: absolute;
    bottom: 20px;
    left: 20px;
    opacity: 0;
    z-index: 0;
    transition: opacity 0.5s ease;
}
.animated-item.is-visible .growing-plant {
    opacity: 0.8;
}


/* --- Responsive Design --- */
@media (min-width: 769px) {
    #active-chip-bg { display: block; }
    .nav-chip.active {
        border-color: transparent;
    }
    .nav-chip.active .chip-icon {
        background-color: var(--google-blue);
    }
    .nav-chip.active .chip-icon::after {
        content: '';
        position: absolute;
        left: 5px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
    .committee-grid { display:grid;}
    .animated-item.is-visible .growing-plant {opacity: 0;}
}

@media (max-width: 992px) {
    .committee-grid { grid-template-columns: repeat(2, 1fr); display:grid;}
    .team-modal-content { flex-direction: column; }
    .modal-left, .modal-right { width: 100%; }
    .modal-photo { width: 120px; height: 120px; }
    .animated-item.is-visible .growing-plant {opacity: 0;}
}

@media (max-width: 768px) {
    .hero-header h1 { font-size: 2.5rem; }
    .placement-logo { display: none; }
    .section-header h2 { font-size: 2rem; }
    #eventHero h2 { font-size: 2.5rem; }
    .committee-grid { grid-template-columns: 1fr; }
    .advisors-grid { grid-template-columns: 1fr; display:grid; }
    .certifications-container { gap: 3rem; }
    .cert-logo { font-size: 4rem; }
    .overview-text h2 { font-size: 2.5rem; }
    .overview-text p, .overview-text li { font-size: 1.1rem; }
    .policy-content-area { padding: 1.5rem; }
    .policy-page h3 { font-size: 1.5rem; }
    .footer-content { justify-content: center; text-align: center; }
    .chip-container { display: none; }
    .video-section-grid { grid-template-columns: 1fr; }
    .animated-item.is-visible .growing-plant {opacity: 0;}
    
    .nav-container {
        justify-content: space-between;
    }
    .mobile-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-family: 'Google Sans', sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
    }
    .mobile-logo {
        width: 30px;
        height: 30px;
        background-color: var(--secondary-bg);
        border-radius: 50%;
        border: 1px solid var(--border-color);
    }
    .mobile-nav-toggle {
        display: block;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--text-primary);
        cursor: pointer;
        padding: 5px;
    }
}
