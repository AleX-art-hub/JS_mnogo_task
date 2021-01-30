/*class RangeValidator{
    constructor(from,to){
        this._from=from;//nizhnee podcherkivanie eto - privatnoe svoystvo
        this._to=to;
    }
    set from(value){
        this._from=value;
    }
    get from(){
        return this._from;
    }
    set to (value){
        this._to=value;
    }
    get to (){
        return this._to;
    }
    
    //nahoditsya li chislo v diapazone ot  from do to
    validate(num){
        if(num<this._to && num>=this._from){
            return true;
        }
        return false;
    }
}
let t = new RangeValidator(0,10);
t.validate(4);*/

class RangeValidator{
    constructor(from = -Infinity,to=Infinity){
        if (typeof from!== 'number' || isNaN(from) || typeof to!== 'number' || isNaN(to)){
            throw new TypeError('Your value should be a number except NaN');
        }
        if(from>to){
            throw new RangeError('TO-value should be more than FROM-value');
        }
        this._from=from;
        this._to=to;
    }
    set from(value){
        if(typeof value!=='number' || isNaN(value)){
            throw new TypeError('Your value should be a number except NaN');
        }
        if(this._to<value){
            throw new RangeError('TO-value should be more than FROM-value');
        }
        this._from=value;
    }
    get from(){
        return this._from;
    }
    set to (value){
        if( typeof value!=='number' || isNaN(value)){
            throw new TypeError('Your value should be a number except NaN');
        }
        if(this._from>value){
            throw new RangeError('TO-value should be more than FROM-value');
        }
        this._to=value;
    }
    get to (){
        return this._to;
    }
    
    validate(num){
        if (typeof num!=='number' || isNaN(num)){
            throw new TypeError('Your value should be a number except NaN');
        }
        return num<this._to && num>=this._from;
    }
}
let t = new RangeValidator(0,10);
t.validate(4);
