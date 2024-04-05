import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/service/model.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-model',
  standalone: true,
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss',
  imports: [HeaderComponent, RouterLink]
})
export class ModelComponent implements OnInit {
  modelList: any = []
  constructor(private router: ActivatedRoute, private modelService: ModelService) { }
  ngOnInit(): void {
    this.router.params.subscribe((res: any) => {
      console.log(res.id)
      this.modelService.getModelSingle(res.id).subscribe((res: HttpResponse<any>) => {
        this.modelList = res.body?.model
      })
    })
  }

}
