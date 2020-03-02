import { Routes } from "@angular/router";
import { ToolbarComponent } from "../core/toolbar/toolbar.component";
import { FooterComponent } from "../core/footer/footer.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "heroes" },
  { path: "", component: ToolbarComponent, outlet: "header" },
  { path: "", component: FooterComponent, outlet: "footer" },
  {
    path: "heroes",
    loadChildren: () =>
      import("../heroes/heroes.module").then(m => m.HeroesModule)
  },
  {
    path: "villains",
    loadChildren: () =>
      import("../villains/villains.module").then(m => m.VillainsModule)
  }
];
