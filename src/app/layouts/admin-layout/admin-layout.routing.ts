import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { YkMarketingDataComponent } from '../../yk_marketing_data/yk-marketing-data.component';
import { YkMarketingManagementComponent } from '../../yk_marketing_management/yk_marketing_management.component';
import { YkEquipmentManagementComponent } from 'app/yk_equipment_management/yk_equipment_management.component';
import { YkSpeechSettingComponent } from 'app/yk_speech_setting/yk_speech_setting.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'yk_marketing_data',   component: YkMarketingDataComponent },
    { path: 'yk_marketing_management',   component: YkMarketingManagementComponent },
    { path: 'yk_equipment_management',   component: YkEquipmentManagementComponent },
    { path: 'yk_speech_setting',   component: YkSpeechSettingComponent },
];
