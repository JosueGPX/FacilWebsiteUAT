(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

//Floating button
var isAnimating = false;
var isOpen = false;
var button = document.querySelector(".sticky-menu-container .outer-button");
var menu = document.querySelector(".sticky-menu-container .inner-menu");
var closeIcon = document.querySelector(".sticky-menu-container .outer-button .close-icon");
var arrowIcon = document.querySelector(".sticky-menu-container .outer-button .arrow-icon");
var menuItems = document.querySelectorAll(".sticky-menu-container .inner-menu > .menu-list > .menu-item");

var itemTexts = document.querySelectorAll(".sticky-menu-container .inner-menu > .menu-list > .menu-item > .item-text");

button.addEventListener("click", function(){
  if(isAnimating) return;
  this.classList.add("clicked");
  menu.classList.toggle("closed");
  
  if(isOpen){
    closeIcon.classList.remove("show");
    closeIcon.classList.add("hide");
    arrowIcon.classList.remove("hide");
    arrowIcon.classList.add("show");
    menuItems.forEach(function(item){
      console.log(item);
       item.classList.add("text-hides");
    });
    itemTexts.forEach(function(text, index){
        setTimeout(function(){
          text.classList.remove("text-in");
        });
    });
    isOpen = false;
  }
  else{
    closeIcon.classList.remove("hide");
    closeIcon.classList.add("show");
    arrowIcon.classList.remove("show");
    arrowIcon.classList.add("hide");
    menuItems.forEach(function(item){
      console.log(item);
       item.classList.remove("text-hides");
    });
    itemTexts.forEach(function(text, index){
        setTimeout(function(){
          text.classList.add("text-in");
        }, index*150);
    });
    isOpen = true;
  }
  
});

button.addEventListener("animationstart", function(event){
  isAnimating = true;
});

button.addEventListener("animationend", function(event){
  isAnimating = false;
  this.classList.remove("clicked");
});

menuItems.forEach(function(item){
  item.addEventListener("click", function(){
      closeFloatButton(); // Close the menu when a menu item is clicked
  });
});

function closeFloatButton() {
  menu.classList.add("closed");
  closeIcon.classList.remove("show");
  closeIcon.classList.add("hide");
  arrowIcon.classList.remove("hide");
  arrowIcon.classList.add("show");
  menuItems.forEach(function(item){
      item.classList.add("text-hides");
  });
  itemTexts.forEach(function(text, index){
      setTimeout(function(){
          text.classList.remove("text-in");
      });
  });
  isOpen = false;
}

// Phone conditional

document.getElementById('phone').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('phoneAddCar').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('phoneDeleteCar').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('phoneAddDriver').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('phoneDeleteDriver').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('phoneAddCoverage').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('phoneDeleteCoverage').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

// Number of cars / drivers conditional

document.getElementById('numberCars').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-6]/g, '');
  let value = e.target.value;
  if (value.length > 1) {
      e.target.value = value.slice(0, 1);
  }
});

document.getElementById('numberDeleteCars').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-6]/g, '');
  let value = e.target.value;
  if (value.length > 1) {
      e.target.value = value.slice(0, 1);
  }
});

document.getElementById('numberDrivers').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-6]/g, '');
  let value = e.target.value;
  if (value.length > 1) {
      e.target.value = value.slice(0, 1);
  }
});

document.getElementById('numberDeleteDrivers').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-6]/g, '');
  let value = e.target.value;
  if (value.length > 1) {
      e.target.value = value.slice(0, 1);
  }
});

document.getElementById('numberCoverages').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-6]/g, '');
  let value = e.target.value;
  if (value.length > 1) {
      e.target.value = value.slice(0, 1);
  }
});

document.getElementById('numberDeleteCoverages').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-6]/g, '');
  let value = e.target.value;
  if (value.length > 1) {
      e.target.value = value.slice(0, 1);
  }
});

// Add event listener to close the menu when clicking outside of it
window.addEventListener("click", function(event) {
  if (isOpen && !menu.contains(event.target) && !button.contains(event.target)) {
      closeModal();
  }
});

const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
let isOpened = false;

const buttonClasses = [
  ".item-text.quote",
  ".btn.btn-primary.px-3.d-none.d-lg-block.quote",
  ".btn.btn-primary.py-3.px-5.quote"
];

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
  isOpened = true;
};

buttonClasses.forEach(className => {
  const buttons = document.querySelectorAll(className);
  buttons.forEach(button => {
      button.addEventListener("click", openModal);
  });
});


const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
  isOpened = false;
};

closeButton.addEventListener("click", closeModal);

// Add event listener to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (isOpened && event.target === modal) {
    closeModal();
  }
});

// Imagenes aleatorias
window.onload = function() {
  // Array con las rutas de las imágenes de fondo
  var backgrounds = [
    '../assets/img/check_desierto.png',
    '../assets/img/banner_check_1.png'
    // Agrega más URLs de imágenes según sea necesario
  ];

  var randomIndex = Math.floor(Math.random() * backgrounds.length);
      var pageHeaders = document.getElementsByClassName('page-header');
      for (var i = 0; i < pageHeaders.length; i++) {
        pageHeaders[i].style.backgroundImage = 'url("' + backgrounds[randomIndex] + '")';
      }
    };

