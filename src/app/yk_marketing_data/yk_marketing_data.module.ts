import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';


import { YkMarketingDataRountes } from './yk_marketing_data.routing';


import { CollectFansComponent } from './collect_fans/collect_fans.component';
import { CollectUsersComponent } from './collect_users/collect_users.component';
import { CollectWorksComponent } from './collect_works/collect_works.component';
import { UsersWorksComponent } from './users_works/users_works.component';
import { WorksCommentComponent } from './works_comment/works_comment.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table'; 


import { TagInputModule } from 'ngx-chips';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(YkMarketingDataRountes),
        FormsModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        TagInputModule,
        MatButtonModule,
        MatRadioModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule
    ],
    declarations:[
        CollectFansComponent,
        CollectUsersComponent,
        CollectWorksComponent,
        UsersWorksComponent,
        WorksCommentComponent
    ],
    // 外部调用该组件里的页面需要先export
    exports:[CollectFansComponent,CollectUsersComponent,CollectWorksComponent,UsersWorksComponent,WorksCommentComponent]
})

export class YkMarketingDataModule {}
