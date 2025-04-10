((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_53",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
bMx(d,e,f,g,h,i,j){return new B.Oq(e,h,f,j,d,i,g)},
oI:function oI(d,e){this.a=d
this.b=e},
Oq:function Oq(d,e,f,g,h,i,j){var _=this
_.c=d
_.w=e
_.x=f
_.y=g
_.ax=h
_.ay=i
_.a=j},
Op:function Op(d){this.d=d},
Yz:function Yz(d,e){this.a=d
this.b=e},
Y_:function Y_(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.k_$=e
_.eF$=f
_.bB$=g
_.c=_.a=null},
bm9:function bm9(d){this.a=d},
bma:function bma(d){this.a=d},
bmb:function bmb(d){this.a=d},
bmc:function bmc(d){this.a=d},
a2_:function a2_(){},
a20:function a20(){}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[66],B)
C=c[101]
B.oI.prototype={
E(){return"DismissDirection."+this.b}}
B.Oq.prototype={
ac(){var x=null
return new B.Y_(new A.b8(x,y.z),x,x,x)}}
B.Op.prototype={}
B.Yz.prototype={
E(){return"_FlingGestureKind."+this.b}}
B.Y_.prototype={
aE(){var x,w,v=this
v.aEJ()
x=v.gio()
x.dz()
w=x.ei$
w.b=!0
w.a.push(v.gaSN())
x.dz()
x=x.dJ$
x.b=!0
x.a.push(v.gaSP())
v.a_9()},
gio(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.bB(null,D.a9,null,1,null,w)
w.d!==$&&A.ax()
w.d=x
v=x}return v},
gxW(){var x=this.gio().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.gio().m()
var x=this.f
if(x!=null)x.m()
this.aEI()},
goj(){var x=this.a.x
return x===C.J2||x===C.J3||x===C.AP},
yE(d){var x,w,v,u
if(d===0)return C.J5
if(this.goj()){x=this.c.aj(y.o).w
$label0$0:{w=D.am===x
if(w&&d<0){v=C.AP
break $label0$0}u=D.H===x
if(u&&d>0){v=C.AP
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.J3
break $label0$0}v=null}return v}return d>0?C.J4:C.ak6},
gMZ(){this.a.toString
C.bgB.i(0,this.yE(this.w))
return 0.4},
gahr(){var x=this.c.gq(0)
x.toString
return this.goj()?x.a:x.b},
aND(d){var x,w=this
if(w.x)return
w.y=!0
x=w.gio().r
if(x!=null&&x.a!=null){x=w.gio().x
x===$&&A.c()
w.w=x*w.gahr()*J.i_(w.w)
w.gio().iz(0)}else{w.w=0
w.gio().sk(0,0)}w.T(new B.bm9(w))},
aNE(d){var x,w,v=this
if(v.y){x=v.gio().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
x=d.c
x.toString
w=v.w
switch(v.a.x.a){case 1:case 0:v.w=w+x
break
case 4:x=w+x
if(x<0)v.w=x
break
case 5:x=w+x
if(x>0)v.w=x
break
case 2:switch(v.c.aj(y.o).w.a){case 0:x=v.w+x
if(x>0)v.w=x
break
case 1:x=v.w+x
if(x<0)v.w=x
break}break
case 3:switch(v.c.aj(y.o).w.a){case 0:x=v.w+x
if(x<0)v.w=x
break
case 1:x=v.w+x
if(x>0)v.w=x
break}break
case 6:v.w=0
break}if(J.i_(w)!==J.i_(v.w))v.T(new B.bma(v))
x=v.gio().r
if(!(x!=null&&x.a!=null))v.gio().sk(0,Math.abs(v.w)/v.gahr())},
aSQ(){var x,w=this
if(w.a.ay!=null){x=w.gio().x
x===$&&A.c()
w.Q=x>w.gMZ()
w.yE(w.w)
x=w.gio().x
x===$&&A.c()
w.a.ay.$1(new B.Op(x))}},
a_9(){var x=this,w=J.i_(x.w),v=x.gio(),u=x.goj(),t=x.a
if(u){t.toString
u=new A.h(w,0)}else{t.toString
u=new A.h(0,w)}t=y.A
x.e=new A.aF(y.v.a(v),new A.aE(D.C,u,t),t.h("aF<aR.T>"))},
aNl(d){var x,w,v,u,t=this
if(t.w===0)return C.FU
x=d.a
w=x.a
v=x.b
if(t.goj()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.FU
u=t.yE(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.FU
u=t.yE(v)}if(u===t.yE(t.w))return C.bAj
return C.bAk},
aNC(d){var x,w,v,u=this
if(u.y){x=u.gio().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
u.y=!1
if(u.gio().gbq(0)===D.aZ){u.G8()
return}x=d.a
w=x.a
v=u.goj()?w.a:w.b
switch(u.aNl(x).a){case 1:if(u.gMZ()>=1){u.gio().eW(0)
break}u.w=J.i_(v)
u.gio().oZ(Math.abs(v)*0.0033333333333333335)
break
case 2:u.w=J.i_(v)
u.gio().oZ(-Math.abs(v)*0.0033333333333333335)
break
case 0:if(u.gio().gbq(0)!==D.aS){x=u.gio().x
x===$&&A.c()
if(x>u.gMZ())u.gio().d6(0)
else u.gio().eW(0)}break}},
Nw(d){return this.aSO(d)},
aSO(d){var x=0,w=A.R(y.q),v=this
var $async$Nw=A.N(function(e,f){if(e===1)return A.O(f,w)
while(true)switch(x){case 0:x=d===D.aZ&&!v.y?2:3
break
case 2:x=4
return A.Y(v.G8(),$async$Nw)
case 4:case 3:if(v.c!=null)v.vG()
return A.P(null,w)}})
return A.Q($async$Nw,w)},
G8(){var x=0,w=A.R(y.q),v,u=this,t
var $async$G8=A.N(function(d,e){if(d===1)return A.O(e,w)
while(true)switch(x){case 0:if(u.gMZ()>=1){u.gio().eW(0)
x=1
break}x=3
return A.Y(u.Wc(),$async$G8)
case 3:t=e
if(u.c!=null)if(t)u.b5O()
else u.gio().eW(0)
case 1:return A.P(v,w)}})
return A.Q($async$G8,w)},
Wc(){var x=0,w=A.R(y.e),v,u=this
var $async$Wc=A.N(function(d,e){if(d===1)return A.O(e,w)
while(true)switch(x){case 0:u.a.toString
v=!0
x=1
break
case 1:return A.P(v,w)}})
return A.Q($async$Wc,w)},
b5O(){var x,w,v=this,u=v.a.y
if(u==null){x=v.yE(v.w)
v.a.w.$1(x)}else{u=A.bB(null,u,null,1,null,v)
u.dz()
w=u.dJ$
w.b=!0
w.a.push(v.gaVv())
u.dz()
w=u.ei$
w.b=!0
w.a.push(new B.bmb(v))
v.f=u
u.d6(0)
v.T(new B.bmc(v))}},
aVw(){var x=this,w=x.f.gbq(0),v=x.a
if(w===D.aZ)v.w.$1(x.yE(x.w))
else v.toString},
B(d){var x,w,v,u,t,s,r,q=this,p=null
q.Ff(d)
x=q.a
x.toString
w=q.r
if(w!=null){x=q.goj()?D.a4:D.a6
v=q.z
return A.bQn(x,0,new A.E(v.a,v.b,p,p),w)}w=q.e
w===$&&A.c()
u=A.xY(new A.k7(x.c,q.as),w,p,!0)
if(x.x===C.J5)return u
x=q.goj()?q.gabX():p
w=q.goj()?q.gabY():p
v=q.goj()?q.gabW():p
t=q.goj()?p:q.gabX()
s=q.goj()?p:q.gabY()
r=q.goj()?p:q.gabW()
return A.dv(q.a.ax,u,D.U,!1,p,p,p,p,v,x,w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,t,s)}}
B.a2_.prototype={
dt(){this.ea()
this.e3()
this.fC()},
m(){var x=this,w=x.bB$
if(w!=null)w.O(0,x.gfv())
x.bB$=null
x.aZ()}}
B.a20.prototype={
aE(){this.b_()
if(this.gxW())this.Bz()},
hJ(){var x=this.k_$
if(x!=null){x.av()
x.fB()
this.k_$=null}this.qW()}}
var z=a.updateTypes(["~()","~(jr)","~(js)","~(jq)","ap<~>(jS)"])
B.bm9.prototype={
$0(){this.a.a_9()},
$S:0}
B.bma.prototype={
$0(){this.a.a_9()},
$S:0}
B.bmb.prototype={
$1(d){return this.a.vG()},
$S:12}
B.bmc.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gq(0)
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aF(w.a(new A.aF(w.a(x),new A.fl(C.apw),y.n.h("aF<aR.T>"))),new A.aE(1,0,v),v.h("aF<aR.T>"))},
$S:0};(function aliases(){var x=B.a2_.prototype
x.aEI=x.m
x=B.a20.prototype
x.aEJ=x.aE})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Y_.prototype,"gabX","aND",1)
x(v,"gabY","aNE",2)
w(v,"gaSP","aSQ",0)
x(v,"gabW","aNC",3)
x(v,"gaSN","Nw",4)
w(v,"gaVv","aVw",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.hV,[B.oI,B.Yz])
v(B.Oq,A.V)
v(B.Op,A.J)
v(B.a2_,A.Z)
v(B.a20,B.a2_)
v(B.Y_,B.a20)
w(A.eh,[B.bm9,B.bma,B.bmc])
v(B.bmb,A.dE)
x(B.a2_,A.e0)
x(B.a20,A.t_)})()
A.cN(b.typeUniverse,JSON.parse('{"Oq":{"V":[],"d":[]},"Y_":{"Z":["Oq"]}}'))
var y={v:A.C("cb<B>"),n:A.C("fl"),o:A.C("fW"),z:A.C("b8<Z<V>>"),A:A.C("aE<h>"),g:A.C("aE<B>"),e:A.C("z"),q:A.C("~")};(function constants(){C.J2=new B.oI(1,"horizontal")
C.J3=new B.oI(2,"endToStart")
C.AP=new B.oI(3,"startToEnd")
C.ak6=new B.oI(4,"up")
C.J4=new B.oI(5,"down")
C.J5=new B.oI(6,"none")
C.fR=new A.bt(4e6)
C.apw=new A.dh(0.4,1,D.cm)
C.bgB=new A.W(D.eZ,[],A.C("W<oI,B>"))
C.FU=new B.Yz(0,"none")
C.bAj=new B.Yz(1,"forward")
C.bAk=new B.Yz(2,"reverse")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_53",e:"endPart",h:b})})($__dart_deferred_initializers__,"Jh48Akege6XjzY4r5tNBEgfQTog=");