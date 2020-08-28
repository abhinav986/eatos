import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Router , ActivatedRoute, NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private router: Router,
              private recipesService: RecipesService,
              private route: ActivatedRoute) {
       }
  steps: any = [];
  ingredients: any = [];
  nutrition: any = [];
  isDirectionCollapsed: boolean = false;
  isIngridientCollapsed: boolean = false;
  isNutritionCollapsed: boolean = false;
  rating: number =3.4;
  recipeId: any = '';
  recipeDetails: any;
  ngOnInit() {
    this.recipeId = this.route.snapshot.params['id'];
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.nutrition = [{param: 'CALORIES', value: 25},
    {param: 'SODIUM', value: 1},
    {param: 'FAT', value: 5},
    {param: 'PROTEIN', value: 10},
    {param: 'CARBS', value: 1},
    {param: 'FIBER', value: 0}];

    this.ingredients = ['3 cups white rice' ,
    '1 cup urad dal (split, skinless black gram)' ,
    '3/4 teaspoon fenugreek seeds' ,
    'Salt (to taste)' ,
    'Ghee (or vegetable, canola, or sunflower oil)' ];
   this.steps = [
        'Gather the ingredients',
        ' Wash the rice and urad dal well and drain. Add the fenugreek seeds to the mix and add enough water to the bowl to cover the mixture by about 2 inches. Soak overnight',
        'The next morning, drain all the water from the rice mixture. Add to the food processor and process—adding very little water if needed—until a smooth yet slightly grainy paste has formed',
        'Transfer to a large mixing bowl and gradually add enough water to make a batter. The consistency of the batter should be such that it thinly coats a spoon dipped in it',
        'Add salt to taste and keep the dosa batter aside in a warm, dark spot, covered, for 12 to 24 hours. After this fermentation, stir the batter well. It will have thickened to coat a spoon thickly. It is now ready to make dosas',
        'Put some ghee or oil in a small bowl and keep ready. You will also need a small bowl of ice-cold water, a large, flat nonstick pan, paper towels, a ladle, a spatula, and a basting brush',
        'Fold one sheet of paper towel into a thick rectangle and dip lightly into the bowl of ghee or oil. Squeeze out any excess and then rub the paper towel all over the surface of the pan to lightly grease. The ghee or oil should barely be visible in the pan. Turn on the heat to medium-high',
        'Add a scant ladleful of batter to the center of the pan, much like you would for a pancake',
      'Begin to spread the batter in sweeping circular motions to form a pancake of roughly 8-inch diameter. Do not be alarmed if the dosa develops tiny holes as you spread the batter. This is normal',
    'The dosa is almost done. Fold it in thirds like a parcel and allow to cook for 30 seconds more'
   ];
    this.getRecipeDetails();
  }


    getRecipeDetails() {
    this.recipesService.getRecipeById(this.recipeId).subscribe((res) => {
      this.recipeDetails = res['data'];
      console.log(this.recipeDetails);
    });
  }
}
