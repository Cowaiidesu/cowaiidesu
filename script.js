// Funcion para validar el formulario
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    let isValid = true;
  
    // Limpiar mensajes de error
    clearErrors();
  
    // Validar nombre (sin caracteres especiales)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      document.getElementById("nameError").textContent = "Nombre inválido (solo letras y espacios).";
      isValid = false;
    }
  
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Correo electrónico inválido.";
      isValid = false;
    }
  
    // Validar contraseña (al menos 8 caracteres)
    if (password.length < 8) {
      document.getElementById("passwordError").textContent = "La contraseña debe tener al menos 8 caracteres.";
      isValid = false;      
    }
  
    // Prevencion basica de inyeccion (sanitizacion)
    const badInputRegex = /['"<>;]/;
    if (badInputRegex.test(name) || badInputRegex.test(email) || badInputRegex.test(password)) {
      alert("Se han detectado entradas incorrectas. Por favor, revise los datos.");
      isValid = false;
    }
    
    if(isValid){
        alert("Se registro su informacion.");
    }
    return isValid;
  }
  
  // Funcion para limpiar los mensajes de error
  function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  }
  