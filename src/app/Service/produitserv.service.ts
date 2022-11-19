import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimentation } from '../classalim/alimentation';
import { Produit } from '../Produitclass/produit';
const URL = 'http://localhost:3000/produits';
const URL2 = 'http://localhost:5200/alimentations';
@Injectable({
  providedIn: 'root'
})
export class ProduitservService {

  constructor(private http:HttpClient) { }
  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
    }
    getAlimentation():Observable<Alimentation[]>{
      return this.http.get<Alimentation[]>(URL2);
      }
      getProduitsById(id:any):Observable<Produit[]>{
        return this.http.get<Produit[]>(URL)+id;
        }
}
