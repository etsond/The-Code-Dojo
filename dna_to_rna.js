






function DNAtoRNA(dna) {
  //dna string to arr
  const dnaArray = dna.split("");

  // loop through arr & replace t with U
  for (let i = 0; i < dnaArray.length; i++) {
    if (dnaArray[i] === "T") {
      dnaArray[i] = "U";
    }
  }

  // get the arr and make it a string
  const rna = dnaArray.join("");
  
  return rna;
}
