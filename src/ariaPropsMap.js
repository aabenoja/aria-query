/**
 * @flow
 */

type MapOfARIAPropertyDefinitions = Map<ARIAProperty, ARIAPropertyDefinition>;

const ariaPropsMap: MapOfARIAPropertyDefinitions = new Map([
  ['aria-activedescendant', {
    'type': 'string'
  }],
  ['aria-atomic', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
  }],
  ['aria-autocomplete', {
    'type': 'token',
    'values': [
      'inline',
      'list',
      'both',
      'none'
    ]
  }],
  ['aria-busy', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
  }],
  ['aria-checked', {
    'type': 'tristate',
    'values': [true, false, 'true', 'false', 'mixed'],
  }],
  ['aria-colcount', {
    type: 'integer',
  }],
  ['aria-colindex', {
    type: 'integer',
  }],
  ['aria-colspan', {
    type: 'integer',
  }],
  ['aria-controls', {
    'type': 'string'
  }],
  ['aria-current', {
    type: 'token',
    values: [
      'page',
      'step',
      'location',
      'date',
      'time',
      true,
      false,
    ],
  }],
  ['aria-describedby', {
    'type': 'string'
  }],
  ['aria-disabled', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
  }],
  ['aria-dropeffect', {
    'type': 'tokenlist',
    'values': [
      'copy',
      'move',
      'link',
      'execute',
      'popup',
      'none'
    ]
  }],
  ['aria-expanded', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
    'allowundefined': true
  }],
  ['aria-flowto', {
    'type': 'string'
  }],
  ['aria-grabbed', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
    'allowundefined': true
  }],
  ['aria-haspopup', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
  }],
  ['aria-hidden', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
  }],
  ['aria-invalid', {
    'type': 'token',
    'values': [
      'grammar',
      false,
      'spelling',
      true
    ]
  }],
  ['aria-keyshortcuts', {
    type: 'string',
  }],
  ['aria-label', {
    'type': 'string'
  }],
  ['aria-labelledby', {
    'type': 'string'
  }],
  ['aria-level', {
    'type': 'integer'
  }],
  ['aria-live', {
    'type': 'token',
    'values': [
      'off',
      'polite',
      'assertive'
    ]
  }],
  ['aria-modal', {
    type: 'boolean',
    'values': [true, false, 'true', 'false'],
  }],
  ['aria-multiline', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
  }],
  ['aria-multiselectable', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
  }],
  ['aria-orientation', {
    'type': 'token',
    'values': [
      'vertical',
      'horizontal'
    ]
  }],
  ['aria-owns', {
    'type': 'string'
  }],
  ['aria-placeholder', {
    type: 'string',
  }],
  ['aria-posinset', {
    'type': 'integer'
  }],
  ['aria-pressed', {
    'type': 'tristate',
    'values': [true, false, 'true', 'false', 'mixed'],
  }],
  ['aria-readonly', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
  }],
  ['aria-relevant', {
    'type': 'tokenlist',
    'values': [
      'additions',
      'removals',
      'text',
      'all'
    ]
  }],
  ['aria-required', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
  }],
  ['aria-roledescription', {
    type: 'string',
  }],
  ['aria-rowcount', {
    type: 'integer',
  }],
  ['aria-rowindex', {
    type: 'integer',
  }],
  ['aria-rowspan', {
    type: 'integer',
  }],
  ['aria-selected', {
    'type': 'boolean',
    'values': [true, false, 'true', 'false'],
    'allowundefined': true
  }],
  ['aria-setsize', {
    'type': 'integer'
  }],
  ['aria-sort', {
    'type': 'token',
    'values': [
      'ascending',
      'descending',
      'none',
      'other'
    ]
  }],
  ['aria-valuemax', {
    'type': 'number'
  }],
  ['aria-valuemin', {
    'type': 'number'
  }],
  ['aria-valuenow', {
    'type': 'number'
  }],
  ['aria-valuetext', {
    'type': 'string'
  }],
]);

export default ariaPropsMap;
