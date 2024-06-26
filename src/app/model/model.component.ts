import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/service/model.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { NgxSpinnerService } from 'ngx-spinner';
import { FooterComponent } from "../footer/footer.component";
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-model',
  standalone: true,
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss',
  imports: [HeaderComponent, RouterLink, FooterComponent, NgxPaginationModule, RouterLink]
})
export class ModelComponent implements OnInit {
  modelList: any = []
  p: number = 0
  constructor(private router: ActivatedRoute, private modelService: ModelService, private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.spinner.show()
    this.router.params.subscribe((res: any) => {
      this.modelService.getModelSingle(res.id).subscribe((res: HttpResponse<any>) => {
        this.modelList = res.body?.model
        this.spinner.hide()
      })
    })
  }

}
