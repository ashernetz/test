import actions, { registerActions } from './actionRegistry';
import services, { registerServices } from './serviceRegistry';

export {
  actions,
  services,
};

const context =  {
  actions,
  registerActions,
  services,
  registerServices,
};

export default context;
