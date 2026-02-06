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
        }
    });

    // Initial render
    renderProperties(properties);

    // Mock Transaction Data
    const transactions = [
        {
            name: 'The Interlace',
            date: '2026-01-15',
            price: 1750000
        },
        {
            name: 'Orchard Residences',
            date: '2026-01-10',
            price: 4900000
        },
        {
            name: 'Marina Bay Suites',
            date: '2026-01-05',
            price: 4450000
        },
        {
            name: 'Reflections at Keppel Bay',
            date: '2025-12-28',
            price: 3400000
        },
        {
            name: 'd\'Leedon',
            date: '2025-12-20',
            price: 2150000
        }
    ];

    const transactionsList = document.getElementById('transactions-list');

    function renderTransactions() {
        transactionsList.innerHTML = '';
        transactions.forEach(transaction => {
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
});


