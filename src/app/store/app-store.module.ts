import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

import { environment } from '../../environments/environment';
import { NgrxDataToastService } from './ngrx-data-toast.service';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule {
  constructor(toastService: NgrxDataToastService) {}
}