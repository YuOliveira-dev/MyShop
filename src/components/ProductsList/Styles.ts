import styled from 'styled-components'


export const Container = styled.main`
max-width: 1240px;
height: 100%;
margin: 4rem auto;
padding: 0 2rem;

/* Coloca o container de modo que seja responsivo, utilizando o stretch e o flex-wrap */
display: flex;
justify-content: space-between;
align-items: stretch;
flex-wrap: wrap;
gap: 2rem;

// Utilizando a lógica abaixo, eu aumento os filhos diretos do elemento pai até o tamanho máximo (300px), caso não tenha espaço disponivel eles se ajustam e se tornam responsivos por consequência, fazendo referência direta a somente os filhos do elemento, eu não mexo em outras propriedades do DOM.
& > * {
    flex: 1 300px;

}
`