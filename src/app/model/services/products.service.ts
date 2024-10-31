import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[]=[
    {id: 1, name: 'LIVRO CINCO PASSOS ', price: 5.0, description: 'livro romance', image: '../romance.jpg'},
    {id: 2, name: 'LIVRO IT', price: 7.0, description: 'livro terror', image: '../terror.jpg'},
    {id: 3, name: 'LIVRO BERNADETTE', price: 3.0, description: 'livro comedia', image: '../comedia.webp'},
    {id: 4, name: 'LIVRO CINCO PASSOS ', price: 5.0, description: 'livro romance', image: '../romance.jpg'},
    {id: 5, name: 'LIVRO IT', price: 7.0, description: 'livro terror', image: '../terror.jpg'},
    {id: 6, name: 'LIVRO BERNADETTE', price: 3.0, description: 'livro comedia', image: '../comedia.webp'},
    {id: 7, name: 'LIVRO BERNADETTE', price: 3.0, description: 'livro comedia', image: '../comedia.webp'},
    {id: 8, name: 'LIVRO CINCO PASSOS ', price: 5.0, description: 'livro romance', image: '../romance.jpg'},
    {id: 9, name: 'LIVRO IT', price: 7.0, description: 'livro terror', image: '../terror.jpg'},
    {id: 10, name: 'LIVRO BERNADETTE', price: 3.0, description: 'livro comedia', image: '../comedia.webp'},
  ];
  getProducts():Iproducts[]{
    return this.products;
  }
}
