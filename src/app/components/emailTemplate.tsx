/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';

import { FormInput } from '../contact/page';


export const EmailTemplate: React.FC<Readonly<FormInput>> = ({
  ...FormData
}) => (
  <div>
    <h1>New Message from, {FormData.name}!</h1>
    <div>Email: {FormData.email}</div>
    <div>Message: {FormData.message}</div>
  </div>
);