import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private menu: any[] = [
    {
      title: 'Home',
      class: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Progress bars', url: '/progress' },
        { title: 'Charts', url: '/charts' },
        { title: 'Promises', url: '/promises' },
        { title: 'RxJs', url: '/rxjs' }
      ]
    }
  ];

  constructor() { }

  public getMenu(): any[] {
    return this.menu;
  }
}
