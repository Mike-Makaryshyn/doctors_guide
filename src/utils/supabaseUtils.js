import { supabase } from "../supabaseClient";

/**
 * Safely execute Supabase auth operations
 * @param {Function} operation - The Supabase operation to execute
 * @returns {Promise<any>} - The result of the operation
 */
export const safeSupabaseAuth = async (operation) => {
  if (!supabase) {
    throw new Error("Supabase ist nicht konfiguriert");
  }
  return operation(supabase);
};

/**
 * Safely get user session
 * @returns {Promise<Object>} - Session data
 */
export const safeGetSession = async () => {
  return safeSupabaseAuth(async (supabase) => {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data;
  });
};

/**
 * Safely get current user
 * @returns {Promise<Object>} - User data
 */
export const safeGetUser = async () => {
  return safeSupabaseAuth(async (supabase) => {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data;
  });
};

/**
 * Safely sign in with password
 * @param {Object} credentials - Email and password
 * @returns {Promise<Object>} - Sign in result
 */
export const safeSignInWithPassword = async (credentials) => {
  return safeSupabaseAuth(async (supabase) => {
    const { data, error } = await supabase.auth.signInWithPassword(credentials);
    if (error) throw error;
    return data;
  });
};

/**
 * Safely sign out
 * @returns {Promise<void>}
 */
export const safeSignOut = async () => {
  return safeSupabaseAuth(async (supabase) => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  });
};

/**
 * Safely update user
 * @param {Object} updates - User updates
 * @returns {Promise<Object>} - Update result
 */
export const safeUpdateUser = async (updates) => {
  return safeSupabaseAuth(async (supabase) => {
    const { data, error } = await supabase.auth.updateUser(updates);
    if (error) throw error;
    return data;
  });
};

/**
 * Safely set session
 * @param {Object} session - Session data
 * @returns {Promise<Object>} - Set session result
 */
export const safeSetSession = async (session) => {
  return safeSupabaseAuth(async (supabase) => {
    const { data, error } = await supabase.auth.setSession(session);
    if (error) throw error;
    return data;
  });
};

/**
 * Safely reset password for email
 * @param {string} email - User email
 * @param {Object} options - Reset options
 * @returns {Promise<Object>} - Reset result
 */
export const safeResetPasswordForEmail = async (email, options) => {
  return safeSupabaseAuth(async (supabase) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, options);
    if (error) throw error;
    return data;
  });
};

/**
 * Safely sign up
 * @param {Object} credentials - Sign up credentials
 * @returns {Promise<Object>} - Sign up result
 */
export const safeSignUp = async (credentials) => {
  return safeSupabaseAuth(async (supabase) => {
    const { data, error } = await supabase.auth.signUp(credentials);
    if (error) throw error;
    return data;
  });
};

/**
 * Create auth state change listener
 * @param {Function} callback - Callback function
 * @returns {Object} - Subscription object
 */
export const createAuthStateListener = (callback) => {
  if (!supabase) {
    console.warn('Supabase is not configured, cannot create auth state listener');
    return { subscription: { unsubscribe: () => {} } };
  }
  
  const { data: { subscription } } = supabase.auth.onAuthStateChange(callback);
  return { subscription };
}; 