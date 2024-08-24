
# React-selector-by-a-mauger

![npm version](https://img.shields.io/npm/v/react-selector-by-ar-mauger)

## Présentation

`react-selector-by-ar-mauger` est un composant React pour afficher un sélecteur personnalisé. Simple à utiliser ce composant est particulièrement adapté aux projets nécessitant une interface personnalisée avec des options sélectionnables sous forme de liste déroulante. L'utilisation de balise `<ul>` et `<li>` offre un meilleur contrôle sur le style css du sélecteur. 

## Installation

Vous pouvez installer le composant via npm :

```bash
npm install react-selector-by-ar-mauger
```

## Prérequis

- **React** : Ce composant nécessite React en version 18 ou supérieure.
- **React-DOM** : En version 18 ou supérieure.
- **Typescript** : Utilisé pour la typage du composant. Si votre projet est en TypeScript, assurez-vous d'avoir les définitions types appropriées.

Voici les versions spécifiques recommandées :

- `react: ^18.3.1`
- `react-dom: ^18.3.1`
- `typescript: ^5.5.4`

## Exemple d'utilisation

Voici un exemple de base montrant comment utiliser le composant `SimpleReactSelector` dans un projet React.

```tsx
import React, { useState } from 'react';
import SimpleReactSelector from 'react-selector-by-ar-mauger';
import 'react-selector-by-ar-mauger/dist/SimpleReactSelector.css'; // Assurez-vous d'importer les styles

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1>Simple React Selector Example</h1>
      <SimpleReactSelector 
        options={options} 
        onChange={handleSelectionChange} 
        placeholder="Choose an option"
      />
      {selectedOption && <p>Selected: {selectedOption.label}</p>}
    </div>
  );
};

export default App;
```

### Props

- `options` : **[Option[]]** (obligatoire) - Une liste d'objets avec une `value` et un `label` pour chaque option.
- `onChange` : **(selectedOption: Option | null) => void** (obligatoire) - Fonction appelée lorsque l'utilisateur sélectionne une option.
- `value` : **Option | null** (optionnel) - Option sélectionnée par défaut.
- `placeholder` : **string** (optionnel) - Placeholder affiché lorsque aucune option n'est sélectionnée.
- `id` : **string** (optionnel) - Identifiant HTML optionnel pour le conteneur du composant.

## Développement

Pour développer localement ce composant, clonez le dépôt et installez les dépendances avec :

```bash
git clone https://github.com/AroldMauger/react-selector-by-ar-mauger.git
cd react-selector-by-ar-mauger
npm install
```

Pour construire le projet :

```bash
npm run build
```



## Liens

- [Dépôt GitHub](https://github.com/AroldMauger/react-selector-by-ar-mauger.git)
