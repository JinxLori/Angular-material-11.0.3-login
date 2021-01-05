import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table'; 
import { YkMarketingDataModule } from 'app/yk_marketing_data/yk_marketing_data.module';
import { YkMarketingDataComponent } from 'app/yk_marketing_data/yk-marketing-data.component';
// import { YkMarketingManagementModule } from 'app/yk_marketing_management/yk_marketing_management.module';
import { YkMarketingManagementComponent } from 'app/yk_marketing_management/yk_marketing_management.component';
import { YkEquipmentManagementComponent } from 'app/yk_equipment_management/yk_equipment_management.component';
import { YkSpeechSettingComponent } from 'app/yk_speech_setting/yk_speech_setting.component';




import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    FormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,


    YkMarketingDataModule,
    // YkMarketingManagementModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    YkMarketingDataComponent,
    YkMarketingManagementComponent,
    YkEquipmentManagementComponent,
    YkSpeechSettingComponent
  ]
})

export class AdminLayoutModule { }
