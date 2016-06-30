import { Component } from '@angular/core';
import { DatabindComponent } from './databind';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DatabindComponent]
})
export class AppComponent {
  title = 'NG2 JumpStart Confartigianato!';
}
