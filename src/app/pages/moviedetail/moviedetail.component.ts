import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieapiService } from 'src/app/service/movieapi.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit{
getMoviedetailsResult:any;
getMovievideoResult:any;
getMoviecastResult:any;

  constructor(private service:MovieapiService,private router:ActivatedRoute){}

  ngOnInit(): void {
    let getparamid=this.router.snapshot.paramMap.get('id');
    console.log(getparamid,"getParamId#");
  this.getmovie(getparamid);
  this.getvideo(getparamid);
  this.getmoviecase(getparamid);
    
  }

  getmovie(id:any){
    this.service.getmoviedetails(id).subscribe((result)=>{
      console.log(result,"getmoviedetails#");
      this.getMoviedetailsResult=result;
    })
  }
  getvideo(id:any){
    this.service.getmovieVideo(id).subscribe((result)=>{
      console.log(result,'getmovievideo#');
      result.results.forEach((element:any)=>{
        if(element.type=="Trailer"){
          this.getMovievideoResult=element.key;
        }
      })
  
    });
  }
  getmoviecase(id:any){
    this.service.getmoviecast(id).subscribe((result)=>{
      console.log(result,'moviecast#');
      this.getMoviecastResult=result.cast;
    });
  }
}
