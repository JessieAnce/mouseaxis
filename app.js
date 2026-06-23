/* ==========================================================================
   Mouse Axis Custom Script - SPA Router & Interactivity
   ========================================================================== */

// 1. Portfolio Projects Data List
const portfolioProjects = [
    // Brand Design (Logo Design) Category (12 items)
    {
        id: 1,
        title: "Logo design for a Corporate Gifting Company",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2022/03/Mockup_Spot_Deals_Mail.jpg",
        date: "March 11, 2022"
    },
    {
        id: 2,
        title: "ARUVI Logo",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Logo_Aruvi.jpg",
        date: "August 15, 2018"
    },
    {
        id: 3,
        title: "AMS Branding Logo",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/logo_AMS.jpg",
        date: "August 15, 2018"
    },
    {
        id: 4,
        title: "AADARA Luxury Logo",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Logo_Adara.jpg",
        date: "August 15, 2018"
    },
    {
        id: 5,
        title: "AALAN ADS Corporate Identity",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Logo_Web.jpg",
        date: "August 15, 2018"
    },
    {
        id: 6,
        title: "BALAJI ARTS Logo",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Logo_Balaji_Arts-e1534170466768.jpg",
        date: "August 13, 2018"
    },
    {
        id: 7,
        title: "ASTRA Tech Logo",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Logo_Astra.jpg",
        date: "August 13, 2018"
    },
    {
        id: 8,
        title: "ADAKARI Fashion Branding",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Adakari-e1534160623419.jpg",
        date: "August 13, 2018"
    },
    {
        id: 9,
        title: "BISMI Food Logo",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Logo_Bismi-e1534163491669.jpg",
        date: "August 13, 2018"
    },
    {
        id: 10,
        title: "Acryplast Plastics Identity",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Acryplast.jpg",
        date: "August 13, 2018"
    },
    {
        id: 11,
        title: "ANJEY Apparel Logo",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/logo-Anjey.jpg",
        date: "August 13, 2018"
    },
    {
        id: 12,
        title: "DNANAS Jewels Logo",
        category: "brand",
        categoryLabel: "Brand Design",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/logo-Dhanas.jpg",
        date: "August 13, 2018"
    },

    // Product Packaging Category (2 items)
    {
        id: 13,
        title: "Combo Herbs Packaging Design",
        category: "product",
        categoryLabel: "Product Packaging",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Combained-e1534172122397.jpg",
        date: "January 6, 2026"
    },
    {
        id: 14,
        title: "Box Container Product Design",
        category: "product",
        categoryLabel: "Product Packaging",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Bubbie_Box-e1666798019553.jpg",
        date: "October 26, 2022"
    },

    // Print Media Category (8 items)
    {
        id: 15,
        title: "Business Identity Spot Deals Flyer",
        category: "print",
        categoryLabel: "Print Media",
        image: "https://mouseaxis.com/wp-content/uploads/2022/03/Spot_Deals_CI_Mail.jpg",
        date: "January 6, 2026"
    },
    {
        id: 16,
        title: "Promotional Banner Billboard",
        category: "print",
        categoryLabel: "Print Media",
        image: "https://mouseaxis.com/wp-content/uploads/2020/02/NG_Billboard.jpg",
        date: "January 6, 2026"
    },
    {
        id: 17,
        title: "Flyer Design for Food Company",
        category: "print",
        categoryLabel: "Print Media",
        image: "https://mouseaxis.com/wp-content/uploads/2021/11/Flyer_Pamplet.jpg",
        date: "November 12, 2021"
    },
    {
        id: 18,
        title: "Premium Marriage Invitation Card",
        category: "print",
        categoryLabel: "Print Media",
        image: "https://mouseaxis.com/wp-content/uploads/2021/11/Marriage_Invitation.jpg",
        date: "November 12, 2021"
    },
    {
        id: 19,
        title: "Paper Advertisement for Daily Magazine",
        category: "print",
        categoryLabel: "Print Media",
        image: "https://mouseaxis.com/wp-content/uploads/2020/02/Vanakka_India_PaperAD.jpg",
        date: "February 29, 2020"
    },
    {
        id: 20,
        title: "Roots & Leaves Print Brochure",
        category: "print",
        categoryLabel: "Print Media",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/RootsLeaves.jpg",
        date: "August 15, 2018"
    },
    {
        id: 21,
        title: "MADURA COATS Product Flyer",
        category: "print",
        categoryLabel: "Print Media",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Flyer_Joosabs.jpg",
        date: "August 15, 2018"
    },
    {
        id: 22,
        title: "Pamphlet for Automation Company",
        category: "print",
        categoryLabel: "Print Media",
        image: "https://mouseaxis.com/wp-content/uploads/2018/08/Brand_automation_Flyer.jpg",
        date: "August 15, 2018"
    }
];

