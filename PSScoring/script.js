input=prompt('Masukkan nilai Anda: ');
let hasil;
function scoring () {
    if (input<=100 && input>=90){
           hasil=alert ("nilai Anda adalah A")
        }
        else if (input<=89 && input>=75){
           hasil=alert ("nilai Anda adalah B")
        }
        else if (input<=74 && input>=60){
            hasil=alert ("nilai Anda adalah C")
        }
        else if (input<=59 && input>=50){
            hasil=alert ("nilai Anda adalah D")
        }
        else if (input<=49 && input>=0){
            hasil= alert ("anda tidak lulus")
        } else {
            hasil=alert ('Nilai yang Anda masukkan salah')
        }
    return hasil
}

scoring ()