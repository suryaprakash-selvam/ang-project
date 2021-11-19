import { Pipe, PipeTransform } from '@angular/core';
import { docavl, doctor } from './details/Product';

@Pipe({
  name: 'filterproduct'
})
export class FilterproductPipe implements PipeTransform {
 

  transform(value: doctor[], args: any , docavl:docavl[]) :any {
if(!docavl ){
  return value
}


const values: doctor[]=[];
let checiking = true;
 value.forEach( a => {
  console.log("he is "+ JSON.stringify(a))
  docavl.forEach(element => {

    if(element.docName===a.firstName ){
      console.log("he is inner "+ JSON.stringify(a))
      if(element.time === args){
        console.log("he is busy"+ JSON.stringify(a))
        checiking=false
      }else {
        console.log("checking s"+ JSON.stringify(a))
        checiking=true
        console.log("he is not busy " + values)
      }
    }else{
      checiking=true
    }
  });

if(checiking === true){
  values.push(a)
}
  
 })


 console.log(values)
    return values;
  }

}
