window.addEventListener('resize', mudarTela)
    function mudarTela() {
        if (window.innerWidth >= 600) {
            document.querySelector('menu').style.display = 'flex'
        } else {
            document.querySelector('menu').style.display = 'none'
        }
    }
document.getElementById('botao').addEventListener('click', abrir)
function abrir() {
    var menu = document.querySelector('menu')
    var displayAtual = window.getComputedStyle(menu).display
    menu.style.display = displayAtual =='none' ? 'flex' : 'none'
}