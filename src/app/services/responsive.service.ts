import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResponsiveService {
    constructor(private breakpointObserver: BreakpointObserver) { }

    public isMobile: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
        .pipe(
            map(result => result.matches),
            shareReplay()
        );
    public isMedium: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
        .pipe(
            map(result => result.matches),
            shareReplay()
        );
    public isHandset: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
        .pipe(
            map(result => result.matches),
            shareReplay()
        );
}