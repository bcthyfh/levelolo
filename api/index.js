import handler from './gateway.js';

export default function rootHandler(req, res) {
  return handler(req, res);
}
