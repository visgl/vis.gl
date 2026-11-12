import {proxy} from './lib/proxy.mjs';

export default request =>
  proxy(request, {
    disabled: Netlify.env.get('DATA_PROXY_DISABLED') === 'true',
    log: event => console.log(JSON.stringify(event))
  });

export const config = {
  path: '/api/proxy',
  cache: 'off',
  rateLimit: {windowLimit: 120, windowSize: 60, aggregateBy: ['ip', 'domain']}
};
