
function createGrid(size, optionPixel) {
    const container = document.querySelector('.container');

    for (let i = 0; i < size; i++) {
        const pixel = document.createElement('DIV');
        pixel.classList.add('item', `pixel-${optionPixel}`)
        pixel.style.opacity = '1'
        pixel.addEventListener('mouseover', (e) => {
            const palette = ['#494947ff', '#35ff69ff', '#44ccffff', '#7494eaff', '#d138bfff']
            const rainbowCheck = document.querySelector('#rainbowMode')
            const shadowCheck = document.querySelector('#shadowMode')

            if (rainbowCheck.checked) {
                e.target.style.backgroundColor = palette[Math.floor(Math.random() * 5)];
            } else if (shadowCheck.checked) {
                console.log(e.target.style.opacity)
                e.target.style.opacity -= '0.1'
            } else {
                e.target.style.backgroundColor = 'black'
            }
        })

        container.appendChild(pixel);
    }
}

function cleanHTML() {
    const container = document.querySelector('.container');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

document.addEventListener('DOMContentLoaded', () => {


    const sizeInput = document.querySelector('#rangeInput');
    const size = document.querySelector('#size')

    // Grid 16x16
    createGrid(256, 1);
    sizeInput.textContent = '16x16'
    size.addEventListener('input', (e) => {
        const sizeInput = document.querySelector('#rangeInput');
        let switchSize = e.target.value;
        switch (switchSize) {
            case "1":
                cleanHTML();
                createGrid(256, 1);
                sizeInput.textContent = '16x16'
                break;
            case "2":
                cleanHTML();
                createGrid(1024, 2);
                sizeInput.textContent = '32x32'
                break;
            case "3":
                cleanHTML();
                createGrid(2304, 3);
                sizeInput.textContent = '48x48'
                break;
            case "4":
                cleanHTML();
                createGrid(4096, 4);
                sizeInput.textContent = '64x64'
                break;
            default:
                break;
        }
    })


})