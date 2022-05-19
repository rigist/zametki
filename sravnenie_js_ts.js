//https://typescript-definitive-guide.ru/book/chapters/Annotaciya_Tipov/

// .ts
var identifier: Type = value;
let identifier: Type = value;
const IDENTIFIER: Type = value;
//  .js
var identifier = value;
let identifier = value;
const IDENTIFIER = value;

// .ts
function identifier(param1: Type, param2: Type): ReturnedType {

}

// .js
function identifier(param1, param2) {

}

// .ts
class Identifier<T> {
    static staticField: Type = value; 
    
    static get staticProperty(): Type {
        return value;
    }
    
    static set staticProperty(value: Type) {
     
    }
    
    static staticMethod <T, U>(param0: Type, param1: Type): Type {
    
    }
    
    [indexSignature: Type]: Type; 
    
    [computedProp]: Type = value; 
    
    field: Type = value;
    
    get property(): Type {
        return value;
    }

    set property(value: Type) {
     
    }
    
    constructor(param0: Type, param1: Type) {
    
    }
    
    method <T, U>(param0: Type, param1: Type): Type {
    
    }
}

// .js
class Identifier {
    static staticField = value; 
    
    static get staticProperty() {
        return value;
    }
    
    static set staticProperty(value) {
     
    }
    
    static staticMethod (param, param) {
    
    }
    
    [computedProp] = value; 
    
    field = value;
    
    get property() {
        return value;
    }
    
    set property(value) {
     
    }
    
    constructor(param0, param1) {
    
    }
    
    method (param0, param1) {
    
    }
}
