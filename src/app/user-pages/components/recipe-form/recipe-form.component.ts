import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormArray } from '@angular/forms';
import {UserFoodConstantsService} from '../../services/user-food-constants.service';
import {UserRecipesService} from '../../services/user-recipes.service';
import {SnackbarService} from '../../../LandingPages/services/snackbar.service';
import { Router , ActivatedRoute, NavigationEnd  } from '@angular/router';
import {EndPointURlConstants} from '../../../shared/constants/endPoint-url.constants';
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  constructor(private recipeService: UserRecipesService,
              private foodConstantSerivce: UserFoodConstantsService,
              public snackBar: SnackbarService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private endPoint: EndPointURlConstants) { }

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  userId: any = '';
  id: any = '';
  categories: any = [];
  courses: any = [];
  cusines: any = [];
  fileStaticUrl = this.endPoint.baseUrl + this.endPoint.uploadFileUrl + '/';
  // 'http://localhost:3000/v1/upload/';

  formGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    serveFor: new FormControl('', Validators.required),
    preparationTime: new FormControl('', Validators.required),
    cookingTime: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    category: new FormControl('None'),
    course: new FormControl('None'),
    cusine: new FormControl('None'),
  });

  ingredientsTable: FormGroup;
  ingredientscontrol: FormArray;

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  fileVideoData: File = null;
  previewVideoUrl: any = null;
  fileVideoUploadProgress: string = null;
  uploadedVideoFilePath: string = null;

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if ( this.id !== undefined) {
      this.getRecipeDeatils(this.id);
    }

    this.getAllFoodCategory();
    this.getAllFoodCourses();
    this.getAllFoodCusines();

    this.ingredientsTable = this.fb.group({
      tableRows: this.fb.array([])
    });
  }

  ngAfterOnInit() {
    this.ingredientscontrol = this.ingredientsTable.get('tableRows') as FormArray;
  }

  initiateIngreientsForm(): FormGroup {
    return this.fb.group({
      name: [''],
      quantity: [''],
      unit: [''],
      isEditable: [true]
    });
  }

  addRow() {
    const control =  this.ingredientsTable.get('tableRows') as FormArray;
    control.push(this.initiateIngreientsForm());
  }

  deleteRow(index: number) {
    const control =  this.ingredientsTable.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  editRow(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }

  doneRow(group: FormGroup) {
    group.get('isEditable').setValue(false);
  }

  // saveIngredientsDetails() {
  //   console.log(this.ingredientsTable.value);
  // }

  get getFormControls() {
    const control = this.ingredientsTable.get('tableRows') as FormArray;
    return control;
  }

  getRecipeDeatils(id) {
    this.recipeService.getUserRecipeById(id).subscribe((res) => {
      const data = res['data'];
      this.id = data._id;
      this.previewUrl = data.coverImage;
      this.previewVideoUrl = data.videoUrl;
      this.formGroup = new FormGroup({
        title: new FormControl(data.title, Validators.required),
        description: new FormControl(data.description, Validators.required),
        serveFor: new FormControl(data.serveFor, Validators.required),
        preparationTime: new FormControl(data.preparationTime, Validators.required),
        cookingTime: new FormControl(data.cookingTime, Validators.required),
        type: new FormControl(data.type, Validators.required),
        category: new FormControl(data.category, Validators.required),
        course: new FormControl(data.course, Validators.required),
        cusine: new FormControl(data.cusine, Validators.required)
      });

      // ingerdients edit
      const indgridents = data.ingredients;
      const control =  this.ingredientsTable.get('tableRows') as FormArray;
      indgridents.forEach(element => {
        control.push(this.fb.group({
          name: [element.name],
          quantity: [element.quantity],
          unit: [element.unit],
          isEditable: [true]
        })
        );
      });

    });
  }

  getAllFoodCategory() {
    this.foodConstantSerivce.getAllFoodCategory().subscribe((res) => {
      this.categories = res['data'];
    });
  }

  getAllFoodCourses() {
    this.foodConstantSerivce.getAllFoodCourses().subscribe((res) => {
      this.courses = res['data'];
    });
  }

  getAllFoodCusines() {
    this.foodConstantSerivce.getAllFoodCusines().subscribe((res) => {
      this.cusines = res['data'];
    });
  }

  submit() {
    const body = this.formGroup.value;
    // if (this.uploadedFilePath === null){
    //   this.snackBar.openSnackBar('Please upload Cover image', 'error', 'warning-snackbar');
    // }
    if (this.uploadedFilePath !== null) {
      body.coverImage = this.fileStaticUrl + this.uploadedFilePath;
    } else {
      body.coverImage = this.previewUrl;
    }

    if (this.uploadedVideoFilePath !== null) {
      body.videoUrl = this.fileStaticUrl + this.uploadedVideoFilePath;
    } else {
      body.videoUrl = this.previewVideoUrl;
    }
    body.youtubeVideoId = '8Lp8qXu5mvo';
    body.ingredients = this.ingredientsTable.value.tableRows;

    if ( this.id !== undefined) {
      body._id = this.id;
    }
    this.recipeService.createUserRecipe(body).subscribe((res) => {
      const data = res['data'];
      this.id = data._id;
      this.snackBar.openSnackBar(res['message'], 'success', 'success-snackbar');
    }, (err) => {
      this.snackBar.openSnackBar(err.error.message, 'error', 'warning-snackbar');
    });
  }

fileImageProgress(fileInput: any) {
      this.fileData =  fileInput.target.files[0] as File;
      this.preview();
}

preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      this.previewUrl = reader.result;
    };
}

uploadImage() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.recipeService.uploadImage(formData).subscribe(res => {
      this.uploadedFilePath = res['path'];
      this.snackBar.openSnackBar(res['message'], 'success', 'success-snackbar');
    });

}

fileVideoProgress(fileInput: any) {
      this.fileVideoData =  fileInput.target.files[0] as File;
      this.previewVideo();
}

previewVideo() {
    // Show preview
    const mimeType = this.fileVideoData.type;
    // if (mimeType.match(/image\/*/) == null) {
    //   return;
    // }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileVideoData);
    reader.onload = (event) => {
      this.previewVideoUrl = reader.result;
    };
}

uploadVideo() {
    const formData = new FormData();
    formData.append('file', this.fileVideoData);
    this.recipeService.uploadImage(formData).subscribe(res => {
      this.uploadedVideoFilePath = res['path'];
      this.snackBar.openSnackBar(res['message'], 'success', 'success-snackbar');
    });
}

}
