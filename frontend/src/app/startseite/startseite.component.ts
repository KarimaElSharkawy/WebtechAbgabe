import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Eintraege } from '../shared/eintraege';
import { BackendService } from '../shared/backend.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FontSizeService } from '../shared/font-size.service'; 
import { ContrastService } from '../shared/contrast.service';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    FormsModule,
    CommonModule,
    MatSnackBarModule,
  ]
})
export class StartseiteComponent {
  eintragText = '';
  showFontSizeControl = false;
  fontSize = 16;
  lineHeight = 1.5; 
  highContrast = false;
  entryError: boolean = false;  // Fehlerindikator

  constructor(private backendService: BackendService, private snackBar: MatSnackBar, public fontSizeService: FontSizeService, public contrastService: ContrastService) {}

  addEntry() {
    if (this.eintragText.trim()) {
      const neuerEintrag: Eintraege = { eintraege: this.eintragText, datum: new Date() };
      this.backendService.createOneEntry(neuerEintrag).subscribe({
        next: (response) => {
          console.log('Eintrag erfolgreich hinzugefügt', response);
          this.snackBar.open('Beitrag hinzugefügt', 'Schließen', {
            duration: 3000,
          });
          this.eintragText = ''; 
          this.entryError = false;  // Fehler zurücksetzen
        },
        error: (err) => console.error('Fehler beim Hinzufügen des Eintrags:', err),
      });
    } else {
      this.entryError = true;  // Fehler setzen, wenn Eingabe leer ist
      console.log('Eintrag ist leer. Nichts zu speichern.');
    }
  }

  ngOnInit(): void {
    this.fontSizeService.fontSize$.subscribe(size => {
      this.fontSize = size;
    });

    this.contrastService.contrast$.subscribe(isHighContrast => {
      this.highContrast = isHighContrast;
    });
  }

  toggleFontSizeControl(): void {
    this.showFontSizeControl = !this.showFontSizeControl;
  }

  changeFontSize(event: any): void {
    const newSize = event.target.value;
    this.fontSizeService.setFontSize(newSize);
  }

  toggleContrast(): void {
    const newContrast = !this.highContrast;
    this.contrastService.setContrast(newContrast);
  }
}
