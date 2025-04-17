((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_81",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
cg5(){return $.bO8()},
bxt:function bxt(d){this.a=d},
kF:function kF(){},
c48(d,e){var x,w,v
if(d===e)return!0
x=J.ag(d)
w=J.ag(e)
if(x.gq(d)!==w.gq(e))return!1
for(v=0;v<x.gq(d);++v)if(!A.bTq(x.ds(d,v),w.ds(e,v)))return!1
return!0},
csM(d,e){var x
if(d===e)return!0
if(d.gq(d)!==e.gq(e))return!1
for(x=d.gaK(d);x.D();)if(!e.f5(0,new A.bN8(x.ga_(x))))return!1
return!0},
cro(d,e){var x,w,v,u
if(d===e)return!0
x=J.ag(d)
w=J.ag(e)
if(x.gq(d)!==w.gq(e))return!1
for(v=J.b6(x.geZ(d));v.D();){u=v.ga_(v)
if(!A.bTq(x.i(d,u),w.i(e,u)))return!1}return!0},
bTq(d,e){var x
if(d==null?e==null:d===e)return!0
if(typeof d=="number"&&typeof e=="number")return!1
else{x=y.a
if(x.b(d))x=x.b(e)
else x=!1
if(x)return J.f(d,e)
else{x=y.g
if(x.b(d)&&x.b(e))return A.csM(d,e)
else{x=y.F
if(x.b(d)&&x.b(e))return A.c48(d,e)
else{x=y.B
if(x.b(d)&&x.b(e))return A.cro(d,e)
else{x=d==null?null:J.ah(d)
if(x!=(e==null?null:J.ah(e)))return!1
else if(!J.f(d,e))return!1}}}}}return!0},
bSv(d,e){var x,w,v,u={}
u.a=d
u.b=e
if(y.B.b(e)){D.e.aB(A.bQk(J.Au(e),new A.bJy(),y.b),new A.bJz(u))
return u.a}x=y.g.b(e)?u.b=A.bQk(e,new A.bJA(),y.b):e
if(y.F.b(x)){for(x=J.b6(x);x.D();){w=x.ga_(x)
v=u.a
u.a=(v^A.bSv(v,w))>>>0}return(u.a^J.aP(u.b))>>>0}d=u.a=d+J.ab(x)&536870911
d=u.a=d+((d&524287)<<10)&536870911
return d^d>>>6},
crp(d,e){return d.l(0)+"("+new B.T(e,new A.bMG(),B.R(e).h("T<1,e>")).dF(0,", ")+")"},
bN8:function bN8(d){this.a=d},
bJy:function bJy(){},
bJz:function bJz(d){this.a=d},
bJA:function bJA(){},
bMG:function bMG(){},
avn:function avn(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bxK:function bxK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xV:function xV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
avo:function avo(d,e){var _=this
_.d=$
_.hy$=d
_.c4$=e
_.c=_.a=null},
bxL:function bxL(d,e){this.a=d
this.b=e},
bxJ:function bxJ(d,e,f,g,h,i){var _=this
_.f=d
_.r=$
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
a4K:function a4K(){},
bQk(d,e,f){var x=B.L(d,!0,f)
D.e.dL(x,e)
return x}},C
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[42],A)
C=c[128]
A.bxt.prototype={
aJG(){var x=self.crypto
if(x!=null)if(x.getRandomValues!=null)return
throw B.i(B.aX("No source of cryptographically secure random numbers available."))},
Tu(d){var x,w,v,u,t,s,r,q
if(d<=0||d>4294967296)throw B.i(B.hT("max must be in range 0 < max \u2264 2^32, was "+d))
if(d>255)if(d>65535)x=d>16777215?4:3
else x=2
else x=1
w=this.a
w.$flags&2&&B.a1(w,11)
w.setUint32(0,0,!1)
v=4-x
u=B.cP(Math.pow(256,x))
for(t=d-1,s=(d&t)>>>0===0;!0;){crypto.getRandomValues(J.dt(D.bL.gbq(w),v,x))
r=w.getUint32(0,!1)
if(s)return(r&t)>>>0
q=r%d
if(r-q+d<u)return q}}}
A.kF.prototype={
k(d,e){var x
if(e==null)return!1
if(this!==e)x=y.a.b(e)&&B.z(this)===B.z(e)&&A.c48(this.goy(),e.goy())
else x=!0
return x},
gC(d){var x=B.fK(B.z(this)),w=D.e.jR(this.goy(),0,A.cpU()),v=w+((w&67108863)<<3)&536870911
v^=v>>>11
return(x^v+((v&16383)<<15)&536870911)>>>0},
l(d){var x=$.bWO
if(x==null){$.bWO=!1
x=!1}if(x)return A.crp(B.z(this),this.goy())
return B.z(this).l(0)}}
A.avn.prototype={
a5(d,e){var x,w,v,u,t,s,r=this,q=$.a8().an()
q.sK(0,r.b)
q.sbt(0,D.bF)
q.sK(0,r.c)
x=new A.bxK(r,e,d,q)
w=r.d
v=e.a
if(w!=null)x.$2(0,B.H(w,0,1)*v)
else{w=r.e
u=v*C.aw0.aD(0,w)
t=C.aw6.aD(0,w)
s=v*C.aw2.aD(0,w)
w=C.aw1.aD(0,w)
x.$2(u,v*t-u)
x.$2(s,v*w-s)}},
eM(d){var x=this
return!d.b.k(0,x.b)||!d.c.k(0,x.c)||d.d!=x.d||d.e!==x.e||d.f!==x.f||!d.r.k(0,x.r)},
gj(d){return this.d}}
A.xV.prototype={
ab(){return new A.avo(null,null)}}
A.avo.prototype={
aF(){var x,w=this
w.b_()
x=B.bz(null,C.amF,null,1,null,w)
w.d=x
if(w.a.c==null)x.Lm(0)},
ba(d){var x,w,v=this
v.bo(d)
x=v.a.c==null
if(x){w=v.d
w===$&&B.c()
w=w.r
w=!(w!=null&&w.a!=null)}else w=!1
if(w){x=v.d
x===$&&B.c()
x.Lm(0)}else{if(!x){x=v.d
x===$&&B.c()
x=x.r
x=x!=null&&x.a!=null}else x=!1
if(x){x=v.d
x===$&&B.c()
x.ie(0)}}},
m(){var x=this.d
x===$&&B.c()
x.m()
this.aIo()},
abO(d,e,f){var x,w,v,u,t,s,r,q=this,p=null
B.q(d)
x=new A.bxJ(d,p,p,p,p,p)
w=B.bR6(d)
v=q.a
v.toString
v=v.d
u=v==null?w.b:v
if(u==null)u=x.gKl()
q.a.toString
t=w.c
if(t==null)t=x.gKk()
v=q.a
v.toString
s=!D.bT.k(0,D.bT)&&q.a.c==null?D.bs:D.y
r=q.a
r.toString
return v.ac1(B.ae(p,B.dD(p,p,!1,p,new A.avn(u,r.agA(d,x.gK(0)),q.a.c,e,f,D.bT,p),D.aj),s,p,new B.af(1/0,1/0,t,1/0),new B.l0(u,p,p,p,new B.c7(D.bT,D.T)),p,p,p,p,p,p,p,p),d)},
A(d){var x,w=this,v=d.ai(y.o).w
if(w.a.c!=null){x=w.d
x===$&&B.c()
x=x.x
x===$&&B.c()
return w.abO(d,x,v)}x=w.d
x===$&&B.c()
return B.jZ(x,new A.bxL(w,v),null)}}
A.bxJ.prototype={
gHt(){var x,w=this,v=w.r
if(v===$){x=B.q(w.f)
w.r!==$&&B.aA()
v=w.r=x.ax}return v},
gK(d){return this.gHt().b},
gKl(){var x=this.gHt(),w=x.Q
return w==null?x.y:w},
gKk(){return 4}}
A.a4K.prototype={
m(){var x=this,w=x.c4$
if(w!=null)w.S(0,x.gj6())
x.c4$=null
x.b1()},
dr(){this.eb()
this.dY()
this.j7()}}
var z=a.updateTypes(["j(j,K?)"])
A.bN8.prototype={
$1(d){return A.bTq(this.a,d)},
$S:48}
A.bJy.prototype={
$2(d,e){return J.ab(d)-J.ab(e)},
$S:365}
A.bJz.prototype={
$1(d){var x=this.a,w=x.a,v=x.b
v.toString
x.a=(w^A.bSv(w,[d,J.ac(y.B.a(v),d)]))>>>0},
$S:14}
A.bJA.prototype={
$2(d,e){return J.ab(d)-J.ab(e)},
$S:365}
A.bMG.prototype={
$1(d){return J.bn(d)},
$S:240}
A.bxK.prototype={
$2(d,e){var x,w,v,u,t=this
if(e<=0)return
x=t.a
switch(x.f.a){case 0:w=t.b.a-e-d
break
case 1:w=d
break
default:w=null}v=new B.u(w,0,w+e,0+t.b.b)
x=x.r
w=t.c
u=t.d
if(!x.k(0,D.bT))w.dZ(x.fQ(v),u)
else w.cR(v,u)},
$S:920}
A.bxL.prototype={
$2(d,e){var x=this.a,w=x.d
w===$&&B.c()
w=w.x
w===$&&B.c()
return x.abO(d,w,this.b)},
$S:56};(function aliases(){var x=A.a4K.prototype
x.aIo=x.m})();(function installTearOffs(){var x=a._static_2
x(A,"cpU","bSv",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.K,[A.bxt,A.kF])
w(B.dL,[A.bN8,A.bJz,A.bMG])
w(B.eW,[A.bJy,A.bJA,A.bxK,A.bxL])
v(A.avn,B.um)
v(A.xV,B.Ut)
v(A.a4K,B.X)
v(A.avo,A.a4K)
v(A.bxJ,B.oC)
x(A.a4K,B.hi)})()
B.d7(b.typeUniverse,JSON.parse('{"xV":{"V":[],"d":[]},"avn":{"ap":[]},"avo":{"X":["xV"]}}'))
var y={o:B.J("h0"),a:B.J("kF"),F:B.J("r<@>"),B:B.J("av<@,@>"),g:B.J("cc<@>"),b:B.J("@")};(function constants(){C.amF=new B.bq(18e5)
C.al9=new B.f6(0.4,0,1,1)
C.aw0=new B.dw(0.185,0.6016666666666667,C.al9)
C.al6=new B.f6(0,0,0.65,1)
C.aw1=new B.dw(0.5555555555555556,0.8705555555555555,C.al6)
C.al1=new B.f6(0.1,0,0.45,1)
C.aw2=new B.dw(0.7038888888888889,1,C.al1)
C.al4=new B.f6(0.2,0,0.8,1)
C.aw6=new B.dw(0,0.4166666666666667,C.al4)})();(function staticFields(){$.bWO=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cw1","bO8",()=>{var w=new A.bxt(B.bYo(8))
w.aJG()
return w})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_81",e:"endPart",h:b})})($__dart_deferred_initializers__,"sugahMJfKgwcesTOZR/8wlZsJyI=");