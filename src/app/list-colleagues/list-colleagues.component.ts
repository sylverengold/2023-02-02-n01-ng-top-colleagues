import { Component } from '@angular/core';

@Component({
  selector: 'tc-list-colleagues',
  templateUrl: './list-colleagues.component.html',
  styleUrls: ['./list-colleagues.component.scss']
})
export class ListColleaguesComponent {



  list_colleagues: any[] = [
    {id: '200',name: 'Attila', score: 65, imgg: "http://www.mine2sly.fr/public/Attila.jpg"},
    {id: '201',name: 'Raspoutine', score: 88, imgg: "http://www.mine2sly.fr/public/Raspoutine.jpg"},
    {id: '202',name: 'Ghandi', score: 110, imgg: "http://www.mine2sly.fr/public/Gandhi.jpg"},
    {id: '203',name: 'Elvis', score: 140, imgg: "http://www.mine2sly.fr/public/Elvis.jpg"},
    {id: '204',name: 'Néfertiti', score: 120, imgg: "http://www.mine2sly.fr/public/Nefertiti.jpg"},
    {id: '205',name: 'Einstein', score: 111, imgg: "http://www.mine2sly.fr/public/Einstein.jpg"},
    {id: '206',name: 'Lincoln', score: 107, imgg: "http://www.mine2sly.fr/public/Lincoln.jpg"},
    {id: '207',name: 'Marie-Antoinette', score: 98, imgg: "http://www.mine2sly.fr/public/Marie-Antoinette.jpg"},
  ]
}
