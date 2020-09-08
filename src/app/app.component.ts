import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ComboBox } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title = 'combo-temp';
  form: FormGroup;
  data = [
    {
      name: 'Active'
    },
    {
      name: 'Inactive'
    }
  ];

  public localFields: Object = { text: 'name' };

  @ViewChild('comboBox') comboBox: ComboBox;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      statusId: ['Active']
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.comboBox.dataSource = this.data;

      this.comboBox.dataBind();
    }, 2000);
  }


}
