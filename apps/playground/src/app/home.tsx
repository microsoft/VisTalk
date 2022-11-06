// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { useState } from 'react';
import { galleryItems } from './galleryItems';
import { Open24Regular } from '@fluentui/react-icons';
import { Button } from '@fluentui/react-components';
import { Session } from './controller';

export function Home() {
  const [id, setId] = useState(0);
  const item = galleryItems[id];
  return (
    <div
      style={{
        marginTop: 20,
        marginLeft: 30,
      }}
    >
      <div
        style={{
          marginBottom: 10,
          fontWeight: 600,
          fontSize: 16,
          fontFamily:
            'var(--fluent-font-family,"Segoe UI","Segoe UI Web (West European)",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif)',
        }}
      >
        Overview
      </div>
      <div>
        Vis Talk is a tool turn your natural language input into Vega-Lite charts
      </div>
      <div
        style={{
          marginTop: 20,
          marginBottom: 10,
          fontWeight: 600,
          fontSize: 16,
          fontFamily:
            'var(--fluent-font-family,"Segoe UI","Segoe UI Web (West European)",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif)',
        }}
      >
        Example
      </div>
      <div
        className="galleryItem"
        style={{ cursor: 'pointer' }}
        onClick={() => setId((id + 1) % galleryItems.length)}
      >
        <div style={{ margin: 4, marginBottom: 6 }}>
          Natural Language Input:
        </div>
        <div
          style={{
            width: 570,
            height: 100,
            padding: 10,
            margin: 4,
            marginBottom: 10,
            border: '1px solid #eeeeee',
            background: '#eeeeee',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          dangerouslySetInnerHTML={{ __html: item.nl }}
        ></div>
        <div style={{ margin: 4, marginBottom: 6 }}>Chart:</div>
        <div dangerouslySetInnerHTML={{ __html: item.img }} />
        <div></div>
        <Button
          icon={<Open24Regular />}
          style={{
            marginLeft: 10,
            marginBottom: 10,
          }}
          onClick={() => {
            const url = window.location.origin + window.location.pathname + '#create';
            const editor = window.open(url);
            if (!editor)
              return;
            const wait = 10_000;
            const step = 250;
            const { origin } = new URL(url);
            // eslint-disable-next-line no-bitwise
            let count = ~~(wait / step);

            function listen(evt: MessageEvent) {
              if (evt.source === editor) {
                count = 0;
                window.removeEventListener('message', listen, false);
              }
            }
            window.addEventListener('message', listen, false);

            // send message
            // periodically resend until ack received or timeout
            function send() {
              if (!editor)
                return;
              if (count <= 0) {
                return;
              }
              const session: Session = {
                source: 'vistalk',
                data: item.data,
                input: item.input,
              };
              editor.postMessage(session, origin);
              setTimeout(send, step);
              count -= 1;
            }
            setTimeout(send, step);
          }}
        >
          Open
        </Button>
      </div>
    </div>
  );
}
