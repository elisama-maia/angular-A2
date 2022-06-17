import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ElisamaHomeComponent } from './elisama-home/elisama-home.component';
import { ElisamaTaskAppComponent } from './elisama-task-app/elisama-task-app.component';
import { ElisamaTasksComponent } from './elisama-tasks/elisama-tasks.component';
import { ElisamaTasksService } from './elisama-tasks.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: ElisamaHomeComponent },
      { path: 'tasks', component: ElisamaTasksComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ElisamaTaskAppComponent,
    ElisamaHomeComponent,
    ElisamaTasksComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ElisamaTasksService],
})
export class AppModule {}
