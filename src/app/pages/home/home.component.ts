import { Component, OnInit } from '@angular/core';
import { MovieapiService } from 'src/app/service/movieapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  constructor(private service:MovieapiService){}
bannerResult:any=[];
trendingmovieResult:any=[];
ActionMovieResult:any=[];
adventureMovieResult:any=[];
animitatonMovieResult:any=[];
ComedymovieResult:any=[];
documentrymovieResult:any=[];
ScienceFictionMovieResult:any=[];
ThrillerMovieResult:any=[];


  ngOnInit(): void {
    this.bannerdata();
    this.trendingdata();
    this.actionMovie();
    this.adventuremovie();
    this.animationMovie();
    this.comedyMovie();
    this.documenterymovie();
    this.Sciencefictionmovie();
    this.ThrillerMovies();
  }


bannerdata(){
  this.service.bannerApiData().subscribe((result)=>{
    console.log(result,'bannerresult#');
    this.bannerResult=result.results;
  })
}
trendingdata(){
  this.service.trendingmoviedata().subscribe((res)=>{
    console.log(res,'trendingmovieResult#');
    // this.trendingmovieResult;
    this.trendingmovieResult=res.results;
  })
}
//Action
actionMovie(){
  this.service.fectchActionmovies().subscribe((result)=>{
    console.log(result,'actionMovie#');
    this.ActionMovieResult=result.results;
  })
}
//adventure
adventuremovie(){
  this.service.fectchadventuremovies().subscribe((result)=>{
    console.log(result,'adventure#');
    this.adventureMovieResult=result.results;
  })
}
//animation
animationMovie(){
  this.service.fectchActionmovies().subscribe((result)=>{
    console.log(result,'animation#');
    this.animitatonMovieResult=result.results;
  })
}
//Comedy
comedyMovie(){
  this.service.fectchacomedymovies().subscribe((result)=>{
    console.log(result,'Comedy#');
    this.ComedymovieResult=result.results;
  })
}
//documentery
documenterymovie(){
  this.service.fectchdocumenterymovies().subscribe((result)=>{
    console.log(result,'documentery#');
    this.documentrymovieResult=result.results;
  })
}
//sciencefiction
Sciencefictionmovie(){
  this.service.fectchScienceFictionmovies().subscribe((result)=>{
    console.log(result,'sciencefiction#');
    this.ScienceFictionMovieResult=result.results;
  })
}
//thriller
ThrillerMovies(){
  this.service.fectchThrillernmovies().subscribe((result)=>{
    console.log(result,'thriller#');
    this.ThrillerMovieResult=result.results;
  })
}
}