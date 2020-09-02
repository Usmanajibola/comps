import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private el:ElementRef) { }



  ngOnInit(): void {
    console.log(this.el.nativeElement);
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal() {
    this.close.emit();
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

}