//Language switcher
function openLink() {
  window.location.href = '../home-esp/index.html';
}

function openLinkEsp() {
  window.location.href = '../home/index.html';
}

// Modal add car

function openLinkAddCar() {
const bodyAddCar = document.querySelector("body");
const modalAddCar = document.querySelector(".modalAddCar");
const closeButtonAddCar = document.querySelector(".close-buttonAddCar");
let isOpenedAddCar = false;


modalAddCar.classList.add("is-openAddCar");
bodyAddCar.style.overflow = "hidden";
isOpenedAddCar = true;

const closeModalAddCar = () => {
  modalAddCar.classList.remove("is-openAddCar");
  bodyAddCar.style.overflow = "initial";
  isOpenedAddCar = false;
};

closeButtonAddCar.addEventListener("click", closeModalAddCar);

// Add event listener to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (isOpenedAddCar && event.target === modalAddCar) {
    closeModalAddCar();
  }
});
}

//Add car form
function checkInputAddCar(input) {
  document.getElementById('numberCars').addEventListener('change', function() {
    var numSelected = parseInt(this.value); // Obtener el número seleccionado como entero
    
    // Obtener el contenedor de los campos driver
    var vinContainer1 = document.getElementById('vinFields');
    var vinContainer2 = document.getElementById('vinFields');
    var vinContainer3 = document.getElementById('vinFields');
    var vinContainer7 = document.getElementById('vinFields');
    var vinContainer8 = document.getElementById('vinFields');

    // Limpiar cualquier campo driver existente
    vinContainer1.innerHTML = '';
    vinContainer2.innerHTML = '';
    vinContainer3.innerHTML = '';
    vinContainer7.innerHTML = '';
    vinContainer8.innerHTML = '';

    
    // Mostrar los campos del driver según el número seleccionado
    for (var i = 1; i <= numSelected; i++) {

      var vinLabel8 = document.createElement('p');
      vinLabel8.setAttribute('for', 'vin' + i);
      vinLabel8.textContent = '';
      vinLabel8.setAttribute('class', 'input-label');

      vinContainer8.appendChild(vinLabel8);
      vinContainer8.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel7 = document.createElement('p');
      vinLabel7.setAttribute('for', 'vin' + i);
      vinLabel7.textContent = 'CAR ' + i;
      vinLabel7.setAttribute('class', 'input-label');

      vinContainer7.appendChild(vinLabel7);
      vinContainer7.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel1 = document.createElement('label');
      vinLabel1.setAttribute('for', 'vin1' + i);
      vinLabel1.textContent = 'Enter VIN number for car ' + i + ': ';
      vinLabel1.setAttribute('class', 'input-label');

      var vinInput1 = document.createElement('input');
      vinInput1.setAttribute('type', 'text');
      vinInput1.setAttribute('id', 'vin1' + i);
      vinInput1.setAttribute('name', 'vin' + i);
      vinInput1.setAttribute('placeholder', '17 characters');
      vinLabel1.setAttribute('class', 'input-label');
      vinInput1.setAttribute('required',true);
      
      vinContainer1.appendChild(vinLabel1);
      vinContainer1.appendChild(vinInput1);
      vinContainer1.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel2 = document.createElement('label');
      vinLabel2.setAttribute('for', 'vin2_' + i);
      vinLabel2.textContent = 'Type of coverage ' + i + ': ';
      vinLabel2.setAttribute('class', 'input-label');

      const coverages = [
        { value: 'towing', label: 'Towing' },
        { value: 'safety', label: 'Safety glass' },
        { value: 'medical', label: 'Medical payments' },
        { value: 'uninsuredbi', label: 'Uninsured BI' },
        { value: 'uninsuredpd', label: 'Uninsured PD' },
        { value: 'death', label: 'Accidental death' },
        { value: 'none', label: 'I will not add any of these coverages' }
      ];

      // Añadir el label al contenedor
        vinContainer2.appendChild(vinLabel2);
        vinContainer2.appendChild(document.createElement('br')); // Salto de línea para separar

        const checkboxes = [];

        // Crear checkboxes y labels para las opciones de cobertura
        coverages.forEach((coverage,index) => {
          var checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.setAttribute('id', 'vin2_' + coverage.value + i); // Ajuste en la generación del ID único
          checkbox.setAttribute('name', 'vin' + i);
          checkbox.setAttribute('value', coverage.value);
          checkbox.setAttribute('class', "input-label");

          var label = document.createElement('label');
          label.setAttribute('for', 'vin2_' + coverage.value + i); // Ajuste en el atributo 'for'
          label.textContent = coverage.label;
          label.setAttribute('class', "input-label");


          // Agregar checkbox y label al contenedor
          vinContainer2.appendChild(checkbox);
          vinContainer2.appendChild(label);
          vinContainer2.appendChild(document.createElement('br')); // Salto de línea para separar

          // Agregar checkbox al array
          checkboxes.push(checkbox);

          // Agregar evento de cambio al checkbox "I will not add any of these coverages"
          if (index === coverages.length - 1) {
            checkbox.addEventListener('change', function() {
              const isChecked = this.checked;
              checkboxes.slice(0, checkboxes.length - 1).forEach(cb => {
                cb.disabled = isChecked;
                if (isChecked) {
                  cb.checked = false;
                }
              });
            });
          }
        });

        vinContainer2.appendChild(document.createElement('br')); // Salto de línea para separar


      var vinLabel3 = document.createElement('label');
      vinLabel3.setAttribute('for', 'vin3' + i);
      vinLabel3.textContent = 'Comprehensive & Collision ' + i + ': ';
      vinLabel3.setAttribute('class', 'input-label');

      var driverSelect3 = document.createElement('select');
      driverSelect3.setAttribute('id', 'vin3' + i);
      driverSelect3.setAttribute('name', 'vin' + i);
      driverSelect3.setAttribute('class', 'dropdown');
      driverSelect3.setAttribute('required', true); // Hacer el campo obligatorio
  
      // Añadir opciones al dropdown
  
      var option1driverSelect3 = document.createElement('option');
      option1driverSelect3.setAttribute('value', 'stateminimum');
      option1driverSelect3.textContent = 'State minimum';
      driverSelect3.appendChild(option1driverSelect3);
  
      var option2driverSelect3 = document.createElement('option');
      option2driverSelect3.setAttribute('value', 'full500');
      option2driverSelect3.textContent = 'Comprehensive & Collision: $500 deductible';
      driverSelect3.appendChild(option2driverSelect3);

      var option3driverSelect3 = document.createElement('option');
      option3driverSelect3.setAttribute('value', 'full1000');
      option3driverSelect3.textContent = 'Comprehensive & Collision: $1000 deductible';
      driverSelect3.appendChild(option3driverSelect3);
         
      vinContainer3.appendChild(vinLabel3);
      vinContainer3.appendChild(driverSelect3);
      vinContainer3.appendChild(document.createElement('br')); // Salto de línea para separar

    }
  });
  }

// Modal delete car

function openLinkDeleteCar() {
  const bodyDeleteCar = document.querySelector("body");
  const modalDeleteCar = document.querySelector(".modalDeleteCar");
  const closeButtonDeleteCar = document.querySelector(".close-buttonDeleteCar");
  let isOpenedDeleteCar = false;
  
  
    modalDeleteCar.classList.add("is-openDeleteCar");
    bodyDeleteCar.style.overflow = "hidden";
    isOpenedDeleteCar = true;
  
  const closeModalDeleteCar = () => {
    modalDeleteCar.classList.remove("is-openDeleteCar");
    bodyDeleteCar.style.overflow = "initial";
    isOpenedDeleteCar = false;
  };
  
  closeButtonDeleteCar.addEventListener("click", closeModalDeleteCar);
  
  // Add event listener to close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (isOpenedDeleteCar && event.target === modalDeleteCar) {
      closeModalDeleteCar();
    }
  });
  }
  
  //Add car form

  function checkInputDeleteCar(input) {
  document.getElementById('numberDeleteCars').addEventListener('change', function() {
    var numSelected = parseInt(this.value); // Obtener el número seleccionado como entero
    
    // Obtener el contenedor de los campos VIN
    var vinContainer = document.getElementById('vinFieldsDeleteCar');
    
    // Limpiar cualquier campo VIN existente
    vinContainer.innerHTML = '';
    
    // Mostrar los campos VIN según el número seleccionado
    for (var i = 1; i <= numSelected; i++) {
      var vinLabel = document.createElement('label');
      vinLabel.setAttribute('for', 'vin' + i);
      vinLabel.textContent = 'Enter VIN number for car ' + i + ': ';
      vinLabel.setAttribute('class', 'input-label');
      
      var vinInput = document.createElement('input');
      vinInput.setAttribute('type', 'text');
      vinInput.setAttribute('id', 'vin' + i);
      vinInput.setAttribute('name', 'vin' + i);
      vinInput.setAttribute('placeholder', '17 characters');
      vinLabel.setAttribute('class', 'input-label');
      vinInput.setAttribute('required',true);
      
      vinContainer.appendChild(vinLabel);
      vinContainer.appendChild(vinInput);
      vinContainer.appendChild(document.createElement('br')); // Salto de línea para separar
      
    }
  });
  }

  // Modal add driver


