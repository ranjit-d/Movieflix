import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  constructor(private http: HttpClient) { }

  baseurl = 'http://api.themoviedb.org/3'
  apikey = '08cc33bd5ae3a747598ce2ad84376e66'

  //bannerapidata
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }
  // bannerapi='${this.baseurl}/trending/all/week?api_key=${this.apikey}'


  // trendingmoviedata
  trendingmoviedata(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  //searchmovies
  getsearchmovie(data: any): Observable<any> {
    console.log(data, 'movie#')
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
  }

  //moviedetails
  getmoviedetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }
  //getmovievideo
  getmovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  //moviecase
  getmoviecast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  //action
  fectchActionmovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  //adventure

  fectchadventuremovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  //animation
  fectchanimationemovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }
  //comedy
  fectchacomedymovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }
  //documentery
  fectchdocumenterymovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }
  //Science-fiction:878;
  fectchScienceFictionmovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  //thriller:53;
  fectchThrillernmovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
}


