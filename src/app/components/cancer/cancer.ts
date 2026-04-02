import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CancerService } from '../../services/cancer-service';

@Component({
  selector: 'app-cancer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cancer.html',
  styleUrl: './cancer.css',
})
export class Cancer {

  result: string = '';

  formData = {
  smoking: null,
  yellow_fingers: null,
  anxiety: null,
  peer_pressure: null,
  chronic_disease: null,
  fatigue: null,
  allergy: null,
  wheezing: null,
  alcohol_consuming: null,
  coughing: null,
  shortness_of_breath: null,
  swallowing_difficulty: null,
  chest_pain: null
};

  constructor(private service: CancerService) {}

  onSubmit() {
    this.service.predict(this.formData).subscribe({
      next: (res: any) => {
        this.result = res.result;
      },
      error: (err) => {
        console.error(err);
        this.result = 'Error connecting to server';
      }
    });
  }
}
