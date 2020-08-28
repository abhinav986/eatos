import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Router , ActivatedRoute, NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {

constructor(private router: Router,
            private recipesService: RecipesService,
            private route: ActivatedRoute) {
              this.routeEvent(this.router); }

  title: any = 'Recipes';
  menu: any = {};
  type: any = '';
  recipes: any = [];

  ngOnInit() {
  }

  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log(e);

        this.menu = this.route.snapshot.url[0].path;
        this.type = this.route.snapshot.params['type'];
        let filter = {};
        if (this.menu === 'recipe' ) {
          this.title =  'ALL REICPES';
        } else if (this.menu === 'cusines' ) {
          this.title =  'ALL CUSINES';
        }

        if (this.menu === 'recipe' && this.type !== 'all') {
          filter = {category: this.type};
          this.title = this.type.toUpperCase() + ' REICPES';
        } else if (this.menu === 'cusines' && this.type !== 'all') {
          filter = {cusine: this.type};
          this.title = this.type.toUpperCase() + ' CUSINES';
        }
        this.filterRecipes(filter);
      }
    });
  }

  filterRecipes(filter) {
    this.recipesService.filterRecipe(filter).subscribe((res) => {
      this.recipes = res['data'];
     // console.log(this.recipes);
    });
  }

  // getAllRecipes() {
  //   this.recipesService.getAllRecipes().subscribe((res) => {
  //     this.recipes = res['data'];
  //     console.log(this.recipes);
  //     if (res[status]) {
  //       this.recipes = res['data'];
  //       console.log(this.recipes);
  //     }
  //   });
  // }



}
