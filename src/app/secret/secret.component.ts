import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { saveAs } from 'file-saver';
 
@Component({
  selector: 'app-secret',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secret.component.html',
  styleUrl: './secret.component.scss'
})
export class SecretComponent {
  blur:number = 5;
  hereIndex:number = 0;
  hereTexts:string[] = ['here', 'here', 'where?', 'where am i?', 'what has been found?', 'what is happening?', 'i don\t know where i am', 'i think i\'m lost', 'is there any escape?', 'i don\'t know what to do', 'i think it\'s hopeless', 'there\'s no hope', 'unless...?'];
  showDot:boolean = false;

  blurClick():void {
    this.blur--;

    if (this.blur <= 0) {
      if (this.hereIndex < this.hereTexts.length - 1) {
        this.hereIndex++;
      }
      else {
        this.showDot = true;
      }
      this.blur = 5;
    }
  }

  downloadFile():void {
    const blob = new Blob(['73°27\'18.6"S 126°22\'31.2"W\n\nhttps://[?].ascyt.com/'], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'found.txt');
  }
}
