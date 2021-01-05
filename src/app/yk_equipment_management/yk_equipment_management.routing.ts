import { Routes } from '@angular/router';

import { YkEquipmentManagementComponent } from './yk_equipment_management.component';

export const YkEquipmentManagementRountes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: YkEquipmentManagementComponent
    }]
}
];