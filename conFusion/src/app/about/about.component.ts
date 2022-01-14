import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeadersService} from '../services/leaders.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  selectedLeader: Leader;

  constructor(private leadersService: LeadersService) { }

  ngOnInit(): void {
    this.leaders = this.leadersService.getLeaders();
  }

  onSelect(leader: Leader){
    this.selectedLeader = leader;
  }

}
