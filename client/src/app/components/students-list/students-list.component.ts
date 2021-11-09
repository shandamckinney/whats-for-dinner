import { Student } from './../../shared/student';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Recipe } from 'src/app/shared/recipe';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit {
  StudentData: any = [];
  dataSource: MatTableDataSource<Recipe>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'type', 'ingredients', 'rating', 'cookTime', 'action'];

  constructor(private studentApi: ApiService) {
    this.studentApi.GetRecipes().subscribe(data => {
      this.StudentData = data;
      this.dataSource = new MatTableDataSource<Recipe>(this.StudentData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deleteStudent(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.studentApi.DeleteRecipe(e._id).subscribe()
    }
  }

}