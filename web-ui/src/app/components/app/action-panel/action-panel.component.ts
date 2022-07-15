import {Component, OnInit} from '@angular/core';
import {ActionService} from "../../../services/ActionService";

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.css']
})
export class ActionPanelComponent implements OnInit {

  showAttackWindow: boolean = false;
  queue?: string[];
  currentActor?: string;

  constructor(private actionService: ActionService) {
    actionService.getCurrentActor().subscribe((q) => {
      this.currentActor = q.currentActor;
      this.queue = q.queue;
    });
  }

  ngOnInit(): void {
  }

}
