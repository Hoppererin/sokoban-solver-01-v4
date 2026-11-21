F=require('fs'),{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env
H='rldu'
L=(s,B,A)=>{v=[],Q=[s],v[s]=' '
for(x of Q)for(k=4;k--;){y=x+D[k]
if(!v[y]&&g[y]!='#'&&A[y]&&!B.includes(y))v[y]=v[x]+H[k],Q.push(y)}
return v}
for(i=0;++i<6;){u='/i00'+i
l=F.readFileSync(I+u+'/level.txt','utf8').split('\n')
W=l[0].length
g=l.join('')
D=[1,-1,W,-W]
P=g.search('@')
h=P-P%W
S=''
for(p=h;p<h+W;p++)if(g[p-W]+g[p+W]!='##'){R=L(p,[p-1,p+1],g)
B=[]
for(y in R)"$*".includes(g[y])&&B.push(+y)
S+=L(P,[],g)[p]
P=p
q=[[B,P,S]],V={}
for([B,P,S] of q){f=L(P,B,R)
if(!B.some(b=>g[b]<'*')&&f[p]){S+=f[p];break}
for(b of B)for(k=4;k--;){t=b+D[k],w=2*b-t
if(f[w]&&R[t]&&!B.includes(t)){C=B.map(x=>x-b?x:t).sort((a,b)=>a-b)
y=C+','+b
V[y]||(V[y]=1,q.push([C,b,S+f[w]+H[k]]))}}}
P=p}F.mkdirSync(O+u,{recursive:!0})
F.writeFileSync(O+u+'/solution.txt',S)}
