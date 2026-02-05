document.addEventListener('DOMContentLoaded', () => {
    const getRecommendationsBtn = document.getElementById('getRecommendations');
    const startDateInput = document.getElementById('startDate');
    const durationSelect = document.getElementById('duration');
    const timeOfDaySelect = document.getElementById('timeOfDay');
    const travelPreferencesInput = document.getElementById('travelPreferences');
    const recommendationsOutput = document.getElementById('recommendationsOutput');

    getRecommendationsBtn.addEventListener('click', () => {
        const startDate = startDateInput.value;
        const duration = durationSelect.value;
        const timeOfDay = timeOfDaySelect.value;
        const preferences = travelPreferencesInput.value.toLowerCase();

        let recommendations = [];

        // Basic rule-based recommendations for Korea
        if (preferences.includes('historical') || preferences.includes('history')) {
            recommendations.push('Gyeongbokgung Palace (Seoul)');
            recommendations.push('Changdeokgung Palace and Huwon (Secret Garden) (Seoul)');
            recommendations.push('Jongmyo Shrine (Seoul)');
        }
        if (preferences.includes('food') || preferences.includes('local cuisine')) {
            recommendations.push('Myeongdong Street Food (Seoul)');
            recommendations.push('Gwangjang Market (Seoul)');
            recommendations.push('Busan Jagalchi Fish Market (Busan)');
        }
        if (preferences.includes('shopping')) {
            recommendations.push('Myeongdong Shopping Street (Seoul)');
            recommendations.push('Dongdaemun Design Plaza (DDP) (Seoul)');
            recommendations.push('Hongdae (Seoul)');
        }
        if (preferences.includes('nature') || preferences.includes('scenic')) {
            recommendations.push('Namsan Seoul Tower (Seoul)');
            recommendations.push('Jeju Island (nature, beaches)');
            recommendations.push('Seoraksan National Park (mountains)');
        }
        if (preferences.includes('nightlife') || preferences.includes('party')) {
            recommendations.push('Hongdae (Seoul)');
            recommendations.push('Gangnam (Seoul)');
        }
        if (preferences.includes('modern') || preferences.includes('city')) {
            recommendations.push('Gangnam District (Seoul)');
            recommendations.push('Lotte World Tower (Seoul)');
        }
        if (preferences.includes('relax') || preferences.includes('spa')) {
            recommendations.push('Jjimjilbang (Korean Spa) experience');
            recommendations.push('Bukchon Hanok Village (traditional atmosphere, relaxation)');
        }

        // Default recommendations if no specific preferences match
        if (recommendations.length === 0) {
            recommendations.push('Explore Seoul: Visit popular districts like Myeongdong, Hongdae, and Gangnam.');
            recommendations.push('Try Korean BBQ and street food.');
            recommendations.push('Consider a day trip to Nami Island or Petite France.');
            recommendations.push('Experience a traditional Korean Hanok Village.');
        }

        // Format output
        let outputHtml = '<ul>';
        recommendations.forEach(rec => {
            outputHtml += `<li>${rec}</li>`;
        });
        outputHtml += '</ul>';

        // Optionally, display selected duration and time for testing
        // outputHtml += `<p>Selected Duration: ${duration} days</p>`;
        // outputHtml += `<p>Preferred Time: ${timeOfDay}</p>`;

        recommendationsOutput.innerHTML = outputHtml;
    });

    // TODO List functionality
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    // Function to add a new todo item
    const addTodoItem = () => {
        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'todo-item'; // Add a class for styling

            const textSpan = document.createElement('span');
            textSpan.textContent = todoText;
            textSpan.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });

            listItem.appendChild(textSpan);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);

            todoInput.value = ''; // Clear input field
        }
    };

    // Event listener for adding a todo
    addTodoBtn.addEventListener('click', addTodoItem);

    // Allow adding todo with Enter key
    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTodoItem();
        }
    });
});
