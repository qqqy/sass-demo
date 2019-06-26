# SASS DEMO

## SETUP
npm i node-sass
npm i -g sass

## PIECES

### VARIABLES 
$foo: 100px;

### NESTING
Exactly what it sounds like

### PARTIALS
_partial.scss

### IMPORT
@import 'reset';

### MIXINS
@mixin name($param){
  property-block: $param
}

THEN

.selector {
  @include name(argument)
}

### EXTEND 
%basically-a-class {
  height: 100px
}

THEN

.selector {
  @extend %basically-a-class
}

### OPERATORS
