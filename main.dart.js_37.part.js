((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_37",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
bzF(d,e,f,g,h,i,j){return new B.LZ(e,h,f,j,d,i,g)},
nR:function nR(d,e){this.a=d
this.b=e},
LZ:function LZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.w=e
_.x=f
_.y=g
_.ax=h
_.ay=i
_.a=j},
LY:function LY(d){this.d=d},
Vn:function Vn(d,e){this.a=d
this.b=e},
UO:function UO(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.ju$=e
_.ew$=f
_.bL$=g
_.c=_.a=null},
bbS:function bbS(d){this.a=d},
bbT:function bbT(d){this.a=d},
bbU:function bbU(d){this.a=d},
bbV:function bbV(d){this.a=d},
Zw:function Zw(){},
Zx:function Zx(){}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[43],B)
C=c[79]
B.nR.prototype={
J(){return"DismissDirection."+this.b}}
B.LZ.prototype={
af(){var x=null
return new B.UO(new A.bk(x,y.z),x,x,x)}}
B.LY.prototype={}
B.Vn.prototype={
J(){return"_FlingGestureKind."+this.b}}
B.UO.prototype={
aN(){var x,w,v=this
v.aAP()
x=v.ghO()
x.ds()
w=x.eg$
w.b=!0
w.a.push(v.gaNt())
x.ds()
x=x.dQ$
x.b=!0
x.a.push(v.gaNv())
v.XH()},
ghO(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.bs(null,D.N,null,1,null,w)
w.d!==$&&A.aw()
w.d=x
v=x}return v},
gwJ(){var x=this.ghO().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.ghO().m()
var x=this.f
if(x!=null)x.m()
this.aAO()},
gnK(){var x=this.a.x
return x===C.E2||x===C.E3||x===C.x5},
xt(d){var x,w,v,u
if(d===0)return C.E5
if(this.gnK()){x=this.c.aq(y.o).w
$label0$0:{w=D.S===x
if(w&&d<0){v=C.x5
break $label0$0}u=D.o===x
if(u&&d>0){v=C.x5
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.E3
break $label0$0}v=null}return v}return d>0?C.E4:C.a8f},
gKS(){this.a.toString
C.ap0.i(0,this.xt(this.w))
return 0.4},
gae4(){var x=this.c.gq(0)
x.toString
return this.gnK()?x.a:x.b},
aIJ(d){var x,w=this
if(w.x)return
w.y=!0
x=w.ghO().r
if(x!=null&&x.a!=null){x=w.ghO().x
x===$&&A.a()
w.w=x*w.gae4()*J.hB(w.w)
w.ghO().io(0)}else{w.w=0
w.ghO().sk(0,0)}w.V(new B.bbS(w))},
aIK(d){var x,w,v=this
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
case 2:switch(v.c.aq(y.o).w.a){case 0:x=v.w+x
if(x>0)v.w=x
break
case 1:x=v.w+x
if(x<0)v.w=x
break}break
case 3:switch(v.c.aq(y.o).w.a){case 0:x=v.w+x
if(x<0)v.w=x
break
case 1:x=v.w+x
if(x>0)v.w=x
break}break
case 6:v.w=0
break}if(J.hB(w)!==J.hB(v.w))v.V(new B.bbT(v))
x=v.ghO().r
if(!(x!=null&&x.a!=null))v.ghO().sk(0,Math.abs(v.w)/v.gae4())},
aNw(){var x,w=this
if(w.a.ay!=null){x=w.ghO().x
x===$&&A.a()
w.Q=x>w.gKS()
w.xt(w.w)
x=w.ghO().x
x===$&&A.a()
w.a.ay.$1(new B.LY(x))}},
XH(){var x=this,w=J.hB(x.w),v=x.ghO(),u=x.gnK(),t=x.a
if(u){t.toString
u=new A.e(w,0)}else{t.toString
u=new A.e(0,w)}t=y.A
x.e=new A.aL(y.v.a(v),new A.aS(D.l,u,t),t.h("aL<aM.T>"))},
aIt(d){var x,w,v,u,t=this
if(t.w===0)return C.Bb
x=d.a
w=x.a
v=x.b
if(t.gnK()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.Bb
u=t.xt(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.Bb
u=t.xt(v)}if(u===t.xt(t.w))return C.aH5
return C.aH6},
aII(d){var x,w,v,u=this
if(u.y){x=u.ghO().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
u.y=!1
if(u.ghO().gbq(0)===D.ap){u.Ee()
return}x=d.a
w=x.a
v=u.gnK()?w.a:w.b
switch(u.aIt(x).a){case 1:if(u.gKS()>=1){u.ghO().ey(0)
break}u.w=J.hB(v)
u.ghO().OU(Math.abs(v)*0.0033333333333333335)
break
case 2:u.w=J.hB(v)
u.ghO().OU(-Math.abs(v)*0.0033333333333333335)
break
case 0:if(u.ghO().gbq(0)!==D.af){x=u.ghO().x
x===$&&A.a()
if(x>u.gKS())u.ghO().cY(0)
else u.ghO().ey(0)}break}},
Lm(d){return this.aNu(d)},
aNu(d){var x=0,w=A.R(y.q),v=this
var $async$Lm=A.N(function(e,f){if(e===1)return A.O(f,w)
while(true)switch(x){case 0:x=d===D.ap&&!v.y?2:3
break
case 2:x=4
return A.a1(v.Ee(),$async$Lm)
case 4:case 3:if(v.c!=null)v.uy()
return A.P(null,w)}})
return A.Q($async$Lm,w)},
Ee(){var x=0,w=A.R(y.q),v,u=this,t
var $async$Ee=A.N(function(d,e){if(d===1)return A.O(e,w)
while(true)switch(x){case 0:if(u.gKS()>=1){u.ghO().ey(0)
x=1
break}x=3
return A.a1(u.TR(),$async$Ee)
case 3:t=e
if(u.c!=null)if(t)u.b03()
else u.ghO().ey(0)
case 1:return A.P(v,w)}})
return A.Q($async$Ee,w)},
TR(){var x=0,w=A.R(y.e),v,u=this
var $async$TR=A.N(function(d,e){if(d===1)return A.O(e,w)
while(true)switch(x){case 0:u.a.toString
v=!0
x=1
break
case 1:return A.P(v,w)}})
return A.Q($async$TR,w)},
b03(){var x,w,v=this,u=v.a.y
if(u==null){x=v.xt(v.w)
v.a.w.$1(x)}else{u=A.bs(null,u,null,1,null,v)
u.ds()
w=u.dQ$
w.b=!0
w.a.push(v.gaQ6())
u.ds()
w=u.eg$
w.b=!0
w.a.push(new B.bbU(v))
v.f=u
u.cY(0)
v.V(new B.bbV(v))}},
aQ7(){var x=this,w=x.f.gbq(0),v=x.a
if(w===D.ap)v.w.$1(x.xt(x.w))
else v.toString},
D(d){var x,w,v,u,t,s,r,q=this,p=null
q.Dq(d)
x=q.a
x.toString
w=q.r
if(w!=null){x=q.gnK()?D.I:D.K
v=q.z
return A.bUx(x,0,new A.L(v.a,v.b,p,p),w)}w=q.e
w===$&&A.a()
u=A.RX(new A.mR(x.c,q.as),w,p,!0)
if(x.x===C.E5)return u
x=q.gnK()?q.ga8P():p
w=q.gnK()?q.ga8Q():p
v=q.gnK()?q.ga8O():p
t=q.gnK()?p:q.ga8P()
s=q.gnK()?p:q.ga8Q()
r=q.gnK()?p:q.ga8O()
return A.dk(q.a.ax,u,D.M,!1,p,p,p,p,v,x,w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,t,s)}}
B.Zw.prototype={
de(){this.e_()
this.dU()
this.fz()},
m(){var x=this,w=x.bL$
if(w!=null)w.M(0,x.gfq())
x.bL$=null
x.b3()}}
B.Zx.prototype={
aN(){this.b4()
if(this.gwJ())this.A4()},
ho(){var x=this.ju$
if(x!=null){x.ar()
x.fp()
this.ju$=null}this.q2()}}
var z=a.updateTypes(["~()","~(iV)","~(iW)","~(iU)","aj<~>(ix)"])
B.bbS.prototype={
$0(){this.a.XH()},
$S:0}
B.bbT.prototype={
$0(){this.a.XH()},
$S:0}
B.bbU.prototype={
$1(d){return this.a.uy()},
$S:13}
B.bbV.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gq(0)
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aL(w.a(new A.aL(w.a(x),new A.eU(C.acS),y.n.h("aL<aM.T>"))),new A.aS(1,0,v),v.h("aL<aM.T>"))},
$S:0};(function aliases(){var x=B.Zw.prototype
x.aAO=x.m
x=B.Zx.prototype
x.aAP=x.aN})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.UO.prototype,"ga8P","aIJ",1)
x(v,"ga8Q","aIK",2)
w(v,"gaNv","aNw",0)
x(v,"ga8O","aII",3)
x(v,"gaNt","Lm",4)
w(v,"gaQ6","aQ7",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.jc,[B.nR,B.Vn])
v(B.LZ,A.V)
v(B.LY,A.E)
v(B.Zw,A.a3)
v(B.Zx,B.Zw)
v(B.UO,B.Zx)
w(A.eB,[B.bbS,B.bbT,B.bbV])
v(B.bbU,A.ez)
x(B.Zw,A.dY)
x(B.Zx,A.qP)})()
A.dQ(b.typeUniverse,JSON.parse('{"LZ":{"V":[],"c":[]},"UO":{"a3":["LZ"]}}'))
var y={v:A.K("c1<B>"),n:A.K("eU"),o:A.K("i5"),z:A.K("bk<a3<V>>"),A:A.K("aS<e>"),g:A.K("aS<B>"),e:A.K("y"),q:A.K("~")};(function constants(){C.E2=new B.nR(1,"horizontal")
C.E3=new B.nR(2,"endToStart")
C.x5=new B.nR(3,"startToEnd")
C.a8f=new B.nR(4,"up")
C.E4=new B.nR(5,"down")
C.E5=new B.nR(6,"none")
C.h3=new A.bj(4e6)
C.acS=new A.dF(0.4,1,D.bt)
C.ap0=new A.I(D.dM,[],A.K("I<nR,B>"))
C.Bb=new B.Vn(0,"none")
C.aH5=new B.Vn(1,"forward")
C.aH6=new B.Vn(2,"reverse")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_37",e:"endPart",h:b})})($__dart_deferred_initializers__,"evpXp/koXNNOo+5ee9oJ7i/UZcU=");