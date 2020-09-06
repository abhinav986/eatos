import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormArray } from '@angular/forms';

import { UserFoodConstantsService } from '../../services/user-food-constants.service';
import { UserBlogsService } from '../../services/user-blogs.service';
import { SnackbarService } from '../../../LandingPages/services/snackbar.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { EndPointURlConstants } from '../../../shared/constants/endPoint-url.constants';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  toppings = new FormControl();
  cusines: any = [];
  categories: any = [];
  deliveryPartners: any = [];
  otherInfos: any = ['Home Delivery', 'Full Bar', 'Indoor Sitting', 'Parking', 'Buffet'];
  userId: any = '';
  id: any = '';
  fileStaticUrl = this.endPoint.baseUrl + this.endPoint.uploadFileUrl + '/';

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  fileVideoData: File = null;
  previewVideoUrl: any = null;
  fileVideoUploadProgress: string = null;
  uploadedVideoFilePath: string = null;

  dishTable: FormGroup;
  dishscontrol: FormArray;
  offerTable: FormGroup;
  offercontrol: FormArray;
  tagTable: FormGroup;
  tagcontrol: FormArray;

  formGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    contactNumber: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    timing: new FormControl('', Validators.required),
    priceRange: new FormControl('', Validators.required),
    category: new FormControl('None', Validators.required),
    cusine: new FormControl('None', Validators.required),
    deliveryPartner: new FormControl('None', Validators.required),
    otherInfo: new FormControl('None', Validators.required),
    overall: new FormControl('', Validators.required),
    ambience: new FormControl('', Validators.required),
    food: new FormControl('', Validators.required),
    service: new FormControl('', Validators.required),
    hygine: new FormControl('', Validators.required),
    review: new FormControl('', Validators.required),
    ourRecomandation: new FormControl('', Validators.required),
  });

  constructor(private blogService: UserBlogsService,
    private foodConstantSerivce: UserFoodConstantsService,
    public snackBar: SnackbarService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private endPoint: EndPointURlConstants) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if (this.id !== undefined) {
      this.getBlogDeatils(this.id);
    }

    this.getAllFoodCategory();
    this.getAllFoodCusines();
    this.getAllDeliveryPartners();

    this.dishTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.offerTable = this.fb.group({
      tableRowsOffer: this.fb.array([])
    });
    this.tagTable = this.fb.group({
      tableRows: this.fb.array([])
    });
  }

  ngAfterOnInit() {
    this.dishscontrol = this.dishTable.get('tableRows') as FormArray;
    this.offercontrol = this.offerTable.get('tableRowsOffer') as FormArray;
    this.tagcontrol = this.tagTable.get('tableRows') as FormArray;
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      dishName: [''],
      dishDescription: [''],
      offer: [''],
      validUpto: [''],
      tag: [''],
      isEditable: [true]
    });
  }


  addRow(value) {
    switch (value) {
      case 'dish':
        {
          const control =  this.dishTable.get('tableRows') as FormArray;
          control.push(this.initiateForm());
        }
        break;
      case 'offer':
        {
          const control =  this.offerTable.get('tableRowsOffer') as FormArray;
          control.push(this.initiateForm());
        }
        break;
      case 'tag':
      {
        const control =  this.tagTable.get('tableRows') as FormArray;
        control.push(this.initiateForm());
      }
      break;
    }
  }

  deleteRow(index: number, value) {
    switch (value) {
      case 'dish':
        {
          const control =  this.dishTable.get('tableRows') as FormArray;
          control.removeAt(index);
        }
        break;
      case 'offer':
        {
          const control =  this.offerTable.get('tableRowsOffer') as FormArray;
          control.removeAt(index);
        }
        break;
      case 'tag':
        {
          const control =  this.tagTable.get('tableRows') as FormArray;
          control.removeAt(index);
        }
        break;
    }
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
    const control = this.dishTable.get('tableRows') as FormArray;
    return control;
  }

  get getFormControlsOffer() {
    const control = this.offerTable.get('tableRowsOffer') as FormArray;
    return control;
  }

  get getFormControlsTag() {
    const control = this.tagTable.get('tableRows') as FormArray;
    return control;
  }

  getBlogDeatils(id) {
    this.blogService.getUserBlogByBlogId(id).subscribe((res) => {
      const data = res.data;
      this.id = data._id;
      this.previewUrl = data.coverImage;
      this.previewVideoUrl = data.videoUrl;
      this.formGroup = new FormGroup({
        title: new FormControl(data.title, Validators.required),
        description: new FormControl(data.description, Validators.required),
        name: new FormControl(data.name, Validators.required),
        email: new FormControl(data.email, [Validators.required, Validators.email]),
        address: new FormControl(data.address, Validators.required),
        city: new FormControl(data.city, Validators.required),
        contactNumber: new FormControl(data.contactNumber, Validators.required),
        website: new FormControl(data.website, Validators.required),
        timing: new FormControl(data.timing, Validators.required),
        priceRange: new FormControl(data.priceRange, Validators.required),
        category: new FormControl(data.category, Validators.required),
        cusine: new FormControl(data.cusine, Validators.required),
        deliveryPartner: new FormControl(data.deliveryPartner, Validators.required),
        otherInfo: new FormControl(data.otherInfo, Validators.required),
        overall: new FormControl(data.overall, Validators.required),
        ambience: new FormControl(data.ambience, Validators.required),
        food: new FormControl(data.food, Validators.required),
        service: new FormControl(data.service, Validators.required),
        hygine: new FormControl(data.hygine, Validators.required),
        review: new FormControl(data.review, Validators.required),
        ourRecomandation: new FormControl(data.ourRecomandation, Validators.required),
      });

      // dishes edit
      const dishes = data.dishes;
      const control =  this.dishTable.get('tableRows') as FormArray;
      dishes.forEach(element => {
        control.push(this.fb.group({
          dishName: [element.dishName],
          dishDescription: [element.dishDescription],
          isEditable: [true]
        })
        );
      });

      // offers edit
      const offers = data.offers;
      const controlOffer =  this.offerTable.get('tableRowsOffers') as FormArray;
      offers.forEach(element => {
        controlOffer.push(this.fb.group({
          offer: [element.offer],
          validUpto: [element.validUpto],
          isEditable: [true]
        })
        );
      });

      // tag edit
      const tags = data.tags;
      const controlTag =  this.tagTable.get('tableRows') as FormArray;
      tags.forEach(element => {
        controlTag.push(this.fb.group({
          tag: [element.tag],
          isEditable: [true]
        })
        );
      });
    });
  }

  getAllFoodCategory() {
    this.foodConstantSerivce.getAllFoodCategory().subscribe((res) => {
      this.categories = res.data;
    });
  }

  getAllFoodCusines() {
    this.foodConstantSerivce.getAllFoodCusines().subscribe((res) => {
      this.cusines = res.data;
    });
  }

  getAllDeliveryPartners() {
    this.foodConstantSerivce.getAllDeliveryPartners().subscribe((res) => {
      this.deliveryPartners = res.data;
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
    body.dishes = this.dishTable.value.tableRows;
    body.offers = this.offerTable.value.tableRowsOffer;
    body.tags = this.tagTable.value.tableRows;

    if (this.id !== undefined) {
      body._id = this.id;
    }
    this.blogService.createUserBlog(body).subscribe((res) => {
      const data = res.data;
      this.id = data._id;
      this.snackBar.openSnackBar(res.message, 'success', 'success-snackbar');
    }, (err) => {
      this.snackBar.openSnackBar(err.error.message, 'error', 'warning-snackbar');
    });
  }

  fileImageProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
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
    this.blogService.uploadImage(formData).subscribe(res => {
      this.uploadedFilePath = res.path;
      this.snackBar.openSnackBar(res.message, 'success', 'success-snackbar');
    });

  }

  fileVideoProgress(fileInput: any) {
    this.fileVideoData = fileInput.target.files[0] as File;
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
    this.blogService.uploadImage(formData).subscribe(res => {
      this.uploadedVideoFilePath = res.path;
      this.snackBar.openSnackBar(res.message, 'success', 'success-snackbar');
    });
  }
}
