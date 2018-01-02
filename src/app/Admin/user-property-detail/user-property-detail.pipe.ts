import {Pipe,PipeTransform} from '@angular/core';
import {SubmitDetails} from '../../User/submitproperty/submit';
@Pipe ({name:'filter'})
export class FilterProperty{
	transform(items=Array<SubmitDetails>(),filterText:string){
		if(items && items.length){
			return items.filter(item => {
				if (filterText && item.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
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