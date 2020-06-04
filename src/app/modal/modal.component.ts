import {Component, Input, OnInit, OnDestroy, DoCheck} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})


export class ModalComponent implements OnInit, OnDestroy,DoCheck{
  @Input() added: boolean;
  @Input() rem: boolean;
input = '';
  remove = false;

  constructor() {
  }

  ngOnInit(): void {





  }
  ngOnDestroy() {

}

ngDoCheck() {
  console.log(this.rem);
  if (this.added === true) {
    this.input = 'Успешно добавлено';
  }
  else if (this.rem === true){
    this.input = 'Успешно удалено';
  }
}
}

