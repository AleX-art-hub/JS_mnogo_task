const role = Object.freeze({
    admin:"admin",
    moderator:"moderator",
    user:"user",
});

const action = Object.freeze({
    create:"create",
    read:"read",
    update:"update",
    delete:"delete",
});

let roleRights=new Map();

roleRights.set(action.create,[role.admin,role.moderator,]);
roleRights.set(action.read,[role.admin,role.moderator,role.user,]);
roleRights.set(action.update,[role.moderator]);
roleRights.set(action.delete,[role.admin]);

console.log(roleRights);
console.log('map RoleRights');
function checkPermission (action, role){
    if(roleRinghts.has(action)){
        return roleRinghts.get(action).includes(role);
    }
    return false
}
//realizaciya classa
class User{
    constructor(name, email, role){
        this.name=name;
        this.email = email;
        this.role = role;
    }
checkUserPermission(action, user){
    let rights = new Map();
    rights.set(role.admin, new Map().set(action.create,[role.moderator, role.user]));
}
}
