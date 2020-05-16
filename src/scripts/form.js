// const myForm = document.querySelector('#myForm');
// const sendButton = document.querySelector('#sendButton');
// const successOverlay = createOverlay("<b>Скоро ты будешь накормлен!</b>");
// const failOverlay = createOverlay("<b>Сиди голодный, ты не заслужил!</b>");

// sendButton.addEventListener("click", function (e) {
//     event.preventDefault();
  
  
  
//     if (validateForm(myForm)) {
  
//       const formData = new FormData();
  
//       formData.append("to", "as.kamaeva@yandex.ru");
//       formData.append("name", myForm.elements.name.value);
//       formData.append("email", myForm.elements.email.value)
//       formData.append("comment", myForm.elements.comment.value);
  
//       const xhr = new XMLHttpRequest();
//       xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  
//       xhr.send(formData);
//       xhr.addEventListener('load', function () {
  
//         body.classList.add('hidden');
//         let result = JSON.parse(xhr.response);
  
//         if (result.status) {
//           document.body.appendChild(successOverlay);
//           const formClean = document.querySelector(".order__button_none");
//           formClean.click();
  
//         } else {
//           document.body.appendChild(failOverlay);
//         }
//       });
//     }
  
//   });

//   function createOverlay(content) {
//     const overlayElement = document.createElement("div");
//     overlayElement.classList.add("order__overlay");
  
//     const template = document.querySelector("#overlayTemplate");
//     overlayElement.innerHTML = template.innerHTML;
//     overlayElement.addEventListener('click', function (e) {
//       if (e.target == overlayElement) {
//         closeElement.click();
//       }
//     });
  
//     const closeElement = overlayElement.querySelector('.order__overlay_close');
//     closeElement.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.body.removeChild(overlayElement);
//       body.classList.remove('hidden');
//     });
  
//     const contentElement = overlayElement.querySelector(".order__overlay_content");
//     contentElement.innerHTML = content;
  
  
//     return overlayElement;
  
//   }
  
  
  
//   function validateForm(myForm) {
//     let valid = true;
  
//     if (!validateField(myForm.elements.name)) {
//       valid = false;
//     }
  
//     if (!validateField(myForm.elements.email)) {
//       valid = false;
//     }
  
  
//     if (!validateField(myForm.elements.comment)) {
//       valid = false;
//     }
  
//     return valid;
  
//   }
  
//   function validateField(order__block) {
//     order__block.nextElementSibling.textContent = order__block.validationMessage;
//     return order__block.checkValidity();
  
//   }
  
  