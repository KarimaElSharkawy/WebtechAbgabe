import { Component } from '@angular/core';
<<<<<<< Updated upstream

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
=======
import { CommonModule } from '@angular/common'; 
import { ContrastService } from '../shared/contrast.service'; 

@Component({
  selector: 'app-footer',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  highContrast = false;

  constructor(private contrastService: ContrastService) {}

  ngOnInit(): void {
    this.contrastService.contrast$.subscribe(isHighContrast => {
      this.highContrast = isHighContrast;
    });
  }
}
>>>>>>> Stashed changes
