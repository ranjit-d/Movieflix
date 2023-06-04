import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieapiService } from 'src/app/service/movieapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
Searchresult:any=[]
  SearchForm=new FormGroup({
    'movieName':new FormControl(null)
  });
  constructor(private service:MovieapiService){}

  ngOnInit(): void {
    
  }
  submitform(){
    console.log(this.SearchForm.value,'searchform#');
    this.service.getsearchmovie(this.SearchForm.value).subscribe((result)=>{
      console.log(result,'searchmovie##');
this.Searchresult=result.results;
    })
  }

}
