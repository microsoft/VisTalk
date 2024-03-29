// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { Button } from '@fluentui/react-components';

export function Header(props: { goHome: () => void }) {
  return (
    <div id="header" className="head">
      <Button
        appearance="transparent"
        size="large"
        style={{ color: 'white', paddingLeft: 12 }}
        onClick={() => props.goHome()}
        icon={
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            style={{ marginRight: 4 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 10.9984C22 4.92413 17.0751 0 11 0C4.92487 0 0 4.92413 0 10.9984C0 12.8052 0.436919 14.5501 1.25939 16.1129L0.031402 20.8294C-0.00882015 20.9838 -0.00881545 21.1461 0.0314332 21.3006C0.161594 21.8002 0.672208 22.0997 1.17192 21.9696L5.89135 20.741C7.45268 21.5611 9.19551 21.9967 11 21.9967C17.0751 21.9967 22 17.0726 22 10.9984Z"
              fill="#0078D4"
            />
            <path d="M9.38462 9.23077H6V16H9.38462V9.23077Z" fill="#83BEEC" />
            <path
              d="M9.63464 5.25H13.3654V15.75H9.63464V5.25Z"
              fill="white"
              stroke="#3A3A38"
              strokeWidth="0.5"
            />
            <path d="M17 7.53845H13.6154V16H17V7.53845Z" fill="#C8C6C4" />
          </svg>
        }
      >
        Vis Talk
      </Button>
    </div>
  );
}
