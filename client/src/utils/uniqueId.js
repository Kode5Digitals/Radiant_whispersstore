import { v4 as uuidv4 } from 'uuid';
export function generateSessionId () {
  let sessionId = localStorage.getItem('sessionId');
  if (!sessionId || !isValidUuid(sessionId)) {
    sessionId = uuidv4();
    localStorage.setItem('sessionId', sessionId);
    console.log(sessionId)
  }
  return sessionId;
}
function isValidUuid(uuid) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }