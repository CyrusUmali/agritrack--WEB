((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_38",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
bE0(d,e,f,g,h,i,j){return new B.ME(e,h,f,j,d,i,g)},
o5:function o5(d,e){this.a=d
this.b=e},
ME:function ME(d,e,f,g,h,i,j){var _=this
_.c=d
_.w=e
_.x=f
_.y=g
_.ax=h
_.ay=i
_.a=j},
MD:function MD(d){this.d=d},
W5:function W5(d,e){this.a=d
this.b=e},
Vx:function Vx(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.jv$=e
_.ek$=f
_.bt$=g
_.c=_.a=null},
bfT:function bfT(d){this.a=d},
bfU:function bfU(d){this.a=d},
bfV:function bfV(d){this.a=d},
bfW:function bfW(d){this.a=d},
a_g:function a_g(){},
a_h:function a_h(){}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[47],B)
C=c[83]
B.o5.prototype={
H(){return"DismissDirection."+this.b}}
B.ME.prototype={
af(){var x=null
return new B.Vx(new A.bf(x,y.z),x,x,x)}}
B.MD.prototype={}
B.W5.prototype={
H(){return"_FlingGestureKind."+this.b}}
B.Vx.prototype={
aM(){var x,w,v=this
v.aBR()
x=v.ghO()
x.dh()
w=x.ed$
w.b=!0
w.a.push(v.gaOy())
x.dh()
x=x.dH$
x.b=!0
x.a.push(v.gaOA())
v.Y4()},
ghO(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.bw(null,D.M,null,1,null,w)
w.d!==$&&A.ay()
w.d=x
v=x}return v},
gwT(){var x=this.ghO().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.ghO().m()
var x=this.f
if(x!=null)x.m()
this.aBQ()},
gnL(){var x=this.a.x
return x===C.Ew||x===C.Ex||x===C.xq},
xC(d){var x,w,v,u
if(d===0)return C.Ez
if(this.gnL()){x=this.c.am(y.o).w
$label0$0:{w=D.V===x
if(w&&d<0){v=C.xq
break $label0$0}u=D.o===x
if(u&&d>0){v=C.xq
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.Ex
break $label0$0}v=null}return v}return d>0?C.Ey:C.a8R},
gLe(){this.a.toString
C.apT.i(0,this.xC(this.w))
return 0.4},
gaeC(){var x=this.c.gq(0)
x.toString
return this.gnL()?x.a:x.b},
aJP(d){var x,w=this
if(w.x)return
w.y=!0
x=w.ghO().r
if(x!=null&&x.a!=null){x=w.ghO().x
x===$&&A.b()
w.w=x*w.gaeC()*J.hE(w.w)
w.ghO().i2(0)}else{w.w=0
w.ghO().sk(0,0)}w.W(new B.bfT(w))},
aJQ(d){var x,w,v=this
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
case 2:switch(v.c.am(y.o).w.a){case 0:x=v.w+x
if(x>0)v.w=x
break
case 1:x=v.w+x
if(x<0)v.w=x
break}break
case 3:switch(v.c.am(y.o).w.a){case 0:x=v.w+x
if(x<0)v.w=x
break
case 1:x=v.w+x
if(x>0)v.w=x
break}break
case 6:v.w=0
break}if(J.hE(w)!==J.hE(v.w))v.W(new B.bfU(v))
x=v.ghO().r
if(!(x!=null&&x.a!=null))v.ghO().sk(0,Math.abs(v.w)/v.gaeC())},
aOB(){var x,w=this
if(w.a.ay!=null){x=w.ghO().x
x===$&&A.b()
w.Q=x>w.gLe()
w.xC(w.w)
x=w.ghO().x
x===$&&A.b()
w.a.ay.$1(new B.MD(x))}},
Y4(){var x=this,w=J.hE(x.w),v=x.ghO(),u=x.gnL(),t=x.a
if(u){t.toString
u=new A.f(w,0)}else{t.toString
u=new A.f(0,w)}t=y.A
x.e=new A.aC(y.v.a(v),new A.aA(D.l,u,t),t.h("aC<aL.T>"))},
aJx(d){var x,w,v,u,t=this
if(t.w===0)return C.BB
x=d.a
w=x.a
v=x.b
if(t.gnL()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.BB
u=t.xC(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.BB
u=t.xC(v)}if(u===t.xC(t.w))return C.aI6
return C.aI7},
aJO(d){var x,w,v,u=this
if(u.y){x=u.ghO().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
u.y=!1
if(u.ghO().gbj(0)===D.ao){u.Eu()
return}x=d.a
w=x.a
v=u.gnL()?w.a:w.b
switch(u.aJx(x).a){case 1:if(u.gLe()>=1){u.ghO().eH(0)
break}u.w=J.hE(v)
u.ghO().oh(Math.abs(v)*0.0033333333333333335)
break
case 2:u.w=J.hE(v)
u.ghO().oh(-Math.abs(v)*0.0033333333333333335)
break
case 0:if(u.ghO().gbj(0)!==D.af){x=u.ghO().x
x===$&&A.b()
if(x>u.gLe())u.ghO().cR(0)
else u.ghO().eH(0)}break}},
LI(d){return this.aOz(d)},
aOz(d){var x=0,w=A.O(y.q),v=this
var $async$LI=A.J(function(e,f){if(e===1)return A.L(f,w)
while(true)switch(x){case 0:x=d===D.ao&&!v.y?2:3
break
case 2:x=4
return A.Y(v.Eu(),$async$LI)
case 4:case 3:if(v.c!=null)v.uH()
return A.M(null,w)}})
return A.N($async$LI,w)},
Eu(){var x=0,w=A.O(y.q),v,u=this,t
var $async$Eu=A.J(function(d,e){if(d===1)return A.L(e,w)
while(true)switch(x){case 0:if(u.gLe()>=1){u.ghO().eH(0)
x=1
break}x=3
return A.Y(u.Ud(),$async$Eu)
case 3:t=e
if(u.c!=null)if(t)u.b1e()
else u.ghO().eH(0)
case 1:return A.M(v,w)}})
return A.N($async$Eu,w)},
Ud(){var x=0,w=A.O(y.e),v,u=this
var $async$Ud=A.J(function(d,e){if(d===1)return A.L(e,w)
while(true)switch(x){case 0:u.a.toString
v=!0
x=1
break
case 1:return A.M(v,w)}})
return A.N($async$Ud,w)},
b1e(){var x,w,v=this,u=v.a.y
if(u==null){x=v.xC(v.w)
v.a.w.$1(x)}else{u=A.bw(null,u,null,1,null,v)
u.dh()
w=u.dH$
w.b=!0
w.a.push(v.gaRb())
u.dh()
w=u.ed$
w.b=!0
w.a.push(new B.bfV(v))
v.f=u
u.cR(0)
v.W(new B.bfW(v))}},
aRc(){var x=this,w=x.f.gbj(0),v=x.a
if(w===D.ao)v.w.$1(x.xC(x.w))
else v.toString},
D(d){var x,w,v,u,t,s,r,q=this,p=null
q.DF(d)
x=q.a
x.toString
w=q.r
if(w!=null){x=q.gnL()?D.F:D.N
v=q.z
return A.bHC(x,0,new A.I(v.a,v.b,p,p),w)}w=q.e
w===$&&A.b()
u=A.wP(new A.jG(x.c,q.as),w,p,!0)
if(x.x===C.Ez)return u
x=q.gnL()?q.ga9k():p
w=q.gnL()?q.ga9l():p
v=q.gnL()?q.ga9j():p
t=q.gnL()?p:q.ga9k()
s=q.gnL()?p:q.ga9l()
r=q.gnL()?p:q.ga9j()
return A.dj(q.a.ax,u,D.J,!1,p,p,p,p,v,x,w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,t,s)}}
B.a_g.prototype={
dc(){this.dX()
this.dR()
this.fl()},
m(){var x=this,w=x.bt$
if(w!=null)w.M(0,x.gfe())
x.bt$=null
x.b4()}}
B.a_h.prototype={
aM(){this.b5()
if(this.gwT())this.Ag()},
hn(){var x=this.jv$
if(x!=null){x.aw()
x.fs()
this.jv$=null}this.q8()}}
var z=a.updateTypes(["~()","~(j_)","~(j0)","~(iZ)","an<~>(iA)"])
B.bfT.prototype={
$0(){this.a.Y4()},
$S:0}
B.bfU.prototype={
$0(){this.a.Y4()},
$S:0}
B.bfV.prototype={
$1(d){return this.a.uH()},
$S:13}
B.bfW.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gq(0)
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aC(w.a(new A.aC(w.a(x),new A.eY(C.adG),y.n.h("aC<aL.T>"))),new A.aA(1,0,v),v.h("aC<aL.T>"))},
$S:0};(function aliases(){var x=B.a_g.prototype
x.aBQ=x.m
x=B.a_h.prototype
x.aBR=x.aM})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Vx.prototype,"ga9k","aJP",1)
x(v,"ga9l","aJQ",2)
w(v,"gaOA","aOB",0)
x(v,"ga9j","aJO",3)
x(v,"gaOy","LI",4)
w(v,"gaRb","aRc",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.jk,[B.o5,B.W5])
v(B.ME,A.W)
v(B.MD,A.G)
v(B.a_g,A.a2)
v(B.a_h,B.a_g)
v(B.Vx,B.a_h)
w(A.eG,[B.bfT,B.bfU,B.bfW])
v(B.bfV,A.eh)
x(B.a_g,A.dM)
x(B.a_h,A.re)})()
A.dD(b.typeUniverse,JSON.parse('{"ME":{"W":[],"d":[]},"Vx":{"a2":["ME"]}}'))
var y={v:A.P("c5<A>"),n:A.P("eY"),o:A.P("hM"),z:A.P("bf<a2<W>>"),A:A.P("aA<f>"),g:A.P("aA<A>"),e:A.P("z"),q:A.P("~")};(function constants(){C.Ew=new B.o5(1,"horizontal")
C.Ex=new B.o5(2,"endToStart")
C.xq=new B.o5(3,"startToEnd")
C.a8R=new B.o5(4,"up")
C.Ey=new B.o5(5,"down")
C.Ez=new B.o5(6,"none")
C.fA=new A.bp(4e6)
C.adG=new A.d0(0.4,1,D.bB)
C.apT=new A.Q(D.dU,[],A.P("Q<o5,A>"))
C.BB=new B.W5(0,"none")
C.aI6=new B.W5(1,"forward")
C.aI7=new B.W5(2,"reverse")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_38",e:"endPart",h:b})})($__dart_deferred_initializers__,"oMz34yhF+WRy6VHaj5BB1HmLrGE=");