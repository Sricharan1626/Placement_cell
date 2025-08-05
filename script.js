
document.addEventListener('DOMContentLoaded', function() {

// =================================================================
// =================================================================
//
//              YOUR EVENT DATABASE & CONTROL PANEL
//
//  - To add a new event, copy an existing event object {} and paste it.
//  - Change the details like 'id', 'title', 'startDate', etc.
//  - To hide a section on an event's page (like speakers or gallery),
//    find its 'displaySections' object and set the section to `false`.
//
// =================================================================
// =================================================================
const eventsData = [

{
    id: 'springboot-api-backend',
    title: 'SpringBoot API & Backend Development Workshop',
    startDate: '2025-08-08',
    endDate: '2025-08-09',
    registration: {
        status: 'open',
        link: 'https://example.com/springboot-registration'
    },
    heroImage: 'https://placehold.co/1200x400/003566/ffffff?text=SpringBoot+Workshop',
    overview: "A two-day hands-on workshop covering SpringBoot API development and comprehensive backend techniques. Learn from experienced engineers from Broadridge and Infosys to build robust backend systems with SpringBoot.",
    displaySections: {
        registration: true,
        agenda: true,
        speakers: true,
        gallery: true,
        videos: false,
        testimonials: false,
        highlights: true,
    },
    agenda: [
        { time: '10:00 AM', title: 'Workshop on SpringBoot API Development by Mr. M Sai Kumar' },
        { time: '02:00 PM', title: 'Workshop on Backend Development using SpringBoot by Mr. Uthej Kalathilal' },
    ],
    speakers: [
        { name: 'Mr. M Sai Kumar', role: 'Software Engineer, Broadridge', photo: 'https://placehold.co/200x200/ffc300/333?text=MSK' },
        { name: 'Mr. Uthej Kalathilal', role: 'Digital Specialist Engineer, Infosys', photo: 'https://placehold.co/200x200/00a8e8/fff?text=UK' },
    ],
    gallery: [
        'https://placehold.co/600x400/ffd60a/333?text=SpringBoot+Workshop+Day+1',
        'https://placehold.co/600x400/00a8e8/fff?text=SpringBoot+Workshop+Day+2'
    ],
    videos: [],
    testimonials: [],
    highlights: [
        { stat: '2', label: 'Expert Speakers' },
        { stat: '2', label: 'Workshop Days' },
        { stat: '50', label: 'Seats' }
    ]
},




];
// =================================================================
// END OF EVENT DATABASE
// =================================================================

// =================================================================
//              MEET THE TEAM DATABASE
// =================================================================
const committeeMembers = [
{ name: 'Dr. Rajanikanth Aluvalu', role: 'Director', email: 'director@sithyd.siu.edu.in', linkedin: '#', photo: 'Photo/Rajinikanth.jpg', details: `<p>A visionary leader dedicated to fostering an environment of innovation and excellence.</p>` },
{ name: 'Mr. Sai Prashanth', role: 'Head, Training & Placement Cell & Convenor', email: 'saiprashanth@sithyd.siu.edu.in', linkedin: '#', photo: 'Photo/Prashanth.jpg', details: 'A dynamic professional dedicated to bridging the gap between academia and industry.' },
{ name: 'Mr. Pallati Narsimhulu', role: 'Faculty Coordinator & Co - Convenor', email: 'pallatinarsimhulu@sithyd.siu.edu.in', linkedin: '#', photo: 'Photo/pallati.jpg', details: 'Plays a pivotal role in aligning academic curriculum with placement training modules.' },
{ name: 'Mr. Kondapalkula Sricharan Rao', role: 'Training and Placement Cell Student President', email: '24070722013@sithyd.siu.edu.in',linkedin: 'https://www.linkedin.com/in/sricharan-rao-421152323', photo: 'Photo/Sricharan.jpg', details: 'Leads the student body of the T&P Cell with dedication.' },
{ name: 'Ms. Mokshita VP', role: 'Training and Placement Cell Student Vice President', email: 'mokshitavp@gmail.com', linkedin: 'https://www.linkedin.com/in/mokshita-v-p-479296347', photo: 'Photo/Mokshitha.jpg', details: 'Assists in the leadership of student placement initiatives.' },
{ name: 'Mr. Sreesainadh Ancha', role: 'Training and Placement Cell Head Training & Internships', email: 'srichakrasainadh@gmail.com', linkedin: 'https://www.linkedin.com/in/ancha-sreesainadh-b42389346', photo: 'Photo/Sainadh.jpg', details: 'Focuses on organizing training programs and securing valuable internship opportunities.' },
{ name: 'Ms. Harini Kummari', role: 'Training and Placement Cell Student Coordinator', email: 'harinikummari9@gmail.com', linkedin: 'https://www.linkedin.com/in/harini-k-4b8558347', photo: 'Photo/Harini.jpg', details: 'A key student coordinator, helping to manage events and communication.' }
];

const industryAdvisors = [
    { name: 'Ms. UmaRani Tejomurtula', role: 'Developer Productivity Specialist, Microsoft', email: 'umarani.tejomurtula@microsoft.com', linkedin: '#', photo: 'Photo/Uma.jpg', details: 'An industry expert from Microsoft providing invaluable insights and guidance.' },
{ name: 'Ms. Niharika Vanka', role: 'Senior Data Analyst, Inn Collection Group, UK', email: 'vankaniharika08@gmail.com', linkedin: '#', photo: 'https://placehold.co/200x200/cce5ff/0077b5?text=NV', details: 'An accomplished alumna offering a global perspective on data analytics careers.' }
];
// =================================================================
// END OF TEAM DATABASE
// =================================================================


// --- Dark Mode Logic ---
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function updateImagesForTheme() {
const isDarkMode = document.body.classList.contains('dark-mode');
document.querySelectorAll('img[data-light-src]').forEach(img => {
    const lightSrc = img.getAttribute('data-light-src');
    const darkSrc = img.getAttribute('data-dark-src') || lightSrc;
    img.src = isDarkMode ? darkSrc : lightSrc;
});
}

function setTheme(theme) {
if (theme === 'dark-mode') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
} else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.checked = false;
}
updateImagesForTheme();
}

