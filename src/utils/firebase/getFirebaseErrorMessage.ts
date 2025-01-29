const firebaseErrorMessages: Record<string, string> = {
  "auth/invalid-email": "Invalid email address.",
  "auth/user-not-found": "User not found. Please register.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/email-already-in-use": "This email is already in use.",
  "auth/weak-password":
    "Password is too weak. It must be at least 6 characters.",
  "auth/invalid-credential": "Invalid credentials. Please check your input.",
  "auth/too-many-requests": "Too many requests. Try later.",
};

export const getFirebaseErrorMessage = (error: {
  code: string;
  message: string;
}): string => {
  return firebaseErrorMessages[error.code] || error.message;
};