function openLinkAddDriver() {
  const bodyAddDriver = document.querySelector("body");
  const modalAddDriver = document.querySelector(".modalAddDriver");
  const closeButtonAddDriver = document.querySelector(".close-buttonAddDriver");
  let isOpenedAddDriver = false;
  
  
  modalAddDriver.classList.add("is-openAddDriver");
  bodyAddDriver.style.overflow = "hidden";
  isOpenedAddDriver = true;
  
  const closeModalAddDriver = () => {
    modalAddDriver.classList.remove("is-openAddDriver");
    bodyAddDriver.style.overflow = "initial";
    isOpenedAddDriver = false;
  };
  
  closeButtonAddDriver.addEventListener("click", closeModalAddDriver);
  
  // Add event listener to close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (isOpenedAddDriver && event.target === modalAddDriver) {
      closeModalAddDriver();
    }
  });
  }
  
  //Add driver form

  function checkInputAddDriver(input) {
  document.getElementById('numberDrivers').addEventListener('change', function() {
    var numSelected = parseInt(this.value); // Obtener el número seleccionado como entero
    
    // Obtener el contenedor de los campos driver
    var vinContainer1 = document.getElementById('fieldsAddDriver');
    var vinContainer2 = document.getElementById('fieldsAddDriver');
    var vinContainer3 = document.getElementById('fieldsAddDriver');
    var vinContainer4 = document.getElementById('fieldsAddDriver');
    var vinContainer5 = document.getElementById('fieldsAddDriver');
    var vinContainer6 = document.getElementById('fieldsAddDriver');
    var vinContainer7 = document.getElementById('fieldsAddDriver');
    var vinContainer8 = document.getElementById('fieldsAddDriver');

    // Limpiar cualquier campo driver existente
    vinContainer1.innerHTML = '';
    vinContainer2.innerHTML = '';
    vinContainer3.innerHTML = '';
    vinContainer4.innerHTML = '';
    vinContainer5.innerHTML = '';
    vinContainer6.innerHTML = '';
    vinContainer7.innerHTML = '';
    vinContainer8.innerHTML = '';

    
    // Mostrar los campos del driver según el número seleccionado
    for (var i = 1; i <= numSelected; i++) {

      var vinLabel8 = document.createElement('p');
      vinLabel8.setAttribute('for', 'vin' + i);
      vinLabel8.textContent = '';
      vinLabel8.setAttribute('class', 'input-label');

      vinContainer8.appendChild(vinLabel8);
      vinContainer8.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel7 = document.createElement('p');
      vinLabel7.setAttribute('for', 'vin' + i);
      vinLabel7.textContent = 'DRIVER ' + i;
      vinLabel7.setAttribute('class', 'input-label');

      vinContainer7.appendChild(vinLabel7);
      vinContainer7.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel1 = document.createElement('label');
      vinLabel1.setAttribute('for', 'vin1' + i);
      vinLabel1.textContent = 'Enter full name for driver ' + i + ': ';
      vinLabel1.setAttribute('class', 'input-label');

      var vinInput1 = document.createElement('input');
      vinInput1.setAttribute('type', 'text');
      vinInput1.setAttribute('id', 'vin1' + i);
      vinInput1.setAttribute('name', 'vin' + i);
      vinInput1.setAttribute('placeholder', 'First name + Last name');
      vinLabel1.setAttribute('class', 'input-label');
      vinInput1.setAttribute('required',true);
      
      vinContainer1.appendChild(vinLabel1);
      vinContainer1.appendChild(vinInput1);
      vinContainer1.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel2 = document.createElement('label');
      vinLabel2.setAttribute('for', 'vin2' + i);
      vinLabel2.textContent = 'Enter date of birth for driver ' + i + ': ';
      vinLabel2.setAttribute('class', 'input-label');

      var vinInput2 = document.createElement('input');
      vinInput2.setAttribute('type', 'date');
      vinInput2.setAttribute('id', 'vin2' + i);
      vinInput2.setAttribute('name', 'vin' + i);
      vinInput2.setAttribute('placeholder', 'DOB');
      vinLabel2.setAttribute('class', 'input-label');
      vinInput2.setAttribute('required',true);
      
      vinContainer2.appendChild(vinLabel2);
      vinContainer2.appendChild(vinInput2);
      vinContainer2.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel3 = document.createElement('label');
      vinLabel3.setAttribute('for', 'vin3' + i);
      vinLabel3.textContent = 'Relationship to the driver ' + i + ': ';
      vinLabel3.setAttribute('class', 'input-label');

      var driverSelect3 = document.createElement('select');
      driverSelect3.setAttribute('id', 'vin3' + i);
      driverSelect3.setAttribute('name', 'vin' + i);
      driverSelect3.setAttribute('class', 'dropdown-complete');
      driverSelect3.setAttribute('required', true); // Hacer el campo obligatorio
  
      // Añadir opciones al dropdown
  
      var option1driverSelect3 = document.createElement('option');
      option1driverSelect3.setAttribute('value', 'spouse');
      option1driverSelect3.textContent = 'Spouse';
      driverSelect3.appendChild(option1driverSelect3);
  
      var option2driverSelect3 = document.createElement('option');
      option2driverSelect3.setAttribute('value', 'child');
      option2driverSelect3.textContent = 'Child';
      driverSelect3.appendChild(option2driverSelect3);

      var option3driverSelect3 = document.createElement('option');
      option3driverSelect3.setAttribute('value', 'parent');
      option3driverSelect3.textContent = 'Parent';
      driverSelect3.appendChild(option3driverSelect3);
  
      var option4driverSelect3 = document.createElement('option');
      option4driverSelect3.setAttribute('value', 'related');
      option4driverSelect3.textContent = 'Other related';
      driverSelect3.appendChild(option4driverSelect3);

      var option5driverSelect3 = document.createElement('option');
      option5driverSelect3.setAttribute('value', 'nonrelated');
      option5driverSelect3.textContent = 'Other non-related';
      driverSelect3.appendChild(option5driverSelect3);
       
      vinContainer3.appendChild(vinLabel3);
      vinContainer3.appendChild(driverSelect3);
      vinContainer3.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel4 = document.createElement('label');
      vinLabel4.setAttribute('for', 'vin4' + i);
      vinLabel4.textContent = 'Type of identification for driver ' + i + ': ';
      vinLabel4.setAttribute('class', 'input-label');

      var driverSelect4 = document.createElement('select');
      driverSelect4.setAttribute('id', 'vin4' + i);
      driverSelect4.setAttribute('name', 'vin' + i);
      driverSelect4.setAttribute('class', 'dropdown-complete');
      driverSelect4.setAttribute('required', true); // Hacer el campo obligatorio
  
      // Añadir opciones al dropdown
  
      var option1driverSelect4 = document.createElement('option');
      option1driverSelect4.setAttribute('value', 'license');
      option1driverSelect4.textContent = 'License';
      driverSelect4.appendChild(option1driverSelect4);
  
      var option2driverSelect4 = document.createElement('option');
      option2driverSelect4.setAttribute('value', 'passport');
      option2driverSelect4.textContent = 'Passport';
      driverSelect4.appendChild(option2driverSelect4);

      var option3driverSelect4 = document.createElement('option');
      option3driverSelect4.setAttribute('value', 'id');
      option3driverSelect4.textContent = 'ID';
      driverSelect4.appendChild(option3driverSelect4);
       
      vinContainer4.appendChild(vinLabel4);
      vinContainer4.appendChild(driverSelect4);
      vinContainer4.appendChild(document.createElement('br')); // Salto de línea para separar


      var vinLabel5 = document.createElement('label');
      vinLabel5.setAttribute('for', 'vin5' + i);
      vinLabel5.textContent = 'Select state or international (if the driver is a foreigner) for driver ' + i + ': ';
      vinLabel5.setAttribute('class', 'input-label');

      var driverSelect5 = document.createElement('select');
      driverSelect5.setAttribute('id', 'vin5' + i);
      driverSelect5.setAttribute('name', 'vin' + i);
      driverSelect5.setAttribute('class', 'dropdown-complete');
      driverSelect5.setAttribute('required', true); // Hacer el campo obligatorio
  
      // Añadir opciones al dropdown
  
      const states = [
        'International', 'Mexico', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ];
            
      // Crear y añadir opciones al select para cada estado
      states.forEach(state => {
        var option = document.createElement('option');
        option.setAttribute('value', state.toLowerCase().replace(/ /g, '-'));
        option.textContent = state;
        driverSelect5.appendChild(option);
      });
       
      vinContainer5.appendChild(vinLabel5);
      vinContainer5.appendChild(driverSelect5);
      vinContainer5.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel6 = document.createElement('label');
      vinLabel6.setAttribute('for', 'vin6' + i);
      vinLabel6.textContent = 'License/Passport number for driver ' + i + ': ';
      vinLabel6.setAttribute('class', 'input-label');

      var vinInput6 = document.createElement('input');
      vinInput6.setAttribute('type', 'text');
      vinInput6.setAttribute('id', 'vin6' + i);
      vinInput6.setAttribute('name', 'vin' + i);
      vinInput6.setAttribute('placeholder', 'License/Passport number');
      vinLabel6.setAttribute('class', 'input-label');
      vinInput6.setAttribute('required',true);
      
      vinContainer6.appendChild(vinLabel6);
      vinContainer6.appendChild(vinInput6);
      vinContainer6.appendChild(document.createElement('br')); // Salto de línea para separar
      
    }
  });
  }

  // Modal delete driver

