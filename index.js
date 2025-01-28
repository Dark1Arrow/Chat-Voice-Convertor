let speech = new SpeechSynthesisUtterance();

let voice = [];

let voiceSelect = document.querySelector(".container select");

window.speechSynthesis.onvoiceschanged = () => {
    voice = window.speechSynthesis.getVoices();
    speech.voice = voice[0];
    voice.forEach((voice , i) => (voiceSelect.options[i] = new Option(voice.name , i)))
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voice[voiceSelect.value];
})

document.querySelector(".container button").addEventListener("click", () => {
    speech.text = document.querySelector(".container textarea").value;
    window.speechSynthesis.speak(speech);
})