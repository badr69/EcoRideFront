import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Home","/pages/home.html"),
    new Route("/Convoiturages", "Convoiturages", "/pages/Covoiturages.html"),
    new Route("/signin", "connexion", "/pages/signin.html"),
    new Route("/Contact", "Contact", "/pages/Contact.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";