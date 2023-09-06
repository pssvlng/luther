import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bible-help',
  templateUrl: './bible-help.component.html',
  styleUrls: ['./bible-help.component.css']
})
export class BibleHelpComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<BibleHelpComponent>) { }

  ngOnInit() {
  }

}
