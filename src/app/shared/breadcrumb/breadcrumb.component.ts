import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [
  ]
})
export class BreadcrumbComponent implements OnInit {

  public title: string = '';

  constructor(private router: Router, private browserTitle: Title, private meta: Meta) {
    this.getRouteData().subscribe(data => {
      this.title = data.title;
      this.browserTitle.setTitle(this.title);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: data.description
      };
      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit(): void {
  }

  private getRouteData() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }

}
