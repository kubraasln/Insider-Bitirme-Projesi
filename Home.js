
// SECTİON
document.querySelectorAll('ul a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
      
      var targetId = this.getAttribute('href'); // Hedef bölümün id'sini al
      
      // Tüm bölümleri gizle
      document.querySelectorAll('section').forEach(function(section) {
        section.style.display = 'none';
      });
      
      // Hedef bölümü görünür hale getir
      document.querySelector(targetId).style.display = 'flex';
    });
  });


  // SLİDE

  // Sayfa aşağı kaydırıldığında ögelerin görünür hale gelmesini sağlayan fonksiyon
function handleScroll() {
  const elements = document.querySelectorAll('.slide-in , .sign-in-input');

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      element.classList.add('visible');
    }
  });
}

// Scroll olayını dinleyen event listener
window.addEventListener('scroll', handleScroll);

// Sayfa yüklendiğinde ögelerin ilk kontrolünü yapmak için
handleScroll();


// kaydırma

const links = document.querySelectorAll('nav ul li a , button');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Password Sign Up
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
  if (passwordInputLogin.type === 'password') {
    passwordInputLogin.type = 'text';
    togglePasswordLogin.classList.remove('fa-eye-slash');
    togglePasswordLogin.classList.add('fa-eye');
  } else {
    passwordInputLogin.type = 'password';
    togglePasswordLogin.classList.remove('fa-eye');
    togglePasswordLogin.classList.add('fa-eye-slash');
  }
});

// Password Login

const passwordInputLogin = document.getElementById('passwordInputLogin');
const togglePasswordLogin = document.getElementById('togglePasswordLogin');

togglePasswordLogin.addEventListener('click', () => {
  if (passwordInputLogin.type === 'password') {
    passwordInputLogin.type = 'text';
    togglePasswordLogin.classList.remove('fa-eye-slash');
    togglePasswordLogin.classList.add('fa-eye');
  } else {
    passwordInputLogin.type = 'password';
    togglePasswordLogin.classList.remove('fa-eye');
    togglePasswordLogin.classList.add('fa-eye-slash');
  }
});


// Login POPUP

function toggle() {
  var login = document.getElementById('login');
  var blur = document.getElementById('sign-up');
  var h1Sign = document.getElementById('sign');
  var footer = document.querySelector('footer')
  var header = document.getElementById('header');
  var main = document.getElementById('main');
  var learnMore = document.getElementById('learn-more');



  header.classList.toggle('active');
  main.classList.toggle('active');
  learnMore.classList.toggle('active');
  blur.classList.toggle('active');
  login.classList.toggle('active');
  h1Sign.classList.toggle('active');
  footer.classList.toggle('active');
  document.body.style.overflow = 'hidden';
  event.preventDefault();
}

// CLOSE BTN
  var closeBtn = document.getElementById('close-icon-login');
  closeBtn.addEventListener('click', () => {
  var closeLogin = document.getElementById('login');
  var blur = document.getElementById('sign-up');
  var h1Sign = document.getElementById('sign');
  var footer =document.querySelector('footer');
  var header = document.getElementById('header');
  var main = document.getElementById('main');
  var learnMore = document.getElementById('learn-more');

  header.classList.remove('active');
  main.classList.remove('active');
  learnMore.classList.remove('active');
  closeLogin.classList.remove('active');
  blur.classList.remove('active');
  h1Sign.classList.remove('active');
  footer.classList.remove('active');
  document.body.style.overflow = '';

  event.preventDefault();
});

// Uyarı mesajları
document.getElementById("login").addEventListener("submit", function(event) {
  event.preventDefault(); // Formun gönderimini engeller

  var userName = document.getElementsByName("userName").value;
  var password = document.getElementsByName("password").value;

  if (userName === "") {
      alert("Lütfen e-posta adresinizi girin!");
  } else if (password === "") {
      alert("Lütfen şifrenizi girin!");
  } else {
      alert("Giriş başarılı!\n\nKullanıcı Adı: " + userName + "\nŞifre: " + password);
  }
});

document.getElementById("sign-up").addEventListener("submit", function(event) {
  var userName = document.getElementById("userName").value;
  var eMail = document.getElementById("eMail").value;
  var password = document.getElementById("password").value;
  var websiteLink = document.getElementById("websiteLink").value;

  if (userName === "") {
      event.preventDefault();
      alert("Lütfen kullanıcı adınızı girin!");
  } else if (eMail === "") {
      event.preventDefault();
      alert("Lütfen e-posta adresinizi girin!");
  } else if (password === "") {
      event.preventDefault();
      alert("Lütfen şifrenizi girin!");
  } else if (password.length < 6) {
      event.preventDefault();
      alert("Şifreniz en az 6 karakter olmalıdır!");
  } else if (websiteLink === "") {
      event.preventDefault();
      alert("Lütfen web sitenizin linkini girin!");
  } else {
      alert("Kaydınız başarıyla tamamlandı!\n\nKullanıcı Adı: " + userName + "\nE-posta: " + eMail + "\nŞifre: " + password + "\nWebsite Linki: " + websiteLink);
  }
});
