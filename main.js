document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        {
            name: 'Orchard Residences',
            district: 'D09',
            price: 5000000,
            bedrooms: 4,
            image: 'https://via.placeholder.com/300x200.png?text=Orchard+Residences+Luxury'
        },
        {
            name: 'Marina Bay Suites',
            district: 'D01',
            price: 4500000,
            bedrooms: 3,
            image: 'https://via.placeholder.com/300x200.png?text=Marina+Bay+Waterfront'
        },
        {
            name: 'The Sail @ Marina Bay',
            district: 'D01',
            price: 2500000,
            bedrooms: 2,
            image: 'https://via.placeholder.com/300x200.png?text=The+Sail+Skyline+View'
        },
        {
            name: 'Reflections at Keppel Bay',
            district: 'D04',
            price: 3500000,
            bedrooms: 3,
            image: 'https://via.placeholder.com/300x200.png?text=Keppel+Bay+Architecture'
        },
        {
            name: 'Skyline @ Orchard Boulevard',
            district: 'D09',
            price: 6000000,
            bedrooms: 4,
            image: 'https://via.placeholder.com/300x200.png?text=Orchard+Boulevard+Highrise'
        },
        {
            name: 'The Interlace',
            district: 'D04',
            price: 1800000,
            bedrooms: 2,
            image: 'https://via.placeholder.com/300x200.png?text=The+Interlace+Unique'
        },
        {
            name: 'd\'Leedon',
            district: 'D10',
            price: 2200000,
            bedrooms: 3,
            image: 'https://via.placeholder.com/300x200.png?text=d\'Leedon+Modern'
        },
        {
            name: 'Corals at Keppel Bay',
            district: 'D04',
            price: 2800000,
            bedrooms: 2,
            image: 'https://via.placeholder.com/300x200.png?text=Corals+Keppel+Waterfront'
        },
        {
            name: 'Guoco Tower',
            district: 'D02',
            price: 3200000,
            bedrooms: 1,
            image: 'https://via.placeholder.com/300x200.png?text=Guoco+Tower+Cityscape'
        },
        {
            name: 'Wallich Residence',
            district: 'D02',
            price: 8000000,
            bedrooms: 5,
            image: 'https://via.placeholder.com/300x200.png?text=Wallich+Residence+Penthouse'
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

    function renderProperties(filteredProperties) {
        propertyListings.innerHTML = '';
        filteredProperties.forEach(property => {
            const propertyCard = `
                <div class="property-card">
                    <img src="${property.image}" alt="${property.name}">
                    <div class="property-details">
                        <h2>${property.name}</h2>
                        <p><strong>District:</strong> ${property.district}</p>
                        <p><strong>Price:</strong> S$${property.price.toLocaleString()}</p>
                        <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
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
