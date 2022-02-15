class recipe {
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

  createRecipe() {
    return `
    <section class="recette"> 
     <div class="recetteImg"></div>
      <div class="legendeRecette">
       <section class="tempsRecette">
        <h1 class="titre">${this.name}</h1>
        <div class="clock">
         <img src="./img/cadran.png" alt="Cadran d'horloge">
         <div class="temps">${this.time}</div>
        </div>        
      </section>
    
     <section class= "listeIngredientsTemps">
     <ul class="ingredients">${this.ingredients
       .map((ingredient) => {
         let ingredientContent = ingredient.ingredient;
         let quantityContent = ingredient.quantity
           ? `:${ingredient.quantity}`
           : "";
         let unitContent = ingredient.unit ? ingredient.unit : "";
         return `<li class="ingredientsTab"><span class="gras">${ingredientContent}</span> ${quantityContent}${unitContent}</li>`;
       })
       .join("")}</ul>
           <section class= "recetteDescription">    
        <div class="description">${this.description}</div>
      </section>
      </section
    </section>
        `;
  }
}
