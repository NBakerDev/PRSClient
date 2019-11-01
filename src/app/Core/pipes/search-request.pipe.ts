import { Pipe, PipeTransform } from '@angular/core';
import { Request } from '../../prs/request/request.class';
import { request } from 'https';


@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

  transform( requests: Request[],  searchCriteria:string = ''): Request[] {
    if ( searchCriteria == '') { return requests; }
    let substr = searchCriteria.toLowerCase();
    let selectedreqs: Request[] = [];
    for (let req of requests) {
      if (
        req.id.toString().includes(substr)
        || req.deliveryMode.toLowerCase().includes(substr)
        || req.justification.toLowerCase().includes(substr)
        || req.status.toLowerCase().includes(substr)
        || req.total.toString().includes(substr)
        || ((req.description!= null) && req.description.toLowerCase().includes(substr))
        
        

      ) {
        selectedreqs.push(req);
        continue;
      }
    }
    return selectedreqs;
  }

}
