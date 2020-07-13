import { Injectable } from '@angular/core';

//all the json files to be imported here 
import services from '../../content/homePage/services.json';
import team from '../../content/homePage/team.json';


@Injectable({
  providedIn:'root'
})
export class ContentReader{
  
 getserviceData(){
    return services;
 }

 getTeamData(){
  return team;
 }
}
