import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!searchText){
        return items;
      } else {
        return items
          .filter(item => 
            //item.name.en.toLowerCase().indexOf(searchText[0]) !== -1 || item.name.it.toLowerCase().indexOf(searchText[1]) !== -1 
            item.text.toLowerCase().indexOf(searchText) !== -1 || item.user.screen_name.toLowerCase().indexOf(searchText) !== -1
          );
      }
   }
}