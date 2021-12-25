console.log("connecté !");

const vignettes = document.querySelectorAll(".small");
// console.log(vignettes);
const fullImg = document.getElementById("full");
// console.log(fulling);
const btn = document.querySelector(".btn-add");
console.log(btn);
// Initialisation du panier
let panier = 0;
// console.log(panier);
const panierContainer = document.querySelector(".panier-container");
console.log(panierContainer);

vignettes.forEach((item) => {
  // console.log(item, 'Ce message apparaît pour chaque item du tableau');
  item.addEventListener("click", function () {
    // console.log(item, "vignette cliquée");
    // Récupération du chemin d'accès de l'image
    let imgSource = item.getAttribute("src");
    // console.log(imgSource);
    // J'attribue la nouvelle url à l'image gd format
    fullImg.setAttribute("src", imgSource);
  });
});

btn.addEventListener("click", function () {
  console.log("bouton cliqué");
  // Ajouter 1 au compteur
  panier = panier + 1;
  // console.log(panier);
  // Afficher le contenu
  if( panier < 2) {
    panierContainer.innerText = "Vous avez" + " " + panier + " " + "produit dans votre panier";
  } else {
  panierContainer.innerText = "Vous avez" + " " + panier + " " + "produits dans votre panier";
}
});
