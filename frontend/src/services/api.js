const API_BASE = import.meta.env.VITE_API_URL || "/api";

/**
 * Register a new user.
 * POST /api/auth/register
 * @param {{ first_name, last_name, email, password, confirm_password, date_of_birth, role }} userData
 * @returns {Promise<object>} The created user data from the server
 */
export async function registerUser(userData) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  // Safely parse the response — handle empty or non-JSON bodies
  const text = await res.text();
  let data = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("Server returned an invalid response.");
    }
  }

  if (!res.ok) {
    throw new Error(data.message || `Registration failed (status ${res.status}).`);
  }

  return data;
}

/**
 * Request a password reset OTP.
 * POST /api/auth/password-forget
 * @param {string} email
 * @returns {Promise<object>}
 */
export async function forgotPassword(email) {
  const res = await fetch(`${API_BASE}/auth/password-forget`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const text = await res.text();
  let data = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("Server returned an invalid response.");
    }
  }

  if (!res.ok) {
    throw new Error(data.message || `Request failed (status ${res.status}).`);
  }

  return data;
}

/**
 * Reset password using OTP.
 * PUT /api/auth/password-reset
 * @param {string} otp
 * @param {string} new_password
 * @returns {Promise<object>}
 */
export async function resetPassword(otp, new_password) {
  const res = await fetch(`${API_BASE}/auth/password-reset`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ otp, new_password }),
  });

  const text = await res.text();
  let data = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("Server returned an invalid response.");
    }
  }

  if (!res.ok) {
    throw new Error(data.message || `Reset failed (status ${res.status}).`);
  }

  return data;
}

/**
 * Verify a ward's access code.
 * POST /api/dashboard/verify-code
 * @param {string} code 
 * @returns {Promise<object>}
 */
export async function verifyAccessCode(code) {
  const res = await fetch(`${API_BASE}/dashboard/verify-code`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });

  const text = await res.text();
  let data = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("Server returned an invalid response.");
    }
  }

  if (!res.ok) {
    throw new Error(data.message || `Verification failed (status ${res.status}).`);
  }

  return data;
}