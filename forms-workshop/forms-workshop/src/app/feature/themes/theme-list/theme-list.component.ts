import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, mergeMap, startWith, tap } from 'rxjs/operators';
import { ITheme } from '../../../core/interfaces';
import { ThemeService } from '../../../core/theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit, AfterViewInit {

  themeList: ITheme[];

  searchControl = new FormControl('', { updateOn: 'blur' });

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(startWith(''),
      tap(searchTerm => console.log(searchTerm)),
      mergeMap(searchTerm => this.themeService.loadThemeList(searchTerm)))
      .subscribe(themeList => {
        this.themeList = themeList;
      });
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }

}
