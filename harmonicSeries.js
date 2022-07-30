//Produces the harmonic series (overtone frequency) from Fundamental (tonic) freq.
//n defines the n-th overtone and defines the uperlimit of the array f.
//f stores all the overtones (incld. tonic) between [f0 fn].
function harmonicSeries(fundamental, n){
    
    for(let i=1; i<=n; i++){
        f[i-1] = fundamental*i;
    }
    return f
} 

f2 = harmonicSeries(fundamental, 27);