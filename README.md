# hotel-dashboard

> :red_square: Projet à forker et à utiliser comme base au développement de votre dashboard d'administration de l'hôtel.

## 1. Lancement du projet (15min)

Voilà les commandes à rentrer dans le terminal pour pouvoir récupérer le projet sur votre machine :

```bash
git clone https://github.com/AlbanCrepel/hotel-dashboard.git # clone du repo
cd hotel-dashboard # se placer dans son dossier
npm install # installation des dépendances
npm run dev # Compile + Hot-Reload pour le développement

npm run build # Compile + Minify pour la production
npm run preview # Aperçu du build de production
```

> :golf: Preuve de travail
> - Le projet tourne en local, la page d'accueil s'affiche

:point_right: Nous nous attarderons sur la structure du projet juste après !

---

## 2. Changements sur l'API Laravel (45min)

Il faut que ce projet (client **front-end**) aille récupérer les données de votre API REST Laravel (**back-end**).

Et le cahier des charges précise qu'il faut que l'utilisateur soit **connecté** pour pouvoir accéder à notre dashboard, cela implique donc un **système d'authentification** entre notre front-end et notre back-end.

Laravel recommande d'utiliser des cookies tokens (https://laravel.com/docs/10.x/sanctum#spa-authentication), mais
cette solution ne marche seulement si votre API et votre front-end partagent le même host, ce qui pourrait ne pas être forcément le cas.

Nous allons donc utiliser des **API tokens** pour pouvoir authentifier les utilisateurs et opter pour un front-end totalement découplé de l'API Laravel.