function openLinkDeleteDriver() {
  const bodyDeleteDriver = document.querySelector("body");
  const modalDeleteDriver = document.querySelector(".modalDeleteDriver");
  const closeButtonDeleteDriver = document.querySelector(".close-buttonDeleteDriver");
  let isOpenedDeleteDriver = false;
  
  
  modalDeleteDriver.classList.add("is-openDeleteDriver");
  bodyDeleteDriver.style.overflow = "hidden";
  isOpenedDeleteDriver = true;
  
  
  const closeModalDeleteDriver = () => {
    modalDeleteDriver.classList.remove("is-openDeleteDriver");
    bodyDeleteDriver.style.overflow = "initial";
    isOpenedDeleteDriver = false;
  };
  
  closeButtonDeleteDriver.addEventListener("click", closeModalDeleteDriver);
  
  // Add event listener to close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (isOpenedDeleteDriver && event.target === modalDeleteDriver) {
      closeModalDeleteDriver();
    }
  });
  }
  
  //Add driver form

  function checkInputDeleteDriver(input) {
  document.getElementById('numberDeleteDrivers').addEventListener('change', function() {
    var numSelected = parseInt(this.value); // Obtener el número seleccionado como entero
    
    // Obtener el contenedor de los campos VIN
    var vinContainer = document.getElementById('vinFieldsDeleteDriver');
    
    // Limpiar cualquier campo VIN existente
    vinContainer.innerHTML = '';
    
    // Mostrar los campos VIN según el número seleccionado
    for (var i = 1; i <= numSelected; i++) {
      var vinLabel = document.createElement('label');
      vinLabel.setAttribute('for', 'vin' + i);
      vinLabel.textContent = 'Enter full name for driver ' + i + ': ';
      vinLabel.setAttribute('class', 'input-label');

      var vinInput = document.createElement('input');
      vinInput.setAttribute('type', 'text');
      vinInput.setAttribute('id', 'vin' + i);
      vinInput.setAttribute('name', 'vin' + i);
      vinInput.setAttribute('placeholder', 'First name + Last name');
      vinLabel.setAttribute('class', 'input-label');
      vinInput.setAttribute('required',true);
      
      vinContainer.appendChild(vinLabel);
      vinContainer.appendChild(vinInput);
      vinContainer.appendChild(document.createElement('br')); // Salto de línea para separar
      
    }
  });
  }

  // Modal add coverage

