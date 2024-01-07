const a = document.getElementById('nav')
const button = document.getElementById('burger')

function show() {
   if (a.style.display === 'flex' && button.style.color === 'var(--satin-sheen-gold)') {
    a.style.display = 'none'
    button.style.color = 'var(--default)'
   }
   else{
    a.style.display = 'flex'
    button.style.color = 'var(--satin-sheen-gold)'
    button.style.transition = 'ease-in-out 0.5s'
   }
    
}