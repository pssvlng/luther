// Import Modules from Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

// Import Modules from Angular Material
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

// Import Components of the App
import { AppComponent } from './app.component';
import { BibleNavComponent } from './bible-nav/bible-nav.component';
import { BibleVersesComponent } from './bible-verses/bible-verses.component';
import { BibleChaptersComponent } from './bible-chapters/bible-chapters.component';
import { BibleHelpComponent } from './bible-help/bible-help.component';

@NgModule({
  declarations: [
    AppComponent,
    BibleNavComponent,
    BibleVersesComponent,
    BibleChaptersComponent,
    BibleHelpComponent
  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , HttpClientModule   
    , LayoutModule
    , MatToolbarModule
    , MatButtonModule
    , MatSidenavModule
    , MatIconModule
    , MatListModule
    , MatCardModule
    , MatTreeModule
    , MatTableModule
    , MatPaginatorModule
    , MatSortModule
    , MatGridListModule
    , MatMenuModule
    , MatBottomSheetModule
  ],
  //entryComponents: [BibleHelpComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
