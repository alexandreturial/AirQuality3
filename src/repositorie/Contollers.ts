import moiture from './materials/moiture';
import particleMatrial from './materials/particleMatrial';
import smoke from './materials/smoke';
import temperature from './materials/temperature';
import monoxido from './materials/monoxido';


export const lastDatas = () =>{
    return  [
        moiture[moiture.length - 1],
        particleMatrial[particleMatrial.length  - 1],
        smoke[smoke.length  - 1],
        temperature[temperature.length  - 1],
        monoxido[monoxido.length  - 1],
       ]
  
}


export const historyMaterial = (group: string) =>{
    switch(group) { 
        case 'gas': { 
            return [smoke, monoxido];
        } 
        case 'temp': { 
            return group;  
        } 
        case 'umi': { 
            return [moiture]; 
         } 
        default: { 
          return "nada"
           break; 
        } 
     }
  
}