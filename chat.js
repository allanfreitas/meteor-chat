l='subscribe',d=[],n='n',i='i',b='b',c='click #',r='return ',u='u',y=0
f=Function,m=Meteor,o=m.Collection,p=new o(b),t=new o(u)
w=f('t.remove({i:d.pop()})'),g=f('_(d.length).times(w)')
m.isClient&&(h=Template.h,e=h.events={},m[l](b),m[l](u),s=Session,
w=f(r+'s.get(i)'),h.p=f(r+'p.find()'),h.t=f(r+'t.find()'),a=f('a','a','y=$("#3").val(),s.set(i,1)'),
e[c+'2']=f('console.log(this);p.insert({c:(y||"?")+": "+$("#l").val()})'),
e[c + '4'] = f('w()||m.call("x",$("#3").val(),t._connection._lastSessionId,a)')
)||(
m.startup(f('m.setInterval(g,100)')),j=f('h=this.id;h&&d.push(h)'),
m.methods({x:f('k','d','s=m.default_server.sessions[d].socket,s.on("close",j),t.insert({n:k,i:s.id})')}))