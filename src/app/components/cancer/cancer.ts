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
    smoking: 1,
    yellow_fingers: 1,
    anxiety: 1,
    peer_pressure: 1,
    chronic_disease: 1,
    fatigue: 1,
    allergy: 1,
    wheezing: 1,
    alcohol_consuming: 1,
    coughing: 1,
    shortness_of_breath: 1,
    swallowing_difficulty: 1,
    chest_pain: 1
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
