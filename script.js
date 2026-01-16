const message = `I’m so sorry, babe :( can u forgive me? I don’t wanna break up with u, not even for a second. I shouldn’t have said that, and i really regret letting my emotions speak for me. I swear i wasn’t fully serious about it, and it doesn’t reflect what i truly feel about us. U mean so much to me. I’ll miss u so much if u don’t wanna talk to me anymore, and honestly that thought hurts a lot. It feels like my heart is with u, like a part of me is always tied to you. Can we make things right and slowly go back to how we were? I’m willing to put in the effort and do better. I promise i won’t ever say that again. Pleaseee, baby :(.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}