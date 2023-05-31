// Função para criar o calendário
function createCalendar() {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();

    // Exibir o mês atual
    const monthElement = document.createElement('div');
    monthElement.classList.add('month');
    monthElement.textContent = `${month} ${year}`;
    calendar.appendChild(monthElement);

    // Exibir os dias da semana
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < daysOfWeek.length; i++) {
        const dayOfWeek = document.createElement('div');
        dayOfWeek.classList.add('cell');
        dayOfWeek.textContent = daysOfWeek[i];
        calendar.appendChild(dayOfWeek);
    }

    // Exibir os números dos dias
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.classList.add('cell');
        day.textContent = i;
        calendar.appendChild(day);
    }
}

// Chamar a função para criar o calendário
createCalendar();
