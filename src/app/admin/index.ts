import { CategoryActionComponent } from "./action/category-action/category-action.component";
import { ContactActionComponent } from "./action/contact-action/contact-action.component";
import { CustomerActionComponent } from "./action/customer-action/customer-action.component";
import { NewActionComponent } from "./action/new-action/new-action.component";
import { PlaceActionComponent } from "./action/place-action/place-action.component";
import { TourActionComponent } from "./action/tour-action/tour-action.component";
import { CategoryListComponent } from "./pages/category-list/category-list.component";
import { ContactListComponent } from "./pages/contact-list/contact-list.component";
import { CustomerListComponent } from "./pages/customer-list/customer-list.component";
import { NewListComponent } from "./pages/new-list/new-list.component";
import { PlaceListComponent } from "./pages/place-list/place-list.component";
import { TourListComponent } from "./pages/tour-list/tour-list.component";

export const pages = [TourListComponent, CategoryListComponent,
    PlaceListComponent,
    CustomerListComponent,
    ContactListComponent,
    NewListComponent];
export const actions = [CategoryActionComponent, TourActionComponent,
    NewActionComponent,
    CustomerActionComponent,
    ContactActionComponent,
    PlaceActionComponent];
//list
export * from "./pages/category-list/category-list.component";
export * from "./pages/tour-list/tour-list.component";
export * from "./pages/contact-list/contact-list.component";
export * from "./pages/customer-list/customer-list.component";
export * from "./pages/new-list/new-list.component";
export * from "./pages/place-list/place-list.component";
//action

export * from "./action/category-action/category-action.component";
export * from "./action/contact-action/contact-action.component";
export * from "./action/customer-action/customer-action.component";
export * from "./action/new-action/new-action.component";
export * from "./action/place-action/place-action.component";
export * from "./action/tour-action/tour-action.component";
