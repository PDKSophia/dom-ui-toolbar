import * as DomTypes from '@common/types/domStyle';
import { BaseComponentStyle } from '@common/types/common';

export const initComponentStyleStore: {
  Base: BaseComponentStyle;
  Button: DomTypes.ButtonComponentStyle;
  Text: DomTypes.ButtonComponentStyle;
  Cover: DomTypes.ButtonComponentStyle;
} = {
  Base: {
    opacity: 1,
    width: 0,
    height: 0,
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    cursor: 'default',
    zIndex: 0
  },
  Button: {
    textAlign: 'left',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12
  },
  Text: {
    textAlign: 'left',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12
  },
  Cover: {
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12
  }
};
