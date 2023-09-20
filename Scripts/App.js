
// Obtén referencias a los elementos del formulario
const nameInput = document.getElementById('name');
const usernameInput = document.getElementById('nickname');
const emailInput = document.getElementById('registerEmail');
const passwordInput = document.getElementById('registerPassword');
const registerButton = document.getElementById('registerButton');

// Funcion del Sign Up
registerButton.addEventListener('click', async () => {
  const name = nameInput.value;
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    // Registra un nuevo usuario en Supabase
    const { user, error } = await _supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error al registrarse:', error.message);
    } else {
      // Registra los datos adicionales en la tabla 'users' sin incluir 'id'
      const { data, error } = await _supabase
        .from('users')
        .upsert([{ name, username, email, password }], { returning: 'minimal' });

      if (error) {
        console.error('Error al registrar datos adicionales:', error.message);
      } else {
        console.log('Usuario registrado con éxito:', user);

         // Limpiar los campos después del registro
         nameInput.value = '';
         usernameInput.value = '';
         emailInput.value = '';
         passwordInput.value = '';

          // Muestra el mensaje de registro exitoso
          const registroExitoso = document.getElementById('registroExitoso');
          registroExitoso.style.display = 'block';

          // Oculta el mensaje después de 3 segundos
          setTimeout(() => {
          registroExitoso.style.display = 'none';
        }, 3000); 
      }
    }
  } catch (error) {
    console.error('Error al registrar:', error.message);
  }
});

// Funcion del Sign In
async function signInUser() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    // Realiza el inicio de sesión en Supabase
    const { user, error } = await _supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error al iniciar sesión:', error.message);
    } else {
      console.log('Inicio de sesión exitoso:', user);

      // Redirige al usuario a la página de Dashboard después de iniciar sesión
      window.location.href = 'Dashboard.html';
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
  }
}

// Agregar evento al botón de inicio de sesión
document.getElementById('login-button').addEventListener('click', signInUser);





































