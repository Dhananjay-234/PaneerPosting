
// DOM Elements
const modal = document.getElementById('applicationModal');
const closeBtn = document.querySelector('.close-btn');
const campaignNameElem = document.getElementById('campaignName');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const instagramForm = document.getElementById('instagramForm');
const videoLinkForm = document.getElementById('videoLinkForm');
const closeModalBtn = document.getElementById('closeModalBtn');
const campaignsContainer = document.getElementById('campaigns-container');

// User data object to store inputs
let userData = {
    campaign: '',
    instagramLink: '',
    videoLink: ''
};

// Function to load campaigns from localStorage
function loadCampaigns() {
    const campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
    campaignsContainer.innerHTML = '';
    
    // If no campaigns found, display a message
    if (campaigns.length === 0) {
        campaignsContainer.innerHTML = '<div class="no-campaigns">No campaigns available at the moment. Please check back later.</div>';
        return;
    }
    
    // Only display active campaigns
    const activeCampaigns = campaigns.filter(campaign => campaign.status === 'active');
    
    if (activeCampaigns.length === 0) {
        campaignsContainer.innerHTML = '<div class="no-campaigns">No active campaigns available at the moment. Please check back later.</div>';
        return;
    }
    
    // Create campaign items
    activeCampaigns.forEach((campaign, index) => {
        // Create image index (cycling through 1-4)
        const imageIndex = (index % 4) + 1;
        
        const campaignElement = document.createElement('div');
        campaignElement.className = 'campaign-item';
        
        campaignElement.innerHTML = `
            <div class="campaign-image" style="background-image: url('images/camp${imageIndex}.png')"></div>
            <div class="campaign-content">
                <div>
                    <div class="campaign-tag">${campaign.brand} Promotion</div>
                    <h2 class="campaign-title">${campaign.title}</h2>
                </div>
                <button class="apply-btn" data-campaign="${campaign.title}">APPLY</button>
            </div>
        `;
        
        campaignsContainer.appendChild(campaignElement);
    });
    
    // Add event listeners to apply buttons
    attachApplyButtonListeners();
}

// Attach event listeners to apply buttons
function attachApplyButtonListeners() {
    const applyBtns = document.querySelectorAll('.apply-btn');
    
    applyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            userData.campaign = btn.getAttribute('data-campaign');
            campaignNameElem.textContent = userData.campaign;
            
            // Show step 1 and hide others
            step1.classList.add('active');
            step2.classList.remove('active');
            step3.classList.remove('active');
            
            modal.style.display = 'flex';
        });
    });
}

// Close modal when clicking the X button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle Instagram form submission
instagramForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userData.instagramLink = document.getElementById('instagramLink').value;
    
    // Move to step 2
    step1.classList.remove('active');
    step2.classList.add('active');
    
    // Store user data in localStorage
    localStorage.setItem('paneerPostingUserData', JSON.stringify(userData));
});

// Handle Video Link form submission
videoLinkForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userData.videoLink = document.getElementById('videoLink').value;
    
    // Move to step 3
    step2.classList.remove('active');
    step3.classList.add('active');
    
    // Update stored data
    localStorage.setItem('paneerPostingUserData', JSON.stringify(userData));
});

// Close modal on final button click
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Check if user has previously applied data
window.addEventListener('DOMContentLoaded', () => {
    // Load campaigns
    loadCampaigns();
    
    const savedData = localStorage.getItem('paneerPostingUserData');
    if (savedData) {
        userData = JSON.parse(savedData);
        
        // If we have saved data, pre-fill form fields
        if (userData.instagramLink) {
            document.getElementById('instagramLink').value = userData.instagramLink;
        }
        
        if (userData.videoLink) {
            document.getElementById('videoLink').value = userData.videoLink;
        }
    }
});
