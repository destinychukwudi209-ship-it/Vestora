// VESTORA mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

if (menuBtn && navigation) {
  menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
    });
  });
}

console.log("Welcome to VESTORA!");
