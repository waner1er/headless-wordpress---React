Wordpress (
1/ uploader le dossier "testMatiereNoire" sur le localhost
2/créer une base matierenoire et la remplir avec le dump matierenoire.sql
3/créer une virtualhost "testmatierenoire" vers c:/wamp64/www/testMatiereNoire/web
4/ lancer http//testmatierenoire/
5/ initialiser le wordpress en mettant en identifiant "erwan" et en  mot de passe : "matiere44"

Frontend
1/ouvrir le dossier frontend dans l'IDE 
2/lancer npm start en console
3/la page 'ouvre sur localhost:3000


------------------------------------------------------------------------------------------

X
- Installer Wordpress en utilisant Bedrock (https://roots.io/bedrock/) => OK

    • Installation wordpress : 
        ◦ Utilisation de composer avec  « $ composer create-project roots/bedrock »
        ◦ Configuration du .env (accès BDD, WP_HOME)
        ◦ génération des keys du .env
        ◦ lancement du wizard sur Chrome 
        ◦ identifiant, mot de passe … 
          
X
- Créer un custom post type non hiérarchique "News" => OK

    • Création du custom post type : 
        ◦ Dans le fichier functions.php du thème, insertion de la fonction create_post_type avec les paramètres $label et $arg qui définissent le contenu du CPT et son accès par l’API : 
            ▪ $label	
                • création du post = un nom de label « news »
                • création des différents éléments textuels du menu 
            ▪ $args
                • booleen ‘Hériarchical’ à ‘False’ 
X
- Générer 20 entrées dans ce CPT avec WP CLI (https://developer.wordpress.org/cli/commands/post/generate/) =>OK

    • Génération d’entrées avec le  WP-CLI
        ◦ Après installation du wp-CLI sur la poste utilisation de la commande : 
          
      curl http://loripsum.net/api/5 | wp post generate --post_type=news  --post_content –count=20
      
    • curl = recherche de lorem ipsum a partir de l’api loripsum.net
    • wp = commande du cli 
    • generate = commande du cli pour générer des entrées
    • --post:news = entrées post de type news 
    • post_content (associé à l’api) = soumet du contenu dummy pour remplir les 	articles « news »
      
X
- Rendre accessible ton CPT dans l'API REST de Wordpress=>OK
    • Accessibilité du CPT par  l’API REST WP
        ◦ insertion dans le fichier functions.php du thème  des 3 attributs :
             'show_in_rest'=>true,
              'rest_base'=>'news',
                      'rest_controller_class'=>'WP_REST_Posts_Controller',
    • le custom_post « news » se retrouve à l’adresse suivante 
http://testmatierenoire/wp-json/wp/v2/News 




X
- Créer front en ReactJS (tips : utilise "create react app" ou "NextJs") ou en VueJS (NuxtJS)
X
- En front affiche 2 pages (pas de mise en page particulière) : 

   1. Une Home avec la liste de contenu de ton CPT 

   2. Quand on clic sur un item de la liste, affiche une page de détail
    • Installation de  React → npx create-react-app news
    • Installation des plugins pour les requêtes les routes et les liens → axios et react-router-dom
    • créer un dossier Components 
        ◦ Class Nouvelles pour  Mapper  les données du WP grace à l’API REST et Axios  (axios = requete, render = vue)
        ◦ une Class  « NouvelleItem » pour rendre les résultats de la requête de Nouvelles a travers une liste « titre, extrait et lien vers l’article
        ◦ une Class « NouvellePage » requete vers les id des news grace à l’API REST du WP et Axios
    • Dans App.js 2 Route avec un path adapté à la page Home (Nouvelles) et la page Article (NouvellePage)

