import { Fragment } from "react"

const title = 'Bonjour le monde !!!'; // Je peux interpoler des variables

function SyntaxeJsx() {

    // return sert à ranger le contenu JSX a retourner. JSX fonctionne comme du HTML classique, je peux ajouter un id et une classe à mon élément
    // La plupart des attributs utilisent la syntaxe camelCase, j'utilise l'attribut "className" pour ajouter une classe à mon élément
    
    {/* Je peux entourer mes éléments avec un élément Fragment, qui va grouper mes éléments sans ajouter un noeud suplémentaire au DOM */}

    /*
    Voir la doc pour plus de précision : https://react.dev/reference/react/Fragment

    Sans l'utilisation de Fragment :

    <div id="root"> (Elément racine utilisé par JSX)
        <div>
            <h1 className="firstClass">Bonjour le monde</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, quas.</p>
        </div>
    </div>
    
    -------------------------------------

    En utilisant Fragment :

    <div id="root"> (Elément racine utilisé par JSX)
        <h1 className="firstClass">Bonjour le monde</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, quas.</p>
    </div>
    */
    return <Fragment> {/* Je peux aussi utiliser la syntaxe alternative "<> ... </>" qui ne nécéssite pas d'importation depuis React */}
        <h1 className="firstClass">{title}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, quas.</p>

        {/* JSX impose la fermeture des balises, je peux déclarer une balise auto-fermante ou une balise fermante classique */}
        <img src="" alt=""></img> {/* Classique */}
        <input type="text" /> {/* Auto-fermante */}
    </Fragment>
}

export default SyntaxeJsx // Je dois exporter ce composant pour qu'il soit détecté lors de son importation dans main.jsx