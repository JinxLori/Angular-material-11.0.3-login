import { Routes } from '@angular/router';

import { YkSpeechSettingComponent } from './yk_speech_setting.component';

export const YkEquipmentManagementRountes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: YkSpeechSettingComponent
    }]
}
];