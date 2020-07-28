import { Component } from '@angular/core';
import { jour } from './classes/jour-prevision';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  token = '4aeb46c105f83aa13425ef939344a61fb3cbba3ee576283a6dc118d7d605db70';
  temperature = 0;
  pluie = 0;
  vent = 0;
  nomVille = 'Paris';
  codeTemps = 0;
  previsions: Array<jour> = [];
  insee: string;
  listeConditions: Map<number, string>;
  listeImages: Map<number, string>;
  codeTempsTableau = [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 20, 21, 22, 30, 31, 32, 40, 41, 42, 43, 44, 45, 46, 47, 48, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 100, 101, 102, 103, 104, 105, 106, 107, 108, 120, 121, 122, 123, 124, 125, 126, 127, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 140, 141, 142, 210, 211, 212, 220, 221, 222, 230, 231, 232, 235]
  descriptionTemps = ['Ensoleillé', 'Peu nuageux', 'Ciel voilé', 'Nuageux', 'Très nuageux', 'Couvert', 'Brouillard', 'Brouillard givrant', 'Pluie faible', 'Pluie modérée', 'Pluie forte', 'Pluie faible verglaçante', 'Pluie modérée verglaçante', 'Pluie forte verglaçante', 'Bruine', 'Neige faible', 'Neige modérée', 'Neige forte', 'Pluie et neige mêlées faibles', 'Pluie et neige mêlées modérées', 'Pluie et neige mêlées fortes', 'Averses de pluie locales et faibles', 'Averses de pluie locales', 'Averses locales et fortes', 'Averses de pluie faibles', 'Averses de pluie', 'Averses de pluie fortes', 'Averses de pluie faibles et fréquentes', 'Averses de pluie fréquentes', 'Averses de pluie fortes et fréquentes', 'Averses de neige localisées et faibles', 'Averses de neige localisées', 'Averses de neige localisées et fortes', 'Averses de neige faibles', 'Averses de neige', 'Averses de neige fortes', 'Averses de neige faibles et fréquentes', 'Averses de neige fréquentes', 'Averses de neige fortes et fréquentes', 'Averses de pluie et neige mêlées localisées et faibles', 'Averses de pluie et neige mêlées localisées', 'Averses de pluie et neige mêlées localisées et fortes', 'Averses de pluie et neige mêlées faibles', 'Averses de pluie et neige mêlées', 'Averses de pluie et neige mêlées fortes', 'Averses de pluie et neige mêlées faibles et nombreuses', 'Averses de pluie et neige mêlées fréquentes', 'Averses de pluie et neige mêlées fortes et fréquentes', 'Orages faibles et locaux', 'Orages locaux', 'Orages fort et locaux', 'Orages faibles', 'Orages', 'Orages forts', 'Orages faibles et fréquents', 'Orages fréquents', 'Orages forts et fréquents', 'Orages faibles et locaux de neige ou grésil', 'Orages locaux de neige ou grésil', 'Orages locaux de neige ou grésil', 'Orages faibles de neige ou grésil', 'Orages de neige ou grésil', 'Orages de neige ou grésil', 'Orages faibles et fréquents de neige ou grésil', 'Orages fréquents de neige ou grésil', 'Orages fréquents de neige ou grésil', 'Orages faibles et locaux de pluie et neige mêlées ou grésil', 'Orages locaux de pluie et neige mêlées ou grésil', 'Orages fort et locaux de pluie et neige mêlées ou grésil', 'Orages faibles de pluie et neige mêlées ou grésil', 'Orages de pluie et neige mêlées ou grésil', 'Orages forts de pluie et neige mêlées ou grésil', 'Orages faibles et fréquents de pluie et neige mêlées ou grésil', 'Orages fréquents de pluie et neige mêlées ou grésil', 'Orages forts et fréquents de pluie et neige mêlées ou grésil', 'Pluies orageuses', 'Pluie et neige mêlées à caractère orageux', 'Neige à caractère orageux', 'Pluie faible intermittente', 'Pluie modérée intermittente', 'Pluie forte intermittente', 'Neige faible intermittente', 'Neige modérée intermittente', 'Neige forte intermittente', 'Pluie et neige mêlées', 'Pluie et neige mêlées', 'Pluie et neige mêlées', 'Averses de grêle'];
  descriptionImages = ['summer', 'summer', 'partly-cloudy-day', 'clouds', 'clouds', 'clouds', 'windy-weather', 'windy-weather', 'partly-cloudy-rain', 'rain', 'rain', 'rain', 'rain', 'rain', 'rain', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'rain', 'rain', 'rain', 'rain', 'rain', 'rain', 'rain', 'rain', 'rain', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'storm', 'storm', 'cloud-lighting', 'storm', 'cloud-lighting', 'cloud-lighting', 'storm', 'storm', 'cloud-lighting', 'storm', 'storm', 'storm', 'storm', 'storm', 'storm', 'storm', 'storm', 'storm', 'storm', 'storm', 'cloud-lighting', 'storm', 'storm', 'cloud-lighting', 'storm', 'storm', 'cloud-lighting', 'storm', 'snow', 'snow', 'partly-cloudy-rain', 'partly-cloudy-rain', 'rain', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'hail'];

  constructor() {
    this.listeConditions = new Map();
    this.listeImages = new Map();
    this.remplirMap();
    this.getINSEE();

  }

  getMeteoActuelles() {
    const requete = new XMLHttpRequest();
    requete.open('GET', 'https://api.meteo-concept.com/api/forecast/nextHours?token=' + this.token + '&insee=' + this.insee);
    requete.responseType = 'text';
    requete.onload = () => {
      const reponseRequete = requete.response;
      const previsionsHeures = JSON.parse(reponseRequete);
      this.temperature = previsionsHeures.forecast[0].temp2m;
      this.pluie = previsionsHeures.forecast[0].probarain;
      this.vent = previsionsHeures.forecast[0].wind10m;
      this.codeTemps = previsionsHeures.forecast[0].weather;
      this.listeImages.get(this.codeTempsTableau[this.codeTemps]);

    };
    requete.send();

  }
  getPrevisionsMeteo() {
    const requete = new XMLHttpRequest();
    requete.open('GET', 'https://api.meteo-concept.com/api/forecast/daily?token='+ this.token +'&insee=' + this.insee);
    requete.responseType = 'text';
    requete.onload = () => {
      const reponseRequete = requete.response;
      const previsionsJours = JSON.parse(reponseRequete);
      this.previsions = []; //vide le tableau
      for (let i = 0; i < 7; i++) {
        const temporaire = new jour();
        temporaire.vitesseVent = previsionsJours.forecast[i + 1].wind10m;
        temporaire.probaPluie = previsionsJours.forecast[i + 1].probarain;
        temporaire.tempMax = previsionsJours.forecast[i + 1].tmax;
        temporaire.tempMini = previsionsJours.forecast[i + 1].tmin;
        temporaire.codeTempsPrevisions = previsionsJours.forecast[i + 1].weather;
        this.previsions.push(temporaire);
      }
    }
    requete.send();
  }

  getINSEE() {
    const requete = new XMLHttpRequest();
    requete.open('GET', 'https://api.meteo-concept.com/api/location/cities?token='+this.token+'&search=' + this.nomVille)
    requete.responseType = 'text';
    requete.onload = () => {
      const reponseRequete = requete.response;
      const listeVilles = JSON.parse(reponseRequete);
      this.insee = listeVilles.cities[0].insee;
      this.getMeteoActuelles();
      this.getPrevisionsMeteo();
    };
    requete.send();
  }

  remplirMap() {
    for (let i = 0; i < this.codeTempsTableau.length; i++) {
      this.listeConditions.set(this.codeTempsTableau[i], this.descriptionTemps[i]);
      this.listeImages.set(this.codeTempsTableau[i], this.descriptionImages[i])
    }
}


}