Si ce n'est pas encore implémenté dans votre API, en suivant l'exemple de la documentation (https://laravel.com/docs/10.x/sanctum#issuing-mobile-api-tokens), 
rajouter une route `POST` à votre API qui va venir récupérer un utilisateur grâce à son email et mot de passe passé en `body` de la requête :

```php
// `routes/api.php`:

use \App\Models\User;
use \Illuminate\Support\Facades\Hash;
use \Illuminate\Validation\ValidationException;

Route::post('/sanctum/token', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken("")->plainTextToken;
});
```

Si votre route est prête, vous pouvez vérifier qu'elle est bien listée dans toutes les routes de votre projet avec la commande `php artisan route:list`.

Vous pouvez tester son bon fonctionnement via un outil de test de requête comme :
- [Le client HTTP interne aux IDE Jetbrains - recommandé](https://www.jetbrains.com/help/phpstorm/http-client-in-product-code-editor.html)
- [Postman](https://www.postman.com/)

> :golf: Preuves de travail
> - La route renvoie le token en body de la réponse quand les informations de connexion de l'utilisateur sont correctes
> - La route `GET` `/api/user` doit renvoyer les informations de l'utilisateur connecté quand le token est passé dans le `header` `Authorization` de la requête.

Ça y est, votre authentification est mise en place, on peut passer à un petit tour de notre projet front-end :point_down: .

---

## 3. Tour du projet et des outils disponibles (1h)

Ce projet et le code déjà mis en place va vous permettre de développer efficacement votre dashboard.

En effet, le but ici n'est pas de réinventer la roue (refaire un composant de Modal, faire un composant pour nos boutons, etc etc), 
mais plutôt d'utiliser une boîte à outils qui va grandement nous aider pendant le développement : une bibliothèque de composants.

Le choix technique s'est porté sur `ant-design-vue`, que vous utiliserez pour vos interfaces : https://antdv.com/components/overview/

Il s'agit d'un choix subjectif, mais qui est justifié par :
- une popularité et une bonne maintenabilité
- un choix complet de composants (dont des date-picker / range-picker intégrés, une validation des formulaires...)
- une possibilité de customisation du thème :
  - https://antdv.com/theme-editor
  - https://antdv.com/docs/vue/customize-theme#seedtoken

:point_right: Faites un tour de chaque composant pour avoir une meilleure idée de ce que vous pourrez utiliser (cards, tables...).

:point_right: Regarder le contenu de chaque fichier du projet et comprendre son utilité

Voici quelques directives pour vous aider à comprendre le projet :
- les composants `ant-design-vue` sont automatiquement importés, vous pouvez directement les utiliser dans vos templates
- ce projet utilise l'**OPTION API** et non la COMPOSITION API de VueJs. Il vous est grandement recommandé d'utiliser l'option API, mais libre à vous de choisir quel style de code choisir, en s'assurant :
  - que la syntaxe est **obligatoirement** comprise
  - que votre choix soit appliqué dans **tous vos composants**

Le style de votre thème peut s'appliquer de 2 manières différentes, toujours en utilisant la variable globale `$theme` déclarée dans `./src/plugins/antDesignPlugin.js` :
- en appliquant le style en props d'un tag HTML ou d'un composant : `:style="{ color: $theme.colorPrimary }"`
- en utilisant le binding dans votre css : `h1 { color: v-bind("$theme.colorPrimary"); }`

Dernière petite chose, `ant-design-vue` ajoute aussi des méthodes accessibles globalement, comme celle pour afficher des notifications :

```js
this.$notification.info({
    message: "My notification message"
})
```

> :golf: Preuves de travail avant d'aller plus loin
> - Je comprends l'utilité de chaque fichier et comprends le code du projet.
> - J'ai fait le tour de chaque composant de la bibliothèque `ant-design-vue` et sais plus ou moins quels composants utiliser dans mes interfaces.

---

## 4. Maquettage (1j)

Avant de plonger la tête dans le code, il est **nécessaire** de faire au minimum des wireframes, au mieux des maquettes.

Selon le cahier des charges, il vous est demandé de faire des maquettes `high-fidelity` des pages de dashboard que vous allez réaliser.

Vous avez de la chance, en plus de vous fournir une bibliothèque de composants, des thèmes ant-design prêts à l'emploi sont disponibles.
Vu que vous avez fait le tour des composants `ant-design-vue`, vous avez une idée des éléments qui vont constituer vos pages.

Réalisez vos maquettes à partir de ce template de la communauté Figma : https://www.figma.com/community/file/831698976089873405

Voilà quelques ressources qui pourront vous aider pour l'UI et le maquettage :

:rainbow: **Palettes de couleurs :**
- https://daisyui.com/docs/themes/
- https://daisyui.com/theme-generator/
- https://colorhunt.co/
- https://mycolor.space/
- https://realtimecolors.com/
- https://realtimecolors.com/palettes/

:tv: **Exemples de dashboards et inspirations**
- https://ui.shadcn.com/
- https://dribbble.com/AlbanCrepel/collections/1899268-Dashboards (:warning: attention, ça vient de Dribbble, donc tout ne correspond pas tout à fait à des cas réels d'utilisation. Ça vous donne quand même une idée des éléments que contient un dashboard).

> :golf: Preuve de travail
> - Les maquettes sont réalisées et validées par le formateur

---

## 5. Priorisation des tâches et développement

Selon votre dossier de conception, vous allez devoir prioriser les tâches pour votre développement :
- s'attarder d'abord sur les fonctionnalités et ensuite sur le style ?
- s'attarder sur les KPI du dashboard ou sur l'export PDF ?

:point_right: À vous de bien définir vos priorités.

Il vous est conseillé ces choix techniques :
- **apexchart** pour les graphiques (pie chart, line chart...)
  - https://github.com/apexcharts/vue3-apexcharts
  - https://apexcharts.com/vue-chart-demos/
  - https://apexcharts.com/javascript-chart-demos/dashboards/modern/
- **html2pdf** pour l'export pdf 
  - https://github.com/eKoopmans/html2pdf.js

> :golf: Preuves de travail
> - Le site est fonctionnel et répond au cahier des charges
>   - seulement l'équipe de l'hôtel peut se connecter et accéder au page de dashboards
>   - les données sont pertinentes et présentées de manière intuitive

---

## 6. BONUS - appli bureau avec Tauri (1j)

**Seulement** si le temps vous le permet, faites en sorte de réutiliser votre appli web en la convertissant en application de bureau avec Tauri.js.

Vous pouvez consulter cette ressource sur la documentation officielle : https://tauri.app/fr/v1/guides/getting-started/setup/integrate

> :golf: Preuves de travail
> - Votre tableau de bord est accessible via une application bureau
