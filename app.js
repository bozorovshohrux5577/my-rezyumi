
const kirish = document.querySelector(".portfolio");
const chiqish = document.querySelector(".exit")
const headerBox = document.querySelector(".header")
const sectionBox = document.querySelector(".section")


kirish.addEventListener("click", () => {
  headerBox.style.display="none"  
  sectionBox.style.display="block"  
})

chiqish.addEventListener("click", () => {
  headerBox.style.display="block"  
  sectionBox.style.display="none"  
})