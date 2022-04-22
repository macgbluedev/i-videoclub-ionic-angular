import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  API_MOVIES_URL: string = 'http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog';
  // private movies: Movie[];

  constructor(public http: HttpClient) {
    // this.movies = [
    //   {
    //     id: 1,
    //     title: 'El padrino',
    //     year: '1972',
    //     director: 'Francis Ford Coppola',
    //     poster: 'assets/images/el_padrino.jpg',
    //     synopsis: 'Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Freddie (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de "Il consigliere" Tom Hagen (Robert Duvall), se niega a intervenir en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.'
    //   },
    //   {
    //     id: 2,
    //     title: 'El Padrino. Parte II',
    //     year: '1974',
    //     director: 'Francis Ford Coppola',
    //     poster: 'assets/images/el_padrino_2.jpg',
    //     synopsis: 'Continuación de la historia de los Corleone por medio de dos historias paralelas: la elección de Michael Corleone como jefe de los negocios familiares y los orígenes del patriarca, el ya fallecido Don Vito, primero en Sicilia y luego en Estados Unidos, donde, empezando desde abajo, llegó a ser un poderosísimo jefe de la mafia de Nueva York.'
    //   },
    //   {
    //     id: 3,
    //     title: 'La lista de Schindler',
    //     year: '1993',
    //     director: 'Steven Spielberg',
    //     poster: 'assets/images/la_lista_de_schindler.jpg',
    //     synopsis: 'Segunda Guerra Mundial (1939-1945). Oskar Schindler (Liam Neeson), un hombre de enorme astucia y talento para las relaciones públicas, organiza un ambicioso plan para ganarse la simpatía de los nazis. Después de la invasión de Polonia por los alemanes (1939), consigue, gracias a sus relaciones con los nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente. Su gerente (Ben Kingsley), también judío, es el verdadero director en la sombra, pues Schindler carece completamente de conocimientos para dirigir una empresa.'
    //   },
    //   {
    //     id: 4,
    //     title: 'Pulp Fiction',
    //     year: '1994',
    //     director: 'Quentin Tarantino',
    //     poster: 'assets/images/pulp_fiction.jpg',
    //     synopsis: 'Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín. '
    //   },
    //   {
    //     id: 5,
    //     title: 'Cadena perpetua',
    //     year: '1994',
    //     director: 'Frank Darabont',
    //     poster: 'assets/images/cadena_perpetua.jpg',
    //     synopsis: 'Acusado del asesinato de su mujer, Andrew Dufresne (Tim Robbins), tras ser condenado a cadena perpetua, es enviado a la cárcel de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros de prisión, especialmente de Red (Morgan Freeman), el jefe de la mafia de los sobornos.'
    //   }
    // ]
   }

  getMovies(): Observable<Movie[]> {
     //return this.movies;
     return this.http.get<Movie[]>(this.API_MOVIES_URL);
  }

  getMovie(id): Observable<Movie> {
    //return this.movies.find(movie => movie.id == id);
    return this.http.get<Movie>(this.API_MOVIES_URL + '/' + id);
 }
}
