import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrandComponent } from './brand/brand.component';
import { ModelComponent } from './model/model.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        data: {
            title: "KASE"
        }
    },
    {
        path: 'brand/:id',
        component: BrandComponent,
        data: {
            title: "KASE"
        }
    },
    {
        path: 'model/:id',
        component: ModelComponent,
        data: {
            title: "KASE"
        }
    },
    {
        path: 'productsingle/:id',
        component: SingleproductComponent,
        data: {
            title: "KASE"
        }
    },
    {
        path: 'pdfviewer/:id',
        component: PdfviewerComponent,
        data: {
            title: "KASE"
        }
    },
    {
        path: 'products',
        component: ProductsComponent,
        data: {
            title: "KASE"
        }
    },


];
