export class recipe {
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
     <div id="recetteImg"></div>
     <div id="legendeRecette">
      <section id="recetteDescription">
        <div id="titreListe">
          <h1 id="titre">${this.name}</h1>
          </div>
          <section class="tempsRecette">
          <div class="clock">
            <i class="far fa-clock"></i>
            <div class="temps">${this.time}</div>
          </div>        
        </section>
      </section>
          <div class="ingredients">
            <ul class="listeIngredients"> ${this.ingredients
              .map(
                (ingredient) => `<li class="ingredientTab>${ingredient}</li>`
              )
              .join("")}
            </ul>            
            <div class="description">${this.description}</div>
         </div>
    </section>
        `;
  }
}