// DOM Elements
const portfolioGrid = document.getElementById('portfolio-items-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const mobileMenuToggle = document.getElementById('menu-toggle-btn');
const navMenu = document.getElementById('nav-navigation-menu');
const startProjectBtn = document.getElementById('start-project-btn');
const logoLink = document.getElementById('site-logo');
const backToTopBtn = document.getElementById('back-to-top-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Lightbox Modal DOM Elements
const lightbox = document.getElementById('portfolio-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDate = document.getElementById('lightbox-date');
const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

// State tracking
let savedProjects = JSON.parse(localStorage.getItem('mouseaxis_saved_projects')) || [];
let likedProjects = JSON.parse(localStorage.getItem('mouseaxis_liked_projects')) || [];
let activeLightboxProject = null;
let isLightTheme = localStorage.getItem('mouseaxis_theme') === 'light';
let currentFilteredProjects = [];

// Mock usernames and comment pools for pre-seeding
const mockUsernames = ['alice_design', 'creative_mind', 'brand_guru', 'pixel_perfect', 'design_lover', 'logo_master', 'sara_k', 'visual_artist', 'packaging_expert', 'print_studio'];
const mockComments = [
    'Wow, this is exceptionally clean work!',
    'The typography choice here is absolutely brilliant.',
    'Amazing color balance. Saved this to my inspo board!',
    'One of the best designs I have seen in this category.',
    'So inspiring! How long did this take to design?',
    'This branding feels so premium and modern.',
    'The packaging details are outstanding.',
    'Pure creative genius. Absolutely love the layout!',
    'Incredibly sharp flyer layout. Very professional.',
    'Clean, minimalist, and highly effective. 10/10!'
];

// Initialize project stats & comments
function initProjectMetadata() {
    portfolioProjects.forEach(project => {
        // Random likes between 45 and 280
        if (!project.likes) {
            project.likes = Math.floor(Math.random() * 235) + 45;
        }
        // Randomly seed 1 to 3 comments
        if (!project.comments) {
            project.comments = [];
            const numComments = Math.floor(Math.random() * 3) + 1;
            const shuffledUsernames = [...mockUsernames].sort(() => 0.5 - Math.random());
            const shuffledTexts = [...mockComments].sort(() => 0.5 - Math.random());
            
            for (let i = 0; i < numComments; i++) {
                project.comments.push({
                    username: shuffledUsernames[i],
                    avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${shuffledUsernames[i]}`,
                    text: shuffledTexts[i],
                    time: `${Math.floor(Math.random() * 23) + 1}h ago`
                });
            }
        }
    });
}

// 2. SPA Router Logic
function navigateToSection(targetId) {
    // Scroll page to top of the content smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Hide all active sections and remove active class from nav items
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Active state header link styling
    const activeLink = document.querySelector(`.nav-item[data-target="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Close mobile menu if active
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        document.body.classList.remove('showing-mobile-menu');
    }

    // Update URL hash without causing page jump
    history.pushState(null, null, `#${targetId}`);
}

// Nav link click event handlers
navItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        navigateToSection(target);
    });
});

// Logo Click to Home (Our Work)
logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    navigateToSection('our-work');
});

// Hero Button link to Get Service form page
startProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navigateToSection('get-service');
});

// Handle footer quick links clicks
document.querySelectorAll('.footer-links a, .footer-brand a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            navigateToSection(targetId);
        }
    });
});

// 3. Mobile Navigation Menu Toggle Handler
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.body.classList.toggle('showing-mobile-menu');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        document.body.classList.remove('showing-mobile-menu');
    }
});

