class recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;
  }

  createRecipe() {
    return `

          <section class="recette">
      <img id="recetteImg" src="" />
      <section id="recetteDescription">
        <section id="titreListe">
          <h1 id="titre"></h1>
          <ul class="ingredients">
            <li></li>
          </ul>
        </section>
        <section class="tempsRecette">
          <div class="clock">
            <i class="far fa-clock"></i>
            <div class="temps"></div>
          </div>
          <div class="decription"></div>
        </section>
      </section>
    </section>
        `;
  }
}
class ingredient {
  constructor(data) {
    this.ingredient = data.ingredient;
    this.unit = data.unit;
  }
}
