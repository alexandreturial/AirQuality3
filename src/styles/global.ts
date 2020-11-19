import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root, .App{
  height: 100vh;
  font-size: 60%;
  
}

.App {
  text-align: center;
  
    
}

h2{
  color: var(--color-white);
  font: 700 2rem Archivo;
}

h3{
  font: 500 2.5rem Archivo;
}

small{
  font: 500 1.3rem Archivo;
}

`;

  