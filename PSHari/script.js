let hari = ['senin','selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
input=prompt('Masukkan nama hari: ').toLowerCase();
hasil=hari.lastIndexOf(input);
let simpan;
function besokApa () {
if(hasil!=-1){
    if(input=='minggu'){
        simpan=alert('besok adalah hari senin');
    } else {
        simpan=alert('besok adalah hari ' + hari[hasil+1])
    }
} else {
    simpan=alert ('yang anda masukkan bukan nama hari')
}
return simpan

}

besokApa ()