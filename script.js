const panels = [
    { image: './img/img1.jpg', text: 'Texto do Painel 1' },
    { image: './img/img2.jpg', text: 'Texto do Painel 2' },
     { image: './img/img3.jpg', text: 'Texto do Painel 3' },
    { image: './img/img4.jpg', text: 'Texto do Painel 4' },
     { image: './img/img5.jpg', text: 'Texto do Painel 5' },
    { image: './img/img6.jpg', text: 'Texto do Painel 6' },
     { image: './img/img7.jpg', text: 'Texto do Painel 7' },
    { image: './img/img8.jpg', text: 'Texto do Painel 8' },
    { image: './img/img9.jpg', text: 'Texto do Painel 9' },
     { image: './img/img10.jpg', text: 'Texto do Painel 10' },
    { image: './img/img11.jpg', text: 'Texto do Painel 11' },
     { image: './img/img12.jpg', text: 'Texto do Painel 12' },
    
];

let currentPanelIndex = 0;
const comicPanel = document.getElementById('comic-panel');
const dialog = document.getElementById('dialog');

function showPanel(index) {
    const panel = panels[index];
    
    // Animação de desvanecimento
    gsap.to(comicPanel, { duration: 0.5, opacity: 0, onComplete: () => {
        comicPanel.innerHTML = `<img src="${panel.image}" alt="Painel ${index + 1}">`;
        dialog.innerHTML = `<p>${panel.text}</p>`;
        
        // Animação de aparecimento
        gsap.to(comicPanel, { duration: 0.5, opacity: 1 });
    }});
}

showPanel(currentPanelIndex);

document.getElementById('next-button').addEventListener('click', () => {
    currentPanelIndex++;
    if (currentPanelIndex >= panels.length) {
        currentPanelIndex = 0;
    }
    showPanel(currentPanelIndex);
});

document.getElementById('prev-button').addEventListener('click', () => {
    currentPanelIndex--;
    if (currentPanelIndex < 0) {
        currentPanelIndex = panels.length - 1;
    }
    showPanel(currentPanelIndex);
});