// 4. Portfolio Builder & Renderer
function renderPortfolioGrid(projects) {
    currentFilteredProjects = projects;
    portfolioGrid.innerHTML = '';
    
    if (projects.length === 0) {
        portfolioGrid.innerHTML = '<div class="grid-loading"><p>No saved projects yet. Pin your favorites!</p></div>';
        return;
    }

    projects.forEach(project => {
        const isSaved = savedProjects.includes(project.id);
        const isLiked = likedProjects.includes(project.id);
        
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.setAttribute('data-id', project.id);
        
        card.innerHTML = `
            <div class="portfolio-card-img-wrap">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="portfolio-card-overlay">
                    <button class="pinterest-save-btn ${isSaved ? 'saved' : ''}" data-id="${project.id}">
                        <i class="fa-solid fa-thumbtack"></i> ${isSaved ? 'Saved' : 'Save'}
                    </button>
                    <div class="pinterest-card-actions-bottom">
                        <button class="pinterest-action-btn visit-btn" title="View Image" data-id="${project.id}">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                        <div class="pinterest-right-actions">
                            <button class="pinterest-action-btn share-btn" title="Share" data-id="${project.id}">
                                <i class="fa-solid fa-share-nodes"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolio-card-details">
                <div class="portfolio-card-footer">
                    <h3 class="portfolio-card-title" title="${project.title}">${project.title}</h3>
                    <button class="pinterest-like-btn ${isLiked ? 'liked' : ''}" data-id="${project.id}">
                        <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        <span class="pinterest-like-count">${project.likes}</span>
                    </button>
                </div>
            </div>
        `;
        
        // Card click opens Lightbox, except if actions are clicked
        card.addEventListener('click', (e) => {
            if (e.target.closest('.pinterest-save-btn') || 
                e.target.closest('.pinterest-like-btn') || 
                e.target.closest('.pinterest-action-btn')) {
                return;
            }
            openLightbox(project);
        });

        // Save Button Handler
        const saveBtn = card.querySelector('.pinterest-save-btn');
        saveBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSaveProject(project.id, saveBtn);
        });

        // Like Button Handler
        const likeBtn = card.querySelector('.pinterest-like-btn');
        likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLikeProject(project.id, likeBtn);
        });

        // Share Button Handler
        const shareBtn = card.querySelector('.share-btn');
        shareBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            copyProjectLink(project);
        });

        // Visit Button Handler
        const visitBtn = card.querySelector('.visit-btn');
        visitBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open(project.image, '_blank');
        });
        
        portfolioGrid.appendChild(card);
    });
}

// 5. Portfolio Category Filter Handler
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterVal = button.getAttribute('data-filter');
        
        portfolioGrid.style.opacity = '0';
        portfolioGrid.style.transform = 'translateY(15px)';
        portfolioGrid.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        
        setTimeout(() => {
            if (filterVal === 'all') {
                renderPortfolioGrid(portfolioProjects);
            } else if (filterVal === 'saved') {
                const saved = portfolioProjects.filter(p => savedProjects.includes(p.id));
                renderPortfolioGrid(saved);
            } else {
                const filtered = portfolioProjects.filter(p => p.category === filterVal);
                renderPortfolioGrid(filtered);
            }
            
            portfolioGrid.style.opacity = '1';
            portfolioGrid.style.transform = 'translateY(0)';
        }, 250);
    });
});

// Toggle Save Project ID
function toggleSaveProject(projectId, buttonEl) {
    const index = savedProjects.indexOf(projectId);
    let message = '';
    
    if (index === -1) {
        savedProjects.push(projectId);
        message = 'Saved to your board!';
        if (buttonEl) {
            buttonEl.classList.add('saved');
            buttonEl.innerHTML = '<i class="fa-solid fa-thumbtack"></i> Saved';
        }
    } else {
        savedProjects.splice(index, 1);
        message = 'Removed from your board.';
        if (buttonEl) {
            buttonEl.classList.remove('saved');
            buttonEl.innerHTML = '<i class="fa-solid fa-thumbtack"></i> Save';
        }
    }
    
    localStorage.setItem('mouseaxis_saved_projects', JSON.stringify(savedProjects));
    showToast(message, 'success');
    
    // Sync lightbox Save button if lightbox is currently open on this project
    if (activeLightboxProject && activeLightboxProject.id === projectId) {
        const lightboxSaveBtn = document.getElementById('lightbox-save-action-btn');
        if (lightboxSaveBtn) {
            if (index === -1) {
                lightboxSaveBtn.classList.add('saved');
                lightboxSaveBtn.querySelector('span').textContent = 'Saved';
            } else {
                lightboxSaveBtn.classList.remove('saved');
                lightboxSaveBtn.querySelector('span').textContent = 'Save';
            }
        }
    }
    
    // Update active view if on Saved tab
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    if (activeFilterBtn && activeFilterBtn.getAttribute('data-filter') === 'saved') {
        const savedList = portfolioProjects.filter(p => savedProjects.includes(p.id));
        renderPortfolioGrid(savedList);
    }
}

