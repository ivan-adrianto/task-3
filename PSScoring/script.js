input=prompt('Masukkan nilai Anda :')
if (input<=100 && input>=90){
    alert("nilai Anda adalah A")
}
else if (input<=89 && input>=75){
    alert("nilai Anda adalah B")
}
else if (input<=74 && input>=60){
    alert("nilai Anda adalah C")
}
else if (input<=59 && input>=50){
    alert("nilai Anda adalah D")
}
else if (input<=49 && input>=0){
    alert("anda tidak lulus")
} else {
    alert ('Nilai yang Anda masukkan salah')
}