function applyTheme(theme) {
setTheme(theme);
localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
setTheme(savedTheme);
} else {
setTheme(prefersDarkScheme.matches ? 'dark-mode' : 'light-mode');
}

darkModeToggle.addEventListener('change', function() {
applyTheme(this.checked ? 'dark-mode' : 'light-mode');
});

// --- Navigation Logic ---
const navChips = document.querySelectorAll('.nav-chip');
const mainPageSections = document.querySelectorAll('#mainContent .page-section');
const activeBg = document.getElementById('active-chip-bg');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
let isClickScrolling = false;
let scrollTimeout;

function moveActiveBg(targetChip) {
if (!targetChip || window.innerWidth <= 768) {
    if(activeBg) activeBg.style.display = 'none';
    return;
};
if(activeBg) {
    activeBg.style.display = 'block';
    const targetRect = targetChip.getBoundingClientRect();
    const containerRect = targetChip.parentElement.getBoundingClientRect();
    activeBg.style.width = `${targetRect.width}px`;
    activeBg.style.height = `${targetRect.height}px`;
    activeBg.style.left = `${targetRect.left - containerRect.left}px`;
    activeBg.style.top = `${targetRect.top - containerRect.top}px`;
}
}

setTimeout(() => moveActiveBg(document.querySelector('.nav-chip.active')), 100);

navChips.forEach(chip => {
chip.addEventListener('click', function(e) {
    isClickScrolling = true;
    navChips.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    moveActiveBg(this);

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        isClickScrolling = false;
    }, 1000);
});
});

const scrollObserver = new IntersectionObserver((entries) => {
if (isClickScrolling) return;
entries.forEach(entry => {
    if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const navChip = document.querySelector(`.nav-chip[href="#${id}"]`);
        navChips.forEach(chip => chip.classList.remove('active'));
        if(navChip) {
            navChip.classList.add('active');
            moveActiveBg(navChip);
        }
    }
});
}, { rootMargin: '-40% 0px -60% 0px' });

mainPageSections.forEach(section => scrollObserver.observe(section));

const animationObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
    }
});
}, { threshold: 0.1 });

document.querySelectorAll('.animated-item').forEach(el => animationObserver.observe(el));

mobileNavToggle.addEventListener('click', () => mobileNavMenu.classList.toggle('open'));
mobileNavMenu.addEventListener('click', () => mobileNavMenu.classList.remove('open'));

