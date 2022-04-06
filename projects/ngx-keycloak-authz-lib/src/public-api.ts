/*
 * Public API Surface of ngx-keycloak-authz-lib
 */

export {KeycloakAuthzOptions} from './lib/core/interfaces/keycloak-authz-options';
export {KeycloakAuthzInitOptions} from './lib/core/interfaces/keycloak-authz-init-options';
export {KeycloakAuthorizationRequest,
ResourcePermission,
KeycloakAuthorizationRequestMetaData} from './lib/core/interfaces/keycloak-authorization-request';
export {KeycloakResourcePermission,
KeycloakResourcePermissionsCheck} from './lib/core/interfaces/keycloak-permissions';

export { EnableForKeycloakAuthorizationDirective } from './lib/core/directives/enable-for-keycloak-authorization.directive';
export { KeycloakAuthorizationService } from './lib/core/services/keycloak-authorization.service';
export { KeycloakAuthzAuthGuard } from './lib/core/services/keycloak-authz-auth-guard';
export { CoreModule } from './lib/core/core.module';
export { NgxKeycloakAuthzLibModule } from './lib/ngx-keycloak-authz-lib.module';
