document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const needs = document.getElementById('needs').value;
  
    // Perform calculations and generate exercise recommendations based on the provided data
    const recommendations = generateExerciseRecommendations(age, weight, height, needs);
  
    // Display the recommendations on the page
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.textContent = recommendations;
  
    // Display the image of the final exercise pattern
    const exerciseImageDiv = document.getElementById('exerciseImage');
    exerciseImageDiv.innerHTML = '';
    const randomExercise = generateRandomExercisePattern();
    const imageUrl = getExercisePatternImage(randomExercise);
    const exerciseImage = document.createElement('img');
    exerciseImage.src = imageUrl;
    exerciseImage.alt = randomExercise;
    exerciseImage.width = 400;
    exerciseImageDiv.appendChild(exerciseImage);
  });
  
  function generateRandomExercisePattern() {
    const exercisePatterns = ['Lunges', 'Push-ups', 'Squats', 'Side Planks', 'Planks', 'Glute Bridge'];
    return exercisePatterns[Math.floor(Math.random() * exercisePatterns.length)];
  }
  
  function getExercisePatternImage(exercisePattern) {
    const imageMappings = {
      'Lunges': 'lunges.jpg',
      'Push-ups': 'push-ups.jpg',
      'Squats': 'squats.jpg',
      'Side Planks': 'side-planks.jpg',
      'Planks': 'planks.jpg',
      'Glute Bridge': 'glute-bridge.jpg'
    };
    return imageMappings[exercisePattern];
  }
  
  function generateExerciseRecommendations(age, weight, height, needs) {
    // Calculate Body Mass Index (BMI)
    const bmi = weight / ((height / 100) ** 2);
    
    // Define recommendation variables
    let intensity = '';
    let duration = '';
    let specificRecommendation = '';
  
    // Determine exercise intensity based on BMI
    if (bmi < 18.5) {
      intensity = 'Low';
    } else if (bmi >= 18.5 && bmi < 25) {
      intensity = 'Moderate';
    } else {
      intensity = 'High';
    }
  
    // Determine exercise duration based on age
    if (age >= 65) {
      duration = '30 minutes to 1 hour';
    } else {
      duration = '20 to 30 minutes';
    }
  
    // Provide specific recommendations based on needs
    if (needs.trim().toLowerCase().includes('cardio')) {
      specificRecommendation += '- Engage in aerobic exercises like brisk walking, cycling, or swimming.\n';
    }
    if (needs.trim().toLowerCase().includes('strength')) {
      specificRecommendation += '- Incorporate strength training exercises using light weights or resistance bands.\n';
    }
    if (needs.trim().toLowerCase().includes('flexibility')) {
      specificRecommendation += '- Include stretching exercises such as yoga or Pilates to improve flexibility.\n';
    }
    
    // Add a randomly selected exercise pattern to specific recommendations
    const exercisePatterns = ['Lunges', 'Push-ups', 'Squats', 'Side Planks', 'Planks', 'Glute Bridge'];
    const randomExercise = exercisePatterns[Math.floor(Math.random() * exercisePatterns.length)];
    specificRecommendation += `- Recommended Exercise: shown in image below`;
  
    // Generate the final recommendation message
    let recommendationMessage = `Exercise Recommendations:\n`;
    recommendationMessage += `- Intensity: ${intensity}\n`;
    recommendationMessage += `- Duration: ${duration}\n`;
    if (specificRecommendation.trim() !== '') {
      recommendationMessage += `- Specific Recommendations:\n${specificRecommendation}`;
    } else {
      recommendationMessage += `- No specific needs mentioned.\n`;
    }
  
    return recommendationMessage;
  }
  