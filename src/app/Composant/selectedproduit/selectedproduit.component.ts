import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitservService } from 'src/app/Service/produitserv.service';

@Component({
  selector: 'app-selectedproduit',
  templateUrl: './selectedproduit.component.html',
  styleUrls: ['./selectedproduit.component.css']
})
export class SelectedproduitComponent implements OnInit {
  data:any={}
  idProduit!: any;
 
  constructor(private activatedRoute: ActivatedRoute,private service:ProduitservService) {
    this.idProduit = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
   
   /* if(this.idProduit){
      this.produit=this.produitList.find(produit=>produit.id==this.idProduit)
    }*/

    this.getProduct();
  }
  getProduct(){
    this.service.getProduitsById(this.idProduit).subscribe(res=>this.data=res)
  }


}
