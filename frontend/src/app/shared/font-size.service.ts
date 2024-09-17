import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  private fontSizeSubject = new BehaviorSubject<number>(16); // Standard Schriftgröße
  fontSize$ = this.fontSizeSubject.asObservable();

  setFontSize(size: number) {
    this.fontSizeSubject.next(size);
  }

  getFontSize(): number {
    return this.fontSizeSubject.value;
  }
}