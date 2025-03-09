const therapistSelect = document.getElementById('therapist');
const therapistDetails = document.getElementById('therapist-details');

therapistSelect.addEventListener('change', () => {
  const selectedTherapist = therapistSelect.value;

  const therapistData = {
    therapist1: 'Dr. Sayee Sharma - 3+ years of experience, Starts @ Rs.750 per hour, Languages: English, Kannada, Hindi, Expertise: Stress management, Anxiety disorder, Personality disorder',
    therapist2: 'Dr. Kruthi Roy - 5+ years of experience, Starts @ Rs.950 per hour, Languages: English, Kannada, Hindi, Tamil, Expertise: Depression disorder, Anxiety disorder, Bipolar disorder',
    therapist3: 'Dr. Arushi Rao - 2+ years of experience, Starts @ Rs.650 per hour, Languages: English, Kannada, Telugu, Tulu, Expertise: Depression disorder, Negative thinking, OCD',
    therapist4: 'Dr. Shruthi Singh - 7+ years of experience, Starts @ Rs.1150 per hour, Languages: English, Punjabi, Hindi, Expertise: Stress management, Anxiety disorder, Depression disorder',
    therapist5: 'Dr. Pragya Bhide - 4+ years of experience, Starts @ Rs.850 per hour, Languages: English, Kannada, Marathi, Expertise: Anxiety disorder, Bipolar disorder'
  };

  therapistDetails.innerHTML = therapistData[selectedTherapist]; 
});

// Mood Meter 
const moodForm = document.getElementById('mood-meter-form');
const moodSubmitButton = document.getElementById('mood-submit');
const moodMessage = document.getElementById('mood-message');

moodSubmitButton.addEventListener('click', () => {
  const selectedMoods = Array.from(document.querySelectorAll('input[name="mood"]:checked')).map(radio => radio.value);

  if (selectedMoods.length === 0) {
    moodMessage.textContent = "Please select at least one mood.";
    return;
  }

  let moodMessageText = "You selected: ";
  moodMessageText += selectedMoods.join(", "); 
  moodMessageText += ". ";

  if (selectedMoods.includes("happy") || selectedMoods.includes("calm")) {
    moodMessageText += "That's great! Keep up the positive vibes.";
  } else {
    moodMessageText += "It's okay to feel this way. Remember to practice self-care and reach out for support if needed.";
  }

  moodMessage.textContent = moodMessageText;
});

// Appointment Form Handling 
const appointmentForm = document.getElementById('appointment-form');

appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const selectedTherapist = document.getElementById('therapist').value;
  const selectedDate = document.getElementById('date').value;
  const selectedTime = document.getElementById('time').value;

  // Basic Form Validation
  if (selectedTherapist === "") {
    alert("Please select a therapist.");
    return;
  }

  if (selectedDate === "") {
    alert("Please select a date.");
    return;
  }

  if (selectedTime === "") {
    alert("Please select a time.");
    return;
  }

  // Display a confirmation message
  alert(`Appointment booked with ${selectedTherapist} on ${selectedDate} at ${selectedTime}.`);

  // In a real-world scenario, you would:
  // 1. Send the form data to a server using AJAX (e.g., with Fetch API)
  // 2. Handle server responses (e.g., success/failure messages)
  // 3. Potentially store appointment data in local storage (for a basic implementation)
});