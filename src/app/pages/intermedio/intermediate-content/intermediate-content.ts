import { Component, OnInit } from '@angular/core';
import { IntermediateItem, IntermediateModel } from '../../../models/intermediateModels/Intermediate-Model';
import { ActivatedRoute } from '@angular/router';
import { IntermediateService } from '../../../services/intermedio/intermediate-service';

@Component({
  selector: 'app-intermediate-content',
  standalone: true,
  imports: [],
  templateUrl: './intermediate-content.html',
  styleUrl: './intermediate-content.css',
})
export class IntermediateContent implements OnInit {
  currentItem?: IntermediateItem;

  constructor(
    private route: ActivatedRoute,
    private intermediateService: IntermediateService
  ) {}

  ngOnInit(): void {

    const sectionId = this.route.snapshot.paramMap.get('sectionId');
    const itemId = this.route.snapshot.paramMap.get('itemId');

    this.intermediateService.getItermediateSections()
      .subscribe((sections: IntermediateModel[]) => {

        const section = sections.find(s => s.id === sectionId);

        if (section) {
          this.currentItem = section.items.find(item => item.id === itemId);
        }

      });
  }

}
