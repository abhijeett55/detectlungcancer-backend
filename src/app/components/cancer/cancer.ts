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
  prediction: number | null = null;
  probability: number | null = null;
  loading: boolean = false;

  formData: any = {
    smoking: '',
    yellow_fingers: '',
    anxiety: '',
    peer_pressure: '',
    chronic_disease: '',
    fatigue: '',
    allergy: '',
    wheezing: '',
    alcohol_consuming: '',
    coughing: '',
    shortness_of_breath: '',
    swallowing_difficulty: '',
    chest_pain: ''
  };

  constructor(private service: CancerService) {}

  onSubmit() {

    // 🚨 Validation (prevent empty/null issues)
    for (let key in this.formData) {
      if (this.formData[key] === '' || this.formData[key] === null) {
        this.result = '⚠️ Please fill all fields';
        return;
      }
    }

    const payload = Object.fromEntries(
      Object.entries(this.formData).map(([key, value]) => [key, Number(value)])
    );

    console.log("📤 Payload:", payload);

    this.loading = true;
    this.result = '';
    this.probability = null;

    this.service.predict(payload).subscribe({
      next: (res: any) => {
      console.log("✅ Response:", res);

        this.result = res.result;
        this.prediction = res.prediction;   // ✅ ADD THIS
        this.probability = res.probability ?? null;

        this.loading = false;
      },
      error: (err) => {
        console.error("❌ Error:", err);
        this.result = 'Error connecting to server';
        this.loading = false;
      }
    });
  }
}