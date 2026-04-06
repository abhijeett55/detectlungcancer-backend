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

    const payload = {
      smoking: Number(this.formData.smoking),
      yellow_fingers: Number(this.formData.yellow_fingers),
      anxiety: Number(this.formData.anxiety),
      peer_pressure: Number(this.formData.peer_pressure),
      chronic_disease: Number(this.formData.chronic_disease),
      fatigue: Number(this.formData.fatigue),
      allergy: Number(this.formData.allergy),
      wheezing: Number(this.formData.wheezing),
      alcohol_consuming: Number(this.formData.alcohol_consuming),
      coughing: Number(this.formData.coughing),
      shortness_of_breath: Number(this.formData.shortness_of_breath),
      swallowing_difficulty: Number(this.formData.swallowing_difficulty),
      chest_pain: Number(this.formData.chest_pain)
    };

    this.service.predict(payload).subscribe({
      next: (res: any) => {
        console.log("Response:", res);
        this.result = res.result;
      },
      error: (err) => {
        console.error("Error:", err);
        this.result = 'Error connecting to server';
      }
    });
  }
}
