
    document.addEventListener('DOMContentLoaded', function() {
      // Check if admin is logged in
      // const adminLoggedIn = localStorage.getItem('adminLoggedIn');
      // if (!adminLoggedIn || adminLoggedIn !== 'true') {
      //   window.location.href = 'admin-login.html';
      //   return;
      // }
      
      const logoutBtn = document.getElementById('logoutBtn');
      const addCampaignForm = document.getElementById('addCampaignForm');
      const campaignsList = document.getElementById('campaignsList');
      
      // Logout functionality
      logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = 'login.html';
      });
      
      // Load existing campaigns from localStorage
      loadCampaigns();
      
      // Add new campaign
      addCampaignForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const campaign = {
          id: Date.now(), // Use timestamp as a simple unique ID
          title: document.getElementById('campaignTitle').value,
          description: document.getElementById('campaignDescription').value,
          brand: document.getElementById('campaignBrand').value,
          budget: document.getElementById('campaignBudget').value,
          duration: document.getElementById('campaignDuration').value,
          status: document.getElementById('campaignStatus').value,
          date: new Date().toLocaleDateString()
        };
        
        // Save campaign to localStorage
        saveCampaign(campaign);
        
        // Reset form
        addCampaignForm.reset();
        
        // Reload campaigns
        loadCampaigns();
        
        alert('Campaign added successfully!');
      });
      
      // Function to save campaign to localStorage
      function saveCampaign(campaign) {
        let campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
        campaigns.push(campaign);
        localStorage.setItem('campaigns', JSON.stringify(campaigns));
      }
      
      // Function to load campaigns from localStorage
      function loadCampaigns() {
        const campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
        
        // Clear the campaigns list
        campaignsList.innerHTML = '';
        
        if (campaigns.length === 0) {
          campaignsList.innerHTML = '<p>No campaigns found. Add a new campaign above.</p>';
          return;
        }
        
        // Add each campaign to the list
        campaigns.forEach(campaign => {
          const campaignItem = document.createElement('div');
          campaignItem.className = 'campaign-item';
          campaignItem.dataset.id = campaign.id;
          
          campaignItem.innerHTML = `
            <div class="campaign-info">
              <h3>${campaign.title}</h3>
              <p>${campaign.brand} | Budget: $${campaign.budget} | Status: ${campaign.status}</p>
            </div>
            <div class="action-btns">
              <button class="view-btn" onclick="viewCampaign(${campaign.id})">View</button>
              <button class="edit-btn" onclick="editCampaign(${campaign.id})">Edit</button>
              <button class="delete-btn" onclick="deleteCampaign(${campaign.id})">Delete</button>
            </div>
          `;
          
          campaignsList.appendChild(campaignItem);
        });
      }
    });
    
    // Function to delete a campaign
    function deleteCampaign(id) {
      if (confirm('Are you sure you want to delete this campaign?')) {
        let campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
        campaigns = campaigns.filter(campaign => campaign.id !== id);
        localStorage.setItem('campaigns', JSON.stringify(campaigns));
        
        // Reload campaigns
        document.getElementById('campaignsList').innerHTML = '';
        loadCampaigns();
      }
    }
    
    // Function to view a campaign (redirect to campaign details page)
    function viewCampaign(id) {
      window.location.href = `paneerposting-campaigns.html?id=${id}`;
    }
    
    // Function to edit a campaign (simplified for this example)
    function editCampaign(id) {
      let campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
      const campaign = campaigns.find(camp => camp.id === id);
      
      if (campaign) {
        // Fill form with campaign data
        document.getElementById('campaignTitle').value = campaign.title;
        document.getElementById('campaignDescription').value = campaign.description;
        document.getElementById('campaignBrand').value = campaign.brand;
        document.getElementById('campaignBudget').value = campaign.budget;
        document.getElementById('campaignDuration').value = campaign.duration;
        document.getElementById('campaignStatus').value = campaign.status;
        
        // Delete the campaign
        deleteCampaign(id);
        
        // Scroll to form
        document.querySelector('.card').scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Function to load campaigns (defined outside DOMContentLoaded to be globally accessible)
    function loadCampaigns() {
      const campaignsList = document.getElementById('campaignsList');
      const campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
      
      // Clear the campaigns list
      campaignsList.innerHTML = '';
      
      if (campaigns.length === 0) {
        campaignsList.innerHTML = '<p>No campaigns found. Add a new campaign above.</p>';
        return;
      }
      
      // Add each campaign to the list
      campaigns.forEach(campaign => {
        const campaignItem = document.createElement('div');
        campaignItem.className = 'campaign-item';
        campaignItem.dataset.id = campaign.id;
        
        campaignItem.innerHTML = `
          <div class="campaign-info">
            <h3>${campaign.title}</h3>
            <p>${campaign.brand} | Budget: $${campaign.budget} | Status: ${campaign.status}</p>
          </div>
          <div class="action-btns">
            <button class="view-btn" onclick="viewCampaign(${campaign.id})">View</button>
            <button class="edit-btn" onclick="editCampaign(${campaign.id})">Edit</button>
            <button class="delete-btn" onclick="deleteCampaign(${campaign.id})">Delete</button>
          </div>
        `;
        
        campaignsList.appendChild(campaignItem);
      });
    }
 