// Toggle Like Project ID
function toggleLikeProject(projectId, buttonEl) {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (!project) return;
    
    const index = likedProjects.indexOf(projectId);
    
    if (index === -1) {
        likedProjects.push(projectId);
        project.likes += 1;
    } else {
        likedProjects.splice(index, 1);
        project.likes -= 1;
    }
    
    localStorage.setItem('mouseaxis_liked_projects', JSON.stringify(likedProjects));
    
    // Sync all occurrences of like UI for this project
    const likeCountEls = document.querySelectorAll(`[data-id="${projectId}"] .pinterest-like-count, #lightbox-like-count`);
    const heartIconEls = document.querySelectorAll(`[data-id="${projectId}"] .pinterest-like-btn i, #lightbox-like-btn i`);
    const buttonEls = document.querySelectorAll(`[data-id="${projectId}"] .pinterest-like-btn, #lightbox-like-btn`);
    
    const isLikedNow = likedProjects.includes(projectId);
    
    buttonEls.forEach(btn => {
        if (isLikedNow) btn.classList.add('liked');
        else btn.classList.remove('liked');
    });
    
    heartIconEls.forEach(icon => {
        icon.className = isLikedNow ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    });
    
    likeCountEls.forEach(el => {
        el.textContent = project.likes;
    });
}

// Copy link to clipboard
function copyProjectLink(project) {
    // Generate a mock direct link based on current domain + hash
    const shareUrl = `${window.location.origin}${window.location.pathname}#our-work`;
    
    navigator.clipboard.writeText(shareUrl).then(() => {
        showToast('Share link copied to clipboard!', 'success');
    }).catch(err => {
        showToast('Could not copy link.', 'error');
    });
}

// Toast notification controller
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const iconClass = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-exclamation';
    toast.innerHTML = `<i class="${iconClass}"></i> ${message}`;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}

// 6. Lightbox Modal Rebuilt Controller
function openLightbox(project) {
    activeLightboxProject = project;
    
    // Set basic fields
    lightboxImg.src = project.image;
    lightboxImg.alt = project.title;
    lightboxCategory.textContent = project.categoryLabel;
    lightboxTitle.textContent = project.title;
    lightboxDate.innerHTML = `<i class="fa-regular fa-calendar-days"></i> Published: ${project.date}`;
    
    // Sync Save state in Lightbox
    const lightboxSaveBtn = document.getElementById('lightbox-save-action-btn');
    const isSaved = savedProjects.includes(project.id);
    if (isSaved) {
        lightboxSaveBtn.classList.add('saved');
        lightboxSaveBtn.querySelector('span').textContent = 'Saved';
    } else {
        lightboxSaveBtn.classList.remove('saved');
        lightboxSaveBtn.querySelector('span').textContent = 'Save';
    }
    
    // Sync Like state in Lightbox
    const lightboxLikeBtn = document.getElementById('lightbox-like-btn');
    const lightboxLikeCount = document.getElementById('lightbox-like-count');
    const isLiked = likedProjects.includes(project.id);
    lightboxLikeCount.textContent = project.likes;
    
    if (isLiked) {
        lightboxLikeBtn.classList.add('liked');
        lightboxLikeBtn.querySelector('i').className = 'fa-solid fa-heart';
    } else {
        lightboxLikeBtn.classList.remove('liked');
        lightboxLikeBtn.querySelector('i').className = 'fa-regular fa-heart';
    }
    
    // Render comments list
    renderLightboxComments(project);
    
    // Render related images grid
    renderRelatedProjects(project);
    
    // Activate modal
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Stop page scroll
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto'; // Restore page scroll
    activeLightboxProject = null;
    
    setTimeout(() => {
        lightboxImg.src = '';
    }, 300);
}

// Render Comments inside Lightbox Detail Panel
function renderLightboxComments(project) {
    const commentsList = document.getElementById('lightbox-comments-list');
    const commentCountEl = document.getElementById('lightbox-comment-count');
    if (!commentsList || !commentCountEl) return;
    
    commentsList.innerHTML = '';
    commentCountEl.textContent = project.comments.length;
    
    if (project.comments.length === 0) {
        commentsList.innerHTML = '<div class="comments-empty-state"><p>No comments yet. Be the first to share your thoughts!</p></div>';
        return;
    }
    
    project.comments.forEach(comment => {
        const item = document.createElement('div');
        item.className = 'comment-item';
        item.innerHTML = `
            <img src="${comment.avatar}" alt="${comment.username}" class="comment-avatar">
            <div class="comment-content-wrapper">
                <div class="comment-user-row">
                    <span class="comment-username">${comment.username}</span>
                    <span class="comment-time">${comment.time}</span>
                </div>
                <p class="comment-text">${comment.text}</p>
            </div>
        `;
        commentsList.appendChild(item);
    });
}

