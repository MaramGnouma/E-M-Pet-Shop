import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../Produitclass/produit';
const URL = 'http://localhost:3000/produits';
@Injectable({
  providedIn: 'root'
})
export class ProduitservService {

  constructor(private http:HttpClient) { }
  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
    }
}
