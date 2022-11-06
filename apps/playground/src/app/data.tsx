// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as React from 'react';
import * as _ from 'lodash';
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
} from '@fluentui/react-components/unstable';
import { DataContext } from '@vis-talk/interpreter';
export interface DataTableProps {
  dataset: DataContext;
  data: object[];
}

export const DataTable = React.memo(
  (props: DataTableProps) => {
    const { dataset, data } = props;
    return (
      <Table size="small">
        <TableHeader
          style={{
            position: 'sticky',
            top: 0,
            background: '#ffffff',
            zIndex: 10,
          }}
        >
          <TableRow>
            {dataset.columns.map((column) => (
              <TableHeaderCell key={column.name}>{column.name}</TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any, i) => (
            <TableRow key={i}>
              {dataset.columns.map((c, j) => (
                <TableCell key={i + '_' + j}>
                  {item[c.name] ? item[c.name].toString() : '(Blank)'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
  (prevProps, nextProps) => {
    if (!_.isEqual(prevProps.dataset, nextProps.dataset)) {
      return false;
    }

    return true;
  }
);
