import { Injectable } from '@angular/core';

//all the json files to be imported here 
import services from '../../content/homePage/services.json';
import team from '../../content/homePage/team.json';
import home_data from '../../content/homePage/home-carousel.json';
import faq from '../../content/homePage/faq.json'

@Injectable({
  providedIn:'root'
})
export class ContentReader{

  getHomeData(){
    return home_data
  }
  
 getserviceData(){
    return services;
 }

 getTeamData(){
  return team;
 }

 getFaqData() {
  return faq;
 }

}
