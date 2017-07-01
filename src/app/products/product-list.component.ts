import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    // This is just a test code the best practice is to put the data into a service.
    // This will be converted to service in the future.This is a demo app for filtering list of data
    products: IProduct[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "july",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "april",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "march",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "future",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "future",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },  {
        "productId": 15,
        "productName": "Sports Car",
        "productCode": "EBX-0095",
        "releaseDate": "future",
        "description": "The best car money can buy",
        "price": 1.90,
        "starRating": 4.8,
        "imageUrl": "https://openclipart.org/image/90px/svg_to_png/118531/1297818301.png"
    },
    {
        "productId": 22,
        "productName": "tv",
        "productCode": "TBX-0022",
        "releaseDate": "future",
        "description": "15-inch old tv",
        "price": 11.55,
        "starRating": 4.7,
        "imageUrl": "https://openclipart.org/image/90px/svg_to_png/11295/Machovka-TV-set-2.png"
    },
    {
        "productId": 14,
        "productName": "Hamburger",
        "productCode": "GMG-0042",
        "releaseDate": "future",
        "description": "Hamburger that taste good",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "https://openclipart.org/image/90px/svg_to_png/280262/gramzon-Hamburger-remix-monster-brain.png"
    }
];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = '';
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
}
