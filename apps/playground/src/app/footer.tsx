// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import React from 'react';
import { Link, Text } from '@fluentui/react-components';

export const Footer = React.memo(() => (
  <div id="footer" className="foot">
    <div>
      <Link href="mailto:vistalk@microsoft.com">Contact Us</Link> | &nbsp;
      <Link href="https://www.microsoft.com/en-us/legal/intellectualproperty/copyright">
        Copyright
      </Link>{' '}
      |&nbsp;
      <Link href="https://www.microsoft.com/en-us/legal/terms-of-use">
        Terms of use
      </Link>{' '}
      |&nbsp;
      <Link href="http://go.microsoft.com/fwlink/?LinkId=506942">
        Trademarks
      </Link>{' '}
      |&nbsp;
      <Link href="/VisTalk/third_party.html">Third Party Notices</Link> |&nbsp;
      <Link href="https://go.microsoft.com/fwlink/?LinkId=521839">
        Privacy &amp; cookies
      </Link>{' '}
      |&nbsp;
      <Text style={{ fontSize: '12px' }}>&copy; Microsoft 2022</Text>
    </div>
  </div>
));
