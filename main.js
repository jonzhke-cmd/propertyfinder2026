document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        {
            name: 'Orchard Residences',
            district: 'D09',
            price: 5000000,
            bedrooms: 4,
            image: 'https://via.placeholder.com/300x200.png?text=Orchard+Residences+Luxury',
            floorPlan: 'https://via.placeholder.com/600x400.png?text=Orchard+Residences+Floor+Plan',
            goodBuyVotes: 0,
            notGoodBuyVotes: 0,
            tenure: 'Freehold',
            developer: 'Developer A'
        },
        {
            name: 'Marina Bay Suites',
            district: 'D01',
            price: 4500000,
            bedrooms: 3,
            image: 'https://via.placeholder.com/300x200.png?text=Marina+Bay+Waterfront',
            floorPlan: 'https://via.placeholder.com/600x400.png?text=Marina+Bay+Suites+Floor+Plan',
            goodBuyVotes: 0,
            notGoodBuyVotes: 0,
            tenure: 'Leasehold 99 years',
            developer: 'Developer B'
        },
        {
            name: 'The Sail @ Marina Bay',
            district: 'D01',
            price: 2500000,
            bedrooms: 2,
            image: 'https://via.placeholder.com/300x200.png?text=The+Sail+Skyline+View',
            floorPlan: 'https://via.placeholder.com/600x400.png?text=The+Sail+Floor+Plan',
            goodBuyVotes: 0,
            notGoodBuyVotes: 0,
            tenure: 'Leasehold 99 years',
            developer: 'Developer C'
        },
        {
            name: 'Reflections at Keppel Bay',
            district: 'D04',
            price: 3500000,
            bedrooms: 3,
            image: 'https://via.placeholder.com/300x200.png?text=Keppel+Bay+Architecture',
            floorPlan: 'https://via.placeholder.com/600x400.png?text=Reflections+Floor+Plan',
            goodBuyVotes: 0,
            notGoodBuyVotes: 0,
            tenure: 'Freehold',
            developer: 'Developer D'
        },
        {
            name: 'Skyline @ Orchard Boulevard',
            district: 'D09',
            price: 6000000,
            bedrooms: 4,
            image: 'https://via.placeholder.com/300x200.png?text=Orchard+Boulevard+Highrise',
            floorPlan: 'https://via.placeholder.com/600x400.png?text=Skyline+Floor+Plan',
            goodBuyVotes: 0,
            notGoodBuyVotes: 0,
            tenure: 'Freehold',
            developer: 'Developer E'
        },
        {
            name: 'The Interlace',
            district: 'D04',
            price: 1800000,
            bedrooms: 2,
            image: 'https://via.placeholder.com/300x200.png?text=The+Interlace+Unique',
            floorPlan: 'https://via.placeholder.com/600x400.png?text=The+Interlace+Floor+Plan',
            goodBuyVotes: 0,
            notGoodBuyVotes: 0,
            tenure: 'Leasehold 99 years',
            developer: 'Developer F'
        },
        {
            name: 'd\'Leedon',
            district: 'D10',
            price: 2200000,
            bedrooms: 3,
            image: 'https://via.placeholder.com/300x200.png?text=d\'Leedon+Modern',
            floorPlan: 'https://via.placeholder.com/600x400.png?text=d\'Leedon+Floor+Plan',
            goodBuyVotes: 0,
            notGoodBuyVotes: 0,
            tenure: 'Freehold',
            developer: 'Developer G'
        },
        {
            name: 'Corals at Keppel Bay',
            district: 'D04',
            price: 2800000,
            bedrooms: 2,
            image: 'https://via.placeholder.com/300x200.png?text=Corals+Keppel+Waterfront',
            floorPlan: 'https://via.placeholder.com/600x400.png?text=Corals+Floor+Plan',
            goodBuyVotes: 0,
            notGoodBuyVotes: 0,
            tenure: 'Leasehold 99 years',
            developer: 'Developer H'
        },
        {
            name: 'Guoco Tower',
            district: 'D02',
            price: 3200000,
            bedrooms: 1,
            image: 'https://via.placeholder.com/300x200.png?text=Guoco+Tower+Cityscape',
            floorPlan: 'https://via.placeholder.com/600x400.png?text=Guoco+Tower+Floor+Plan',
            goodBuyVotes: 0,
            notGoodBuyVotes: 0,
            tenure: 'Freehold',
            developer: 'Developer I'
        },
        {
            name: 'Wallich Residence',
            district: 'D02',
            price: 8000000,
            bedrooms: 5,
            image: 'https://via.placeholder.com/300x200.png?text=Wallich+Residence+Penthouse',
            floorPlan: 'https://via.placeholder.com/600x400.png?text=Wallich+Residence+Floor+Plan',
            goodBuyVotes: 0,
            notGoodBuyVotes: 0,
            tenure: 'Freehold',
            developer: 'Developer J'
        }
    ];

    const propertyListings = document.getElementById('property-listings');
    const searchInput = document.getElementById('search-input');
    const priceRangeSelect = document.getElementById('price-range-select');
    const bedroomsSelect = document.getElementById('bedrooms-select');

    // Dark/Light Mode Elements
    const modeToggle = document.getElementById('mode-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Sign-in Modal Elements
    const showSigninModalBtn = document.getElementById('show-signin-modal-btn');
    const signinModal = document.getElementById('signin-modal');
    const closeModalBtn = signinModal.querySelector('.close-button');
    const signinForm = document.getElementById('signin-form');
    const otpForm = document.getElementById('otp-form');
    const signinNameInput = document.getElementById('signin-name');
    const signinEmailInput = document.getElementById('signin-email');
    const requestOtpBtn = document.getElementById('request-otp-btn');
    const otpInput = document.getElementById('otp-input');
    const activateBtn = document.getElementById('activate-btn');
    const signinMessage = document.getElementById('signin-message');
    const otpMessage = document.getElementById('otp-message');
    const transactionsSection = document.querySelector('.transactions-section'); // Get the transactions section

    let isSignedIn = localStorage.getItem('isSignedIn') === 'true'; // Check local storage for sign-in status
    let mockOtp = '123456'; // Mock OTP for demonstration

    // Function to set the theme
    function setTheme(isDarkMode) {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            document.body.classList.remove('dark-mode');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Check for saved theme preference on load
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        setTheme(true);
    } else {
        setTheme(false);
    }

    // Event listener for mode toggle button
    modeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        setTheme(!isDarkMode);
    });

    // Modal functions
    function showModal() {
        signinModal.style.display = 'block';
    }

    function hideModal() {
        signinModal.style.display = 'none';
        signinMessage.textContent = '';
        otpMessage.textContent = '';
        // Reset forms
        signinForm.style.display = 'block';
        otpForm.style.display = 'none';
        signinNameInput.value = '';
        signinEmailInput.value = '';
        otpInput.value = '';
    }

    // Helper function to get vote results display string
    function getVoteResultsDisplay(property) {
        const totalVotes = property.goodBuyVotes + property.notGoodBuyVotes;
        if (totalVotes === 0) {
            return '<div class="vote-meter-container">Be the first to vote!</div>';
        }
        const goodBuyPercentage = totalVotes === 0 ? 0 : ((property.goodBuyVotes / totalVotes) * 100);
        const notGoodBuyPercentage = totalVotes === 0 ? 0 : ((property.notGoodBuyVotes / totalVotes) * 100);

        return `
            <div class="vote-meter-container">
                <div class="vote-meter-bar">
                    <div class="vote-meter-fill" style="width: ${goodBuyPercentage.toFixed(0)}%;"></div>
                </div>
                <div class="vote-meter-labels">
                    <span>Good: ${goodBuyPercentage.toFixed(0)}%</span>
                    <span>Not Good: ${notGoodBuyPercentage.toFixed(0)}%</span>
                </div>
            </div>
        `;
    }

    function renderProperties(filteredProperties) {
        propertyListings.innerHTML = '';
        filteredProperties.forEach(property => {
            const propertyCard = `
                <div class="property-card" data-property-name="${property.name}">
                    <img src="${property.image}" alt="${property.name}">
                    <div class="property-details">
                        <h2>${property.name}</h2>
                        <p><strong>District:</strong> ${property.district}</p>
                        <p><strong>Price:</strong> S$${property.price.toLocaleString()}</p>
                        <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
                        <p><strong>Tenure:</strong> ${property.tenure}</p>
                        <p><strong>Developer:</strong> ${property.developer}</p>
                        <a href="${property.floorPlan}" download="${property.name.replace(/\s/g, '_')}_FloorPlan.png" class="download-button">Download Floor Plan</a>
                        <button class="show-project-transactions-btn modal-button" data-property="${property.name}">Show Recent Transactions</button>
                        <div class="voting-section">
                            <h3>Is it a Good Buy?</h3>
                            <button class="vote-button good-buy" data-vote="good" data-property="${property.name}">Good Buy</button>
                            <button class="vote-button not-good-buy" data-vote="not-good" data-property="${property.name}">Not a Good Buy</button>
                            <div class="vote-results" id="vote-results-${property.name.replace(/\s/g, '-')}" style="margin-top: 10px;">
                                ${getVoteResultsDisplay(property)}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            propertyListings.innerHTML += propertyCard;
        });
    }

    function filterProperties() {
        let filteredProperties = properties;

        // Filter by search input
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredProperties = filteredProperties.filter(property =>
                property.name.toLowerCase().includes(searchTerm) ||
                property.district.toLowerCase().includes(searchTerm)
            );
        }

        // Filter by price range
        const priceRange = priceRangeSelect.value;
        if (priceRange) {
            const [minPrice, maxPrice] = priceRange.split('-');
            filteredProperties = filteredProperties.filter(property => {
                if (maxPrice) {
                    return property.price >= parseInt(minPrice) && property.price <= parseInt(maxPrice);
                } else {
                    return property.price >= parseInt(minPrice);
                }
            });
        }

        // Filter by bedrooms
        const bedrooms = bedroomsSelect.value;
        if (bedrooms) {
             if (bedrooms === '4') {
                filteredProperties = filteredProperties.filter(property => property.bedrooms >= 4);
            } else {
                filteredProperties = filteredProperties.filter(property => property.bedrooms === parseInt(bedrooms));
            }
        }

        renderProperties(filteredProperties);
    }

    searchInput.addEventListener('input', filterProperties);
    priceRangeSelect.addEventListener('change', filterProperties);
    bedroomsSelect.addEventListener('change', filterProperties);

    // Function to handle voting
    function handleVote(propertyName, voteType) {
        const property = properties.find(p => p.name === propertyName);
        if (property) {
            if (voteType === 'good') {
                property.goodBuyVotes++;
            } else if (voteType === 'not-good') {
                property.notGoodBuyVotes++;
            }
            // Update the display for this specific property
            const voteResultsElement = document.getElementById(`vote-results-${propertyName.replace(/\s/g, '-')}`);
            if (voteResultsElement) {
                voteResultsElement.innerHTML = getVoteResultsDisplay(property);
            }
        }
    }

    // Event listener for voting buttons using event delegation
    propertyListings.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('vote-button')) {
            const propertyName = target.dataset.property;
            const voteType = target.dataset.vote;
            handleVote(propertyName, voteType);
        } else if (target.classList.contains('show-project-transactions-btn')) {
            if (!isSignedIn) {
                showModal();
            } else {
                const propertyName = target.dataset.property;
                const projectTransactions = transactions.filter(t => t.propertyName === propertyName);
                renderTransactions(projectTransactions);
            }
        }
    });

    // Initial render
    renderProperties(properties);

    // Mock Transaction Data
    const transactions = [
        {
            name: 'The Interlace',
            date: '2026-01-15',
            price: 1750000,
            propertyName: 'The Interlace'
        },
        {
            name: 'Orchard Residences Sale',
            date: '2026-01-10',
            price: 4900000,
            propertyName: 'Orchard Residences'
        },
        {
            name: 'Marina Bay Suites Sale',
            date: '2026-01-05',
            price: 4450000,
            propertyName: 'Marina Bay Suites'
        },
        {
            name: 'Reflections at Keppel Bay Sale',
            date: '2025-12-28',
            price: 3400000,
            propertyName: 'Reflections at Keppel Bay'
        },
        {
            name: 'd\'Leedon Rental',
            date: '2025-12-20',
            price: 2150000,
            propertyName: 'd\'Leedon'
        }
    ];

    const transactionsList = document.getElementById('transactions-list');

    function renderTransactions(transactionsToRender = transactions) { // Accept optional argument
        transactionsList.innerHTML = '';
        // Only render transactions if the user is signed in
        if (!isSignedIn) {
            transactionsSection.style.display = 'none';
            // Optionally, display a message within the main content area or handle it differently
            return;
        } else {
            transactionsSection.style.display = 'block'; // Show the section if signed in
        }

        if (transactionsToRender.length === 0) {
            transactionsList.innerHTML = '<p>No transactions found for this property.</p>';
            return;
        }

        transactionsToRender.forEach(transaction => {
            const transactionItem = `
                <div class="transaction-item">
                    <h3>${transaction.name}</h3>
                    <p><strong>Date:</strong> ${transaction.date}</p>
                    <p><strong>Transacted Price:</strong> S$${transaction.price.toLocaleString()}</p>
                </div>
            `;
            transactionsList.innerHTML += transactionItem;
        });
    }

    renderTransactions();

    // Event Listeners for Sign-in Modal
    showSigninModalBtn.addEventListener('click', showModal);
    closeModalBtn.addEventListener('click', hideModal);
    window.addEventListener('click', (event) => {
        if (event.target === signinModal) {
            hideModal();
        }
    });

    requestOtpBtn.addEventListener('click', () => {
        const name = signinNameInput.value.trim();
        const email = signinEmailInput.value.trim();

        if (!name || !email) {
            signinMessage.textContent = 'Please enter your name and email.';
            signinMessage.style.color = 'red';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            signinMessage.textContent = 'Please enter a valid email address.';
            signinMessage.style.color = 'red';
            return;
        }

        signinMessage.textContent = `OTP sent to ${email}. Check your inbox. (Mock OTP: ${mockOtp})`;
        signinMessage.style.color = 'green';
        signinForm.style.display = 'none';
        otpForm.style.display = 'block';
    });

    activateBtn.addEventListener('click', () => {
        const otp = otpInput.value.trim();
        if (otp === mockOtp) {
            isSignedIn = true;
            localStorage.setItem('isSignedIn', 'true');
            otpMessage.textContent = 'Account activated successfully!';
            otpMessage.style.color = 'green';
            hideModal();
            renderTransactions(); // Re-render transactions section after sign-in
        } else {
            otpMessage.textContent = 'Invalid OTP. Please try again.';
            otpMessage.style.color = 'red';
        }
    });

    // Initial render of transactions based on sign-in status
    renderTransactions();
});