// --- T&P Policy Tabs ---
const policyNavItems = document.querySelectorAll('.policy-nav-item');
policyNavItems.forEach(item => {
item.addEventListener('click', function() {
    const targetPageId = this.getAttribute('data-policy-page');
    document.querySelectorAll('.policy-nav-item').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.policy-page').forEach(page => {
        page.classList.remove('active');
        if (page.id === targetPageId) page.classList.add('active');
    });
});
});

// --- Accordion Logic ---
document.querySelectorAll('.accordion-header').forEach(header => {
header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');
    const isActive = item.classList.contains('active');
    
    item.closest('.accordion-container').querySelectorAll('.accordion-item').forEach(other => {
        if (other !== item) {
            other.classList.remove('active');
            other.querySelector('.accordion-content').style.maxHeight = 0;
        }
    });

    item.classList.toggle('active');
    content.style.maxHeight = isActive ? 0 : content.scrollHeight + 'px';
});
});

// --- DYNAMIC EVENT SYSTEM ---
const mainContent = document.getElementById('mainContent');
const eventPage = document.getElementById('eventPage');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const backToHomeBtnHeader = document.getElementById('backToHomeBtnHeader');
const eventNav = document.getElementById('eventNav');

function formatDate(dateStr) {
    // Adding a time to avoid timezone issues where the date might be interpreted as the previous day.
return new Date(dateStr + 'T12:00:00Z');
}

function createEventCard(event, isCompleted) {
const card = document.createElement('div');
card.className = `event-card ${isCompleted ? 'completed' : ''}`;
card.dataset.eventId = event.id;

const startDateObj = formatDate(event.startDate);
const startMonth = startDateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
const startDay = startDateObj.getDate();

let dayDisplay = startDay;
if (event.endDate) {
    const endDateObj = formatDate(event.endDate);
    const endDay = endDateObj.getDate();
    if (startDay !== endDay) {
        dayDisplay = `${startDay}-${endDay}`;
    }
}

card.innerHTML = `
    <div class="event-date">
        <span class="month">${startMonth}</span>
        <span class="day">${dayDisplay}</span>
    </div>
    <div class="event-content">
        <h3 class="event-title">${event.title}</h3>
        <p class="event-description">${event.overview.substring(0, 100)}...</p>
        <div class="event-action">
            <a href="#" class="btn">View Details</a>
        </div>
    </div>
`;
card.addEventListener('click', (e) => {
    e.preventDefault();
    showEventPage(event.id);
});
return card;
}

function renderHomepageEvents() {
const upcomingGrid = document.getElementById('upcoming-events-grid');
const completedGrid = document.getElementById('completed-events-grid');
upcomingGrid.innerHTML = '';
completedGrid.innerHTML = '';

const now = new Date();
let upcomingCount = 0;
let completedCount = 0;

eventsData.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

eventsData.forEach(event => {
    const eventDate = formatDate(event.endDate || event.startDate);
    if (eventDate >= now) {
        upcomingGrid.appendChild(createEventCard(event, false));
        upcomingCount++;
    } else {
        completedGrid.appendChild(createEventCard(event, true));
        completedCount++;
    }
});

if (upcomingCount === 0) {
        upcomingGrid.innerHTML = '<p>No upcoming events at this time. Please check back later!</p>';
}
if (completedCount === 0) {
        completedGrid.innerHTML = '<p>No completed events to show yet.</p>';
}
}

