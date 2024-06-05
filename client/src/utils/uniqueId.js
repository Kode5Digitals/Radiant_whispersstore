import { v4 as uuidv4 } from 'uuid';
export function generateSessionId () {
  let sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = uuidv4();
    localStorage.setItem('sessionId', sessionId);
    console.log(sessionId)
  }
  return sessionId;
}
