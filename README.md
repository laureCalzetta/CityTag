# City Engagement Mobile Applications

Cette application permet d'annoncer les tags et graffitis, nommés "Issues" qu'ils trouvent dans votre ville.

Chaque issue est géolocaisée sur une carte, il y a également des tags et en option une description et une photo prise par le téléphone de l'utilisateur. De plus, lors de l'ajout d'une issue, cette dernière est datée et possède un status "new". Une issue peut également avec les status en "inProgress", "resoleved" ou "rejected". Lors de la modification d'une issue, la date de la modification s'ajoute.

L'application propose d'avoir la liste des issues sous deux formes, soit sous forme de liste soit sous forme de map avec pour chaque issue, un point. Il est possible de filtrer les issues par status. De plus, il est également possible de se géolocaliser, ceci permettant de voir s'il y a des issues dans le coins.



## Plan

* [Login](#login)
  * Se connecter
  * Creation du compte

* [Issues](#issues)
  * Issues Map
  * Issues List
  * Filtres
  * Issue détails

* [Ajout d'issues](#ajoutIssue)

* [Profile](#profile)
  * Informations
  * Se deconnecter


## Login

Lors de l'ouverture de l'application, la page de login va s'ouvrir.

![alt tag](https://github.com/laureCalzetta/CityTag/blob/master/img/User/Login.png)

Il est nécessaire d'y entrer son nom d'utilisateur et son mot de passe. Si vous n'avez pas encore de compte, il est possible d'en créer un en cliquant sur "Create an account".


Vous allez être redirigé sur la page prévu pour. Il y sera demandé d'entrer un nom d'utilisateur, son prénom, son nom et de créer un mot de passe. Il est également possible d'y ajouter un numéro de téléphone (optionel).
![alt tag](https://github.com/laureCalzetta/CityTag/blob/master/img/User/CreateAnAccount.png)

Lors de la connexion, l'application mène directement à la carte où sont positionnés les différents issues existants.

Le menu se divise en trois parties :
* Issue Map
* Issue Liste
* Profile


## Issues

**Issue Map**
Les différents issues sont représenté par des tags sur la carte (à l'endroit où elles se trouvent). Il est possibe de se géolocaliser afin de voir s'il y a des issues aux alentours.
![alt tag](https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/MapList.png)

**Issue Liste**
Il est également possible d'avoir une liste des issues. Pour chaque issue, il y a une image (si l'issue ne possède pas d'image, l'emplacement sera vide), sa liste de tags, son status et si il y a, une description.
![alt tag](https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/IssueListe.png)

**Filtres**
Il est possible de filtrer la liste (ou la carte) avec l'option "Filtres" qui se situe en haut à droite de l'application
![alt tag](https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/FiltersOK.png)


**Issue details**
Si l'on clique sur un issue (sur le repère sur la carte ou sur l'issue dans la liste), cela mène aux détails de l'issue.
![alt tag](https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/IssueDetails.png)



## Ajout d'issues
Il est possible d'ajouter une issue depuis la "Issue Map" et la "Issue List". Pour ce faire, il suffit de cliquer sur le bouton "+" qui se trouve en bah à droite, au-desssus du menu.

Ainsi l'application redirige vers la fenêtre d'ajout. Pour ajouter une issue, il est possible de prendre une photo (avec l'appareil photo du téléphone). Il est indispensable d'y ajouter un ou des tags. Une description peut être ajouté (optionel).
![alt tag](https://github.com/laureCalzetta/CityTag/blob/master/img/Issue/addIssue.png)

## Profile
Dans cette partie, il est possible de voir ses informations personnel mais surtout de pouvoir se deconnecter.
![alt tag](https://github.com/laureCalzetta/CityTag/blob/master/img/User/Profile.png)
