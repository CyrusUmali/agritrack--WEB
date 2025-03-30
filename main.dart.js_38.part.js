((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_38",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
bCM(d,e,f,g,h,i,j){return new B.Mv(e,h,f,j,d,i,g)},
o6:function o6(d,e){this.a=d
this.b=e},
Mv:function Mv(d,e,f,g,h,i,j){var _=this
_.c=d
_.w=e
_.x=f
_.y=g
_.ax=h
_.ay=i
_.a=j},
Mu:function Mu(d){this.d=d},
W_:function W_(d,e){this.a=d
this.b=e},
Vr:function Vr(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.ju$=e
_.ek$=f
_.bt$=g
_.c=_.a=null},
bf5:function bf5(d){this.a=d},
bf6:function bf6(d){this.a=d},
bf7:function bf7(d){this.a=d},
bf8:function bf8(d){this.a=d},
a_9:function a_9(){},
a_a:function a_a(){}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[46],B)
C=c[80]
B.o6.prototype={
H(){return"DismissDirection."+this.b}}
B.Mv.prototype={
af(){var x=null
return new B.Vr(new A.be(x,y.z),x,x,x)}}
B.Mu.prototype={}
B.W_.prototype={
H(){return"_FlingGestureKind."+this.b}}
B.Vr.prototype={
aN(){var x,w,v=this
v.aBK()
x=v.ghO()
x.df()
w=x.ec$
w.b=!0
w.a.push(v.gaOr())
x.df()
x=x.dH$
x.b=!0
x.a.push(v.gaOt())
v.Y2()},
ghO(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.bu(null,D.N,null,1,null,w)
w.d!==$&&A.aB()
w.d=x
v=x}return v},
gwS(){var x=this.ghO().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.ghO().m()
var x=this.f
if(x!=null)x.m()
this.aBJ()},
gnJ(){var x=this.a.x
return x===C.Ev||x===C.Ew||x===C.xn},
xB(d){var x,w,v,u
if(d===0)return C.Ey
if(this.gnJ()){x=this.c.ao(y.o).w
$label0$0:{w=D.S===x
if(w&&d<0){v=C.xn
break $label0$0}u=D.o===x
if(u&&d>0){v=C.xn
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.Ew
break $label0$0}v=null}return v}return d>0?C.Ex:C.a8J},
gLc(){this.a.toString
C.apL.i(0,this.xB(this.w))
return 0.4},
gaex(){var x=this.c.gq(0)
x.toString
return this.gnJ()?x.a:x.b},
aJI(d){var x,w=this
if(w.x)return
w.y=!0
x=w.ghO().r
if(x!=null&&x.a!=null){x=w.ghO().x
x===$&&A.b()
w.w=x*w.gaex()*J.hD(w.w)
w.ghO().i0(0)}else{w.w=0
w.ghO().sk(0,0)}w.W(new B.bf5(w))},
aJJ(d){var x,w,v=this
if(v.y){x=v.ghO().r
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
case 2:switch(v.c.ao(y.o).w.a){case 0:x=v.w+x
if(x>0)v.w=x
break
case 1:x=v.w+x
if(x<0)v.w=x
break}break
case 3:switch(v.c.ao(y.o).w.a){case 0:x=v.w+x
if(x<0)v.w=x
break
case 1:x=v.w+x
if(x>0)v.w=x
break}break
case 6:v.w=0
break}if(J.hD(w)!==J.hD(v.w))v.W(new B.bf6(v))
x=v.ghO().r
if(!(x!=null&&x.a!=null))v.ghO().sk(0,Math.abs(v.w)/v.gaex())},
aOu(){var x,w=this
if(w.a.ay!=null){x=w.ghO().x
x===$&&A.b()
w.Q=x>w.gLc()
w.xB(w.w)
x=w.ghO().x
x===$&&A.b()
w.a.ay.$1(new B.Mu(x))}},
Y2(){var x=this,w=J.hD(x.w),v=x.ghO(),u=x.gnJ(),t=x.a
if(u){t.toString
u=new A.f(w,0)}else{t.toString
u=new A.f(0,w)}t=y.A
x.e=new A.aC(y.v.a(v),new A.az(D.l,u,t),t.h("aC<aL.T>"))},
aJq(d){var x,w,v,u,t=this
if(t.w===0)return C.BB
x=d.a
w=x.a
v=x.b
if(t.gnJ()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.BB
u=t.xB(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.BB
u=t.xB(v)}if(u===t.xB(t.w))return C.aHZ
return C.aI_},
aJH(d){var x,w,v,u=this
if(u.y){x=u.ghO().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
u.y=!1
if(u.ghO().gbj(0)===D.an){u.Et()
return}x=d.a
w=x.a
v=u.gnJ()?w.a:w.b
switch(u.aJq(x).a){case 1:if(u.gLc()>=1){u.ghO().eH(0)
break}u.w=J.hD(v)
u.ghO().of(Math.abs(v)*0.0033333333333333335)
break
case 2:u.w=J.hD(v)
u.ghO().of(-Math.abs(v)*0.0033333333333333335)
break
case 0:if(u.ghO().gbj(0)!==D.af){x=u.ghO().x
x===$&&A.b()
if(x>u.gLc())u.ghO().cR(0)
else u.ghO().eH(0)}break}},
LG(d){return this.aOs(d)},
aOs(d){var x=0,w=A.Q(y.q),v=this
var $async$LG=A.L(function(e,f){if(e===1)return A.N(f,w)
while(true)switch(x){case 0:x=d===D.an&&!v.y?2:3
break
case 2:x=4
return A.Z(v.Et(),$async$LG)
case 4:case 3:if(v.c!=null)v.uD()
return A.O(null,w)}})
return A.P($async$LG,w)},
Et(){var x=0,w=A.Q(y.q),v,u=this,t
var $async$Et=A.L(function(d,e){if(d===1)return A.N(e,w)
while(true)switch(x){case 0:if(u.gLc()>=1){u.ghO().eH(0)
x=1
break}x=3
return A.Z(u.Ub(),$async$Et)
case 3:t=e
if(u.c!=null)if(t)u.b16()
else u.ghO().eH(0)
case 1:return A.O(v,w)}})
return A.P($async$Et,w)},
Ub(){var x=0,w=A.Q(y.e),v,u=this
var $async$Ub=A.L(function(d,e){if(d===1)return A.N(e,w)
while(true)switch(x){case 0:u.a.toString
v=!0
x=1
break
case 1:return A.O(v,w)}})
return A.P($async$Ub,w)},
b16(){var x,w,v=this,u=v.a.y
if(u==null){x=v.xB(v.w)
v.a.w.$1(x)}else{u=A.bu(null,u,null,1,null,v)
u.df()
w=u.dH$
w.b=!0
w.a.push(v.gaR4())
u.df()
w=u.ec$
w.b=!0
w.a.push(new B.bf7(v))
v.f=u
u.cR(0)
v.W(new B.bf8(v))}},
aR5(){var x=this,w=x.f.gbj(0),v=x.a
if(w===D.an)v.w.$1(x.xB(x.w))
else v.toString},
D(d){var x,w,v,u,t,s,r,q=this,p=null
q.DE(d)
x=q.a
x.toString
w=q.r
if(w!=null){x=q.gnJ()?D.F:D.M
v=q.z
return A.bGp(x,0,new A.K(v.a,v.b,p,p),w)}w=q.e
w===$&&A.b()
u=A.wG(new A.jC(x.c,q.as),w,p,!0)
if(x.x===C.Ey)return u
x=q.gnJ()?q.ga9f():p
w=q.gnJ()?q.ga9g():p
v=q.gnJ()?q.ga9e():p
t=q.gnJ()?p:q.ga9f()
s=q.gnJ()?p:q.ga9g()
r=q.gnJ()?p:q.ga9e()
return A.d9(q.a.ax,u,D.J,!1,p,p,p,p,v,x,w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,t,s)}}
B.a_9.prototype={
dc(){this.dX()
this.dR()
this.fk()},
m(){var x=this,w=x.bt$
if(w!=null)w.M(0,x.gfc())
x.bt$=null
x.b4()}}
B.a_a.prototype={
aN(){this.b5()
if(this.gwS())this.Ae()},
hn(){var x=this.ju$
if(x!=null){x.aw()
x.fq()
this.ju$=null}this.q5()}}
var z=a.updateTypes(["~()","~(iY)","~(iZ)","~(iX)","am<~>(iz)"])
B.bf5.prototype={
$0(){this.a.Y2()},
$S:0}
B.bf6.prototype={
$0(){this.a.Y2()},
$S:0}
B.bf7.prototype={
$1(d){return this.a.uD()},
$S:13}
B.bf8.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gq(0)
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aC(w.a(new A.aC(w.a(x),new A.eX(C.ady),y.n.h("aC<aL.T>"))),new A.az(1,0,v),v.h("aC<aL.T>"))},
$S:0};(function aliases(){var x=B.a_9.prototype
x.aBJ=x.m
x=B.a_a.prototype
x.aBK=x.aN})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Vr.prototype,"ga9f","aJI",1)
x(v,"ga9g","aJJ",2)
w(v,"gaOt","aOu",0)
x(v,"ga9e","aJH",3)
x(v,"gaOr","LG",4)
w(v,"gaR4","aR5",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.jh,[B.o6,B.W_])
v(B.Mv,A.V)
v(B.Mu,A.F)
v(B.a_9,A.a3)
v(B.a_a,B.a_9)
v(B.Vr,B.a_a)
w(A.eE,[B.bf5,B.bf6,B.bf8])
v(B.bf7,A.ev)
x(B.a_9,A.dL)
x(B.a_a,A.rb)})()
A.dN(b.typeUniverse,JSON.parse('{"Mv":{"V":[],"d":[]},"Vr":{"a3":["Mv"]}}'))
var y={v:A.M("c4<A>"),n:A.M("eX"),o:A.M("hL"),z:A.M("be<a3<V>>"),A:A.M("az<f>"),g:A.M("az<A>"),e:A.M("z"),q:A.M("~")};(function constants(){C.Ev=new B.o6(1,"horizontal")
C.Ew=new B.o6(2,"endToStart")
C.xn=new B.o6(3,"startToEnd")
C.a8J=new B.o6(4,"up")
C.Ex=new B.o6(5,"down")
C.Ey=new B.o6(6,"none")
C.fy=new A.bo(4e6)
C.ady=new A.cZ(0.4,1,D.bx)
C.apL=new A.J(D.dU,[],A.M("J<o6,A>"))
C.BB=new B.W_(0,"none")
C.aHZ=new B.W_(1,"forward")
C.aI_=new B.W_(2,"reverse")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_38",e:"endPart",h:b})})($__dart_deferred_initializers__,"OdGEeqk/+OtePeimADGFoekG77k=");