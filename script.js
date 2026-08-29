const pixCode = document.getElementById('pixCode').value;

QRCode.toCanvas(document.getElementById('qrcode'), pixCode, {
    width: 300,
    margin: 1,
    color: {
        dark: '#3a2c3d',
        light: '#ffffff'
    }
}, function (error) {
    if (error) {
        console.error(error);
    }
});

const copyBtn = document.getElementById('copyBtn');
const copyMsg = document.getElementById('copyMsg');
const pixInput = document.getElementById('pixCode');

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(pixInput.value);
        copyMsg.textContent = 'Copiado! Agora é só colar no seu app do banco 💸';
    } catch (err) {
        pixInput.select();
        copyMsg.textContent = 'Selecionamos o código pra você, agora copie com Ctrl+C 😉';
    }

    setTimeout(() => {
        copyMsg.textContent = '';
    }, 4000);
});

document.querySelectorAll('.pix-list-copy button').forEach(button => {

    button.addEventListener('click', async () => {

        const input = button.previousElementSibling;
        const msg = button.parentElement.nextElementSibling;

        try {
            await navigator.clipboard.writeText(input.value);

            msg.textContent = 'Copiado! Agora é só colar no seu app do banco 💸';

        } catch (err) {

            input.select();

            msg.textContent = 'Selecionamos o código pra você, agora copie com Ctrl+C 😉';
        }

        setTimeout(() => {
            msg.textContent = '';
        }, 4000);

    });

});