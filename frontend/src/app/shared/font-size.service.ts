import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  private fontSizeSubject = new BehaviorSubject<number>(16); // Standard Schriftgröße
  fontSize$ = this.fontSizeSubject.asObservable();

  setFontSize(size: number) {
    const maxSize = 16 * 2; // 140% der Standardgröße
    const newSize = size > maxSize ? maxSize : size;
    this.fontSizeSubject.next(newSize);
  }

  getFontSize(): number {
    return this.fontSizeSubject.value;
  }
}
