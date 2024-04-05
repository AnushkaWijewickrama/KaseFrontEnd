import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ProductDetailsService } from '../shared/service/productdetails.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-pdfviewer',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule ],
  templateUrl: './pdfviewer.component.html',
  styleUrl: './pdfviewer.component.scss'
})
export class PdfviewerComponent implements OnInit {
  selectedPdf:string = ''
  constructor (private route:ActivatedRoute,private productDetailsService: ProductDetailsService) {}
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      console.log(res)
      this.productDetailsService.query(res.id).subscribe((res:HttpResponse<any>)=>{
        this.selectedPdf=res.body.productdetails[0]?.pdf
        console.log(res.body.productdetails[0]) 
      })
    })
  }

}
