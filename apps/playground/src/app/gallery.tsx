// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { Button } from '@fluentui/react-components';
import { Session } from './controller';
import { galleryItems } from './galleryItems';
import { Open24Regular } from '@fluentui/react-icons';

export function Gallery() {
  return (
    <div
      style={{
        marginTop: 20,
        marginLeft: 30,
      }}
    >
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
        Gallery
      </div>
      {galleryItems.map((g, i) => (
        <div key={i} className="galleryItem">
          <div
            style={{
              width: 570,
              height: 100,
              padding: 10,
              margin: 4,
              marginBottom: 30,
              border: '1px solid #dddddd',
              borderRadius: 4,
              background: '#fafafa',
            }}
            dangerouslySetInnerHTML={{ __html: g.nl }}
          ></div>
          <div dangerouslySetInnerHTML={{ __html: g.img }} />
          <div>
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
                  if (!editor || count <= 0) {
                    return;
                  }
                  const session: Session = {
                    source: 'vistalk',
                    data: g.data,
                    input: g.input,
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
      ))}
    </div>
  );
}
