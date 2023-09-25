import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { RelationsService } from 'src/services/relations'

@Component({
  selector: 'relation-list',
  templateUrl: './relation-list.component.html',
  styleUrls: ['./relation-list.component.scss']
})
export class RelationListComponent implements OnInit {
  constructor(
    private router: Router,
    private service: RelationsService
  ) {}

  ngOnInit(): void {}

  get relations() {
    return this.service.relations
  }

  get progress() {
    return this.service.progress
  }
}
