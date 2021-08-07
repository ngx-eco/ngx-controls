// Libs
import { Theme } from '@ngx-eco/ngx-themes';



export const LIGHT_THEME: Theme = {
  id: 'lightTheme',
  values: {
    '--color': '#000000',
    '--color-invert': '#ffffff',


    '--background': '#ffffff',
    '--background-invert': '#000000',


    '--border': '#ffffff',
    '--border-invert': '#000000',


    '--shadow': '0 0 4px 4px rgba(0,0,0,0.1)',
    '--shadow-focus': '0 0 0 0.2rem rgba(63,128,234,.25)',


    '--basic': '#dddddd',
    '--primary': '#3f80ea',
    '--secondary': '#495057',
    '--help': '#7040c0',
    '--success': '#4bbf73',
    '--wait': '#ffdd44',
    '--accept': '#ccff33',
    '--info': '#1f9bcf',
    '--warn': '#e5a54b',
    '--danger': '#82322f',
    '--error': '#d9534f',

    '--basic-hover': '#dddddd',
    '--primary-hover': '#1d69e6',
    '--secondary-hover': '#383d42',
    '--help-hover': '#6633bb',
    '--success-hover': '#3ca861',
    '--wait-hover': '#ffd740',
    '--accept-hover': '#99cc00',
    '--info-hover': '#1a82ae',
    '--warn-hover': '#e0942a',
    '--danger-hover': '#72221f',
    '--error-hover': '#d23430',

    '--basic-shadow': '0 0 0 3px rgba(0, 0, 0, .2)',
    '--primary-shadow': '0 0 0 3px rgba(92, 147, 237, .5)',
    '--secondary-shadow': '0 0 0 3px rgba(100, 106, 112,.5)',
    '--help-shadow': '0 0 0 3px rgba(128, 80, 208, .5)',
    '--success-shadow': '0 0 0 3px rgba(102, 201, 136,.5)',
    '--wait-shadow': '0 0 0 3px rgba(255, 230, 90, .5)',
    '--accept-shadow': '0 0 0 3px rgba(204, 255, 51, .5)',
    '--info-shadow': '0 0 0 3px rgba(65, 170, 214,.5)',
    '--warn-shadow': '0 0 0 3px rgba(200, 146, 70,.5)',
    '--danger-shadow': '0 0 0 3px rgba(146, 66, 63, .5)',
    '--error-shadow': '0 0 0 3px rgba(223, 109, 105,.5)',

    '--basic-disabled': '#dddddd',
    '--primary-disabled': '#83adf1',
    '--secondary-disabled': '#898e92',
    '--help-disabled': '#aa7df3',
    '--success-disabled': '#8bd6a4',
    '--wait-disabled': '#ffee90',
    '--accept-disabled': '#d5f76e',
    '--info-disabled': '#6ebee0',
    '--warn-disabled': '#eec58b',
    '--danger-disabled': '#a2524f',
    '--error-disabled': '#e6908d',

    '--disabled-defoult': '#aaaaaa',
  },
};
