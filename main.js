// BUTTON: Change Color on Click
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  colorBtn.style.backgroundColor = randomColor;
  colorBtn.textContent = `Color: ${randomColor}`;
});

// BUTTON: Secret action on double click
const secretBtn = document.getElementById('secretBtn');
secretBtn.addEventListener('dblclick', () => {
  alert('🎉 Secret unlocked! You found the double-click magic! 🎉');
});

// IMAGE GALLERY
const galleryImages = [
  'https://picsum.photos/400/200?random=1',
  'https://picsum.photos/400/200?random=2',
  'https://picsum.photos/400/200?random=3',
  'https://picsum.photos/400/200?random=4',
];
let currentIndex = 0;

const galleryImg = document.getElementById('galleryImg');
document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  galleryImg.src = galleryImages[currentIndex];
});
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  galleryImg.src = galleryImages[currentIndex];
});

// TABS
const tabs = document.querySelectorAll('.tabBtn');
const contents = document.querySelectorAll('.tabContent');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab' + tab.dataset.tab).classList.add('active');
  });
});

// FORM VALIDATION
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateEmail(email) {
  // Simple email regex for demo
  return /\S+@\S+\.\S+/.test(email);
}

emailInput.addEventListener('input', () => {
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
  } else {
    emailError.textContent = '';
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters';
  } else {
    passwordError.textContent = '';
  }
});

form.addEventListener('submit', (event) => {
  let valid = true;

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
    valid = false;
  }

  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters';
    valid = false;
  }

  if (!valid) {
    event.preventDefault(); // Prevent form submission if invalid
  }
});

