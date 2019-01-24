# Boilerplate HTML / CSS [Bootstrap 4 Sidebar Navigation Starter]
Ce paquet contient du code pour démarrer un projet de thème bootstrap 
avec une sidebar. (navigation sur le côté)

![Alt text](images/apercu.png?raw=true "Title")

## UTILISATIONS
 1. Télécharger les sources.
 2. Rendez-vous dans le dossier des fichiers sources et installer les dépendances via NPM. <br />
     Vous pouvez omettre le drapeau --only pour installer les dépendances de développement afin de modifier les sources.
     ```shell
     npm install --only=production
     ```
3. Incluez le fichier `js/dist/app.js` afin la fermeture de votre bloque `</body>` 
4. Référez-vous au fichier **stater.html** pour avoir la structure de base. Le contenu doit être dans la div `.content-wrapper`.

**Les fichiers sources sont compilés avec webpack.** <br />
Il n'y a donc qu'un seul fichier à inclure. 

Nous utilisations bootstrap-native afin de ne pas dépendre de la librairie JQuery.

## OPTIONS
- `.sidebar-dark` <br />
Permet de définir le thème foncé pour la sidebar. Cette classe est à affecter à un élément 
parent de `.sidebar`. _(conseil : affecter cette classe à l'élément `body`)_.

- `.sidebar-icon-only` <br />
Permet d'afficher par défaut uniquement les icônes de la sidebar. 
Lors du clique sur le bouton de masquage / affichage de la sidebar il sera quand même possible de voir complètement les menus.
Cette classe est à affecter à un élément parent de `.sidebar`. _(conseil : affecter cette classe à l'élément `body`)_.

![Alt text](images/apercu2.png?raw=true "Title")


- `.sidebar-hidden` <br />
Permet de masquer complètement la sidebar par défaut. **Attention** cette classe est à combiner avec `.sidebar-absolute` 
si vous souhaitez pouvoir ré-afficher la sidebar en cliquant sur le bouton de masquage / affichage.
Cette classe est à affecter à un élément parent de `.sidebar`. _(conseil : affecter cette classe à l'élément `body`)_.

- `.sidebar-absolute` <br />
Permet de changer le mode de masquage / affichage de la sidebar. Par défaut, lors du masquage, nous avons quand même les icones à l'écran.
Si vous ajouter cette classe alors la sidebar disparaîtra complètement.
Cette classe est à affecter à un élément parent de `.sidebar`. _(conseil : affecter cette classe à l'élément `body`).

En combiant les classes `.sidebar-icon-only` et `.sidebar-absolute` la sidebar n'affichera que les icones lors du bouton de masquage / affichage.
Vous pouvez également combiner la classe `.sidebar-hidden`.

### SOURCES 
[...........]

--- 
### Améliorations
- Ajouter des variables dans le fichiers .scss afin de définir les couleurs pour les thèmes clair & foncé.
- Supporter le mode **RTL**.
- Troisième niveau de sous-menus
- Ajouter un code javascript lors de l'ouverture d'un collapse pour ne plus avoir le scintillement sur le background qui est re-affecter à la class .nav-link[aria-expanded="true"].