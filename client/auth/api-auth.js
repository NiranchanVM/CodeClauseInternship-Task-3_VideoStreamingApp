const signin = async (user) => {
  try {
    let response = await fetch('/auth/signin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch(err) {
    console.error('Error signing in:', err);
    throw err; // Re-throw the error to be caught by the caller if necessary
  }
};

const signout = async () => {
  try {
    let response = await fetch('/auth/signout/', { 
      method: 'GET',
      credentials: 'include' // Ensure credentials are included for signout
    });
    if (response.ok) {
      console.log('Signed out successfully');
      return; // No need to return anything since signout doesn't have specific data to return
    } else {
      throw new Error('Failed to sign out');
    }
  } catch(err) {
    console.error('Error signing out:', err);
    throw err; // Re-throw the error to be caught by the caller if necessary
  }
};

export {
  signin,
  signout
};