// Render Related Projects (More Like This)
function renderRelatedProjects(currentProject) {
    const moreGrid = document.getElementById('lightbox-more-grid');
    if (!moreGrid) return;
    moreGrid.innerHTML = '';
    
    const related = portfolioProjects
        .filter(p => p.category === currentProject.category && p.id !== currentProject.id)
        .slice(0, 4);
        
    if (related.length === 0) {
        moreGrid.innerHTML = '<div class="comments-empty-state" style="grid-column:1/-1;"><p>No related projects found.</p></div>';
        return;
    }
    
    related.forEach(project => {
        const item = document.createElement('div');
        item.className = 'more-like-card';
        item.innerHTML = `<img src="${project.image}" alt="${project.title}" loading="lazy">`;
        
        item.addEventListener('click', () => {
            const lightboxContent = document.querySelector('.pinterest-lightbox');
            lightboxContent.style.opacity = '0.5';
            lightboxContent.style.transform = 'scale(0.98)';
            lightboxContent.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            
            setTimeout(() => {
                openLightbox(project);
                lightboxContent.style.opacity = '1';
                lightboxContent.style.transform = 'scale(1)';
            }, 200);
        });
        
        moreGrid.appendChild(item);
    });
}

// Setup Lightbox Interactive Event Listeners
// Navigate to Prev/Next Lightbox projects
function navigateToPrevProject() {
    if (!activeLightboxProject || currentFilteredProjects.length <= 1) return;
    const currentIndex = currentFilteredProjects.findIndex(p => p.id === activeLightboxProject.id);
    if (currentIndex === -1) return;
    
    const prevIndex = (currentIndex - 1 + currentFilteredProjects.length) % currentFilteredProjects.length;
    slideLightboxContent(currentFilteredProjects[prevIndex]);
}

function navigateToNextProject() {
    if (!activeLightboxProject || currentFilteredProjects.length <= 1) return;
    const currentIndex = currentFilteredProjects.findIndex(p => p.id === activeLightboxProject.id);
    if (currentIndex === -1) return;
    
    const nextIndex = (currentIndex + 1) % currentFilteredProjects.length;
    slideLightboxContent(currentFilteredProjects[nextIndex]);
}

// Helper to switch lightbox content with a smooth transition
function slideLightboxContent(newProject) {
    const lightboxContent = document.querySelector('.pinterest-lightbox');
    if (lightboxContent) {
        lightboxContent.style.opacity = '0.5';
        lightboxContent.style.transform = 'scale(0.98)';
        lightboxContent.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        
        setTimeout(() => {
            openLightbox(newProject);
            lightboxContent.style.opacity = '1';
            lightboxContent.style.transform = 'scale(1)';
        }, 200);
    } else {
        openLightbox(newProject);
    }
}

