import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { EmpowerComponent } from './empower/empower.component';
import { Add2Component } from './add2/add2.component';
import { EditempowerComponent } from './editempower/editempower.component';
import { SchemaComponent } from './schema/schema.component';
import { Add3Component } from './add3/add3.component';
import { EditschemaComponent } from './editschema/editschema.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AddComponent,
    EditComponent,
    EmpowerComponent,
    Add2Component,
    EditempowerComponent,
    SchemaComponent,
    Add3Component,
    EditschemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
