//Variables pour generateFilters

let ingredientsT = [];
let applianceT = [];
let ustensilsT = [];
let ingredientsFiltered = [];
let BtnIngredient;
let listIng;
let BtnAppareils;
let inputApp;
let ingredientMap;
let item;
let recette;
let elem;
let BtnUstensiles = document.getElementById("triBtnUstensiles");
let inputUst = document.querySelector("#inputUstensiles");
let content;
const triIngredients = document.getElementById("triIngredientsInput");

//variables pour rechercheTags

let listeAppliance = document.querySelectorAll(".listeApp");
let listeIngredients = document.querySelectorAll(".listeIng");
let listeUstensiles = document.querySelectorAll(".listeUst");
let tagsAppResults = [];
let tagsUstResults = [];
let tagsIngResults = [];
let appareilsResult;
let pAppliance;
let spanAppliances = document.querySelectorAll(".spanAppliances");
let pAppliances = document.querySelectorAll(".pAppliances");
let spanIngredients = document.querySelectorAll(".spanIngredients");
let spanUstensiles = document.querySelectorAll(".spanUstensiles");
let pUstensiles = document.querySelectorAll(".pUstensiles");
let close = document.querySelectorAll(".close");
let p;
let eventValue = [];

//variable pour index

let newRecette;
let listeRecettes = "";

//variables pour rechercheGlobale

let value;
let results;
let rechercheValue;
let input;

//variable pour affichageTags
