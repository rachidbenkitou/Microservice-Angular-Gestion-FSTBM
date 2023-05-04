import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etudiants-form',
  templateUrl: './etudiants-form.component.html',
  styleUrls: ['./etudiants-form.component.scss']
})

export class EtudiantsFormComponent {
  mode: string | undefined;
  constructor(private route: ActivatedRoute) {}
ngOnInit() {
    console.log(this.route); // ActivatedRoute
    const path =this.route.snapshot.routeConfig?.path;
    this.mode = path?.includes("edit") ? "edit": path?.includes("add") ? "add":undefined;
  }
}
