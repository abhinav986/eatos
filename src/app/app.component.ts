import {Component} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'ArchitectUI - Angular 7 Bootstrap 4 & Material Design Admin Dashboard Template';
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.register([
      { alias: 'edit', filename: 'edit' },
      { alias: 'camera', filename: 'camera' }
    ]);
  }

  private register(icons: any) {
    for (const icon of icons) {
      this.iconRegistry.addSvgIconLiteral(icon.alias,
        this.sanitizer.bypassSecurityTrustHtml(require(`!svg-inline-loader!src/resources/icons/${icon.filename}.svg`))
      );
    }
  }
}
