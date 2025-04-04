import { CharactersComponent } from './../../components/characters/characters.component';
import { Component, OnInit } from '@angular/core';
import { charactersservice } from './characters.service';
@Component({
  selector: 'app-charaters',
  imports: [CharactersComponent],
  templateUrl: './charaters.component.html',
  styleUrl: 
  './charaters.component.css',
  providers:[charactersservice]
})
export class CharatersComponent implements OnInit{
  characters: any =[]
  constructor(private charactersservice: charactersservice){}
  ngOnInit() {this.charactersservice.getCharacters( ).then((data: any)=>{
      this.characters= data;
    })

      
  }
}