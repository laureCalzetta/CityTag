# City Engagement Mobile Applications

Cette application permet d'annoncer les tags et graffitis, nommés "Issues" qu'ils trouvent dans votre ville.

Chaque issue est géolocalisée sur une carte, il y a également des tags et en option une description et une photo prise par le téléphone de l'utilisateur. De plus, lors de l'ajout d'une issue, cette dernière est datée et possède un statut "new". Une issue peut également avec les statuts en "inProgress", "resoleved" ou "rejected". Lors de la modification d'une issue, la date de la modification s'ajoute.

L'application propose d'avoir la liste des issues sous deux formes, soit sous forme de liste soit sous forme de map avec pour chaque issue, un point. Il est possible de filtrer les issues par statut. De plus, il est également possible de se géolocaliser, ceci permettant de voir s'il y a des issues dans le coin.



## Plan

* [Login](#login)
  * Se connecter
  * Création d'un compte

* [Issues](#issues)
  * Issues Map
  * Issues List
  * Filtres
  * Issue détails
    * Commentaires

* [Ajout d'issue](#ajout-dissue)

* [Profile](#profile)
  * Informations
  * Se deconnecter


## Login

### Se connecter
Lors de l'ouverture de l'application, la page de login va s'ouvrir.

<p align="center"><img src="https://github.com/laureCalzetta/CityTag/blob/master/img/User/Login.png" height="300"/></p>

Il est nécessaire d'y entrer son nom d'utilisateur et son mot de passe. Si vous n'avez pas encore de compte, il est possible d'en créer un en cliquant sur "Create an account".

### Création d'un compte
Vous allez être redirigé sur la page prévu pour. Il y sera demandé d'entrer un nom d'utilisateur, son prénom, son nom et de créer un mot de passe. Il est également possible d'y ajouter un numéro de téléphone (optionnel).

<p align="center"><img src="https://github.com/laureCalzetta/CityTag/blob/master/img/User/CreateAnAccount.png" height="300"/></p>


Lors de la connexion, l'application mène directement à la carte où sont positionnés les différentes issues existantes.

Le menu se divise en trois parties :
* Issue Map
* Issue Liste
* Profile

## Issues

### Issue Map
Les différentes issues sont représentées par des markers sur la carte (à l'endroit où elles se trouvent). Pour accéder au détail d'une issue, il suffit de cliquer sur son marker.

<p align="center"><img src="https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/MapList.png" height="300"/></p>

### Issue Liste
Il est également possible d'avoir une liste des issues. Pour chaque issue, il y a une image (si l'issue ne possède pas d'image, l'emplacement sera vide), sa liste de tags, son statut et s’il y a, une description.

<p align="center"><img src="https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/IssueListe.png" height="300"/></p>

### Filtres
Il est possible de filtrer la liste (ou la carte) avec l'option "Filtres" qui se situe en haut à droite de l'application

<p align="center"><img src="https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/Filters.png" height="300"/></p>

### Issue détails
Si l'on clique sur un issue (sur le marker sur la carte ou sur l'issue dans la liste), cela mène aux détails de l'issue.

<p align="center"><img src="https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/IssueDetails.png" height="300"/></p>

#### Commentaires 
Il est possible de commenter les issues et de voir la liste des commentaires déjà effectués. Pour ce faire, il faut écrire son commentaire dans le champ prévu à cette effet et appuyer sur l'icône se trouvant sur la droite.

<p align="center"><img src="https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/Comment.png" height="300"/></p>

## Ajout d'issue
Il est possible d'ajouter une issue depuis la "Issue Map" et la "Issue List". Pour ce faire, il suffit de cliquer sur le bouton "+" qui se trouve en bas à droite, au-dessus du menu.

Ainsi l'application redirige vers la fenêtre d'ajout. Pour ajouter une issue, il est possible de prendre une photo (avec l'appareil photo du téléphone). Il est indispensable d'y ajouter un ou des tags. Une description peut être ajouté (optionnel).

<p align="center"><img src="https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/AddIssue.png" height="300"/></p>

## Profile
Dans cette partie, il est possible de voir ses informations personnel mais surtout de pouvoir se déconnecter en cliquant sur le bouton se trouvant en haut à droite.

<p align="center"><img src="https://github.com/laureCalzetta/CityTag/blob/master/img/User/Profile.png" height="300"/></p>
