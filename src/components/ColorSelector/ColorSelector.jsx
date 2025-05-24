// components/ColorSelector/ColorSelector.jsx
import React from 'react';

const ColorSelector = ({ colors, selectedColor, onColorSelect }) => {
  // If no colors provided, return null
  if (!colors || colors.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Cor</h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={`
              h-8 w-8 rounded-full flex items-center justify-center
              transition-all duration-200 p-0 overflow-hidden
              ${selectedColor === color
                ? 'ring-2 ring-offset-2 ring-pink-500'
                : 'hover:ring-2 hover:ring-offset-2 hover:ring-gray-300'
              }
            `}
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
            aria-pressed={selectedColor === color}
            aria-label={`Color: ${color}`}
          >
          </button>
        ))}
      </div>
    </div>
  );
};

// Example usage:
// const [selectedColor, setSelectedColor] = useState('#40E0D0');
// <ColorSelector 
//   colors={['#40E0D0', '#FF6347', '#556B2F', '#4B0082']} 
//   selectedColor={selectedColor} 
//   onColorSelect={setSelectedColor} 
// />

export default ColorSelector;