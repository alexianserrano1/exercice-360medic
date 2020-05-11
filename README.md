# ExerciceMedics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Pour lancer le projet, il faut lancer la commande `ng serve` puis accéder à l'adresse `http://localhost:4200/` ou bien la commande `ng serve --open`.

## Explications 

Le projet se compose de deux pages, la page d'affichages des différents produits et la page des détails de chaque produit. 
  
  Tout d'abord, pour récupérer les données JSON, on utilise une classe `ProductService` (src/app/product.service.ts) qui va permettre de récupérer les données de manière asynchrone (ici les données sont en brut mais dans le cas d'une attente de réponse serveur ça s'avère utile). On utilise un objet `Product` (src/app/product.ts) pour les stocker. Les données sont récupérées dans `ProductsComponent` (src/app/products/products.component.ts) via la méthode getProducts() et sont réutilisées dans le fichier html associé (src/app/products/products.component.html). Dans ce fichier html, le tri croissant/décroissant se fait pas appel d'évènement et la recherche est faite via un pipe `SearchPipe` (src/search.pipe.ts) qui permet de filtrer dans le `*ngFor` directement. Le filtre garde les produits dont le nom contient la chaine de caractère entrée. 
 
  En ce qui concerne les détails des produits, on utilise la classe `ProductDetailComponent` (src/app/product-detail/product-detail.component.ts) et les fichiers html/css associés. De la même manière que le `ProductsComponent`, ce component récupère les valeurs via le `ProductService`. De plus, ce component nécessite une `ActivatedRoute` pour récupérer les données de l'URL qui possède le nom du produit à afficher. Lors de l'affichage on enregistre le produit visité comme étant le dernier visité, on le remplace lorsqu'on en visite un autre.
  
  Finalement, on utilise un module de routing (src/app/app-routing.module.ts) pour associer des URLs à des components. On ajoute alors au composant principal (src/app/app.component.html), qui est le premier composant executé, le lien du module de routing pour rediriger automatiquement en arrivant sur la page. 
