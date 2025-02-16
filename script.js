// ページ遷移時のローディング表示
document.addEventListener("DOMContentLoaded", () => {
    const loadingElement = document.getElementById("loading");
  
    // ページ読み込み中はローディングを表示
    window.addEventListener("beforeunload", () => {
      loadingElement.style.display = "block";
    });
  
    // ページロード後にローディングを非表示
    setTimeout(() => {
      loadingElement.style.display = "none";
    }, 500);
  });
  
  function toggleMenu() {
    const menu = document.querySelector('nav ul');
    const menuIcon = document.querySelector('.menu-icon');
    menu.classList.toggle('open');
    menuIcon.classList.toggle('open');
}

function filterItems(category) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
