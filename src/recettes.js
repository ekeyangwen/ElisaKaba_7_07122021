export class recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredient = data.ingredient;
    this.quantity = data.quantity;
    this.unit = data.unit;
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
     <h1 id="titre">${this.name}</h1>
     <section id= "listeIngredientsTemps">
     <div class="ingredients"></div>
     <section id="recetteAndTime">  
      <section class="tempsRecette">
        <div class="clock">
            <i class="far fa-clock"></i>
         <div class="temps">${this.time}</div>
        </div>        
      </section>
      <section id= "recetteDescription">    
        <div class="description">${this.description}</div>
      </section>
      </section
    </section>
        `;
  }

  createIngredients() {
    return `
     <ul class="listeIngredients"> ${this.ingredient} <span class ="points">:</span> <span class="quantity">${this.quantity}</span> <span class="units">${this.unit}</span> </ul> 
    `;
  }
}
