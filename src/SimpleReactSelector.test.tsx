import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimpleReactSelector from './SimpleReactSelector'; // Importer votre composant

describe('SimpleReactSelector component', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const mockOnChange = jest.fn();

  // Test 1: Vérifier que le trigger click fonctionne
  test('should open the dropdown when clicked', () => {
    render(<SimpleReactSelector options={mockOptions} onChange={mockOnChange} placeholder="Select an option" />);

    // Vérifier que les options ne sont pas présentes initialement
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();

    // Simuler un clic sur l'élément sélectionné pour ouvrir la dropdown
    fireEvent.click(screen.getByText('Select an option'));

    // Vérifier que les options sont désormais visibles
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  // Test 2: Vérifier que le sélecteur s'ouvre et se ferme correctement
test('should close the dropdown after selecting an option', () => {
    render(<SimpleReactSelector options={mockOptions} onChange={mockOnChange} placeholder="Select an option" />);
  
    // Ouvrir la dropdown
    fireEvent.click(screen.getByText('Select an option'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  
    // Cliquer sur une option
    fireEvent.click(screen.getByText('Option 1'));
  
    // Vérifier que la liste des options est fermée
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  
    // Vérifier que l'option sélectionnée est affichée dans le sélecteur
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });
  

  // Test 3: Vérifier qu'une option soit bien présente parmi les options
  test('should display the selected option in the selector', () => {
    render(<SimpleReactSelector options={mockOptions} onChange={mockOnChange} placeholder="Select an option" />);

    // Ouvrir la dropdown
    fireEvent.click(screen.getByText('Select an option'));

    // Sélectionner une option
    fireEvent.click(screen.getByText('Option 2'));

    // Vérifier que la bonne option est sélectionnée et affichée
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith({ value: 'option2', label: 'Option 2' });
  });
});
