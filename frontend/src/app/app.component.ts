import { Component, NgModule, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EintraegeComponent } from './eintraege/eintraege.component';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
<<<<<<< Updated upstream
import { FooterComponent } from './footer/footer.component';
=======
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FontSizeService } from './shared/font-size.service';
import { MatIconModule } from '@angular/material/icon';
import { ContrastService } from './shared/contrast.service';

>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream
  imports: [RouterOutlet, StartseiteComponent, ProfielComponent, MatFormFieldModule, MatInputModule, 
    MatSelectModule, EintraegeComponent, NavComponent, MatSnackBarModule,FooterComponent],
=======
  imports: [RouterOutlet, StartseiteComponent, MatFormFieldModule, MatInputModule, MatIcon,
    MatSelectModule, EintraegeComponent, NavComponent, MatSnackBarModule, FooterComponent, FormsModule, CommonModule],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit{
  fontSize = 16;
  showFontSizeControl = false;
  highContrast = false;

  constructor(
    public fontSizeService: FontSizeService,
    public contrastService: ContrastService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.fontSizeService.fontSize$.subscribe(size => {
      this.fontSize = size;
    });

    this.contrastService.contrast$.subscribe(isHighContrast => {
      this.highContrast = isHighContrast;
      if (isHighContrast) {
        this.renderer.addClass(document.body, 'high-contrast');
      } else {
        this.renderer.removeClass(document.body, 'high-contrast');
      }
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