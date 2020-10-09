
let hari = ['senin','selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
input=prompt('Masukkan nama hari: ').toLowerCase();
hasil=hari.lastIndexOf(input);
if(hasil!=-1){
    if(input=='minggu'){
        alert('besok adalah hari senin');
    } else {
        alert('besok adalah hari ' + hari[hasil+1])
    }
} else {
    alert ('yang anda masukkan bukan nama hari')
}