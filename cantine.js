const client = "Awa"
const codePlat = 3;
const quantitesaisie = "4";
const montantverse = 4000;

const quantite =
Number(quantitesaisie);
let nomPlat;
let prixUnitaire;

switch (codePlat) {
    case 1:
    nomPlat = "Attieke-poisson";
    prixUnitaire = 1500;    
        break;
    case 2:
    nomPlat = "Riz-Poulet";
    prixUnitaire = 2000;
       break;
    case 3:
        nomPlat = "Alloco-œuf";
        prixUnitaire = 1000;
        break;

    default:
        nomPlat = "Plat inconnu"
        prixUnitaire = 0;
}
  function calculerTotale(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
    
  }

  const Total = calculerTotale(prixUnitaire , quantite);
  console.log("client : " + client);
  for (let i = 1; i <= quantite; i++) {
    console.log(`portion ${i} : ${nomPlat} - ${prixUnitaire} FCFA`);
  }
  console.log(`Total à payer : ${Total} FCFA`);
  if (montantverse >= Total) {
    console.log(`Monnaie à rendre : ${montantverse - Total} FCFA`);
  } else { 
    console.log(`Montant manquant : ${Total - montantverse} FCFA`);

  }
  
