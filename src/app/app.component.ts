import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent
{
  title = 'Mon blog';

  posts = [
    {
      title: 'Premier post',
      content: 'Votre AppComponent contiendra l\'array des posts, et il le passera à un component PostListComponent".',
      loveIts: 10,
      created_at: new Date('04/01/2019 10:28:00')
    },
    {
      title: 'Second post',
      content: 'Votre PostListComponent affichera un PostListItemComponent pour chaque post dans larray quil a reçu',
      loveIts: 0,
  created_at: new Date('04/12/2019 21:15')
    },
    {
      title: 'Un autre post',
      content: 'Les PostListItemComponent auront des boutons qui permettent d\'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n\'a pas besoin d\'être remontée au component parent',
      loveIts: -1,
      created_at: new Date()
    }
  ];


}
