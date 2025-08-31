import React from 'react';
import styled from 'styled-components';
import { categories } from '../config/ongs';

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.9)'};
  border: 2px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.3)'};
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' : 'rgba(255, 255, 255, 0.3)'};
    transform: translateY(-2px);
  }
`;

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <FilterContainer>
      <FilterButton
        active={!selectedCategory}
        onClick={() => onCategoryChange(null)}
      >
        Todas as ONGs
      </FilterButton>
      
      {categories.map((category) => (
        <FilterButton
          key={category}
          active={selectedCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
}

export default CategoryFilter;
