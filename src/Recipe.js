class recipe {
  //Création de la classe recipe
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;
  }

  //Affiche les vignettes recette
  createRecipe() {
    return `
    <section class="recette"> 
     <div class="recetteImg"></div>
      <div class="legendeRecette">
       <section class="tempsRecette">
        <h1 class="titre">${this.name}</h1>
        <div class="clock">
         <img src="./img/cadran.png" alt="Cadran d'horloge">
         <div class="temps">${this.time} min</div>
        </div>        
      </section>
    
     <section class= "listeIngredientsTemps">
     <ul class="ingredients">${this.ingredients
       .map((ingredient) => {
         let ingredientContent = ingredient.ingredient;
         //Isole la quantité des ingredients(?)
         let quantityContent = ingredient.quantity
           ? `:${ingredient.quantity}`
           : "";
         //Isole l'unité de mesure des ingredients(?)
         let unitContent = ingredient.unit ? ingredient.unit : "";
         return `<li class="ingredientsTab"><span class="gras">${ingredientContent}</span> ${quantityContent}${unitContent}</li>`;
       })
       .join("")}</ul>
          
        <p class="description">${this.description}</p>
      </section
    </section>
        `;
  }
}
