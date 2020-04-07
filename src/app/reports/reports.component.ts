import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {ReportsServiceService} from 'src/app/reports-service.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  treeNodes:TreeNode[];
  constructor(private reportService:ReportsServiceService) { }

  ngOnInit(): void {
    this.reportService.getReports().then(nodes=>this.treeNodes=nodes);
  }

}
