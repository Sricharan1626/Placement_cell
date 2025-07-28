
        document.addEventListener('DOMContentLoaded', function() {
            // --- Dark Mode Logic ---
            const darkModeToggle = document.getElementById('darkModeToggle');
            const currentTheme = localStorage.getItem('theme');

            if (currentTheme) {
                document.body.classList.add(currentTheme);
                if (currentTheme === 'dark-mode') {
                    darkModeToggle.checked = true;
                }
            }

            darkModeToggle.addEventListener('change', function() {
                if (this.checked) {
                    document.body.classList.add('dark-mode');
                    localStorage.setItem('theme', 'dark-mode');
                } else {
                    document.body.classList.remove('dark-mode');
                    localStorage.setItem('theme', 'light-mode');
                }
            });
            
            // --- Navigation Logic ---
            const navChips = document.querySelectorAll('.nav-chip');
            const pageSections = document.querySelectorAll('.page-section');
            const activeBg = document.getElementById('active-chip-bg');
            const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
            const mobileNavMenu = document.querySelector('.mobile-nav-menu');
            let isClickScrolling = false;
            let scrollTimeout;

            function moveActiveBg(targetChip) {
                if (!targetChip || window.innerWidth <= 768) {
                    activeBg.style.display = 'none';
                    return;
                };
                activeBg.style.display = 'block';
                const targetRect = targetChip.getBoundingClientRect();
                const containerRect = targetChip.parentElement.getBoundingClientRect();
                activeBg.style.width = `${targetRect.width}px`;
                activeBg.style.height = `${targetRect.height}px`;
                activeBg.style.left = `${targetRect.left - containerRect.left}px`;
                activeBg.style.top = `${targetRect.top - containerRect.top}px`;
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
                    }, 1000); // Duration of smooth scroll
                });
            });

            const scrollObserver = new IntersectionObserver((entries) => {
                if (isClickScrolling) return;
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id');
                    const navChip = document.querySelector(`.nav-chip[href="#${id}"]`);
                    if (entry.isIntersecting) {
                        navChips.forEach(chip => chip.classList.remove('active'));
                        if(navChip) {
                            navChip.classList.add('active');
                            moveActiveBg(navChip);
                        }
                    }
                });
            }, { rootMargin: '-40% 0px -60% 0px' });

            pageSections.forEach(section => scrollObserver.observe(section));
            
            const animationObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animated-item').forEach(el => animationObserver.observe(el));
            
            // Mobile Nav Toggle
            mobileNavToggle.addEventListener('click', () => {
                mobileNavMenu.classList.toggle('open');
                mobileNavToggle.classList.toggle('open');
            });

            mobileNavMenu.addEventListener('click', () => {
                 mobileNavMenu.classList.remove('open');
                 mobileNavToggle.classList.remove('open');
            });
            
            // --- T&P Policy Tabs ---
            const policyNavItems = document.querySelectorAll('.policy-nav-item');
            const policyPages = document.querySelectorAll('.policy-page');
            policyNavItems.forEach(item => {
                item.addEventListener('click', function() {
                    const targetPageId = this.getAttribute('data-policy-page');
                    policyNavItems.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    policyPages.forEach(page => {
                        page.classList.remove('active');
                        if (page.id === targetPageId) {
                            page.classList.add('active');
                        }
                    });
                });
            });

            // --- Meet the Team Data ---
            const committeeMembers = [
                { name: 'Dr. Rajanikanth Aluvalu', role: 'Director', email: 'director@sithyd.siu.edu.in', phone: '+91 99789 67155', photo: 'https://placehold.co/200x200/d3e3fd/1967d2?text=RA', details: `<p>A visionary leader with over 22 years of experience, Prof. Aluvalu is dedicated to fostering an environment of innovation and excellence.</p>` },
                { name: 'Mr. Sai Prashanth', role: 'Head, Training & Placement Cell & Convenor', email: 'saiprashanth@sithyd.siu.edu.in', phone: '+91-7093319953', photo: 'https://placehold.co/200x200/d3e3fd/1967d2?text=SP', details: 'Mr. Prashanth is a dynamic professional dedicated to bridging the gap between academia and industry, ensuring students are well-prepared to secure rewarding careers.' },
                { name: 'Mr. Pallati Narsimhulu', role: 'Faculty Coordinator & Co - Convenor', email: 'pallatinarsimhulu@sithyd.siu.edu.in', phone: '+91 98667 77555', photo: 'https://placehold.co/200x200/d3e3fd/1967d2?text=PN', details: 'As the Faculty Coordinator, Mr. Narsimhulu plays a pivotal role in aligning academic curriculum with placement training modules and providing student mentorship.' },
                { name: 'Mr. Kondapalkula Sricharan Rao', role: 'T&P Cell Student President', email: '24070722013@sithyd.siu.edu.in', phone: '+91 86395 56167', photo: 'https://placehold.co/200x200/E8F0FE/5f6368?text=SR', details: 'Leading the student body of the T&P Cell with dedication to create more opportunities for his peers.' },
                { name: 'Ms. Mokshita VP', role: 'T&P Cell Student Vice President', email: 'mokshitavp@gmail.com', phone: '+91 83746 11566', photo: 'https://placehold.co/200x200/E8F0FE/5f6368?text=MV', details: 'Assisting in the leadership of the student placement initiatives and ensuring smooth coordination.' },
                { name: 'Mr. Sreesainadh Ancha', role: 'T&P Cell Head Training & Internships', email: 'srichakrasainadh@gmail.com', phone: '+91 96030 42639', photo: 'https://placehold.co/200x200/E8F0FE/5f6368?text=SA', details: 'Focuses on organizing training programs and securing valuable internship opportunities for students.' },
                { name: 'Ms. Harini Kummari', role: 'T&P Cell Student Coordinator', email: 'harinikummari9@gmail.com', phone: '+91 97059 55667', photo: 'https://placehold.co/200x200/E8F0FE/5f6368?text=HK', details: 'A key student coordinator, helping to manage events and communication within the T&P Cell.' }
            ];
            
            const industryAdvisors = [
                 { name: 'Ms. UmaRani Tejomurtula', role: 'Developer Productivity Specialist, Microsoft', email: 'umarani.tejomurtula@microsoft.com', phone: '+91 98668 57585', photo: 'https://placehold.co/200x200/cce5ff/0077b5?text=UT', details: 'An industry expert from Microsoft providing invaluable insights and guidance to the placement cell.' },
                { name: 'Ms. Niharika Vanka', role: 'Senior Data Analyst, Inn Collection Group, UK', email: 'vankaniharika08@gmail.com', phone: '+91 79933 94371', photo: 'https://placehold.co/200x200/cce5ff/0077b5?text=NV', details: 'An accomplished alumna and industry professional offering a global perspective on data analytics careers.' }
            ];

            const committeeGrid = document.getElementById('committee-grid-container');
            const advisorsGrid = document.getElementById('advisors-grid-container');
            const teamModal = document.getElementById('teamMemberModal');
            const teamModalCloseBtn = teamModal.querySelector('.team-modal-close');

            function createTeamCard(member) {
                const card = document.createElement('div');
                card.className = 'team-card';
                card.dataset.name = member.name;
                card.dataset.role = member.role;
                card.dataset.email = member.email;
                card.dataset.photo = member.photo;
                card.dataset.details = member.details;
                card.dataset.phone = member.phone;

                card.innerHTML = `
                    <img src="${member.photo}" alt="Photo of ${member.name}" class="team-card-photo" onerror="this.src='https://placehold.co/200x200/E8F0FE/5f6368?text=NA'">
                    <h4 class="team-card-name">${member.name}</h4>
                    <p class="team-card-role">${member.role}</p>
                    <p class="team-contact-email">${member.email}</p>
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
            }
            
            renderTeams();

            document.querySelectorAll('.team-card').forEach(card => {
                card.addEventListener('click', function() {
                    const name = this.dataset.name;
                    const role = this.dataset.role;
                    const email = this.dataset.email;
                    const photo = this.dataset.photo;
                    const details = this.dataset.details;
                    const phone = this.dataset.phone;
                    
                    teamModal.querySelector('.modal-photo').src = photo;
                    teamModal.querySelector('.modal-name').textContent = name;
                    teamModal.querySelector('.modal-role').textContent = role;
                    teamModal.querySelector('.modal-details').innerHTML = details;
                    const emailLink = teamModal.querySelector('.modal-email-link');
                    emailLink.href = `mailto:${email}`;
                    emailLink.innerHTML = `<i class="fas fa-envelope"></i> ${email}`;
                    const phoneLink = teamModal.querySelector('.modal-phone-link');
                    phoneLink.href = `tel:${phone}`;
                    phoneLink.innerHTML = `<i class="fas fa-phone"></i> ${phone}`;

                    document.body.classList.add('modal-open');
                    teamModal.classList.add('active');
                });
            });

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
            
            // --- Events Data and Rendering ---
            const upcomingEvents = [
                { month: 'AUG', day: '15', title: 'Pre-Placement Talk: TechCorp', description: 'Join the recruitment team from TechCorp to learn about their company culture and exciting career opportunities.', registrationLink: '#', actionText: 'Register Now' },
                { month: 'SEP', day: '02', title: 'Advanced Resume Building Workshop', description: 'A hands-on workshop to help you craft a compelling, professional resume that stands out to recruiters.', registrationLink: '#', actionText: 'Join Here' },
                { month: 'SEP', day: '21', title: 'Campus Recruitment Drive: Innovate Inc.', description: 'Innovate Inc. is conducting an on-campus drive for final-year students.', registrationLink: null, actionText: 'Details Coming Soon' }
            ];

            const completedEvents = [
                { month: 'JUL', day: '20', title: 'Guest Lecture: AI in Modern Industry', description: 'An insightful talk by industry experts on the role of Artificial Intelligence in today\'s tech landscape.', images: ['https://placehold.co/600x400/cccccc/ffffff?text=Event+Photo+1', 'https://placehold.co/600x400/cccccc/ffffff?text=Event+Photo+2', 'https://placehold.co/600x400/cccccc/ffffff?text=Event+Photo+3'], actionText: 'View Gallery' },
                { month: 'JUN', day: '11', title: 'Internship Fair 2025', description: 'A successful fair connecting hundreds of students with internship opportunities at leading companies.', images: ['https://placehold.co/600x400/cccccc/ffffff?text=Fair+Photo+1'], actionText: 'See Highlights' }
            ];
            
            const eventModal = document.getElementById('eventDetailsModal');
            const eventModalCloseBtn = eventModal.querySelector('.team-modal-close');

            function createEventCard(event, isCompleted = false, index) {
                const card = document.createElement('div');
                card.className = `event-card ${isCompleted ? 'completed-event' : ''}`;
                if(isCompleted) {
                    card.dataset.index = index;
                }

                let actionHtml = '';
                if(isCompleted) {
                    actionHtml = `<a href="#" class="btn">${event.actionText || 'View Details'}</a>`;
                } else {
                    if (event.registrationLink) {
                        actionHtml = `<a href="${event.registrationLink}" class="btn" target="_blank" rel="noopener noreferrer">${event.actionText || 'Register Now'}</a>`;
                    } else {
                        actionHtml = `<p class="notice">${event.actionText || 'Registration Closed'}</p>`;
                    }
                }

                card.innerHTML = `
                    <div class="event-date">
                        <span class="month">${event.month}</span>
                        <span class="day">${event.day}</span>
                    </div>
                    <div class="event-content">
                        <h3 class="event-title">${event.title}</h3>
                        <p class="event-description">${event.description}</p>
                        <div class="event-action">${actionHtml}</div>
                    </div>
                `;
                return card;
            }

            function renderEvents() {
                const upcomingGrid = document.getElementById('upcoming-events-grid');
                const completedGrid = document.getElementById('completed-events-grid');
                
                if (upcomingGrid) {
                    upcomingGrid.innerHTML = '';
                    upcomingEvents.forEach(event => upcomingGrid.appendChild(createEventCard(event, false)));
                }

                if (completedGrid) {
                    completedGrid.innerHTML = '';
                    completedEvents.forEach((event, index) => completedGrid.appendChild(createEventCard(event, true, index)));
                }
                
                document.querySelectorAll('.completed-event').forEach(card => {
                    card.addEventListener('click', function(e) {
                        e.preventDefault();
                        const index = this.dataset.index;
                        const eventData = completedEvents[index];
                        
                        eventModal.querySelector('.modal-name').textContent = eventData.title;
                        eventModal.querySelector('.modal-details').textContent = eventData.description;
                        
                        const gallery = eventModal.querySelector('#event-modal-gallery');
                        gallery.innerHTML = ''; // Clear previous images
                        eventData.images.forEach(imgUrl => {
                            const img = document.createElement('img');
                            img.src = imgUrl;
                            img.alt = `${eventData.title} gallery image`;
                            gallery.appendChild(img);
                        });

                        document.body.classList.add('modal-open');
                        eventModal.classList.add('active');
                    });
                });
            }

            renderEvents();
            
            function closeEventModal() {
                document.body.classList.remove('modal-open');
                eventModal.classList.remove('active');
            }

            if(eventModal) {
                eventModalCloseBtn.addEventListener('click', closeEventModal);
                eventModal.addEventListener('click', (e) => {
                    if (e.target === eventModal) {
                        closeEventModal();
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
        });