function showEventPage(eventId) {
const event = eventsData.find(e => e.id === eventId);
if (!event) return;

// --- 1. POPULATE CONTENT ---
document.getElementById('eventNavTitle').textContent = event.title;
document.getElementById('eventHero').style.backgroundImage = `url('${event.heroImage}')`;
document.getElementById('event-overview-content').textContent = event.overview;

const regSection = document.getElementById('eventRegistration');
const reg = event.registration;
let regButtonHTML = '';
if (reg) {
    if (reg.status === 'open') {
        regButtonHTML = `<a href="${reg.link}" target="_blank" rel="noopener noreferrer" class="brochure-btn">Register Now</a>`;
    } else if (reg.status === 'closed') {
        regButtonHTML = `<button class="brochure-btn" disabled>Registrations Closed</button>`;
    } else if (reg.status === 'soon') {
        regButtonHTML = `<button class="brochure-btn" disabled>Registration Opening Soon</button>`;
    }
}
regSection.innerHTML = regButtonHTML ? `<div class="registration-box"><h3>Join Us!</h3>${regButtonHTML}</div>` : '';

const agendaContainer = document.getElementById('event-agenda-container');
agendaContainer.innerHTML = event.agenda.map(item => `
    <div class="agenda-item">
        <div class="agenda-time">${item.time}</div>
        <div class="agenda-title">${item.title}</div>
        ${item.speaker ? `<div class="agenda-speaker">${item.speaker}</div>` : ''}
    </div>
`).join('');
// Adapt agenda layout
if (event.agenda.length <= 3) {
    agendaContainer.className = 'agenda-container agenda-grid';
} else {
    agendaContainer.className = 'agenda-container agenda-timeline';
}

const populateGrid = (gridId, data, templateFn) => {
    document.getElementById(gridId).innerHTML = data.map(templateFn).join('');
};

populateGrid('event-speakers-grid', event.speakers, s => `<div class="speaker-card"><img src="${s.photo}" alt="${s.name}" loading="lazy"><h4>${s.name}</h4><p>${s.role}</p></div>`);
populateGrid('event-gallery-grid', event.gallery, url => `<img src="${url}" alt="${event.title} photo" loading="lazy">`);
populateGrid('event-videos-grid', event.videos, url => `<div class="video-wrapper"><iframe src="${url}" title="YouTube video" frameborder="0" allowfullscreen></iframe></div>`);
populateGrid('event-testimonials-grid', event.testimonials, t => `<div class="testimonial-card"><p>"${t.quote}"</p><div class="author">${t.author}</div><div class="author-role">${t.role}</div></div>`);
populateGrid('event-highlights-grid', event.highlights, h => `<div class="highlight-item"><div class="stat">${h.stat}</div><div class="label">${h.label}</div></div>`);

// --- 2. CONTROL SECTION VISIBILITY ---
const sections = {
    registration: document.getElementById('eventRegistration'),
    agenda: document.getElementById('eventDetails'),
    speakers: document.getElementById('eventSpeakers'),
    gallery: document.getElementById('eventGallery'),
    videos: document.getElementById('eventVideos'),
    testimonials: document.getElementById('eventTestimonials'),
    highlights: document.getElementById('eventHighlights')
};

for (const sectionName in sections) {
    const shouldShow = event.displaySections?.[sectionName] ?? true;
    sections[sectionName].style.display = shouldShow ? 'block' : 'none';
}

// --- 3. APPLY ANIMATIONS & SHOW PAGE ---
mainContent.classList.add('content-hidden');
eventNav.style.display = 'flex';
eventPage.classList.remove('content-hidden');
window.scrollTo({ top: 0, behavior: 'instant' });

const animatedItems = eventPage.querySelectorAll('.animated-item');
animatedItems.forEach(item => {
    item.classList.remove('is-visible');
    item.style.transitionDelay = '0s';
});

setTimeout(() => {
    let delay = 0;
    animatedItems.forEach(item => {
        if (item.style.display !== 'none') {
            item.style.transitionDelay = `${delay}s`;
            item.classList.add('is-visible');
            delay += 0.15;
        }
    });
}, 100);
}

function hideEventPage() {
eventPage.classList.add('content-hidden');
eventNav.style.display = 'none';
mainContent.classList.remove('content-hidden');
document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
}

backToHomeBtn.addEventListener('click', hideEventPage);
backToHomeBtnHeader.addEventListener('click', hideEventPage);

// --- Lightbox Logic ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxClose = document.getElementById('lightboxClose');

document.getElementById('event-gallery-grid').addEventListener('click', function(e) {
if (e.target.tagName === 'IMG') {
    lightboxImg.src = e.target.src;
    lightbox.classList.add('active');
    document.body.classList.add('modal-open');
}
});

function closeLightbox() {
lightbox.classList.remove('active');
document.body.classList.remove('modal-open');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
if (e.target === lightbox) closeLightbox();
});

// --- MEET THE TEAM LOGIC ---
const committeeGrid = document.getElementById('committee-grid-container');
const advisorsGrid = document.getElementById('advisors-grid-container');
const teamModal = document.getElementById('teamMemberModal');
const teamModalCloseBtn = teamModal.querySelector('.team-modal-close');

