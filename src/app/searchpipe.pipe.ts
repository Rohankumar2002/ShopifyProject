import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(MenProducts:any[],searchTerm:string): any[]{
    
    if(!MenProducts||!searchTerm){
      return MenProducts;
    }
    else{
      return MenProducts.filter(menObj=>menObj.brand.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }

}
