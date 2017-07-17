import { pushStateLocationPlugin, servicesPlugin, UIRouterReact } from '@uirouter/react';
import { DisplayErrorPlugin, DisplayProgressPlugin } from '../router';

export const router = new UIRouterReact();
router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);
router.plugin(DisplayProgressPlugin);
router.plugin(DisplayErrorPlugin);

export default router;
