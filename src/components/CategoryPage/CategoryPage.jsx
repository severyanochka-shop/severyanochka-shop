import React from 'react'
import { Container } from '../../layout/Container/Container';
import cl from './CategoryPage.module.scss'

export const CategoryPage = () => {
    let category_name = "Молоко, сыр, яйцо";
    return (
      <Container>
        <div>
                <h2>{category_name}</h2>
                
                
        </div>
      </Container>
    );
}
