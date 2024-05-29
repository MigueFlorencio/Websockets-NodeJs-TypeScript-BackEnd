

let spanNewTicket = document.querySelector('#lbl-new-ticket');
let button = document.querySelector('button');

async function ticketsNumber() {

    try {
        const response = await fetch('http://localhost:3000/api/ticket/last');
        const data = await response.json();
        drawScreen(data);
    } catch (error) {
        return { error }
    }
}

function drawScreen(text) {
    spanNewTicket.textContent = text + '';
}

button.addEventListener('click', async () => {

    try {
        const resp = await fetch('http://localhost:3000/api/ticket', { method: 'POST' });
        const data = await resp.json();
        
        drawScreen(data.number)
    } catch (error) {
        return { error }
    }
    
});

ticketsNumber();