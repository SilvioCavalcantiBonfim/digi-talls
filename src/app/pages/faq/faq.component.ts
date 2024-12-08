import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, debounceTime, map } from 'rxjs';
import { IAccordion } from 'src/app/components/accordion/models/Accordion.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'dt-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  protected filterValue: FormControl = new FormControl('');
  private filterSubject = new BehaviorSubject('');

  searchValue = '';

  constructor(private contentService: ContentService) {}
  ngOnInit(): void {
    this.filterValue.valueChanges
      .pipe(debounceTime(500))
      .subscribe((v) => this.filterSubject.next(v));
  }

  faqs$ = combineLatest([this.contentService.faqs$, this.filterSubject]).pipe(
    map(([faqs, filter]) => faqs.filter((faq) => this.filterFaqs(faq, filter)))
  );

  private filterFaqs(faq: IAccordion, filter: string) {
    return (
      this.compareStrings(faq.title, filter) ||
      this.compareStrings(faq.content, filter)
    );
  }

  private compareStrings(str1: string, str2: string): boolean {
    const normalizeString = (str: string) =>
      str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
    const normalizedStr1 = normalizeString(str1);
    const normalizedStr2 = normalizeString(str2);
    return normalizedStr1.includes(normalizedStr2);
  }
}
