import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAlertModule,
  NbBadgeModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule,
  NbStepperModule,
  NbTagModule,
  NbRadioModule,
  NbFormFieldModule,
  NbThemeModule,
  NbButtonModule,
  NbUserModule,
  NbDialogModule,
  NbSearchModule,
  NbSelectModule,
  NbAutocompleteModule,
  NbTooltipModule,
  NbLayoutModule,
  NbToastrModule,
  NbTabsetModule,
  NbMenuItem,
  NbButtonGroupModule
  // NbIconConfig,

} from '@nebular/theme';
import { ContentComponent } from './content/content.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DatachartComponent } from './content/datachart/datachart.component';
import { OtherInfoComponent } from './content/other-info/other-info.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { ExchangemarketComponent } from './content/exchangemarket/exchangemarket.component';
import { ExchangerecordComponent } from './content/exchangerecord/exchangerecord.component';
import { MarketrecordComponent } from './content/marketrecord/marketrecord.component';
import { MarketComponent } from './market/market.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



const THEME_MODULE = [
  NbCardModule,
  NbStepperModule,
  NbInputModule,
  NbSidebarModule,
  NgApexchartsModule,
  NbMenuModule,
  NbTagModule,
  NbIconModule,
  NbListModule,
  NbAlertModule,
  NbBadgeModule,
  NbRadioModule,
  NbFormFieldModule,
  NbThemeModule,
  NbButtonModule,
  NbUserModule,
  NbDialogModule,
  NbSearchModule,
  NbSelectModule,
  NbAutocompleteModule,
  NbTooltipModule,
  NbLayoutModule,
  NbToastrModule,
  NbTabsetModule,
  NbButtonGroupModule,
  // NbIconConfig
];

@NgModule({
  declarations: [
    ContentComponent,
    DatachartComponent,
    OtherInfoComponent,
    ExchangesComponent,
    ExchangemarketComponent,
    ExchangerecordComponent,
    MarketrecordComponent,
    MarketComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [CommonModule, THEME_MODULE],
  exports: [THEME_MODULE],
})
export class ThemeModule {}
