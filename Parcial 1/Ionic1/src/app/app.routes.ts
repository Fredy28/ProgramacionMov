import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./pages/buttons/buttons.page').then( m => m.ButtonsPage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./pages/cards/cards.page').then( m => m.CardsPage)
  },
  {
    path: 'chips',
    loadComponent: () => import('./pages/chips/chips.page').then( m => m.ChipsPage)
  },
  {
    path: 'fab-button',
    loadComponent: () => import('./pages/fab-button/fab-button.page').then( m => m.FabButtonPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'items',
    loadComponent: () => import('./pages/items/items.page').then( m => m.ItemsPage)
  },
  {
    path: 'contactos',
    loadComponent: () => import('./pages/contactos/contactos.page').then( m => m.ContactosPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./pages/grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'inputs',
    loadComponent: () => import('./pages/inputs/inputs.page').then( m => m.InputsPage)
  },
  {
    path: 'dates-pickers',
    loadComponent: () => import('./pages/dates-pickers/dates-pickers.page').then( m => m.DatesPickersPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./pages/toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./pages/segment/segment.page').then( m => m.SegmentPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'examen',
    loadComponent: () => import('./pages/examen/examen.page').then( m => m.ExamenPage)
  },
];
