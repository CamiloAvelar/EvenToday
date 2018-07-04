// ./app/shared/shared.module.ts
import { NgModule } from '@angular/core';

import { KzMaskDirective } from './directives/mask-directive';

@NgModule({
    declarations: [
        KzMaskDirective
    ],
    exports: [
        KzMaskDirective
    ]
})
export class SharedModule{}