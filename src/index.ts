import { getAuthenticatorFromEnvironment } from 'ibm-cloud-sdk-core';

const auth = getAuthenticatorFromEnvironment('SECRETS_MANAGER_API');
console.log('auth', auth);
