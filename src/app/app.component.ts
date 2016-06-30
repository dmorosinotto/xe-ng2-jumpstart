import { Component } from '@angular/core';
import { DatabindComponent } from './databind';
import { QuestionsComponent } from './questions';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ DatabindComponent, QuestionsComponent ]
})
export class AppComponent {
  title = 'NG2 JumpStart Confartigianato!';
}
