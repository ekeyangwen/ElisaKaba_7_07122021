//Variables pour generateFilters

let ingredientsT = [];
let applianceT = [];
let ustensilsT = [];
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
let inputIng;
let content;
const triIngredients = document.getElementById("triIngredientsInput");
const triAppliance = document.getElementById("triAppareilsInput");
const triUstensiles = document.getElementById("triUstensilesInput");
let listIngredient = document.querySelector("#listIngredients");

//variables pour rechercheTags

let listeAppliance = document.querySelectorAll(".listApp");
let listeIngredients = document.querySelectorAll(".listIng");
let listeUstensiles = document.querySelectorAll(".listUst");
let tagsAppResults = [];
let tagsUstResults = [];

let appareilsResult;
let pAppliance;
let spanAppliances = document.querySelectorAll(".spanAppliances");
let pAppliances = document.querySelectorAll(".pAppliances");

let pIngredients = document.querySelectorAll(".pIngredients");
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

let rechercheValue;
let input;
let noResults;

//variable pour affichageTags