function openLinkAddCoverage() {
  const bodyAddCoverage = document.querySelector("body");
  const modalAddCoverage = document.querySelector(".modalAddCoverage");
  const closeButtonAddCoverage = document.querySelector(".close-buttonAddCoverage");
  let isOpenedAddCoverage = false;
  
  
  modalAddCoverage.classList.add("is-openAddCoverage");
  bodyAddCoverage.style.overflow = "hidden";
  isOpenedAddCoverage = true;
  
  const closeModalAddCoverage = () => {
    modalAddCoverage.classList.remove("is-openAddCoverage");
    bodyAddCoverage.style.overflow = "initial";
    isOpenedAddCoverage = false;
  };
  
  closeButtonAddCoverage.addEventListener("click", closeModalAddCoverage);
  
  // Add event listener to close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (isOpenedAddCoverage && event.target === modalAddCoverage) {
      closeModalAddCoverage();
    }
  });
  }
  
  //Add car form

  function checkInputAddCoverage(input) {
  document.getElementById('numberCoverages').addEventListener('change', function() {
    var numSelected = parseInt(this.value); // Obtener el número seleccionado como entero
    
    // Obtener el contenedor de los campos driver
    var vinContainer1 = document.getElementById('fieldsAddCoverage');
    var vinContainer2 = document.getElementById('fieldsAddCoverage');
    var vinContainer3 = document.getElementById('fieldsAddCoverage');
    var vinContainer7 = document.getElementById('fieldsAddCoverage');
    var vinContainer8 = document.getElementById('fieldsAddCoverage');

    // Limpiar cualquier campo driver existente
    vinContainer1.innerHTML = '';
    vinContainer2.innerHTML = '';
    vinContainer3.innerHTML = '';
    vinContainer7.innerHTML = '';
    vinContainer8.innerHTML = '';

    
    // Mostrar los campos del driver según el número seleccionado
    for (var i = 1; i <= numSelected; i++) {

      var vinLabel8 = document.createElement('p');
      vinLabel8.setAttribute('for', 'vin' + i);
      vinLabel8.textContent = '';
      vinLabel8.setAttribute('class', 'input-label');

      vinContainer8.appendChild(vinLabel8);
      vinContainer8.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel7 = document.createElement('p');
      vinLabel7.setAttribute('for', 'vin' + i);
      vinLabel7.textContent = 'CAR ' + i;
      vinLabel7.setAttribute('class', 'input-label');

      vinContainer7.appendChild(vinLabel7);
      vinContainer7.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel1 = document.createElement('label');
      vinLabel1.setAttribute('for', 'vin1' + i);
      vinLabel1.textContent = 'Enter VIN number for car ' + i + ': ';
      vinLabel1.setAttribute('class', 'input-label');

      var vinInput1 = document.createElement('input');
      vinInput1.setAttribute('type', 'text');
      vinInput1.setAttribute('id', 'vin1' + i);
      vinInput1.setAttribute('name', 'vin' + i);
      vinInput1.setAttribute('placeholder', '17 characters');
      vinLabel1.setAttribute('class', 'input-label');
      vinInput1.setAttribute('required',true);
      
      vinContainer1.appendChild(vinLabel1);
      vinContainer1.appendChild(vinInput1);
      vinContainer1.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel2 = document.createElement('label');
      vinLabel2.setAttribute('for', 'vin2_' + i);
      vinLabel2.textContent = 'Type of coverage ' + i + ': ';
      vinLabel2.setAttribute('class', 'input-label');

      const coverages = [
        { value: 'towing', label: 'Towing' },
        { value: 'safety', label: 'Safety glass' },
        { value: 'medical', label: 'Medical payments' },
        { value: 'uninsuredbi', label: 'Uninsured BI' },
        { value: 'uninsuredpd', label: 'Uninsured PD' },
        { value: 'death', label: 'Accidental death' },
        { value: 'none', label: 'I will not add any of these coverages' }
      ];

      // Añadir el label al contenedor
        vinContainer2.appendChild(vinLabel2);
        vinContainer2.appendChild(document.createElement('br')); // Salto de línea para separar

        const checkboxes = [];

        // Crear checkboxes y labels para las opciones de cobertura
        coverages.forEach((coverage,index) => {
          var checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.setAttribute('id', 'vin2_' + coverage.value + i); // Ajuste en la generación del ID único
          checkbox.setAttribute('name', 'vin' + i);
          checkbox.setAttribute('value', coverage.value);
          checkbox.setAttribute('class', "input-label");

          var label = document.createElement('label');
          label.setAttribute('for', 'vin2_' + coverage.value + i); // Ajuste en el atributo 'for'
          label.textContent = coverage.label;
          label.setAttribute('class', "input-label");


          // Agregar checkbox y label al contenedor
          vinContainer2.appendChild(checkbox);
          vinContainer2.appendChild(label);
          vinContainer2.appendChild(document.createElement('br')); // Salto de línea para separar

          // Agregar checkbox al array
          checkboxes.push(checkbox);

          // Agregar evento de cambio al checkbox "I will not add any of these coverages"
          if (index === coverages.length - 1) {
            checkbox.addEventListener('change', function() {
              const isChecked = this.checked;
              checkboxes.slice(0, checkboxes.length - 1).forEach(cb => {
                cb.disabled = isChecked;
                if (isChecked) {
                  cb.checked = false;
                }
              });
            });
          }
        });

        vinContainer2.appendChild(document.createElement('br')); // Salto de línea para separar


      var vinLabel3 = document.createElement('label');
      vinLabel3.setAttribute('for', 'vin3' + i);
      vinLabel3.textContent = 'Comprehensive & Collision ' + i + ': ';
      vinLabel3.setAttribute('class', 'input-label');

      var driverSelect3 = document.createElement('select');
      driverSelect3.setAttribute('id', 'vin3' + i);
      driverSelect3.setAttribute('name', 'vin' + i);
      driverSelect3.setAttribute('class', 'dropdown');
      driverSelect3.setAttribute('required', true); // Hacer el campo obligatorio
  
      // Añadir opciones al dropdown
  
      var option1driverSelect3 = document.createElement('option');
      option1driverSelect3.setAttribute('value', 'fullno');
      option1driverSelect3.textContent = 'Comprehensive & Collision: No';
      driverSelect3.appendChild(option1driverSelect3);
  
      var option2driverSelect3 = document.createElement('option');
      option2driverSelect3.setAttribute('value', 'full500');
      option2driverSelect3.textContent = 'Comprehensive & Collision: $500 deductible';
      driverSelect3.appendChild(option2driverSelect3);

      var option3driverSelect3 = document.createElement('option');
      option3driverSelect3.setAttribute('value', 'full1000');
      option3driverSelect3.textContent = 'Comprehensive & Collision: $1000 deductible';
      driverSelect3.appendChild(option3driverSelect3);
         
      vinContainer3.appendChild(vinLabel3);
      vinContainer3.appendChild(driverSelect3);
      vinContainer3.appendChild(document.createElement('br')); // Salto de línea para separar

    }
  });
  }

