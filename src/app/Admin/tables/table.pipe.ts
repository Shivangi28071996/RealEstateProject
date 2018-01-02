import {Pipe,PipeTransform} from '@angular/core';
import {Signup} from '../../User/signup/signup';
@Pipe ({name:'filter'})
export class FilterPipe{
	transform(items=Array<Signup>(),filterText:string){
		if(items && items.length){
			return items.filter(item => {
				if (filterText && item.username.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
                    return false;
                }
                return true;
			});
		}
        else{
            return items;
        }
	}
}