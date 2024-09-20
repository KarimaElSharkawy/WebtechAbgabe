import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BackendService } from '../shared/backend.service'; 
import { Eintraege } from '../shared/eintraege';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { FontSizeService } from '../shared/font-size.service';
import { ContrastService } from '../shared/contrast.service';

@Component({
  selector: 'app-eintraege',
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule, MatIcon],
  templateUrl: './eintraege.component.html',
  styleUrls: ['./eintraege.component.css']
})
export class EintraegeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'eintraege', 'datum', 'edit', 'delete'];
  dataSource: Eintraege[] = [];
  editingEntry: Eintraege | null = null;
  editText: string = '';
  editError: boolean = false;  // Fehlerindikator

  fontSize = 16;
  lineHeight = 1.5; 
  showFontSizeControl = false;
  highContrast = false;

  constructor(private bs: BackendService, public fontSizeService: FontSizeService, public contrastService: ContrastService) {}

  ngOnInit(): void {
    this.readAllEintraege();

    this.fontSizeService.fontSize$.subscribe(size => {
      this.fontSize = size;
      this.lineHeight = size / 16;
    });

    this.contrastService.contrast$.subscribe(isHighContrast => {
      this.highContrast = isHighContrast;
    });
  }

  readAllEintraege() {
    this.bs.getAllEntries().subscribe({
      next: (response) => {
        this.dataSource = response; 
      },
      error: (err) => console.error('Fehler beim Abrufen der Einträge:', err),
    });
  }

  deleteEntry(id: number) {
    this.bs.deleteEntry(id).subscribe({
      next: () => {
        console.log(`Eintrag mit ID ${id} wurde gelöscht.`);
        this.dataSource = this.dataSource.filter(eintrag => eintrag.id !== id);
        this.readAllEintraege(); 
      },
      error: (err) => console.error('Fehler beim Löschen des Eintrags:', err)
    });
  }
  
  startEdit(entry: Eintraege): void {
    this.editingEntry = entry;
    this.editText = String(entry.eintraege);
  }

  updateEntry(): void {
    if (this.editText.trim() === '') {
      this.editError = true;  // Fehler setzen, wenn das Feld leer ist
    } else if (this.editingEntry) {
      this.bs.updateEntry(this.editingEntry.id!, { ...this.editingEntry, eintraege: this.editText }).subscribe({
        next: () => {
          console.log(`Eintrag mit ID ${this.editingEntry!.id} wurde aktualisiert.`);
          this.editingEntry = null;
          this.editText = '';
          this.editError = false;  // Fehler zurücksetzen
          this.readAllEintraege(); 
        },
        error: (err) => console.error('Fehler beim Aktualisieren des Eintrags:', err)
      });
    } else {
      console.error('EditingEntry ist null.');
    }
  }

  toggleContrast(): void {
    const newContrast = !this.highContrast;
    this.highContrast = newContrast;
  }

  toggleFontSizeControl(): void {
    this.showFontSizeControl = !this.showFontSizeControl;
  }

  changeFontSize(event: any): void {
    const newSize = event.target.value;
    this.fontSizeService.setFontSize(newSize);
  }
}