// Modal delete coverage

function openLinkDeleteCoverage() {
  const bodyDeleteCoverage = document.querySelector("body");
  const modalDeleteCoverage = document.querySelector(".modalDeleteCoverage");
  const closeButtonDeleteCoverage = document.querySelector(".close-buttonDeleteCoverage");
  let isOpenedDeleteCoverage = false;
  
  
  modalDeleteCoverage.classList.add("is-openDeleteCoverage");
  bodyDeleteCoverage.style.overflow = "hidden";
  isOpenedDeleteCoverage = true;
  
  
  const closeModalDeleteCoverage = () => {
    modalDeleteCoverage.classList.remove("is-openDeleteCoverage");
    bodyDeleteCoverage.style.overflow = "initial";
    isOpenedDeleteCoverage = false;
  };
  
  closeButtonDeleteCoverage.addEventListener("click", closeModalDeleteCoverage);
  
  // Add event listener to close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (isOpenedDeleteCoverage && event.target === modalDeleteCoverage) {
      closeModalDeleteCoverage();
    }
  });
  }
  
  //Add car form

  function checkInputDeleteCoverage(input) {
  document.getElementById('numberDeleteCoverages').addEventListener('change', function() {
    var numSelected = parseInt(this.value); // Obtener el número seleccionado como entero
    
    // Obtener el contenedor de los campos driver
    var vinContainer1 = document.getElementById('fieldsDeleteCoverage');
    var vinContainer2 = document.getElementById('fieldsDeleteCoverage');
    var vinContainer3 = document.getElementById('fieldsDeleteCoverage');
    var vinContainer7 = document.getElementById('fieldsDeleteCoverage');
    var vinContainer8 = document.getElementById('fieldsDeleteCoverage');

    // Limpiar cualquier campo driver existente
    vinContainer1.innerHTML = '';
    vinContainer2.innerHTML = '';
    vinContainer3.innerHTML = '';
    vinContainer7.innerHTML = '';
    vinContainer8.innerHTML = '';

    
    // Mostrar los campos del driver según el número seleccionado
    for (var i = 1; i <= numSelected; i++) {

      var vinLabel8 = document.createElement('p');
      vinLabel8.setAttribute('for', 'vin' + i);
      vinLabel8.textContent = '';
      vinLabel8.setAttribute('class', 'input-label');

      vinContainer8.appendChild(vinLabel8);
      vinContainer8.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel7 = document.createElement('p');
      vinLabel7.setAttribute('for', 'vin' + i);
      vinLabel7.textContent = 'CAR ' + i;
      vinLabel7.setAttribute('class', 'input-label');

      vinContainer7.appendChild(vinLabel7);
      vinContainer7.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel1 = document.createElement('label');
      vinLabel1.setAttribute('for', 'vin1' + i);
      vinLabel1.textContent = 'Enter VIN number for car ' + i + ': ';
      vinLabel1.setAttribute('class', 'input-label');

      var vinInput1 = document.createElement('input');
      vinInput1.setAttribute('type', 'text');
      vinInput1.setAttribute('id', 'vin1' + i);
      vinInput1.setAttribute('name', 'vin' + i);
      vinInput1.setAttribute('placeholder', '17 characters');
      vinLabel1.setAttribute('class', 'input-label');
      vinInput1.setAttribute('required',true);

      vinContainer1.appendChild(vinLabel1);
      vinContainer1.appendChild(vinInput1);
      vinContainer1.appendChild(document.createElement('br')); // Salto de línea para separar

      var vinLabel2 = document.createElement('label');
      vinLabel2.setAttribute('for', 'vin2_' + i);
      vinLabel2.textContent = 'Type of coverage ' + i + ': ';
      vinLabel2.setAttribute('class', 'input-label');

      const coverages = [
        { value: 'towing', label: 'Towing' },
        { value: 'safety', label: 'Safety glass' },
        { value: 'medical', label: 'Medical payments' },
        { value: 'uninsuredbi', label: 'Uninsured BI' },
        { value: 'uninsuredpd', label: 'Uninsured PD' },
        { value: 'death', label: 'Accidental death' },
        { value: 'none', label: 'I will not add any of these coverages' }
      ];

      // Añadir el label al contenedor
        vinContainer2.appendChild(vinLabel2);
        vinContainer2.appendChild(document.createElement('br')); // Salto de línea para separar

        const checkboxes = [];

        // Crear checkboxes y labels para las opciones de cobertura
        coverages.forEach((coverage,index) => {
          var checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.setAttribute('id', 'vin2_' + coverage.value + i); // Ajuste en la generación del ID único
          checkbox.setAttribute('name', 'vin' + i);
          checkbox.setAttribute('value', coverage.value);
          checkbox.setAttribute('class', "input-label");

          var label = document.createElement('label');
          label.setAttribute('for', 'vin2_' + coverage.value + i); // Ajuste en el atributo 'for'
          label.textContent = coverage.label;
          label.setAttribute('class', "input-label");


          // Agregar checkbox y label al contenedor
          vinContainer2.appendChild(checkbox);
          vinContainer2.appendChild(label);
          vinContainer2.appendChild(document.createElement('br')); // Salto de línea para separar

          // Agregar checkbox al array
          checkboxes.push(checkbox);

          // Agregar evento de cambio al checkbox "I will not add any of these coverages"
          if (index === coverages.length - 1) {
            checkbox.addEventListener('change', function() {
              const isChecked = this.checked;
              checkboxes.slice(0, checkboxes.length - 1).forEach(cb => {
                cb.disabled = isChecked;
                if (isChecked) {
                  cb.checked = false;
                }
              });
            });
          }
        });

        vinContainer2.appendChild(document.createElement('br')); // Salto de línea para separar


      var vinLabel3 = document.createElement('label');
      vinLabel3.setAttribute('for', 'vin3' + i);
      vinLabel3.textContent = 'Comprehensive & Collision ' + i + ': ';
      vinLabel3.setAttribute('class', 'input-label');

      var driverSelect3 = document.createElement('select');
      driverSelect3.setAttribute('id', 'vin3' + i);
      driverSelect3.setAttribute('name', 'vin' + i);
      driverSelect3.setAttribute('class', 'dropdown');
      driverSelect3.setAttribute('required', true); // Hacer el campo obligatorio
  
      // Añadir opciones al dropdown
  
      var option1driverSelect3 = document.createElement('option');
      option1driverSelect3.setAttribute('value', 'fullno');
      option1driverSelect3.textContent = 'Comprehensive & Collision: No';
      driverSelect3.appendChild(option1driverSelect3);
  
      var option2driverSelect3 = document.createElement('option');
      option2driverSelect3.setAttribute('value', 'full500');
      option2driverSelect3.textContent = 'Comprehensive & Collision: $500 deductible';
      driverSelect3.appendChild(option2driverSelect3);

      var option3driverSelect3 = document.createElement('option');
      option3driverSelect3.setAttribute('value', 'full1000');
      option3driverSelect3.textContent = 'Comprehensive & Collision: $1000 deductible';
      driverSelect3.appendChild(option3driverSelect3);
         
      vinContainer3.appendChild(vinLabel3);
      vinContainer3.appendChild(driverSelect3);
      vinContainer3.appendChild(document.createElement('br')); // Salto de línea para separar

    }
  });
  }