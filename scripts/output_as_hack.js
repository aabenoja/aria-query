#!/usr/bin/env node --harmony

var program = require('commander');

program
  .version('0.7.0')
  .option('--ariaprops', 'output ARIA property definitions')
  .option('--dom', 'output DOM')
  .option('--elementrole', 'output element to role relationships')
  .option('--roleelement', 'output role to element relationships')
  .option('--roles', 'output roles')
  .parse(process.argv);

const output = Object.create(null);

if (program.ariaprops) {
  output['ariaprops'] = require('../lib/ariaPropsMap.js').default;
}
if (program.dom) {
  output['dom'] = require('../lib/domMap.js').default;
}
if (program.elementrole) {
  output['elementrole'] = require('../lib/elementRoleMap.js').default;
}
if (program.roleelement) {
  output['roleelement'] = require('../lib/roleElementMap.js').default;
}
if (program.roles) {
  output['roles'] = require('../lib/rolesMap.js').default;
}

function getTypeof(value) {
  return Array.isArray(value)
    ? 'array'
    : (value == null)
      ? 'null'
      : typeof value;
}

function stringifyBoolean(value) {
  return [(value) ? 'true' : 'false'];
}

function stringifyArray(arr, depth) {
  const output = [];
  if (arr.length === 0) {
    output.push('Set {}');
  } else {
    output.push('Set {');
    let tmp = [];
    (new Set(arr)).forEach(
      value => {
        if (value != null) {
          tmp.push(`${constructIndent(depth)}${triageValue(value, (depth))},`);
        }
      }
    );
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}\}`);
  }
  return output.join('\n');
}

function stringifyObject(value, depth) {
  let output = [];
  const keys = Object.keys(value);
  if (keys.length === 0) {
    output.push('Map {}');
  } else {
    output.push(`Map {`);
    const tmp = [];
    keys.forEach(key => {
      tmp.push(`${constructIndent(depth)}${triageValue(key, (depth - 1), false)} => ${triageValue(value[key], depth)},`);
    });
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}}`);
  }
  return output.join('\n');
}

function stringifyMap(value, depth) {
  let output = [];
  if (value.size === 0) {
    output.push('Map {}');
  } else {
    output.push(`Map {`);
    const tmp = [];
    value.forEach(value, key => {
      tmp.push(`${constructIndent(depth)}${triageValue(key, (depth - 1), false)} => ${triageValue(value, depth)},`);
    });
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}}`);
  }
  return output.join('\n');
}

function stringifySet(value, depth) {
  const output = [];
  if (value.size === 0) {
    output.push('Set {}');
  } else {
    output.push('Set {');
    let tmp = [];
    value.forEach(
      value => {
        if (value != null) {
          tmp.push(`${constructIndent(depth)}${triageValue(value, (depth))},`);
        }
      }
    );
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}\}`);
  }
  return output.join('\n');
}

function constructIndent(depth) {
  return Array(depth).fill('  ').join('');
}

function triageValue(value, depth = 0) {
  let output = [];
  switch(getTypeof(value)) {
    case 'object':
      if (value instanceof Map) {
        output = output.concat(stringifyMap(value, (depth + 1)));
      } else if (value instanceof Set) {
        output = output.concat(stringifySet(value, (depth + 1)));
      } else {
        output = output.concat(stringifyObject(value, (depth + 1)));
      }
      break;
    case 'array':
      output = output.concat(stringifyArray(value, (depth + 1)));
      break;
    case 'boolean':
      output = output.concat(stringifyBoolean(value, (depth + 1)));
      break;
    case 'string':
      output = output.concat(`\'${value}\'`);
      break;
    default:
      output.push('null');
  }
  return output;
}

let hack = [];

Object.keys(output).forEach(type => {
  hack = hack.concat(
    `\$${type} = Map \{`,
    ...[...output[type].keys()]
      .sort((a, b) => a - b)
      .map(prop => {
        const depth = 1;
        return `${constructIndent(depth)}${triageValue(prop, depth, false)} => ${triageValue(output[type].get(prop), depth).join('\n')},`;
      }),
    `${constructIndent(0)}\};`
  );
});

if (hack.length) {
  process.stdout.write(hack.join('\n'));
}
