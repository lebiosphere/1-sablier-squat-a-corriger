function Avertir_debut_exercice () {
	
}
input.onButtonPressed(Button.A, function () {
    Avertir_debut_exercice()
    // X 1000 pour convertir les s en ms
    basic.pause(dureedusablier * 1000)
    Avertir_fin_exercice()
})
function Avertir_fin_exercice () {
	
}
let dureedusablier = 0
// durée du sablier en secondes
dureedusablier = 10
