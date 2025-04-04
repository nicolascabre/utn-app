import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
@Input() characters!:{
id:string,
name:string,
image:string,
species:string,
gender:string,
}


}

