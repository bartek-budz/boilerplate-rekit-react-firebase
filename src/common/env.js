export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
export const FIREBASE_AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
export const FIREBASE_DATABASE_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL
export const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID
export const FIREBASE_STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
export const FIREBASE_MESSAGE_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID
export const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID
export const APP_BASE_URL = process.env.REACT_APP_BASE_URL

const QUERY_PARAMETERS = window && window.location && window.location.search ? new URLSearchParams(window.location.search) : null

export function getQueryParameter(parameter) {
  return QUERY_PARAMETERS && QUERY_PARAMETERS.get(parameter)
}