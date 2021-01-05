import { Routes } from '@angular/router';

import { YkMarketingManagementComponent } from './yk_marketing_management.component';

export const YkMarketingManagementRountes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: YkMarketingManagementComponent
    }]
}
];