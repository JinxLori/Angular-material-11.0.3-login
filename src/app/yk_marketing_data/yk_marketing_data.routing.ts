import { Routes } from '@angular/router';

import { YkMarketingDataComponent } from './yk-marketing-data.component';

export const YkMarketingDataRountes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: YkMarketingDataComponent
    }]
}
];