function createTeamCard(member) {
const card = document.createElement('div');
card.className = 'team-card';
// Store all data in dataset attributes to populate the modal
Object.keys(member).forEach(key => {
    card.dataset[key] = member[key];
});

card.innerHTML = `
    <img src="${member.photo}" alt="Photo of ${member.name}" class="team-card-photo" loading="lazy" onerror="this.src='https://placehold.co/200x200/E8F0FE/5f6368?text=NA'">
    <h4 class="team-card-name">${member.name}</h4>
    <p class="team-card-role">${member.role}</p>
    <div class="team-card-socials">
        <a href="mailto:${member.email}" class="social-icon" title="Email" onclick="event.stopPropagation()"><i class="fas fa-envelope"></i></a>
        <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn" onclick="event.stopPropagation()"><i class="fab fa-linkedin"></i></a>
    </div>
`;
return card;
}

function renderTeams() {
if(committeeGrid) {
    committeeGrid.innerHTML = '';
    committeeMembers.forEach(member => committeeGrid.appendChild(createTeamCard(member)));
}
if(advisorsGrid) {
    advisorsGrid.innerHTML = '';
    industryAdvisors.forEach(member => advisorsGrid.appendChild(createTeamCard(member)));
}
    // Add click listeners after rendering
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', function() {
        const memberData = this.dataset;
        
        teamModal.querySelector('.modal-photo').src = memberData.photo;
        teamModal.querySelector('.modal-name').textContent = memberData.name;
        teamModal.querySelector('.modal-role').textContent = memberData.role;
        teamModal.querySelector('.modal-details').innerHTML = memberData.details;
        
        const emailLink = teamModal.querySelector('.modal-email-link');
        emailLink.href = `mailto:${memberData.email}`;
        emailLink.querySelector('span').textContent = memberData.email;

        const linkedinLink = teamModal.querySelector('.modal-linkedin-link');
        linkedinLink.href = memberData.linkedin;
        linkedinLink.querySelector('span').textContent = 'View LinkedIn Profile';

        document.body.classList.add('modal-open');
        teamModal.classList.add('active');
    });
});
}

function closeTeamModal() {
document.body.classList.remove('modal-open');
teamModal.classList.remove('active');
}

if(teamModal) {
teamModalCloseBtn.addEventListener('click', closeTeamModal);
teamModal.addEventListener('click', (e) => {
    if (e.target === teamModal) {
        closeTeamModal();
    }
});
}

// --- Particle Background Logic ---
const mouse = { x: undefined, y: undefined };
window.addEventListener('mousemove', (event) => {
mouse.x = event.x;
mouse.y = event.y;
});

document.querySelectorAll('.particle-background').forEach(canvas => {
const ctx = canvas.getContext('2d');
let particles = [];
let animationFrameId;

const colorType = canvas.dataset.particleColor || 'dark';

function getParticleColors() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (colorType === 'light') {
        return {
            particle: 'rgba(255, 255, 255, 0.6)',
            line: '255, 255, 255'
        };
    } else {
        return isDarkMode ? 
        {
            particle: 'rgba(255, 255, 255, 0.2)',
            line: '255, 255, 255'
        } : {
            particle: 'rgba(32, 33, 36, 0.3)',
            line: '32, 33, 36'
        };
    }
}

function resizeCanvas() {
    if (canvas.offsetWidth === 0) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
        if (mouse.x !== undefined) {
            let rect = canvas.getBoundingClientRect();
            let dx = this.x - (mouse.x - rect.left);
            let dy = this.y - (mouse.y - rect.top);
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
                this.x += dx / distance * 1.5;
                this.y += dy / distance * 1.5;
            }
        }
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = getParticleColors().particle;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const numberOfParticles = (canvas.width * canvas.height) / 12000;
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    const lineColorBase = getParticleColors().line;
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                ctx.strokeStyle = `rgba(${lineColorBase}, ${1 - distance / 120})`;
                ctx.lineWidth = 0.3;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    animationFrameId = requestAnimationFrame(animate);
}

const parentElement = canvas.closest('.page-section, .hero-header');
const particleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            resizeCanvas();
            initParticles();
            if (!animationFrameId) {
                animate();
            }
        } else {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    });
}, { threshold: 0 });

if (parentElement) {
    particleObserver.observe(parentElement);
}

window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});

darkModeToggle.addEventListener('change', initParticles);
});

// Initial render
renderHomepageEvents();
renderTeams();

});

