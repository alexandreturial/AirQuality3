import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string,
    
        colors:{
            primary: string,
            secundary: string,
            tertiary: string,
            
            white: string          
            balck:string          
            gray:string,
    
            red: string,
            green: string,
            yellow: string,
            purple: string,
            birches: string,
            purpleBlue: string,
            blueishBlack: string,
            blue: string,

            gradient1: string,
            gradient2: string,
            gradient3: string,
        },    
    }
}