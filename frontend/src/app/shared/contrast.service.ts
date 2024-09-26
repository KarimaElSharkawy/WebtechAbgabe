import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContrastService {
  private contrastSubject = new BehaviorSubject<boolean>(false); // Standardmäßig normaler Kontrast
  contrast$ = this.contrastSubject.asObservable();

  setContrast(highContrast: boolean) {
    this.contrastSubject.next(highContrast);
  }

  getContrast(): boolean {
    return this.contrastSubject.value;
  }
}