function setupLightboxEvents() {
    const lightboxSaveBtn = document.getElementById('lightbox-save-action-btn');
    const lightboxLikeBtn = document.getElementById('lightbox-like-btn');
    const lightboxShareBtn = document.getElementById('lightbox-share-btn');
    const lightboxCommentForm = document.getElementById('lightbox-comment-form');
    const lightboxCommentInput = document.getElementById('lightbox-comment-input');
    
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');
    
    if (!lightboxSaveBtn || !lightboxLikeBtn || !lightboxShareBtn || !lightboxCommentForm) return;
    
    // Lightbox Save Action
    lightboxSaveBtn.addEventListener('click', () => {
        if (!activeLightboxProject) return;
        toggleSaveProject(activeLightboxProject.id, null);
    });
    
    // Lightbox Like Action
    lightboxLikeBtn.addEventListener('click', () => {
        if (!activeLightboxProject) return;
        toggleLikeProject(activeLightboxProject.id, null);
    });
    
    // Lightbox Share Action
    lightboxShareBtn.addEventListener('click', () => {
        if (!activeLightboxProject) return;
        copyProjectLink(activeLightboxProject);
    });
    
    // Slider Left/Right click actions
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateToPrevProject();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateToNextProject();
        });
    }
    
    // Lightbox Comment Submission
    lightboxCommentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!activeLightboxProject) return;
        
        const commentText = lightboxCommentInput.value.trim();
        if (!commentText) return;
        
        const randomSeed = Math.floor(Math.random() * 1000);
        const newComment = {
            username: 'design_explorer',
            avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=user_${randomSeed}`,
            text: commentText,
            time: 'Just now'
        };
        
        activeLightboxProject.comments.push(newComment);
        lightboxCommentInput.value = '';
        
        renderLightboxComments(activeLightboxProject);
        showToast('Comment posted successfully!', 'success');
    });
}

// Lightbox close events
lightboxCloseBtn.addEventListener('click', closeLightbox);

// Close on clicking outside lightbox container
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close modal with Escape key
// Close modal with Escape key and navigate with Left/Right keys
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        navigateToPrevProject();
    } else if (e.key === 'ArrowRight') {
        navigateToNextProject();
    }
});

// Banner Text Rotator Typing Loop
function startTextRotator() {
    const rotatorTextEl = document.getElementById('rotator-text');
    if (!rotatorTextEl) return;
    
    const words = ["BRAND IDENTITY", "PRODUCT PACKAGING", "PRINT MEDIA", "CREATIVE SOLUTIONS"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150;
    
    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            rotatorTextEl.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            delay = 60;
        } else {
            rotatorTextEl.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            delay = 120;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            delay = 2000; // Hold word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 500; // Pause before typing next word
        }
        
        setTimeout(type, delay);
    }
    
    type();
}

// Mouse Interactive Parallax in Hero banner
function initHeroParallax() {
    const heroBanner = document.getElementById('hero-banner-section');
    const shapes = document.querySelectorAll('.hero-shapes .shape');
    if (!heroBanner || shapes.length === 0) return;
    
    heroBanner.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const bannerRect = heroBanner.getBoundingClientRect();
        
        const normalizedX = ((mouseX - bannerRect.left) / bannerRect.width) * 2 - 1;
        const normalizedY = ((mouseY - bannerRect.top) / bannerRect.height) * 2 - 1;
        
        shapes.forEach(shape => {
            const speed = parseFloat(shape.getAttribute('data-speed')) || 1;
            const translateX = normalizedX * speed * 25;
            const translateY = normalizedY * speed * 25;
            shape.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
    
    // Bouncing scroll indicator click scrolls smoothly to Portfolio
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const workSection = document.getElementById('our-work');
            if (workSection) {
                workSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// 7. Scroll Header and Scroll Back-to-Top Button Handler
window.addEventListener('scroll', () => {
    // Header Scroll Class Toggle
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Scroll Back to Top Visibility Toggle
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Back to Top smooth scroll click listener
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme Manager Logic
function initTheme() {
    if (!themeToggleBtn) return;
    
    // Apply initial theme state from localStorage
    if (isLightTheme) {
        document.body.classList.add('light-mode');
        updateThemeIcon(true);
    } else {
        document.body.classList.remove('light-mode');
        updateThemeIcon(false);
    }
    
    // Theme toggle click handler
    themeToggleBtn.addEventListener('click', () => {
        isLightTheme = !isLightTheme;
        if (isLightTheme) {
            document.body.classList.add('light-mode');
            localStorage.setItem('mouseaxis_theme', 'light');
            updateThemeIcon(true);
            showToast('Appearance set to light mode.', 'success');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('mouseaxis_theme', 'dark');
            updateThemeIcon(false);
            showToast('Appearance set to dark mode.', 'success');
        }
    });
}

function updateThemeIcon(isLight) {
    const icon = themeToggleBtn.querySelector('i');
    if (!icon) return;
    if (isLight) {
        icon.className = 'fa-solid fa-moon'; // Moon icon to switch back to dark mode
    } else {
        icon.className = 'fa-solid fa-sun'; // Sun icon to switch to light mode
    }
}

// Handle initial loading routing from URL hash & startup initializers
window.addEventListener('DOMContentLoaded', () => {
    // 1. Setup stats & comments
    initProjectMetadata();
    
    // 2. Setup theme switcher
    initTheme();
    
    // 3. Setup Lightbox actions handlers
    setupLightboxEvents();
    
    // 4. Setup text typing rotator
    startTextRotator();
    
    // 5. Setup interactive hero parallax move
    initHeroParallax();

    // 6. Navigate to active section
    const hash = window.location.hash.substring(1);
    if (hash && ['our-work', 'who-we-are', 'get-service', 'logo-questionnaire'].includes(hash)) {
        navigateToSection(hash);
    } else {
        navigateToSection('our-work');
    }
    
    // 7. Generate portfolios on startup
    renderPortfolioGrid(portfolioProjects);
});
